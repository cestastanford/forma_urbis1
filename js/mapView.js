/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*   
*   mapView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA Spatial History Lab
*
*/

var MapView = function(layersModel) {
    
    var MAP_SELECTOR = 'browse-map';
    var MAP_START_LAT = 41.899152
    var MAP_START_LON = 12.476776;
    var MAP_START_ZOOM = 16;

    /*  The Leaflet map.
    */
    this.map = new L.Map(MAP_SELECTOR, {
        center: new L.LatLng(MAP_START_LAT, MAP_START_LON),
        zoom: MAP_START_ZOOM
    });

    /*  The visible layers on the Leaflet map.
    */
    this.addedLayers = [];

    /*  Add a layersModel layer object to the map in bitmap (WMS).
    */
    this.addLayer = (function(layer) {
        var newLayer = new L.tileLayer.wms(layer.wms.url,
            {
                layers: layer.wms.layer_name,
                format: layer.wms.format,
                attribution: layer.wms.attribution,
                transparent: true
            }).addTo(this.map);
        this.addedLayers.push({
            index: layer.index,
            layer: newLayer
        });
    }).bind(this);

    /*  Remove a layer from the map.
    */
    this.removeLayer = (function(layer) {
        var layerToRemove = this.addedLayers.filter(function(leafletLayer) {
            return leafletLayer.index === layer.index;
        });
        this.map.removeLayer(layerToRemove[0].layer);
        var index = this.addedLayers.indexOf(layerToRemove[0]);
        this.addedLayers.splice(index, 1);
    }).bind(this);

    /*  Updates the opacity of a layer on the map.
    */
    this.setOpacity = (function(layer, newOpacity) {
        var layerToSet = this.addedLayers.filter(function(leafletLayer) {
            return leafletLayer.index === layer.index;
        });
        layerToSet[0].layer.setOpacity(newOpacity / 100);
    })


    //  Testing for WFS
    var url = "http://localhost:8080/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=fur:nolli_points_reprojected&outputFormat=text/javascript&format_options=callback:getJson";

    jQuery.ajax({
        jsonp: false,
        jsonpCallback: 'getJson',
        type: 'GET',
        url: url,
        async: true,
        dataType: 'jsonp',
        success: (function(jsonObject) {
            var newLayer = L.geoJson(jsonObject, {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, {
                        radius: 8,
                        fillColor: "#ff7800",
                        color: "#000",
                        weight: 1,
                        opacity: 1,
                        fillOpacity: 0.8
                    });
                }
            }).addTo(this.map);
            console.log(newLayer);
            console.log(jsonObject);
        }).bind(this)
    });  

};

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
    var MAP_START_ZOOM = 12;

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

};
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   mapView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var MapView = function(featureDetails) {

    /*
    *   Initial map center and map zoom.
    */
    var MAP_OPTIONS = {
        center: [41.899152, 12.476776],
        zoom: 16,
        scrollWheelZoom: false,
    };

    /*
    *   Point marker style.
    */
    var MARKER_OPTIONS = {
        radius: 5,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    /*
    *   Polygon style.
    */
    var POLYGON_STYLE = {
        "color": "#ff7800",
        "weight": 1,
        "opacity": 0.4
    };

    /*
    *   Sets up the Leaflet map on the page.
    */
    this.mapElement = L.map('map', MAP_OPTIONS);

    /*
    *   Array of raster layers currently on the map.
    */
    this.rasterLayersOnMap = [];

    /*
    *   The vector layer on the map provided by mapController,
    *   containing all the features from the vector layers
    *   after they've been filtered.
    */
    this.vectorLayerOnMap = null;

    /*
    *   Adds a new raster layer to the Leaflet map.
    */
    this.addRasterLayer = function(rasterLayerToAdd) {

        var newRasterLayer = L.tileLayer.wms(
            rasterLayerToAdd.wmsParameters.url,
            rasterLayerToAdd.wmsParameters.parameterObject);
        this.mapElement.addLayer(newRasterLayer);
        this.rasterLayersOnMap.push({
            parameters: rasterLayerToAdd.wmsParameters,
            leafletLayer: newRasterLayer
        });

    }

    /*
    *   Removes a raster layer to the Leaflet map.
    */
    this.removeRasterLayer = function(rasterLayerToRemove) {

        var rasterLayerOnMap = this.rasterLayersOnMap.filter(function(rasterLayerOnMap) {
            return rasterLayerToRemove.wmsParameters === rasterLayerOnMap.parameters;
        })[0];
        this.mapElement.removeLayer(rasterLayerOnMap.leafletLayer);
        var index = this.rasterLayersOnMap.indexOf(rasterLayerOnMap);
        this.rasterLayersOnMap.splice(index, 1);

    }

    /*
    *   Creates a new GeoJSON layer in Leaflet map for the
    *   GeoJSON FeatureCollection provided.
    */
    this.updateVectorFeatures = function(geoJsonVectorData) {
        if (this.vectorLayerOnMap) this.mapElement.removeLayer(this.vectorLayerOnMap);
        this.vectorLayerOnMap = L.geoJson(geoJsonVectorData, {

            onEachFeature: function(feature, layer) {
                layer.on('click', function() {
                    featureDetails.display(feature);
                });
            },

            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, MARKER_OPTIONS);
            },

            style: POLYGON_STYLE

        });
        this.mapElement.addLayer(this.vectorLayerOnMap);

    };

};

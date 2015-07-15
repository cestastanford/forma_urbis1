/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   mapView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var MapView = function() {

    /*
    *   Initial map center and map zoom.
    */
    var INITIAL = {
        center: [41.899071, 12.488394],
        zoom: 10
    }

    /*
    *   Sets up the Leaflet map on the page.
    */
    this.mapElement = L.map('map', INITIAL);

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

        var newRasterLayer = L.tileLayer.wms(rasterLayer.wmsParameters);
        this.mapElement.addLayer(newRasterLayer);
        this.rasterLayersOnMap.push({
            parameters: rasterLayer.wmsParameters,
            leafletLayer: newRasterLayer
        });

    }

    /*
    *   Removes a raster layer to the Leaflet map.
    */
    this.removeRasterLayer = function(rasterLayerToRemove) {

        var rasterLayerToRemove = this.rasterLayersOnMap.filter(function(rasterLayerOnMap) {
            return rasterLayerToRemove.wmsParameters === rasterLayerOnMap.parameters;
        })[0];
        this.mapElement.removeLayer(rasterLayerToRemove.leafletLayer);

    }

    /*
    *   Creates a new GeoJSON layer in Leaflet map for the
    *   GeoJSON FeatureCollection provided.
    */
    this.updateVectorFeatures = function(geoJsonVectorData) {

        this.mapElement.removeLayer(this.vectorLayerOnMap);
        this.vectorLayerOnMap = L.geoJSON(geoJsonVectorData);
        this.mapElement.addLayer(this.vectorLayerOnMap);

    };

};

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
        radius: 4,
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    /*
    *   Polygon style.
    */
    var POLYGON_STYLE = {
        "weight": 1,
        "opacity": 0.6
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
    *   Array of (filtered) vector layers currently on the map.
    */
    this.vectorLayersOnMap = [];

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
    *   Removes a raster layer from the Leaflet map.
    */
    this.removeRasterLayer = function(rasterLayerToRemove) {
        //  gets a reference to the existing layer on the map
        var rasterLayerOnMap = this.rasterLayersOnMap.filter(function(rasterLayerOnMap) {
            return rasterLayerToRemove.wmsParameters === rasterLayerOnMap.parameters;
        })[0];
        this.mapElement.removeLayer(rasterLayerOnMap.leafletLayer);
        var index = this.rasterLayersOnMap.indexOf(rasterLayerOnMap);
        this.rasterLayersOnMap.splice(index, 1);
    }

    /*
    *   Adds a vector layers to the Leaflet map.
    */
    this.addVectorLayer = function(vectorLayerToAdd) {
        var newVectorLayer = L.geoJson(vectorLayerToAdd.geoJSON, {

            onEachFeature: function(feature, layer) {
                layer.on('click', function() {
                    featureDetails.display(feature);
                });
            },

            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, MARKER_OPTIONS);
            },

            style: $.extend({}, POLYGON_STYLE, {color: vectorLayerToAdd.color}),

        });
        this.mapElement.addLayer(newVectorLayer);
        this.vectorLayersOnMap.push({
            parameters: vectorLayerToAdd.wfsParameters,
            leafletLayer: newVectorLayer,
        });
    }

    /*
    *   Removes a vector layer from the Leaflet map.
    */
    this.removeVectorLayer = function(vectorLayerToRemove) {
        //  gets a reference to the existing layer on the map
        var vectorLayerOnMap = this.vectorLayersOnMap.filter(function(vectorLayerOnMap) {
            return vectorLayerToRemove.wfsParameters === vectorLayerOnMap.parameters;
        })[0];
        this.mapElement.removeLayer(vectorLayerOnMap.leafletLayer);
        var index = this.vectorLayersOnMap.indexOf(vectorLayerOnMap);
        this.vectorLayersOnMap.splice(index, 1);
    }


    // /*
    // *   Creates a new GeoJSON layer in Leaflet map for the
    // *   GeoJSON FeatureCollection provided.
    // */
    // this.updateVectorFeatures = function(geoJsonVectorData) {
    //     if (this.vectorLayerOnMap) this.mapElement.removeLayer(this.vectorLayerOnMap);
    //     this.vectorLayerOnMap = L.geoJson(geoJsonVectorData, {

    //         onEachFeature: function(feature, layer) {
    //             layer.on('click', function() {
    //                 featureDetails.display(feature);
    //             });
    //         },

    //         pointToLayer: function (feature, latlng) {
    //             return L.circleMarker(latlng, MARKER_OPTIONS);
    //         },

    //         style: POLYGON_STYLE

    //     });
    //     this.mapElement.addLayer(this.vectorLayerOnMap);

    // };

};

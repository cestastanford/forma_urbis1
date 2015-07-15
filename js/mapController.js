/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   mapController.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var MapController = function(layers, filters, map) {

    /*
    *   A list of all vector layers whose features are included
    *   when filtering.
    */
    this.vectorFeatureSources = [];

    /*
    *   The dynamically-updated GeoJSON FeatureCollection
    *   containing all features to be displayed on the map.
    */
    this.vectorFeatures = {
        crs: {
            properties: {
                name: 'urn:ogc:def:crs:EPSG::4326'
            }
        },
        features: [],
        totalFeatures: 0,   // don't forget to update this!
        type: 'FeatureCollection'
    }

    /*
    *   The list of filters currently applied to vector features.
    */
    this.appliedFilters = [];

    /*
    *   Filters a feature set through the applied filters.
    */
    this.filterFeatures = function(source) {
        var fields = source.fields;
        var features = source.geoJSON.features;
        return features.filter(function(feature) {
            for (var i = 0; i < this.appliedFilters; i++) {
                return this.appliedFilters[i](fields, feature)
            }
        })
    };

    /*
    *   Retrieves all features from the FeatureCollections in the
    *   vectorFeatureSources list, runs them through any selected
    *   filters and sends the results, combined into one
    *   FeatureCollection, to the mapView to display.
    */
    this.refreshVectorFeatures = function() {
        //  clear the array
        this.vectorFeatures.features = [];
        this.vectorFeatures.totalFeatures = 0;

        //  add all sources to the array
        this.vectorFeatureSources.forEach(function(source) {
            var filteredFeatures = this.filterFeatures(source);
            this.vectorFeatures.features.push(source.geoJSON.features);
            this.vectorFeatures.totalFeatures += filteredFeatures.length;
        });

        //  send updated array to map
        map.updateVectorFeatures(vectorFeatureSources);
    };

    /*
    *   Function to receive clicks from the layer list interactors.
    *   Changing the visibility of a raster layer adds or removes
    *   it from the map; changing the visibility of a vector layer
    *   excludes it from the feature sources and refreshes the
    *   features.
    */
    this.layerListUpdated = function(layer, isChecked) {
        if (layer.type === 'raster') {
            if (isChecked) map.addRasterLayer(layer);
            else map.removeRasterLayer(layer);
        }
        else {
            if (isChecked) this.vectorFeatureSources.push(layer);
            else {
                var index = this.vectorFeatureSources.indexOf(layer);
                this.vectorFeatureSources.splice(index, 1);
            }
            refreshVectorFeatures();
        }
    };

};

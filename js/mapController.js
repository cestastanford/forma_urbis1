/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   mapController.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var MapController = function(layers, filterEngine, map) {

    /*
    *   A list of all vector layers whose features are included
    *   when filtering.
    */
    this.vectorFeatureSources = [];

    /*
    *   A list of the most recently submitted filters.
    */
    this.activeFilters = [];
    this.inputValues = [];

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
    *   Filters a feature set through the applied filters.
    */
    this.filterFeatures = function(source, activeFilters, inputValues) {
        var fieldMap = source.fields;
        var features = source.geoJSON.features;
        return features.filter((function(feature) {
            if (this.activeFilters.length === 0) return true;
            for (var i = 0; i < this.activeFilters.length; i++) {
                return filterEngine.filterFeature(feature, fieldMap, activeFilters[i], inputValues[i]);
            }
        }).bind(this));
    };

    /*
    *   Retrieves all features from the FeatureCollections in the
    *   vectorFeatureSources list, runs them through any selected
    *   filters and sends the results, combined into one
    *   FeatureCollection, to the mapView to display.
    */
    this.refreshVectorFeatures = function(activeFilters, inputValues) {
        //  clear the array
        this.vectorFeatures.features = [];
        this.vectorFeatures.totalFeatures = 0;

        //  update the last-used filters if provided (not provided
        //  on layer change).
        if (activeFilters) {
            this.activeFilters = activeFilters;
            this.inputValues = inputValues;
        }

        //  add all sources to the array
        this.vectorFeatureSources.forEach((function(source) {
            var filteredFeatures = this.filterFeatures(source, activeFilters, inputValues);
            this.vectorFeatures.features = this.vectorFeatures.features.concat(filteredFeatures);
            this.vectorFeatures.totalFeatures += filteredFeatures.length;
        }).bind(this));

        //  send updated array to map
        map.updateVectorFeatures(this.vectorFeatures);
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
            this.refreshVectorFeatures();
        }
    };

};

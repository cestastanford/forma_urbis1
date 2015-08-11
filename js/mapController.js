/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   mapController.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var MapController = function(layers, filterEngine, map, results) {

    /*
    *   A list of all vector layers whose features are included
    *   when filtering, plus a list of the filtered layers.
    */
    this.addedVectorLayers = [];
    this.addedFilteredVectorLayers = [];

    /*
    *   A list of the most recently submitted filters.
    */
    this.activeFilters = [];
    this.inputValues = [];

    /*
    *   A blank GeoJSON feature collection.
    */
    this.blankFeatureCollection = {
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
    *   Retrieves all layers from the addedVectorLayers list,
    *   runs them through any selected filters and sends the
    *   filtered layers to the mapView to display.
    */
    this.filtersSubmitted = function(activeFilters, activeFilterInputs) {

        //  update the last-used filters.
        this.activeFilters = activeFilters;
        this.activeFilterInputs = activeFilterInputs;


        results.clear();

        for (var i = 0; i < this.addedVectorLayers.length; i++) {
            //  the unfiltered layer
            var vectorLayer = this.addedVectorLayers[i]

            //  find the filtered layer
            var layerInFilteredList = this.addedFilteredVectorLayers.filter(function(addedFilteredVectorLayer) {
                return addedFilteredVectorLayer.name === vectorLayer.name;
            })[0];
            var index = this.addedFilteredVectorLayers.indexOf(layerInFilteredList);

            //  remove it from the map and the list
            this.addedFilteredVectorLayers.splice(index, 1);
            map.removeVectorLayer(vectorLayer);

            //  add the newly-filtered layer to the map and the list
            var filteredVectorLayer = this.filterVectorLayer(vectorLayer);
            this.addedFilteredVectorLayers.push(filteredVectorLayer);
            map.addVectorLayer(filteredVectorLayer);

            //  update the results.
            results.addResults(filteredVectorLayer);
        }

    };

    /*
    *   Function to filter a single layer of features; returns
    *   a duplicate of the layer object, except with a filtered
    *   GeoJSON object.
    */
    this.filterVectorLayer = function(layer) {
        var filteredFeatures = filterEngine.filterFeatures(layer, this.activeFilters, this.activeFilterInputs);
        var filteredLayer = $.extend({}, layer);
        filteredLayer.geoJSON = $.extend(true, {}, this.blankFeatureCollection);
        filteredLayer.geoJSON.features = filteredFeatures;
        filteredLayer.geoJSON.totalFeatures = filteredFeatures.length;
        return filteredLayer;
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
            if (isChecked) {
                this.addedVectorLayers.push(layer);
                var filteredVectorLayer = this.filterVectorLayer(layer);
                this.addedFilteredVectorLayers.push(filteredVectorLayer);
                map.addVectorLayer(filteredVectorLayer);
                results.addResults(filteredVectorLayer)
            }
            else {
                //  remove from unfiltered layer list
                var index = this.addedVectorLayers.indexOf(layer);
                this.addedVectorLayers.splice(index, 1);

                //  remove from filtered layer list
                var layerInFilteredList = this.addedFilteredVectorLayers.filter(function(addedFilteredVectorLayer) {
                    return addedFilteredVectorLayer.name === layer.name;
                })[0];
                var index = this.addedFilteredVectorLayers.indexOf(layerInFilteredList);
                this.addedFilteredVectorLayers.splice(index, 1);

                map.removeVectorLayer(layer);
                results.clear();
                for (var i = 0; i < this.addedFilteredVectorLayers.length; i++) {
                    results.addResults(this.addedFilteredVectorLayers[i]);
                }
            }
        }
    };

};

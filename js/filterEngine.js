/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   filterEngine.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var FilterEngine = function(layers, filterData) {

    /*
    *   Given a certain feature, returns whether that feature matches
    *   the requirements to pass a certain filter.
    */
    this.filterFeatures = function(layerSource, activeFilters, activeFilterInputs) {

        var fieldMap = layerSource.fields;
        var features = layerSource.geoJSON.features;
        return features.filter(function(feature) {
            feature.layer = layerSource;
            if (activeFilters.length === 0) return true;
            for (var i = 0; i < activeFilters.length; i++) {

                var filter = activeFilters[i];
                var input = activeFilterInputs[i].inputs;
                var subtypes = activeFilterInputs[i].subtypes;

                /*
                *   Get the list of fields in the fieldMap that the filter
                *   applies to.
                */
                var applicableFields = fieldMap.filter(function(field) {
                    if (filter.type === field.type) {
                        if (subtypes.indexOf(field.subtype) > -1) {
                            return true;
                        }
                    }
                    return false;
                });

                /*
                *   Convert the input to the default format.
                */
                var inputDefault = filterData.conversion[filter.type].inputDefault;
                var convertedInput = filterData.conversion[filter.type][inputDefault](input);

                /*
                *   Get the list of fields that satisfy the filter.
                */
                var satisfiedFields = applicableFields.filter(function(field) {
                    var convertedValue = feature.properties[field.name];
                    if (convertedValue !== null &&
                        convertedValue !== undefined &&
                        convertedValue !== '' &&
                        convertedValue !== 0) {
                        if (field.format !== 'default') {
                            convertedValue = filterData.conversion[filter.type][field.format](convertedValue);
                        }
                        if (convertedValue !== undefined) return filter.run(convertedValue, convertedInput);
                    }
                    return false;
                });

                /*
                *   Returns true or false depending on whether the filter
                *   is satisfied if any fields pass or if all fields pass.
                */
                if (filter.mode === 'any') {
                    if (satisfiedFields.length < 1) return false;
                } else {
                    if (satisfiedFields.length !== applicableFields.length) return false;
                }

            }

            //  if passed all filters
            return true;

        });
    };

};

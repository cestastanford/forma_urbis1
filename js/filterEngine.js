/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   filterEngine.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var FilterEngine = function(layers, filterData) {

    /*
    *   Saved references to the layers model and the filter data
    *   store.
    */
    this.layers = layers;
    this.filters = filterData;

    /*
    *   Given a certain feature, returns whether that feature matches
    *   the requirements to pass a certain filter.
    */
    this.filterFeature = function(feature, fieldMap, filter, input, subtypes) {

        /*
        *   Get the list of fields in the fieldMap that the filter
        *   applies to.
        */
        var applicableFields = fieldMap.filter(function(field) {
            if (filter.type.indexOf(field.type) > -1) {
                if (subtypes.indexOf(field.subtype) > -1) {
                    return true;
                }
            }
            return false;
        });

        /*
        *   Get the list of fields that the filter satisfies.
        */
        var satisfiedFields = applicableFields.filter(function(field) {
            return filter.run(feature.properties[field.name], input, subtypes);
        });

        /*
        *   Returns true or false depending on whether the filter
        *   is satisfied if any fields pass or if all fields pass.
        */
        if (filter.mode === 'any') {
            return (satisfiedFields.length > 0);
        } else {
            return (satisfiedFields.length === applicableFields.length);
        }

    };

};

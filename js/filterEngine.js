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
    this.filterFeature = function(feature, fieldMap, filter, input) {

        /*
        *   Get the list of fields in the fieldMap that the filter
        *   applies to.
        */
        var applicableFields = fieldMap.filter(function(field) {
            return (filter.type.indexOf(field.type) > -1);
        });

        /*
        *   Get the list of fields that the filter satisfies.
        */
        var satisfiedFields = applicableFields.filter(function(field) {
            if (filter.run(feature.properties[field.name], input)) console.log('found!', feature.properties[field.name]);
            return filter.run(feature.properties[field.name], input);
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

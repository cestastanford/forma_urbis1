/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   filterModel.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var FilterModel = function(layers, filterData) {

    /*  Loops through each described field in each vector layer,
    *   adding that layer to the field's type's 'applicable' list
    *   in filterData, then adds the type name to activeFilterTypes.
    */
    this.activeFilterTypes = {};

	layers.vector.forEach((function(vectorLayer) {

        vectorLayer.fields.forEach((function(field) {

            filterData.types[field.type].applicable.push(field);
            this.activeFilterTypes[field.type] = 'active';

        }).bind(this));

    }).bind(this));

};

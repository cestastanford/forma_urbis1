/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   filterModel.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var FilterModel = function(layers, filterData) {

    /*
    *   Saved references to the layers model and the filter data
    *   store.
    */
    this.layers = layers;
    this.filterData = filterData;

    /*
    *   List of the filter types that have at least one applicable
    *   layer attribute.
    */
    this.activeFilterTypes = {};

    /*
    *   Definition of the init method to begin filter preparation
    *   following layer prearation.  Called by LayerModel.init().
    */
    this.init = function(initViews) {

        /*
        *   Loops through each described field in each vector layer,
        *   adding that layer to the field's type's 'applicable' list
        *   in filterData, then adds the type object to activeFilterTypes.
        */
    	this.layers.vector.forEach((function(vectorLayer) {

            vectorLayer.fields.forEach((function(field) {

                var filterType = this.filterData.types[field.type];
                filterType.applicable.push(field);
                this.activeFilterTypes[field.type] = filterType;

            }).bind(this));

        }).bind(this));

        //  Load views after filters have been prepared.
        initViews();

    };

};

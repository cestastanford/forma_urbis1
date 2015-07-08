/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   filterModel.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var FilterModel = function(layers, filterData) {

    /*  Loops through each vector layer, adding the applicable
    *   filters for each field that is described in 'fields' to
    *   the activeFilters list, and noting the fields it can be
    *   used on.
    */
    this.activeFilterTypes = [];

    //  check through each vector layer
	layers.vector.forEach(function(vectorLayer) {

        //  check through each described field in that layer
        vectorLayer.fields.forEach(function(field) {

            //  check if that field's type matches a filter type
            if (filterData.types.hasOwnProperty(field.type)) {

                var filterType = filterData.types.[field.type];

                var matchingFilter = this.activeFilterTypes.filter(function(existingFilterType) {
                    if ()
                })

                //  else: add new filter

                filterType.applicable.push(field);
                this.activeFilterTypes.push(filterType);

            }
        });
    });

};

//HELP!!!!!

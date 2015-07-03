/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*   
*   layerListView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA Spatial History Lab
*
*/

var LayerListView = function(rasterLayersModel) {
    /*  Build the Handlebars template compile function for
    *   the list element.
    */
    var rasterListItemTemplate = $('#raster-list-item-template')[0];
    var renderRasterListItem = Handlebars.compile(rasterListItemTemplate.innerHTML).bind(this);

    /*  Reference to the HTML elements for the visible list.
    */
    this.$visibleList = $('#layer-list');

    /*  Populates the list with list elements.
    */
    this.update = function() {
        this.$visibleList.html('');
        rasterLayersModel.layers.forEach((function(layer) {
            if (layer.wms) {
                var $visibleListElement = $(renderRasterListItem({  // create the new element
                    name: layer.name,
                    index: layer.index, // attach its index number
                }));
                this.$visibleList.append($visibleListElement);  // add it to the list
            }
        }).bind(this));
    };

    this.update();
};
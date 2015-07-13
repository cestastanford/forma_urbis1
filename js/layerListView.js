/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   layerListView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var LayerListView = function(layers) {

    /*
    *   Instance variable for the list elements.
    */
    this.$list = $('#layer-list .list');

    /*
    *   Populates the list with layers, creating an element
    *   with a checkbox for each.
    */
    for (var i = 0; i < layers.raster.length; i++) {
        var $rasterElement = $(Handlebars.templates.layer({
            name: layers.raster[i].name,
            index: i,
            raster: true
        }));
        this.$list.append($rasterElement);
    }
    for (var i = 0; i < layers.vector.length; i++) {
        var $vectorElement = $(Handlebars.templates.layer({
            name: layers.vector[i].name,
            index: i,
            raster: false
        }));
        this.$list.append($vectorElement);
    }

}

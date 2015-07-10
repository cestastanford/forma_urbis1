/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   layerListView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var LayerListView = function(layers) {

    /*
    *   Handlebars compile functions for the list elements.
    */
    var layerTemplate = $('#layer-template')[0];
    var renderLayer = Handlebars.compile(layerTemplate.innerHTML);

    /*
    *   Instance variable for the list elements.
    */
    this.$list = $('#layer-list .list');

    /*
    *   Populates the list with layers, creating an element
    *   with a checkbox for each.
    */
    for (var i = 0; i < layers.raster.length; i++) {
        var $rasterElement = $(renderLayer({
            name: layers.raster[i].name,
            type: 'raster',
            index: i,
            raster: true
        }));
        this.$list.append($rasterElement);
    }
    for (var i = 0; i < layers.vector.length; i++) {
        var $vectorElement = $(renderLayer({
            name: layers.raster[i].name,
            type: 'raster',
            index: i,
            raster: false
        }));
        this.$list.append($vectorElement);
    }

}

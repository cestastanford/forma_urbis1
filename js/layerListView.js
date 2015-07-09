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
    var rasterLayerTemplate = $('#raster-layer-template')[0];
    var renderRasterLayer = Handlebars.compile(rasterLayerTemplate.innerHTML);
//    var vectorLayerTemplate = $('#vector-layer-template')[0];
//    var renderVectorLayer = Handlebars.compile(vectorLayerTemplate)[0];

    /*
    *   Instance variable for the list elements.
    */
    this.$list = $('#layer-list .list');

    /*
    *   Populates the list with raster layers, creating an element
    *   with a checkbox and an opacity slider for each.
    */
    for (var i = 0; i < layers.raster.length; i++) {
        var $rasterElement = $(renderRasterLayer({
            name: layers.raster[i].name,
            type: 'raster',
            index: i
        }));
        this.$list.append($rasterElement);
    }
}

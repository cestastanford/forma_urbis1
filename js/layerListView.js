/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   layerListView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var LayerListView = function(layers, controller) {

    /*
    *   Instance variable for the list element.
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

    /*
    *   Attaches listeners to the list elements, setting each to
    *   send an event to the mapController on change.
    */
    var $layerCheckboxes = this.$list.find('.layer-checkbox');
    $layerCheckboxes.change(function(event) {
        var layerIndex = +event.target.parentElement.attributes.index.value;
        var isRasterLayer = event.target.parentElement.classList.contains('raster-layer');
        var layer = isRasterLayer ? layers.raster[layerIndex] : layers.vector[layerIndex];
        var isChecked = event.target.checked;
        controller.layerListUpdated(layer, isChecked);
    });

}

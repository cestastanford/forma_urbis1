/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   mapController.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var MapController = function(layers, filters, map) {

    /*
    *   Function to receive clicks from the layer list interactors.
    */
    this.layerListUpdated = function(layer, isChecked) {
        if (layer.type === 'raster') {
            if (isChecked) map.addRasterLayer(layer);
            else map.removeRasterLayer(layer);
        }
    }


};

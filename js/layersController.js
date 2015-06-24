/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*   
*   layersController.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA Spatial History Lab
*
*/

var LayersController = function(layersModel, mapView, browseView) {

    $(browseView.$visibleList).click(function(event) {
        if ($(event.target).hasClass('layer-visible-list-element')) {
            var index = event.target.attributes.index.value;
            layersModel.layers[index].visible = !layersModel.layers[index].visible;
            if (layersModel.layers[index].visible) {
            	mapView.addLayer(layersModel.layers[index]);
            } else {
            	mapView.removeLayer(layersModel.layers[index]);
            }
            browseView.update();
        }
    });

};
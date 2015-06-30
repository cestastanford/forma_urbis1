/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*   
*   layersController.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA Spatial History Lab
*
*/

var LayersController = function(layersModel, mapView, browseView) {

    // $(browseView.$visibleList).click(function(event) {
    //     if ($(event.target).hasClass('layer-visible-list-element')) {
    //         var index = event.target.attributes.index.value;
    //         layersModel.layers[index].visible = !layersModel.layers[index].visible;
    //         if (layersModel.layers[index].visible) {
    //         	mapView.addLayer(layersModel.layers[index]);
    //         } else {
    //         	mapView.removeLayer(layersModel.layers[index]);
    //         }
    //         browseView.update();
    //     }
    // });
    
    this.$visibleCheckboxes = $('#layer-list .visible-checkbox');
    this.$opacitySlider = $('#layer-list .opacity-slider')

    this.$visibleCheckboxes.click(function(event) {
        var index = event.target.parentElement.attributes.index.value;
        if (event.target.checked) {
            mapView.addLayer(layersModel.layers[index]);
        } else {
            mapView.removeLayer(layersModel.layers[index]);
        }
    });

    this.$opacitySlider.change(function(event) {
        var index = event.target.parentElement.attributes.index.value;
        var newOpacity = event.target.valueAsNumber;
        mapView.setOpacity(layersModel.layers[index], newOpacity);
    });

};
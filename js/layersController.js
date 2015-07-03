/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*   
*   layersController.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA Spatial History Lab
*
*/

var LayersController = function(rasterLayersModel, mapView, layerListView) {

    this.$visibleCheckboxes = $('#layer-list .visible-checkbox');
    this.$opacitySlider = $('#layer-list .opacity-slider')

    this.$visibleCheckboxes.click(function(event) {
        var index = event.target.parentElement.attributes.index.value;
        if (event.target.checked) {
            mapView.addLayer(rasterLayersModel.layers[index]);
        } else {
            mapView.removeLayer(rasterLayersModel.layers[index]);
        }
    });

    this.$opacitySlider.change(function(event) {
        var index = event.target.parentElement.attributes.index.value;
        var newOpacity = event.target.valueAsNumber;
        mapView.setOpacity(rasterLayersModel.layers[index], newOpacity);
    });

};
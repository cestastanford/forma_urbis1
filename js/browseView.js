/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*   
*   browseView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA Spatial History Lab
*
*/

var BrowseView = function(layersModel) {

    /*  Reference to the model of the layers.
    */
    this.layersModel = layersModel;

    /*  Reference to the HTML elements for the visible list.
    */
    this.$visibleList = $('#browse-selectors-visible');

    /*  Populates the list with list elements.
    */
    this.update = function() {
        this.$visibleList.html('');
        this.layersModel.layers.forEach((function(layer) {
            if (layer.wms) {
                var $visibleListElement = $('<li></li>');  // create the new element
                $visibleListElement.attr('index', layer.index);  // attach its index number
                $visibleListElement.addClass('layer-visible-list-element');
                if (layer.visible) $visibleListElement.addClass('visible');  // note whether it's visible
                $visibleListElement.html(layer.name);  // set its text contents to the name
                this.$visibleList.append($visibleListElement);  // add it to the list
            }
        }).bind(this));
    };

    this.update();

};
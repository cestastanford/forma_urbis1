/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   filterListView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var FilterListView = function(filters) {

    //  Constants
    var FILTER_TYPE = 'filter-type';

    /*
    *   Handlebars compile functions for the filters.
    */
    var $layerTemplates = $('.filter-template');
    this.renderFilters = {};
    $layerTemplates.each((function(index, layerTemplate) {
        this.renderFilters[layerTemplate.getAttribute('filter-type')] =
            Handlebars.compile(layerTemplate.innerHTML);
    }).bind(this));



};

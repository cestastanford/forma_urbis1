/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   filterListView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var FilterListView = function(filters) {

    /*
    *   Downloads filter template and compiles it, supplying the
    *   list of applicable fields for use by the template if
    *   needed.
    */

    function compileTemplateData(filterType) {

    };

    /*
    *   Adds each compiled filter template to the DOM.
    */

    Object.keys(filters.activeFilterTypes).forEach(function(filterType) {

        var filterElement = Handlebars.templates[filterType]();
        $('#filter-list .list').append(filterElement);

    });

};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   filterListView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var FilterListView = function(filterEngine, controller) {

    /*
    *   Instance variable for the list element.
    */
    this.$list = $('#filter-list .list');

    /*
    *   Instance variable for the submit button.
    */
    this.$submit = $('#filter-list .submit');

    /*
    *   Adds each compiled filter template to the DOM.
    */
    for (var i = 0; i < filterEngine.filters.length; i++) {
        var filterElement = Handlebars.templates[filterEngine.filters[i].name]({
            index: i
        });
        this.$list.append(filterElement);
    }

    /*
    *   Attaches listeners to the submit button and sends
    *   an event with all activated filters to the
    *   mapController.
    */
    this.$submit.click((function() {
        var $inputElements = this.$list.find('input');
        var activeFilters = [];
        var inputValues = [];
        $inputElements.each(function(index, element) {
            var value = $(element).val();
            if (value) {
                var filterIndex = $(element).attr('index');
                activeFilters.push(filterEngine.filters[filterIndex]);
                inputValues.push(value);
            }
        });
        controller.refreshVectorFeatures(activeFilters, inputValues);
    }).bind(this));

};

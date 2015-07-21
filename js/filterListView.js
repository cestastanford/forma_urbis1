/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   filterListView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var FilterListView = function(filters, controller) {

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
    for (var i = 0; i < filters.length; i++) {
        var filterElement = Handlebars.templates[filters[i].name]({
            index: i,
            subtypes: filters[i].subtypes
        });
        this.$list.append(filterElement);
    }

    /*
    *   Attaches listeners to the submit button and sends
    *   an event with all activated filters to the
    *   mapController.
    */
    this.$submit.click((function() {
        var $inputElements = this.$list.find('.input');
        var activeFilters = [];
        var activeFilterInputs = [];
        $inputElements.each(function(index, element) {
            //  for each filter with a term in the input box
            var value = $(element).val();
            if (value) {
                //  send that the filter is active
                var filterIndex = $(element).attr('index');
                activeFilters.push(filters[filterIndex]);
                //  send the subtypes the filter is applying to
                var subtypes = [];
                $(element.parentElement).find('.subtype').each(function(index, element) {
                    if (element.checked) subtypes.push($(element).attr('subtype'));
                });
                activeFilterInputs.push({
                    value: value,
                    subtypes: subtypes
                });
            }
        });
        controller.refreshVectorFeatures(activeFilters, activeFilterInputs);
    }).bind(this));

};

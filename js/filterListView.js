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
    *   Instance variable for the submit button.
    */
    this.$clear = $('#filter-list .clear');

    /*
    *   Adds each compiled filter template to the DOM.
    */
    for (var i = 0; i < filters.length; i++) {
        var filterElement = Handlebars.templates[filters[i].name]({
            index: i,
            subtypes: filters[i].subtypes,
            //  fetch real dates!
            oldestDate: -2000,
            newestDate: 2000,
        });
        this.$list.append(filterElement);
    }

    /*
    *   Attaches listeners to the submit button and sends
    *   an object with all activated filters and their
    *   input values to the mapController.
    */
    this.$submit.click((function() {
        var activeFilters = [];
        var activeFilterInputs = [];

        //  for each filter in the list, check if it is active
        this.$list.children().each(function(filterIndex, filterElement) {
            var active = false;
            var inputs = [];
            var $inputElements = $(filterElement).find('.input');
            $inputElements.each(function(index, inputElement) {
                var value = $(inputElement).val();
                if (value) {
                    active = true;
                    inputs.push(value);
                }
            });

            if (active) {
                //  send that the filter is active
                activeFilters.push(filters[filterIndex]);
                //  send the subtypes the filter is applying to
                var subtypes = [];
                $(filterElement).find('.subtype').each(function(index, subtypeElement) {
                    if (subtypeElement.checked) subtypes.push($(subtypeElement).attr('subtype'));
                });
                activeFilterInputs.push({
                    inputs: inputs,
                    subtypes: subtypes,
                });
            }
        });

        //  send the data to the controller
        controller.filtersSubmitted(activeFilters, activeFilterInputs);

    }).bind(this));

    /*
    *   Binds the 'clear' button to clearing the fields
    *   and resubmitting.
    */
    this.$clear.click((function() {

        //  get all input fields and clear them
        var $inputFields = $('#filter-list .list .input');
        $inputFields.each(function(index, element) {
            element.value = null;
            $(element).trigger('input');
        });

        //  resubmit
        controller.filtersSubmitted([], []);

    }).bind(this));

};

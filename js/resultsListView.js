/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   resultsListView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var ResultsListView = function(map) {

    /*
    *   The number of results in the list.
    */
    this.nResults = 0;

    /*
    *   Reference to the feature detail box element.
    */
    this.$resultsListElement = $('#results-list .list');

    /*
    *   Display a given feature's details, attaching a click
    *   listener to display the object in the details box.
    */
    this.addResults = (function(vectorLayer) {
        var featureList = vectorLayer.geoJSON.features;
        this.nResults += featureList.length;
        $('#results-list .label').html('Features on Map (' + this.nResults + ')');
        for (var i = 0; i < featureList.length; i++) {
            var name = null;
            if (featureList[i].layer.topField !== undefined) {
                var topName = featureList[i].properties[featureList[i].layer.fields[
                        featureList[i].layer.topField].name];
                if (topName) var name = topName;
            }
            var $element = $(Handlebars.templates['feature-result']({

                layer: featureList[i].layer.name,
                name: name,
                number: featureList[i].layer.geoJSON.features.indexOf(featureList[i]),
                color: featureList[i].layer.color,

            }));
            this.$resultsListElement.append($element);
            $element.click((function(feature, $element) {
                map.showFeatureDetails(feature);
                $element.addClass('highlighted');
            }).bind(undefined, featureList[i], $element));
        }

    }).bind(this);

    /*
    *   Remove all results from the list.
    */
    this.clear = function() {
        this.$resultsListElement.html('');
        this.nResults = 0;
        $('#results-list .label').html('Features on Map (' + this.nResults + ')');
    };

};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   featureDetailView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var FeatureDetailView = function(layers) {

    /*
    *   Reference to the feature detail box element.
    */
    this.$featureDetailElement = $('#feature-details .list');

    /*
    *   Display a given feature's details.
    */
    this.display = function(feature) {

        this.$featureDetailElement.html('');
        var fields = [];
        for (var i = 0; i < feature.layer.fields.length; i++) {
            if (feature.properties[feature.layer.fields[i].name].length > 0) {
                var field = {
                    displayName: feature.layer.fields[i].displayName,
                    description: feature.layer.fields[i].description,
                    value: feature.properties[feature.layer.fields[i].name]
                }
                var fieldElement = Handlebars.templates['feature-detail'](field);
                this.$featureDetailElement.append(fieldElement);
            }
        }

    };

};

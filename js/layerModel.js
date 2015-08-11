/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   layerModel.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/


/*
*   The object that describes the connection parameters to access
*	the WMS server for each raster layer, and contains the
*	downloaded vector data from the WFS layers.  Metadata for each
*	layer is contained here as well.
*/
var LayerModel = function(layerData) {


    // *   Saved reference to the layer data store.

    // layerData = layerData;

    /*
    *   Creates a reference to the list of raster tile layers, with
    *   metadata and WMS access parameters for each.  This data
    *   should be already correctly-formatted from the data file.
    */
    this.raster = layerData.raster;

    /*
    *   Creates the soon-to-be-populated list of vector layers.
    */
    this.vector = [];
    //  hack for getting tokenized type names
    this.types = {};
    this.getTypes = function() {
        for (var i = 0; i < this.vector.length; i++) {
            var layer = this.vector[i];
            for (var j = 0; j < layer.fields.length; j++) {
                var field = layer.fields[j];
                if (field.type === 'type') {
                    for (var k = 0; k < layer.geoJSON.features.length; k++) {
                        var feature = layer.geoJSON.features[k];
                        var type = feature.properties[field.name]
                        if (type) {
                            if (this.types[type]) {
                                this.types[type] += 1;
                            } else this.types[type] = 1;
                        }
                    }
                }
            }
        }
    };

    /*
    *   Definition of the init method to begin layer prepration;
    *   calls the passed callback to begin filter preparation.
    */
    this.downloadVectorFeatures = function(callback) {

        /*
        *   Downloads the vector layers via WFS using the parameters in
        *   the data file, with each layer as an object containing a
        *   the layer data from the data file and the downloaded GeoJSON
        *   FeatureCollection.
        */

        var counter = Math.floor(Math.random() * 360);

        var layersToLoad = layerData.vector.length;
        var requests = [];


        for (var i = 0; i < layersToLoad; i++) {
            var layer = layerData.vector[i];
            var request = Promise.resolve($.getJSON("data/" + layer.resource));
            //  on return, add each layer to the array.
            request.then((function(layer, data) {
                layer.geoJSON = data;
                if (!layer.color) {
                    var hue = counter * 80;
                    counter += 1;
                    layer.color = 'hsl(' + hue + ', 100%, 65%)';
                }

            }).bind(undefined, layer))
            .catch(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.log("Request Failed: " + err, jqxhr);
            });

            requests.push(request);
        }

        Promise.all(requests).then((function() {
            this.vector = layerData.vector;
            this.getTypes();
            callback();

        }).bind(this));

    };

};

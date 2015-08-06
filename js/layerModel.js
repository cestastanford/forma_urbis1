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
        var layerLoads = [];
        window.JSONP_responses = [];
        for (var i = 0; i < layersToLoad; i++) {
            var layer = layerData.vector[i];
            var layerLoad = new Promise(function(resolve) {
                var jsonpRequest = document.createElement('script');
                jsonpRequest.type = 'text/javascript';
                var queryString = Object.keys(layer.wfsParameters.data).reduce(function(a,k){a.push(k+'='+encodeURIComponent(layer.wfsParameters.data[k]));return a},[]).join('&');
                jsonpRequest.src = layer.wfsParameters.url + '?' + queryString + '[' + i + ']';
                window.JSONP_responses[i] = resolve;
                $('#jsonp-download').append(jsonpRequest);
            });

            //  on return, add each layer to the array.
            layerLoad.then((function(layer, response) {

                layer.geoJSON = response;
                if (!layer.color) {
                    var hue = counter * 80;
                    counter += 1;
                    layer.color = 'hsl(' + hue + ', 100%, 65%)';
                }
                console.log(response);
            }).bind(undefined, layer));

            layerLoads.push(layerLoad);
        }

        Promise.all(layerLoads).then((function() {
            this.vector = layerData.vector;
            callback();

        }).bind(this));

    };

};

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

    /*
    *   Saved reference to the layer data store.
    */
    this.layerData = layerData;

    /*
    *   Creates a reference to the list of raster tile layers, with
    *   metadata and WMS access parameters for each.  This data
    *   should be already correctly-formatted from the data file.
    */
    this.raster = this.layerData.raster;

    /*
    *   Creates the soon-to-be-populated list of vector layers.
    */
    this.vector = [];

    /*
    *   Definition of the init method to begin layer prepration;
    *   calls the passed callback to begin filter preparation.
    */
    this.downloadVectorFeatures = (function(callback) {

        /*
        *   Downloads the vector layers via WFS using the parameters in
        *   the data file, with each layer as an object containing a
        *   the layer data from the data file and the downloaded GeoJSON
        *   FeatureCollection.
        */
        this.layerData.vector.forEach((function(vectorLayer) {
            $.ajax($.extend({}, vectorLayer.wfsParameters, {
                type: 'GET',
                dataType: 'jsonp',
                jsonpCallback: 'getJson',
                success: (function(jsonObject) {
                    vectorLayer.geoJSON = jsonObject;
                    this.vector.push(vectorLayer);

                    //  Load elements that depend on layers after layers
                    //  have been loaded.
                    //  WARNING: only works because we only have one layer.
                    callback();

                }).bind(this)
            }));
        }).bind(this));

    }).bind(this);


	// /*
 //    *   Object method to retrieve an array of the raster layers
	// *	matching the supplied array of indices.
	// */
	// this.getRasterLayers = function(indices) {
	// 	var layersToReturn = [];
	// 	indices.forEach(function(index) {
	// 		layersToReturn.push(this.raster[index]);
	// 	});
	// 	return layersToReturn;
	// };

	// /*
 //    *   Object method to retrieve an array of the vector layers
	// *	matching the supplied array of indices.
	// */
	// this.getVectorLayers = function(indices) {
	// 	var layersToReturn = [];
	// 	indices.forEach(function(index) {
	// 		layersToReturn.push(this.vector[index]);
	// 	});
	// 	return layersToReturn;
	// };

};

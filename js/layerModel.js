/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*   
*   layerModel.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/


/*	The object that describes the connection parameters to access
*	the WMS server for each raster layer, and contains the
*	downloaded vector data from the WFS layers.  Metadata for each
*	layer is contained here as well.
*/
var LayerModel = function(layerData) {

	/*	Creates a reference to the list of raster tile layers, with
	*	metadata and WMS access parameters for each.  This data
	*	should be already correctly-formatted from the data file.
	*/
	this.raster = layerData.raster;

	/*	Downloads the vector layers via WFS using the parameters in
	*	the data file.
	*/
	this.vector = [];
	layerData.vector.forEach(function(vectorLayer) {
		
	})


};
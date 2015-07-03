/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*   
*   rasterLayersModel.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA Spatial History Lab
*
*/

var RasterLayersModel = function() {

    /*  A JS object containing all the raster layers.
    */
    this.layers = [
        {
            name: "Nolli Map",
            wms: {
                url: "http://localhost:8080/geoserver/fur/wms",
                layer_name: "fur:nolli_map_raster",
                format: "image/png",
                attribution: ""
            }
        },
    ];

    /*  Assigns each layer a sequential index number starting 
    *   at 0.
    */
    for (var i = 0; i < this.layers.length; i++) {
        this.layers[i].index = i;
    }

};
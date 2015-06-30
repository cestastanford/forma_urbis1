/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*   
*   layersModel.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA Spatial History Lab
*
*/

var LayersModel = function() {

    /*  Imports layers from layers source file, returning them
    *   as an array of layer objects.
    */

    this.layers = [
        {
            name: "Nolli Map (Raster)",
            index: 0,
            wms: {
                url: "http://localhost:8080/geoserver/fur/wms",
                layer_name: "fur:nolli_map_raster",
                format: "image/png",
                attribution: ""
            }
        }
    ];
};
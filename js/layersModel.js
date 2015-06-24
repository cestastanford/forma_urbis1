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
            name: "OSM World WMS",
            visible: false,
            index: 0,
            opacity: 100,
            wms: {
                url: "http://129.206.228.72/cached/osm",
                layer_name: "osm_auto:all",
                format: "image/png",
                attribution: "University of Heidelberg"
            }
        },

        {
            name: "Population Density",
            visible: false,
            index: 1,
            opacity: 100,
            wms: {
                url: "http://sedac.ciesin.columbia.edu/geoserver/wms",
                layer_name: "gpw-v3:gpw-v3-population-density_2000",
                format: "image/png",
                attribution: "NASA SEDAC"
            }
        },

        {
            name: "Global Agricultural Pastures",
            visible: false,
            index: 2,
            opacity: 100,
            wms: {
                url: "http://sedac.ciesin.columbia.edu/geoserver/wms",
                layer_name: "aglands:aglands-pastures-2000",
                format: "image/png",
                attribution: "NASA"
            }
        }

    ];
};
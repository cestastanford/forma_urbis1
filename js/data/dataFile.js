/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*   
*   dataFile.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var dataFileObject = {

    layerData: {

        /*  Array of raster layers, including WMS access parameters
        *   and metadata.
        */
        raster: [

        /*  Sample raster layer entry:
        *   
        *   {
        *       wmsParameters: {
        *
        *       }
        *   }
        */

        ],
        vector: [

        /*  Sample raster layer entry:
        *   
        *   {
        *       wfsParameters: {
        *           url: "http://localhost:8080/geoserver/ows",
        *           data: {
        *               service: 'WFS',
        *               version: '1.0.0',
        *               request: 'GetFeature',
        *               typeName: 'fur:nolli_points_reprojected',
        *               outputFormat: 'text/javascript',
        *               format_options: 'callback:getJson'
        *           }
        *       meta: {
        *           meta1: 'meta-contents'
        *       }
        *   }
        */

            //  Nolli Points Golden (reprojected)
            {
                wfsParameters: {
                    url: "http://localhost:8080/geoserver/ows",
                    data: {
                        service: 'WFS',
                        version: '1.0.0',
                        request: 'GetFeature',
                        typeName: 'fur:nolli_points_reprojected',
                        outputFormat: 'text/javascript',
                        format_options: 'callback:getJson'
                    } 
                }
            }

        ]

    }

};
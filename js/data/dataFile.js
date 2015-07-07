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
        *       name: "Sample Name",
        *       wmsParameters: {
        *
        *       },
        *   }
        */

            //  Nolli Map
            {
                name: "Nolli Map",
                wmsParameters: {
                    url: "http://localhost:8080/geoserver/ows",
                    parameterObject: {
                        layers: "fur:nolli_map_raster",
                        format: "img/png",
                        attribution: "",
                        transparent: true
                    }  
                }
            }
        ],

        vector: [

        /*  Sample raster layer entry:
        *   
        *   {
        *       name: 'Sample Layer',
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
        *       },
        *       fields: [
        *           {
        *               name: "ACCEPTED_N",
        *               type: "text",
        *               subtype: "feature_name"
        *           },
        *           {
        *               name: "ALPH_NAM",
        *               type: "text",
        *               subtype: "feature_name"
        *           }
        *       ]
        *   }
        */

            //  Nolli Points Golden (reprojected)
            {
                name: 'Nolli Points Golden',
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
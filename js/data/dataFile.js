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

    },

    filterData: {

        time: {

            //  tests if feature's time is before input time
            isBefore: function(data, input) {
                return (data < input);
            }

            //  tests if feature's time is after input time
            isAfter: function(data, input) {
                return (data > input);
            }

            //  tests if feature's time is equal to input time
            isEqual: function(data, input) {
                return (data === input);
            }

        }

        text: {

            //  tests if feature's text contains the input text
            containsText: function(data, input) {
                return (data.indexOf(input) > -1);
            }

        }

        location: {

            //  tests if feature's location (lat/lon) is within
            //  an input range of the input location.
            isInRange: function(dataX, dataY, inputX, inputY, range) {
                var diffX = dataX - inputX;
                var diffY = dataY - inputY;
                var magnitude = Math.sqrt(diffX * diffX + diffY * diffY);
                return (magnitude <= range);
            }

        }

    }

};
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
        *   and metadata.  Currently no support for vector tests on
        *   raster layers.
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
        *               subtype: "name",
        *               displayName: "Feature Name"
        *               description: ""
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
                },
                fields: [
                    {
                        name: 'ACCEPTED_N',
                        type: 'text',
                        subtype: 'name',
                        displayName: 'Accepted Name',
                        description: 'The most commonly-used name for the feature.'
                    },
                    {
                        name: 'ALPH_NAM',
                        type: 'text',
                        subtype: 'name',
                        displayName: 'Alternate Name',
                        description: 'An alternate name for the feature.'
                    },
                    {
                        name: 'ALPH_NAM_1',
                        type: 'text',
                        subtype: 'name',
                        displayName: 'Alternate Name',
                        description: 'An alternate name for the feature.'
                    },
                    {
                        name: 'ALPH_NAM_2',
                        type: 'text',
                        subtype: 'name',
                        displayName: 'Alternate Name',
                        description: 'An alternate name for the feature.'
                    },
                    {
                        name: 'ANNOTATION',
                        type: 'text',
                        subtype: 'note',
                        displayName: 'Annotation',
                        description: 'An annotation for the feature.'
                    },
                    {
                        name: 'Architect',
                        type: 'text',
                        subtype: 'person',
                        displayName: 'Architect',
                        description: 'The architect of the feature.'
                    },
                    {
                        name: 'ERRATA_NOT',
                        type: 'text',
                        subtype: 'note',
                        displayName: 'Errata',
                        description: 'Errata for the feature.'
                    },
                    // {
                    //     name: 'MODERN_LOC',
                    //     type: 'location',
                    //     subtype: 'text-address',
                    //     displayName: 'Modern Location',
                    //     description: 'The modern location of the feature.'
                    // },
                    // {
                    //     name: 'NOLLI_ID',
                    //     type: 'uniqueID',
                    //     subtype: 'nolli',
                    //     displayName: 'Nolli ID',
                    //     description: 'The Nolli ID of the feature from the Nolli Map (same as Nolli Number).'
                    // },
                    {
                        name: 'NOLLI_NAME',
                        type: 'text',
                        subtype: 'name',
                        displayName: 'Nolli Name',
                        description: 'The name of the feature from the Nolli Map.'
                    },
                    // {
                    //     name: 'NOLLI_NUMB',
                    //     type: 'uniqueID',
                    //     subtype: 'nolli',
                    //     displayName: 'Nolli Number',
                    //     description: 'The Nolli Number of the feature from the Nolli Map (same as Nolli ID).'
                    // },
                    // {
                    //     name: 'PERIOD',
                    //     type: 'time',
                    //     subtype: 'period',
                    //     displayName: 'Period',
                    //     description: 'The historical period that the feature is from.'
                    // },
                    {
                        name: 'REFERENCES',
                        type: 'text',
                        subtype: 'unknown',
                        displayName: 'Reference',
                        description: 'May be an outside source that noted the feature.'
                    },
                    // {
                    //     name: 'RIONI',
                    //     type: 'location',
                    //     subtype: 'text-region',
                    //     displayName: 'Rione',
                    //     description: 'The traditional administrative district of Rome containing the feature.'
                    // },
                    // {
                    //     name: 'TYPE',
                    //     type: 'type',
                    //     subtype: 'text',
                    //     displayName: 'Feature Type',
                    //     description: 'The type of feature.'
                    // }
                ]

            }

        ]

    },

    filterData: {

        //  Each 'type' object should say what the standard form is
        //  and include a function to convert alternate forms to
        //  standard form.

        //  For now, let's just work with 'text'.

        types: {

            // time: {

            //     //  tests if feature's time is before input time
            //     isBefore: function(data, input) {
            //         return (data < input);
            //     },

            //     //  tests if feature's time is after input time
            //     isAfter: function(data, input) {
            //         return (data > input);
            //     },

            //     //  tests if feature's time is equal to input time
            //     isEqual: function(data, input) {
            //         return (data === input);
            //     }

            // },

            text: {

                filters: {
                    //  tests if feature's text contains the input text
                    containsText: function(data, input) {
                        return (data.indexOf(input) > -1);
                    }
                },
                applicable: []

            }

            // location: {

            //     //  tests if feature's location (lat/lon) is within
            //     //  an input range of the input location.
            //     isInRange: function(dataX, dataY, inputX, inputY, range) {
            //         var diffX = dataX - inputX;
            //         var diffY = dataY - inputY;
            //         var magnitude = Math.sqrt(diffX * diffX + diffY * diffY);
            //         return (magnitude <= range);
            //     }

            // },

            // uniqueID: {

            //     //  tests if a unique ID matches
            //     isEqual: function(data, input) {
            //         return (data === input);
            //     }

            // },

            // type: {

            //     //  tests if a type equals another type
            //     isEqual: function(data, input) {
            //         return (data === input);
            //     }

            // }

        }

    }

};

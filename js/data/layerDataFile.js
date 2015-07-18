/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   layerDataFile.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var layerDataFileObject = {

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
            type: 'raster',
            wmsParameters: {
                url: "http://localhost:8080/geoserver/wms",
                parameterObject: {
                    layers: "fur:nolli_map",
                    format: "image/png",
                    attribution: "Nolli Map",
                    transparent: true
                }
            }
        },
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
            name: 'Nolli Points',
            wfsParameters: {
                url: "http://localhost:8080/geoserver/ows",
                data: {
                    service: 'WFS',
                    version: '1.0.0',
                    request: 'GetFeature',
                    typeName: 'fur:nolli_points',
                    outputFormat: 'text/javascript',
                    format_options: 'callback:JSONP_responses'
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
                    name: 'ARCHITECT',
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
                {
                    name: 'MODERN_LOC',
                    type: 'location',
                    subtype: 'text-address',
                    displayName: 'Modern Location',
                    description: 'The modern location of the feature.'
                },
                {
                    name: 'NOLLI_ID',
                    type: 'uniqueID',
                    subtype: 'nolli',
                    displayName: 'Nolli ID',
                    description: 'The Nolli ID of the feature from the Nolli Map (same as Nolli Number).'
                },
                {
                    name: 'NOLLI_NAME',
                    type: 'text',
                    subtype: 'name',
                    displayName: 'Nolli Name',
                    description: 'The name of the feature from the Nolli Map.'
                },
                {
                    name: 'NOLLI_NUMB',
                    type: 'uniqueID',
                    subtype: 'nolli',
                    displayName: 'Nolli Number',
                    description: 'The Nolli Number of the feature from the Nolli Map (same as Nolli ID).'
                },
                {
                    name: 'PERIOD',
                    type: 'date',
                    subtype: 'text',
                    displayName: 'Period',
                    description: 'The historical period that the feature is from.'
                },
                {
                    name: 'REFERENCES',
                    type: 'text',
                    subtype: 'unknown',
                    displayName: 'Reference',
                    description: 'May be an outside source that noted the feature.'
                },
                {
                    name: 'RIONI',
                    type: 'location',
                    subtype: 'text-region',
                    displayName: 'Rione',
                    description: 'The traditional administrative district of Rome containing the feature.'
                },
                {
                    name: 'TYPE',
                    type: 'type',
                    subtype: 'text',
                    displayName: 'Feature Type',
                    description: 'The type of feature.'
                }
            ]
        },
        {
            name: 'Domes',
            wfsParameters: {
                url: "http://localhost:8080/geoserver/ows",
                data: {
                    service: 'WFS',
                    version: '1.0.0',
                    request: 'GetFeature',
                    typeName: 'fur:domes',
                    outputFormat: 'text/javascript',
                    format_options: 'callback:JSONP_responses'
                }
            },
            fields: [

                {
                    name: 'Artists_an',
                    type: 'text',
                    subtype: '',
                    displayName: 'Artists_an',
                    description: 'Unknown field.'
                },
                {
                    name: 'Building_I',
                    type: 'uniqueID',
                    subtype: '',
                    displayName: 'Building_I',
                    description: 'Unknown field.'
                },
                {
                    name: 'Common_Nam',
                    type: 'text',
                    subtype: 'name',
                    displayName: 'Common Name',
                    description: 'The common name of the feature.'
                },
                {
                    name: 'Dome_ID',
                    type: 'uniqueID',
                    subtype: '',
                    displayName: 'Dome ID',
                    description: 'Dome identification number.'
                },
                {
                    name: 'Full_Heigh',
                    type: 'dimension',
                    subtype: 'height',
                    displayName: 'Full_Heigh',
                    description: 'Unknown field.'
                },
                {
                    name: 'Inner_Diam',
                    type: 'dimension',
                    subtype: 'diameter',
                    displayName: 'Inner Diameter',
                    description: 'The inner diameter of the feature.'
                },
                {
                    name: 'Location',
                    type: 'location',
                    subtype: 'text',
                    displayName: 'Location',
                    description: 'Text description of the feature location.'
                },
                {
                    name: 'Map_Link',
                    type: 'resource',
                    subtype: 'link',
                    displayName: 'Map Link',
                    description: 'Link to an external map of the feature.'
                },
                {
                    name: 'Nolli_Numb',
                    type: 'uniqueID',
                    subtype: 'nolli',
                    displayName: 'Nolli Number',
                    description: 'The number of the feature from the Nolli map.'
                },
                {
                    name: 'Notes',
                    type: 'text',
                    subtype: 'note',
                    displayName: 'Note',
                    description: 'A note about the feature.'
                },
                {
                    name: 'Other_Name',
                    type: 'text',
                    subtype: 'name',
                    displayName: 'Other Name',
                    description: 'An alternate name for the feature.'
                },
                {
                    name: 'Outer_Diam',
                    type: 'dimension',
                    subtype: 'diameter',
                    displayName: 'Outer Diameter',
                    description: 'The outer diameter of the feature.'
                },
                {
                    name: 'Support_Ty',
                    type: 'text',
                    subtype: '',
                    displayName: 'Support_Ty',
                    description: 'Unknown field'
                },

            ]
        },
        {
            name: 'Excavations',
            wfsParameters: {
                url: "http://localhost:8080/geoserver/ows",
                data: {
                    service: 'WFS',
                    version: '1.0.0',
                    request: 'GetFeature',
                    typeName: 'fur:excavations',
                    outputFormat: 'text/javascript',
                    format_options: 'callback:JSONP_responses'
                }
            },
            fields: [
                {
                    name: 'ACCENSION_',
                    type: 'uniqueID',
                    subtype: 'lanciani',
                    displayName: 'Accension Number',
                    description: 'Reference to the plate and scavi number on the Lanciani map.'
                },
                {
                    name: 'BIBLIOGRAP',
                    type: 'text',
                    subtype: 'note',
                    displayName: 'Bibliography',
                    description: 'Bibliography for the feature.'
                },
                {
                    name: 'EXCAVATOR_',
                    type: 'text',
                    subtype: 'person',
                    displayName: 'Excavator',
                    description: 'The excavator of the feature.'
                },
                {
                    name: 'EXCAVATOR1',
                    type: 'text',
                    subtype: 'person',
                    displayName: 'Alternate Excavator',
                    description: 'An alternate excavator of the feature.'
                },
                {
                    name: 'EXCAVATO_1',
                    type: 'text',
                    subtype: 'person',
                    displayName: 'Alternate Excavator',
                    description: 'An alternate excavator of the feature.'
                },
                {
                    name: 'END_DATE_1',
                    type: 'date',
                    subtype: 'end',
                    displayName: 'Excavation End Date',
                    description: 'The end date of the feature excavation.'
                },
                {
                    name: 'END_DATE_2',
                    type: 'date',
                    subtype: 'end',
                    displayName: 'Alternate Excavation End Date',
                    description: 'An alternate end date of the feature excavation.'
                },                {
                    name: 'END_DATE_3',
                    type: 'date',
                    subtype: 'end',
                    displayName: 'Alternate Excavation End Date',
                    description: 'An alternate end date of the feature excavation.'
                },                {
                    name: 'IMAGES',
                    type: 'resource',
                    subtype: 'image',
                    displayName: 'Image Link',
                    description: 'A link to an image of the feature.'
                },                {
                    name: 'NOTES',
                    type: 'text',
                    subtype: 'note',
                    displayName: 'Notes',
                    description: 'Notes about the feature.'
                },                {
                    name: 'SITE',
                    type: 'location',
                    subtype: 'text',
                    displayName: 'Excavation Site',
                    description: 'Text description of the excavation site.'
                },
                {
                    name: 'START_DATE',
                    type: 'date',
                    subtype: 'start',
                    displayName: 'Excavation Start Date',
                    description: 'The start date of the feature excavation.'
                },
                {
                    name: 'START_DA_1',
                    type: 'date',
                    subtype: 'start',
                    displayName: 'Alternate Excavation Start Date',
                    description: 'An alternate start date of the feature excavation.'
                },
                {
                    name: 'START_DA_2',
                    type: 'date',
                    subtype: 'start',
                    displayName: 'Alternate Excavation Start Date',
                    description: 'An alternate start date of the feature excavation.'
                },
                {
                    name: 'STORIA_DEG',
                    type: 'text',
                    subtype: 'note',
                    displayName: 'Historical Note',
                    description: 'A historical note about the feature.'
                },

            ]
        },
        {
            name: 'Lanciani Streets',
            wfsParameters: {
                url: "http://localhost:8080/geoserver/ows",
                data: {
                    service: 'WFS',
                    version: '1.0.0',
                    request: 'GetFeature',
                    typeName: 'fur:lanciani_streets',
                    outputFormat: 'text/javascript',
                    format_options: 'callback:JSONP_responses'
                }
            },
            fields: []
        },
        {
            name: 'Landscape Elements',
            wfsParameters: {
                url: "http://localhost:8080/geoserver/ows",
                data: {
                    service: 'WFS',
                    version: '1.0.0',
                    request: 'GetFeature',
                    typeName: 'fur:landscape_elements',
                    outputFormat: 'text/javascript',
                    format_options: 'callback:JSONP_responses'
                }
            },
            fields: [

                {
                    name: 'ERRATA',
                    type: 'text',
                    subtype: 'note',
                    displayName: 'Errata',
                    description: 'A note about the feature.'
                },
                {
                    name: 'NAME',
                    type: 'text',
                    subtype: 'name',
                    displayName: 'Name',
                    description: 'The feature name.'
                },
                {
                    name: 'NN',
                    type: 'uniqueID',
                    subtype: 'nolli',
                    displayName: 'Nolli Number',
                    description: 'The ID number of the feature from the Nolli map.'
                },
                {
                    name: 'TYPE',
                    type: 'type',
                    subtype: 'landscape-type',
                    displayName: 'Landscape Type',
                    description: 'The type of landscape feature.'
                },

            ]
        },
        {
            name: 'Tiber',
            wfsParameters: {
                url: "http://localhost:8080/geoserver/ows",
                data: {
                    service: 'WFS',
                    version: '1.0.0',
                    request: 'GetFeature',
                    typeName: 'fur:tiber',
                    outputFormat: 'text/javascript',
                    format_options: 'callback:JSONP_responses'
                }
            },
            fields: [
                {
                    name: 'CLASS',
                    type: 'type',
                    subtype: '',
                    displayName: 'River Class',
                    description: 'The class of river section.'
                },
            ]
        }
    ]
};

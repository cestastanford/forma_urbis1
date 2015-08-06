/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   dataFile.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var filterDataFileObject = {
    filters: [
        {
            name: 'text-attribute',
            type: 'text',
            mode: 'any',
            subtypes: [
                {
                    name: 'name',
                    displayName: 'Feature name'
                },
                {
                    name: 'person',
                    displayName: 'Related person',
                },
                {
                    name: 'note',
                    displayName: 'Note',
                },
                {
                    name: '',
                    displayName: 'Other'
                }
            ],
            run: function(data, input) {
                return (data.indexOf(input) > -1);
            }
        },
        {
            name: 'matching-date',
            type: 'date',
            mode: 'any',
            subtypes: [
                {
                    name: 'start',
                    displayName: 'Excavation start'
                },
                {
                    name: 'end',
                    displayName: 'Excavation end',
                },
                {
                    name: 'period',
                    displayName: 'Period',
                },
            ],
            run: function(data, input) {
                if (isNaN(input[0])) return false;
                var inputIsAfterData = input[0] > data[1];
                var inputIsBeforeData = input[1] < data[0];
                if (inputIsBeforeData || inputIsAfterData) return false;
                return true;
            }
        },
        {
            name: 'matching-type',
            type: 'type',
            mode: 'any',
            subtypes: [
                {
                    name: 'feature',
                    displayName: 'Feature type'
                },
                {
                    name: 'landscape',
                    displayName: 'Landscape type',
                },
                {
                    name: 'river',
                    displayName: 'River section type',
                },

            ],
            run: function(data, input) {
                return (data.indexOf(input) > -1);
            }
        },
        {
            name: 'matching-id',
            type: 'uniqueID',
            mode: 'any',
            subtypes: [
                {
                    name: 'nolli',
                    displayName: 'Nolli number'
                },
                {
                    name: 'lanciani',
                    displayName: 'Lanciani accession number',
                },
                {
                    name: '',
                    displayName: 'Other ID',
                },

            ],
            run: function(data, input) {
                return (data === input);
            }
        },
    ],
    conversion: {

        text: {

            inputDefault: 'mixed-case-array',
            'mixed-case': function(input) {
                return input.toLowerCase();
            },
            'mixed-case-array': function(input) {
                return input[0].toLowerCase();
            },

        },
        date: {

            inputDefault: 'year-range',
            'year': function(input) {
                return [+input, +input];
            },
            'year-range': function(input) {
                return [+input[0], +input[1]];
            },
            'text-period': function(input) {
                var periods = {
                    'Kingdom': [-1000, -508],
                    'Republic': [-509, -26],
                    'Empire': [-27, 323],
                    'Early Medieval': [324, 599],
                    'Medieval': [600, 1419],
                    'Early Modern': [1420, 1797],
                    'Modern': [1798, 2015],
                    'Early Christian': [700, 1420],
                    'Early Renaissance': [1421, 1500],
                    'High Renaissance': [1501, 1527],
                    'Late Renaissance': [1528, 1600],
                    'Baroque': [1601, 1700],
                    'Late Baroque': [1701, 1750],
                    'Neoclassical': [1751, 1850],
                    'Roma Capitale': [1870, 1922],
                    'Fascism': [1923, 1945],
                    'Post-WWII': [1946, 2015],
                };
                if (periods[input]) return periods[input];
            },

        },
        type: {

            inputDefault: 'mixed-case-array',
            'mixed-case': function(input) {
                return input.toLowerCase();
            },
            'mixed-case-array': function(input) {
                return input[0].toLowerCase();
            },

        },
        uniqueID: {

            inputDefault: 'unknown-array',
            'unknown': function(input) {
                return String(input);
            },
            'unknown-array': function(input) {
                return String(input[0]);
            },

        },
    }
};


// {

//     //  Each 'type' object should say what the standard form is
//     //  and include a function to convert alternate forms to
//     //  standard form.

//     //  For now, let's just work with 'text'.

//     types: {

//         // time: {

//         //     //  tests if feature's time is before input time
//         //     isBefore: function(data, input) {
//         //         return (data < input);
//         //     },

//         //     //  tests if feature's time is after input time
//         //     isAfter: function(data, input) {
//         //         return (data > input);
//         //     },

//         //     //  tests if feature's time is equal to input time
//         //     isEqual: function(data, input) {
//         //         return (data === input);
//         //     }

//         // },

//         text: {

//             filters: {
//                 //  tests if feature's text contains the input text
//                 containsText: function(feature, input) {
//                     return true;
//                 }
//             },

//         }

//         // location: {

//         //     //  tests if feature's location (lat/lon) is within
//         //     //  an input range of the input location.
//         //     isInRange: function(dataX, dataY, inputX, inputY, range) {
//         //         var diffX = dataX - inputX;
//         //         var diffY = dataY - inputY;
//         //         var magnitude = Math.sqrt(diffX * diffX + diffY * diffY);
//         //         return (magnitude <= range);
//         //     }

//         // },

//         // uniqueID: {

//         //     //  tests if a unique ID matches
//         //     isEqual: function(data, input) {
//         //         return (data === input);
//         //     }

//         // },

//         // type: {

//         //     //  tests if a type equals another type
//         //     isEqual: function(data, input) {
//         //         return (data === input);
//         //     }

//         // }

//     }

// }

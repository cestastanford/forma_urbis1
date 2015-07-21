/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   dataFile.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var filterDataFileObject = [
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
    }
];


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

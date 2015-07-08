/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   main.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

/*  JavaScript execution entry point
*/
(function(window, document, undefined) {

    $(document).ready(function() {

        /*
        *   Link to data object from data file.
        */
        var data = dataFileObject;

        /*
        *   Creates the layer model, providing access to the vector
        *   layers (which have been downloaded to the client browser
        *   on constructor return) and the dynamically-served raster
        *   tile layers.  layersData is the global reference to the
        *   Layers object from layerData.js.
        */
        var layers = new LayerModel(data.layerData);

        /*
        *   Creates the filter model, providing access to the
        *   filters that are found to be applicable to the layers
        *   provided from the layer model.
        */
        var filters = new FilterModel(layers, data.filterData);

        /*
        *   Starts the asynchronous loading of modules dependent
        *   on the layers and filters having loaded.
        */
        layers.init.call(layers, filters, function() {

            /*
            *   Creates the layer list view, which populates the layer
            *   list with the layers found in the layer model; contains
            *   references to the interactive elements in the list.
            */
    //        var layerList = new LayerListView(layers);

            /*
            *   Creates the filter list view, which populates the filter
            *   list with the filters found in the filter model; contains
            *   references to the interactive elements in the list.
            */
    //        var filterList = new FilterListView(filters);

            /*
            *   Creates the map view, which creates and updates the Leaflet
            *   map.
            */
    //        var map = new MapView();

            /*
            *   Creates the map controller, which receives interaction events
            *   from the layer list and filter lists views, applies the
            *   indicated filters to the indicated layers, then sends raster
            *   and vector data to the map view to update with.
            */
    //        var controller = new MapController(layers, filters, layerList, filterList, map);

    //        controller.displayInitialMap();

           console.log('Callback called!');
           console.log(layers, filters);

        });

    });

})(this, this.document);

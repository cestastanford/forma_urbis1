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
        *   Link to data objects from data files.
        */
        var layerData = layerDataFileObject;
        var filterData = filterDataFileObject;

        /*
        *   Creates the layer model, which provides access to the
        *   vector and raster layer data.
        */
        var layers = new LayerModel(layerData);

        /*
        *   Creates the filter model, providing access to the
        *   filters that are found to be applicable to the layers
        *   provided from the layer model.
        */
        var filterEngine = new FilterEngine(layers, filterData);

        /*
        *   Creates the map view, which creates and updates the Leaflet
        *   map.
        */
        var map = new MapView();

        /*
        *   Creates the map controller, which receives interaction events
        *   from the layer list and filter lists views, applies the
        *   indicated filters to the indicated layers, then sends raster
        *   and vector data to the map view to update with.
        */
        var controller = new MapController(layers, filterEngine, map);

        /*
        *   Creates the filter list view, which populates the filter
        *   list with the filters found in the filter model; sends
        *   interaction events to the controller.
        */
        var filterList = new FilterListView(filterEngine, controller);

        /*
        *   Starts the asynchronous downloading of the WFS layers,
        *   loading the rest of the site upon completion.
        */
        layers.downloadVectorFeatures.call(layers, function() {

            /*
            *   Creates the layer list view, which populates the layer
            *   list with the layers found in the layer model; sends
            *   interaction events to the controller.
            */
            var layerList = new LayerListView(layers, controller);

            /*
            *   Displays an initial map from the initial map settings.
            */
//            controller.displayInitialMap();

        });

    });

})(this, this.document);

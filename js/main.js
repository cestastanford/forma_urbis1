/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*   
*   main.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

//  JavaScript execution entry point
(function(window, document, undefined) {
    $(document).ready(function() {
        
        /*  Creates the model of the layers from the supplied data path.
        */
        var layersModel = new LayersModel();

        /*  Creates the map from the layers model.
        */
        var mapView = new MapView(layersModel);

        /*  Creates the Browse view selection lists from the layers model.
        */
        var browseView = new BrowseView(layersModel);

        /*  Attaches the action listeners to the browse view, allowing the
        *   layer model's controller to receive input from the view.
        */
        var layersController = new LayersController(layersModel, mapView, browseView);

    });
})(this, this.document);
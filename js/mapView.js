/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*   mapView.js (JavaScript)
*   written by Cody M Leff
*   for project Forma Urbis Romae at CESTA - Spatial History Lab
*
*/

var MapView = function(layers) {

    /*
    *   Initial map center and map zoom.
    */
    var MAP_OPTIONS = {
        center: [41.899152, 12.476776],
        zoom: 16,
        scrollWheelZoom: false,
    };

    /*
    *   Point marker style.
    */
    var MARKER_OPTIONS = {
        radius: 4,
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    /*
    *   Polygon style.
    */
    var POLYGON_STYLE = {
        "weight": 1,
        "opacity": 0.6
    };

    /*
    *   Sets up the Leaflet map on the page.
    */
    this.mapElement = L.map('map', MAP_OPTIONS);

    /*
    *   Array of raster layers currently on the map.
    */
    this.rasterLayersOnMap = [];

    /*
    *   Array of (filtered) vector layers currently on the map.
    */
    this.vectorLayersOnMap = [];

    /*
    *   Adds a new raster layer to the Leaflet map.
    */
    this.addRasterLayer = function(rasterLayerToAdd) {

        var newRasterLayer = L.tileLayer(rasterLayerToAdd.url, {
            tms: rasterLayerToAdd.tms,
            attribution: rasterLayerToAdd.attribution,
        });
        this.mapElement.addLayer(newRasterLayer);
        this.rasterLayersOnMap.push({
            name: rasterLayerToAdd.name,
            leafletLayer: newRasterLayer,
        });

    }

    /*
    *   Removes a raster layer from the Leaflet map.
    */
    this.removeRasterLayer = function(rasterLayerToRemove) {
        //  gets a reference to the existing layer on the map
        var rasterLayerOnMap = this.rasterLayersOnMap.filter(function(rasterLayerOnMap) {
            return rasterLayerToRemove.name === rasterLayerOnMap.name;
        })[0];
        this.mapElement.removeLayer(rasterLayerOnMap.leafletLayer);
        var index = this.rasterLayersOnMap.indexOf(rasterLayerOnMap);
        this.rasterLayersOnMap.splice(index, 1);
    }

    /*
    *   Adds a vector layers to the Leaflet map.
    */
    this.addVectorLayer = function(vectorLayerToAdd) {
        var newVectorLayer = L.geoJson(vectorLayerToAdd.geoJSON, {

            onEachFeature: (function(feature, layer) {
                layer.on('click', (function() {
                    this.showFeatureDetails(feature);
                }).bind(this));
            }).bind(this),

            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, MARKER_OPTIONS);
            },

            style: $.extend({}, POLYGON_STYLE, {color: vectorLayerToAdd.color}),

        });
        this.mapElement.addLayer(newVectorLayer);
        this.vectorLayersOnMap.push({
            name: vectorLayerToAdd.name,
            leafletLayer: newVectorLayer,
        });
    }

    /*
    *   Removes a vector layer from the Leaflet map.
    */
    this.removeVectorLayer = function(vectorLayerToRemove) {
        //  gets a reference to the existing layer on the map
        var vectorLayerOnMap = this.vectorLayersOnMap.filter(function(vectorLayerOnMap) {
            return vectorLayerToRemove.name === vectorLayerOnMap.name;
        })[0];
        this.mapElement.removeLayer(vectorLayerOnMap.leafletLayer);
        var index = this.vectorLayersOnMap.indexOf(vectorLayerOnMap);
        this.vectorLayersOnMap.splice(index, 1);
    }

    /*
    *   The current popup and popped-up feature on the map.
    */
    this.popup = null;

    /*
    *   Displays a given feature's details as a popup
    */
    this.showFeatureDetails = function(feature) {
        //  add the layer name and all details to the HTML element
        var detailsElement = document.createElement('div');
        var fields = [];
        var field = {
                displayName: 'Layer',
                description: 'The vector layer the feature is from.',
                value: feature.layer.name,
                color: feature.layer.color,
            }
        var fieldElement = Handlebars.templates['feature-detail'](field);
        $(detailsElement).append(fieldElement);
        for (var i = 0; i < feature.layer.fields.length; i++) {
            if (feature.properties[feature.layer.fields[i].name] !== null &&
                feature.properties[feature.layer.fields[i].name] !== undefined &&
                feature.properties[feature.layer.fields[i].name] !== '' &&
                feature.properties[feature.layer.fields[i].name] !== 0) {
                var field = {
                    displayName: feature.layer.fields[i].displayName,
                    description: feature.layer.fields[i].description,
                    value: feature.properties[feature.layer.fields[i].name]
                }
                var fieldElement = Handlebars.templates['feature-detail'](field);
                $(detailsElement).append(fieldElement);
            }
        }

        //  create the popup, save it and open it on the map
        var lnglat = feature.geometry.coordinates;
        while (typeof(lnglat[0]) !== 'number') lnglat = lnglat[0];
        var latlng = [lnglat[1], lnglat[0]];

        this.popup = L.popup()
            .setLatLng(latlng)
            .setContent(detailsElement)
            .openOn(this.mapElement);

        //  pan to the popup on the map
        this.mapElement.panTo(latlng);
        console.log(feature);

    };

    //  to center the popup on the map
    this.mapElement.on('popupopen', (function(event) {
        var px = this.mapElement.project(event.popup._latlng);
        px.y -= event.popup._container.clientHeight / 2
        this.mapElement.panTo(this.mapElement.unproject(px), { animate: true });
    }).bind(this));

};

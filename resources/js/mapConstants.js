import { Attribution, OverviewMap, FullScreen } from "ol/control";
import ZoomSlider from "ol/control/ZoomSlider";
import { DragRotateAndZoom } from "ol/interaction";
import { Tile as TileLayer } from "ol/layer";
import OSM from "ol/source/OSM";
import { Draw } from "ol/interaction";
import * as mapFunctions from "./mapFunctions";

//Controls and Interactions
export const fullScreen = new FullScreen();
export const dragRotateAndZoom = new DragRotateAndZoom();
export const zoomSlider = new ZoomSlider();
export const attribution = new Attribution({
    collapsible: true
});
export const overViewMap = new OverviewMap({
    collapsed: false,
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ]
});

//URL of geoserver
export const gurl = "http://localhost:8080/geoserver/nepal_map/wms";

//Queryselector for layerswitcher
export const baseLayerElements = document.querySelectorAll(
    ".selection>select[id=base_layer]"
);
export const mainLayerElements = document.querySelectorAll(
    ".selection > input[type=checkbox]"
);

//Draw linestring upon click draw button
export const mapDraw = document
    .getElementById("drawline")
    .addEventListener("click", mapFunctions.drawline);

//Remove interaction
export const mapClear = document
    .getElementById("clear")
    .addEventListener("click", mapFunctions.clear);

//Draw linestring
export const drawInteraction = new Draw({
    type: "LineString",
    maxPoints: 2
});

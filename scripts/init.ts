/// <reference path="../../node_modules/@types/googlemaps/index.d.ts" />

import { Loader } from "@googlemaps/js-api-loader";

declare global {
    interface Window {
        initMap: () => void;
    }
}
const loader = new Loader({
    apiKey: "",
    version: "weekly",
});

let map: google.maps.Map;

function initMap(): void {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

window.initMap = initMap;     

// loader.load().then(() => {
      
// })
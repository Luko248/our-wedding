/// <reference path="../../node_modules/@types/googlemaps/index.d.ts" />

import { Loader } from "@googlemaps/js-api-loader";

let map: google.maps.Map;


declare global {
  interface Window {
    initMap: () => void;
  }
}

const loader = new Loader({
    apiKey: "AIzaSyDVGs8MwGzeMC71ifwhjRNyfMagjqyTbP8",
    version: "weekly",
});

export function createMap() {  
    function initMap(): void {
        map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      } 

    loader.load().then(() => {
        window.initMap = initMap;
    })
}
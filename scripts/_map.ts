/// <reference path="../../node_modules/@types/googlemaps/index.d.ts" />

import { Loader } from "@googlemaps/js-api-loader";


const loader = new Loader({
    apiKey: "AIzaSyDVGs8MwGzeMC71ifwhjRNyfMagjqyTbP8",
    version: "weekly",
});

export function createMap(){
    
}

// export function createMap() {  

//     let map: google.maps.Map;

//     function initMap(): void {
//       map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//       });
//     }
    
//     declare global {
//       interface Window {
//         initMap: () => void;
//       }
//     }
    
//     window.initMap = initMap;

//     loader.load().then(() => {

        
//     })
// }
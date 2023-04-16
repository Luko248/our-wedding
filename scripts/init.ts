import { Loader } from "@googlemaps/js-api-loader";
import { initNav } from "./_nav";
import { configMap } from "./_map";

declare global {
    interface Window {
        initMap: () => void;
    }
}
const loader = new Loader({
    apiKey: "AIzaSyDVGs8MwGzeMC71ifwhjRNyfMagjqyTbP8",
    version: "weekly",
});

// loader.load().then(() => {

// })

function initMap(): void {
    configMap()
}

window.initMap = initMap

document.addEventListener('DOMContentLoaded', () => {
    initNav()
})
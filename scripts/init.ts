// /// <reference path="../../node_modules/@types/googlemaps/index.d.ts" />
import { initNav } from "./_nav";

// declare global {
//     interface Window {
//         initMap: () => void;
//     }
// }

function initMap(): void {
    let mapElement = document.getElementById('mapElem') as HTMLDivElement
    const eventPosition = { lat: 49.412402, lng: 18.569880 };

    const map = new google.maps.Map(
        mapElement,
        {
            zoom: 17,
            center: eventPosition,
        }
    );

    const infoWindow = new google.maps.InfoWindow({
        content: '<div class="map__widnow"><strong>Penzión Kriváň<strong><br><span>Lucie & Lukáš Svatba</span></div>',
        ariaLabel: "Penzión Kriváň",
    });

    const marker = new google.maps.Marker({
        position: eventPosition,
        map,
        title: "Penzión Kriváň",
    });

    marker.addListener("click", () => {
        infoWindow.open({
            anchor: marker,
            map,
        });
    });
}
initMap()
document.addEventListener('DOMContentLoaded', () => {
    initNav()

})

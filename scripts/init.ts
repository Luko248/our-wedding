﻿// /// <reference path="../../node_modules/@types/googlemaps/index.d.ts" />
import { initNav } from "./_nav";

// declare global {
//     interface Window {
//         initMap: () => void;
//     }
// }

function initMap(): void {
    let mapElement = document.getElementById('mapElem') as HTMLDivElement
    const centerPosition = { lat: 49.412290, lng: 18.574300 };

    const map = new google.maps.Map(
        mapElement,
        {
            zoom: 17,
            center: centerPosition,
            mapId: '1406e53bf9ae68ff',
            disableDefaultUI: true,
            options: {
                gestureHandling: 'cooperative',
            }
        }
    );

    const iconsUrl = "/dist/images/map-icons/";

    const markers: Record<string, { icon: string }> = {
        main: {
            icon: iconsUrl + "marker.svg",
        }
    };

    const positions = [
        {
            position: new google.maps.LatLng(49.412402, 18.569880),
            type: "main",
            title: "Penzión Kriváň",
        }
    ];

    const infoWindow = new google.maps.InfoWindow({
        content: '<div class="map__widnow"><strong>Penzión Kriváň<strong><br><span>Lucie & Lukáš Svatba</span></div>',
        ariaLabel: "Penzión Kriváň",
    });

    for (let i = 0; i < positions.length; i++) {
        const marker = new google.maps.Marker({
            position: positions[i].position,
            icon: markers[positions[i].type].icon,
            map: map,
        });

        marker.addListener("click", () => {
            infoWindow.open({
                anchor: marker,
                map,
            });
        });
    }
}

initMap()
// declare global {
//     interface Window {
//         initMap: () => void;
//     }
// }

export function initMap(): void {
    let mapElement = document.getElementById('mapElem') as HTMLDivElement;
    var centerPosition;
    const mobileCenterPosition = { lat: 49.415000, lng: 18.570000 };
    const laptopCenterPosition = { lat: 49.412290, lng: 18.572500 };
    const desktopCenterPosition = { lat: 49.412290, lng: 18.574300 };

    if (window.innerWidth < 768) {
        centerPosition = mobileCenterPosition;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        centerPosition = laptopCenterPosition;
    } else {
        centerPosition = desktopCenterPosition;
    }

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
        content: '<div class="map__widnow"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8gNB43uu0kQeLv784HwPOFhVMiAPwJkNmAGAQsgqfIADJS8yg0OVrJiSZCo0LQqhhR0&usqp=CAU" alt="Penzión Kriváň" loading="lazy"></img><address><strong>Penzión Kriváň</strong><br>Dubáčovci 509, 023 21 Korňa<br>Slovensko</address></div>',
        ariaLabel: "Penzión Kriváň",
    });

    // Function to close infoWindow
    const closeInfoWindow = () => {
        infoWindow.close();
    };

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

    window.addEventListener("click", (event) => {
        if (!mapElement.contains(event.target as Node)) {
            closeInfoWindow();
        }
    });

    map.addListener("click", () => {
        closeInfoWindow();
    });
}
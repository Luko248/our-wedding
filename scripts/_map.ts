// declare global {
//     interface Window {
//         initMap: () => void;
//     }
// }

export function initMap(): void {
    let mapElement = document.getElementById('mapElem') as HTMLDivElement;
    var centerPosition;
    var currentZoom = 15;
    const mobileCenterPosition = { lat: 49.450000, lng: 18.565000 };
    const laptopCenterPosition = { lat: 49.422500, lng: 18.572500 };
    const desktopCenterPosition = { lat: 49.412290, lng: 18.574300 };
    const mobileZoom = 13;

    if (window.innerWidth < 768) {
        centerPosition = mobileCenterPosition;
        currentZoom = mobileZoom;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        centerPosition = laptopCenterPosition;
    } else {
        centerPosition = desktopCenterPosition;
    }

    const map = new google.maps.Map(
        mapElement,
        {
            zoom: currentZoom,
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
            icon: iconsUrl + "wedding-marker.svg",
        },
        bride: {
            icon: iconsUrl + "bride-marker.svg",
        },
        groom: {
            icon: iconsUrl + "groom-marker.svg",
        }
    };

    const positions = [
        {
            position: new google.maps.LatLng(49.412402, 18.569880),
            type: "main",
            title: "Penzión Kriváň",
            content: '<div class="map__widnow"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8gNB43uu0kQeLv784HwPOFhVMiAPwJkNmAGAQsgqfIADJS8yg0OVrJiSZCo0LQqhhR0&usqp=CAU" alt="Penzión Kriváň"></img><address><strong>Penzión Kriváň</strong><br>Dubáčovci 509, 023 21 Korňa<br>Slovensko<strong><a href="https://www.google.com/maps/place/Penzi%C3%B3n+Kriv%C3%A1%C5%88/@49.4122767,18.5698483,17z/data=!4m20!1m10!3m9!1s0x47146e7cadbec1ef:0xbd81420ef95d1998!2zUGVuemnDs24gS3JpdsOhxYg!5m2!4m1!1i2!8m2!3d49.4122767!4d18.5698483!16s%2Fg%2F11c533xp9_!3m8!1s0x47146e7cadbec1ef:0xbd81420ef95d1998!5m2!4m1!1i2!8m2!3d49.4122767!4d18.5698483!16s%2Fg%2F11c533xp9_?entry=ttu" target="_blank" class="link">Zobraziť na mape</a></strong></address></div>',
        },
        {
            position: new google.maps.LatLng(49.318987, 17.026647),
            type: "bride",
            title: "Nevesta",
            content: '<div class="map__widnow map__widnow--pad-top"><address><strong>Luckin rodný dom <a href="https://goo.gl/maps/fduMrKq2gsWNprGF6" target="_blank" class="link">Zobraziť na mape</a></strong></div>'
        },
        {
            position: new google.maps.LatLng(49.415069, 18.549465),
            type: "groom",
            title: "Ženích",
            content: '<div class="map__widnow map__widnow--pad-top"><address><strong>Lukášov rodný dom <a href="https://goo.gl/maps/AD7yNBY4MEacv8ox6" target="_blank" class="link">Zobraziť na mape</a></strong></div>'
        }
    ];

    const infoWindow = new google.maps.InfoWindow();

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
            infoWindow.setContent(positions[i].content);
            infoWindow.open(map, marker);
        });
    }

    window.addEventListener("click", (event) => {
        if (!mapElement.contains(event.target as Node)) {
            closeInfoWindow();
        }
    });
}
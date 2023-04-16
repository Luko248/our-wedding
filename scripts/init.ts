function initMap(): void {
    let mapElement = document.getElementById('map') as HTMLDivElement
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

// declare global {
//     interface Window {
//         initMap: () => void;
//     }
// }

// window.initMap = initMap;

// initMap()

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn') as HTMLButtonElement
    const menu = document.querySelector('nav ul') as HTMLButtonElement
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('burger--open')
        menu.classList.toggle('open')
    })
})
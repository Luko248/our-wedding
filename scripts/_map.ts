export const configMap = () => {
    let mapElement = document.getElementById('map') as HTMLDivElement
    const eventPosition = { lat: 49.412402, lng: 18.569880 };

    const map = new google.maps.Map(
        mapElement,
        { 
            center: eventPosition,
            mapId: "1406e53bf9ae68ff",
            zoom: 17
        }
    );

    const infoWindow = new google.maps.InfoWindow({
        content: '<div class="map__widnow"><strong>Penzión Kriváň</strong><br><span>Lucie & Lukáš Svatba</span></div>',
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
    })
}
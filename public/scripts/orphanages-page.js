const map = L.map('mapid').setView([-8.1455123, -35.1404409], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: './assets/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

const addMarkers = () => {
    document.querySelectorAll('.orphanages span').forEach(orphanage => {
        const { id, name, lat, lng } = orphanage.dataset;

        const popup = L.popup({
            closeButton: false,
            className: 'map-popup',
            minWidth: 240,
            minHeight: 240,
        }).setContent(`${name} <a href="./orphanage?id=${id}"><img src="./assets/images/arrow-white.svg"></a>`);

        L.marker([lat, lng], { icon })
            .addTo(map)
            .bindPopup(popup);
    });
}

addMarkers();
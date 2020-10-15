// Map functionalities
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

const map = L.map('mapid', options).setView([-8.1455123, -35.1404409], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: '../assets/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
}).setContent('Lar das Meninas <a class="chosen-orphanage" href="orphanage.html?id=1"><img src="../assets/images/arrow-white.svg"></a>')

L.marker([-8.1455123, -35.1404409], { icon }).addTo(map)

// Other functionalities
const selectImage = (event) => {
    document.querySelectorAll(".images button").forEach(b => {
        b.classList.remove("active");
    });
    
    const button = event.currentTarget;
    button.classList.add("active");

    const chosenImage = button.children[0];
    document.querySelector(".orphanage-details > img")
        .setAttribute("src", chosenImage.getAttribute("src"));
};
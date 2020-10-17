// Map functionalities
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

const { lat, lng } = document.querySelector('.map-container span').dataset;
const map = L.map('mapid', options).setView([lat, lng], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: './assets/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

L.marker([lat, lng], { icon }).addTo(map);

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
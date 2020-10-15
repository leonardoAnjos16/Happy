// Map functionalities
const map = L.map('mapid').setView([-8.1455123, -35.1404409], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: './assets/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker = null;
map.on('click', (event) => {
    const { lat, lng } = event.latlng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker && map.removeLayer(marker);
    marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Other functionalities
const addImageField = () => {
    const imageFields = document.querySelectorAll('.new-image');
    const newImageField = imageFields[imageFields.length - 1].cloneNode(true);

    if (newImageField.children[0].value === "") return;
    newImageField.children[0].value = "";

    const imagesContainer = document.querySelector('#images');
    imagesContainer.appendChild(newImageField);
};

const removeImageField = event => {
    const imageField = event.currentTarget.parentNode;

    const imageFields = document.querySelectorAll('.new-image');
    if (imageFields.length <= 1) {
        imageField.children[0].value = "";
        return;
    }

    imageField.remove();
};

const selectButton = event => {
    document.querySelector('.select-button button.active').classList.remove('active');
    
    const button = event.currentTarget;
    button.classList.add('active');

    document.querySelector('[name=weekends]').value = button.dataset.value;
}
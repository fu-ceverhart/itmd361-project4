const HOME = { lat: 34.8526, lng: -82.3940 };
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: HOME,
  });
}

function goHome() {
  map.setCenter(HOME);
  map.setZoom(12);
}

function goTo(lat, lng) {
  map.setCenter({ lat, lng });
  map.setZoom(12);
}

function zoomIn() {
  map.setZoom(map.getZoom() + 1);
}

function zoomOut() {
  map.setZoom(map.getZoom() - 1);
}

const images = [
  "images/brock.jpg",
  "images/winston.jpg",
  "images/winston_bella.jpg"
];

let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slide").src = images[currentIndex];
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("slide").src = images[currentIndex];
}
const COORDS = "coords";
function saveCoords(coordsOb) {
  localStorage.setItem(COORDS, JSON.stringify(coordsOb));
}
function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsOb = {
    latitude,
    longitude
  };
  saveCoords(coordsOb);
}
function handleGeoError() {
  console.log("Cant access geo location");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function loadCoords() {
  const loadeCoords = localStorage.getItem(COORDS);
  if (loadeCoords === null) {
    askForCoords();
  } else {
  }
}

function init() {
  loadCoords();
}
init();

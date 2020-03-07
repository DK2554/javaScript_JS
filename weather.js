const weather=document.querySelector(".js-weather");
const COORDS = "coords";
const API_KEY="36905dbcf74790dae25ded060b9bedf6";

function getWeather(lat,log){
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`)
  .then(function(response){
    return response.json()
  }).then(function(json){
    const temperature=json.main.temp;
    const place=json.name;
    weather.innerText=`${temperature}@${place}`
  });
}
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
  getWeather(latitude,longitude);
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
    const parseCoords = JSON.parse(loadeCoords)
    getWeather(parseCoords.latitude,parseCoords.longitude)
  }
}

function init() {
  loadCoords();
}
init();

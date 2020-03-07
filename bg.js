const body = document.querySelector("body");

const IMg_NUM = 3;
function patingImage(imgNumber) {
  const image = new Image();
  image.src = `/img/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}
function genRandom() {
  const number = Math.floor(Math.random() * IMg_NUM);
  return number;
}
function init() {
  const randomNumber = genRandom();
  patingImage(randomNumber);
}
init();

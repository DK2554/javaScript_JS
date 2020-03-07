const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greenting = document.querySelector(".js-greetings");
const User_ls = "currentUser",
  Showing_cn = "showing";
function handleSumit(event) {
  event.preventDefault();
  const currnetValue = input.value;
  paintGreetings(currnetValue);
  saveName(currnetValue);
}
function saveName(text) {
  localStorage.setItem(User_ls, text);
}
function paintGreetings(text) {
  form.classList.remove(Showing_cn);
  greenting.classList.add(Showing_cn);
  greenting.innerText = `Hello ${text}`;
}
function askForname() {
  form.classList.add(Showing_cn);
  form.addEventListener("submit", handleSumit);
}

function loadName() {
  const currentUser = localStorage.getItem(User_ls);
  if (currentUser === null) {
    askForname(); //로컬스토리지에 값이 없으면 실행하는 함수
  } else {
    paintGreetings(currentUser); //로컬스토리지에 값이 있으면 페인팅함수 실행
  }
}
function init() {
  loadName();
}

init();

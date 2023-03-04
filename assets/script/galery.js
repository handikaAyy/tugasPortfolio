// TODO :  ==========mode day-night ===================
const navModeBtn = document.querySelector("#input-mode");
const navModeday = document.querySelector(".icon-day");
const navModeNight = document.querySelector(".icon-night");
const maindiv = document.querySelector("body");
const navigasi = document.querySelector(".navigasi");
const profesion = document.querySelector(".profesion");

navModeBtn.addEventListener("click", () => {
  navModeday.classList.toggle("d-none");
  navModeNight.classList.toggle("d-none");
  maindiv.classList.toggle("main_dark");
  navigasi.classList.toggle("nav-dark");
  profesion.classList.toggle("yelo");
});

// TODO :  ============ phone navbar ===================
const navMenuBtn = document.querySelector("#input-menu");
const OpenMenu = document.querySelector(".icon-on");
const CloseMenu = document.querySelector(".icon-off");
const itemnav = document.querySelector(".setting ul");

navMenuBtn.addEventListener("click", () => {
  OpenMenu.classList.toggle("d-none");
  CloseMenu.classList.toggle("d-none");
  itemnav.classList.toggle("slide");
});

// TODO : ======= loader
var loader = document.getElementById("load");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

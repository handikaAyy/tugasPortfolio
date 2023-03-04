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



// todo : ================ overview flip =============
const card = document.getElementById("card");

card.addEventListener("click", function(){
  card.classList.toggle("flip");
})




// TODO : ======= loader
var loader = document.getElementById("load");
window.addEventListener("load", function () {
  loader.style.display = "none";
});



// TODO: =========== form contact ==========
const scriptURL = "https://script.google.com/macros/s/AKfycbzTV1l-7oiP8SQoufbTSxoPKMF5Xi7klxNlZ6NW7_LL9AY9WD8jj2CUQrM0BVMZ6qujxg/exec";
const form = document.forms["submit-to-google-sheet"];
const progres = document.querySelector('.notive-processing');

const kirim = document.querySelector('.button-submit')
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // click submit
  form.classList.add('d-none')
  kirim.classList.add('d-none')
  progres.classList.remove('d-none')
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response)
      progres.classList.add('d-none')
      var lert = alert('succes....');
      
      if (lert == undefined) {
        form.classList.remove('d-none');
        kirim.classList.remove("d-none");
        form.reset();
      }
      
    } 
      
      
  )
    .catch((error) => {
      console.error("Error!", error.message)
      progres.classList.add('d-none')
      progres.classList.add('d-none')
      var lert = alert('failed....');
      
      if (lert == undefined) {
        form.classList.remove('d-none');
        form.reset();
        kirim.classList.remove('d-none')
      }
    });
});

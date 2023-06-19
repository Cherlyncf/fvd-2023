// JavaScript Document
var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  }, 1000)
})
/************/
/* carousel */
/************/
/* code url:mhttps://codepen.io/shooft/pen/GRXMEoV */
var carousel = {
  direction: 'horizontal', //richting van de carousel - de default
  loop: 'true', // van 25 naar 1 en vice versa
  speed: 300, // duur van transitie in ms
  cssMode: true, // smoother

  // pagination
  pagination: {
    el: '.swiper-pagination', // class van de paginering
    type: 'fraction' // x/xx als paginering
  },

  // navigation arrows
  navigation: {
    nextEl: '.swiper-button-next', // class van next button
    prevEl: '.swiper-button-prev' // class van prev button
  }
};

/* het daadwerkelijk initialiseren van de carousel */
const swiper = new Swiper('.swiper', carousel);

/*************/
/* grid view */
/*************/
/* code url: https://codepen.io/shooft/pen/BaOwRBq */

var optionList = document.querySelector("#view-list");
var optionGrid = document.querySelector("#view-grid");

optionList.addEventListener("change", showInList);
optionGrid.addEventListener("change", showInGrid);

function showInList() {
  /* de lijst in de HTML opzoeken */
  let deLijst = document.querySelector(".alles ul");
  /* de class list-view laten zien als het geselecteerd is */
  deLijst.dataset.view = "listView";
  /* dan de class list-view toevoegen */
}

function showInGrid() {
  /* de lijst in de HTML opzoeken */
  let deLijst = document.querySelector(".alles ul");
  /* de class list-grid laten zien als het geselecteerd is */
  deLijst.dataset.view = "gridView";
  /* dan de class grid-view toevoegen */
}

/*****************/
/* filter opties */
/*****************/
/* code url: https://codepen.io/shooft/pen/bGxoWNO */

var optionAll = document.querySelector("#filter-all");
var optionPerson = document.querySelector("#filter-person");
var optionPlace = document.querySelector("#filter-place");
var optionSights = document.querySelector("#filter-sights");

optionAll.addEventListener("change", filterList);
optionPerson.addEventListener("change", filterList);
optionPlace.addEventListener("change", filterList);
optionSights.addEventListener("change", filterList);

function filterList(event){
  /* de ul opzoeken */
  let deLijst = document.querySelector(".alles ul");
  let nieuweFilter = event.target.value;
  // verwijder de huidige class van de lijst
  deLijst.className = "listView";
  // voeg de nieuwe class toe aan de lijst
  // het event object bevat alle info van het event dat heeft plaatsgevonden
  // het target is het element dat het event heeft laten afgaan
  // in dit geval de radio button die gewijzigd is
  // de value van die radio button is de nieuwe class
  deLijst.classList.add(nieuweFilter);
}




// JavaScript Document

/*****************/
/* splash screen */
/*****************/
/* code url: https://dev.to/saikatbishal/how-to-make-a-splash-screen-using-html-css-and-javascript-240m */

/* class naam in de HTML opzoeken */
var splashScreen = document.querySelector('.splash');
/* een add event listener toevoegen, zodat het luistert naar een klik op de .splash container */
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0; //styling toevoegen aan de .splash container en de dekking op 0 zet
  setTimeout(()=>{ // eerste parameter voert de actie uit (een class toevoegen aan de div) 
    splashScreen.classList.add('hidden') //de verborgen class wordt toegevoegd aan de .splash container
  }, 1000) // de tweede parameter voert de actie tijd uit in millieseconden, na 1 sec
})

/************/
/* carousel */
/************/
/* code url:mhttps://codepen.io/shooft/pen/GRXMEoV */
var carousel = {
  direction: 'horizontal', //richting van de carousel - de default
  loop: 'true', // van 25 naar 1 en vice versa
  speed: 300, // duur van transitie in ms, 0,3 sec
  cssMode: true, // om het smoother te maken

  // pagination
  pagination: {
    el: '.swiper-pagination', // class van de paginering
    type: 'fraction' // x/xx als paginering
  },

  // navigation arrows
  navigation: {
    nextEl: '.swiper-button-next', // class van volgende button
    prevEl: '.swiper-button-prev' // class van terug button
  }
};

/* het daadwerkelijk initialiseren van de carousel */
const swiper = new Swiper('.swiper', carousel);

/*************/
/* grid view */
/*************/
/* code url: https://codepen.io/shooft/pen/BaOwRBq */

/* id naam in de HTML opzoeken */
var optionList = document.querySelector("#view-list");
var optionGrid = document.querySelector("#view-grid");

/* een add event listener toevoegen, zodat het luistert naar een klik op de lijst en grid container radio button */
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

/* id namen in de HTML opzoeken */
var optionAll = document.querySelector("#filter-all");
var optionPerson = document.querySelector("#filter-person");
var optionPlace = document.querySelector("#filter-place");
var optionSights = document.querySelector("#filter-sights");

/* een add event listener toevoegen, zodat het luistert naar een klik op de radio button's */
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




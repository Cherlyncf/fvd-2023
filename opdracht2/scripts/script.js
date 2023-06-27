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

/****************/
/* de carousel */
/**************/
/* code url:https://codepen.io/shooft/pen/GRXMEoV */
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
/*****************/
/* toon carousel */
/*****************/
const sliderButton = document.querySelector("header button");
const slider = document.querySelector(".swiper");


sliderButton.addEventListener("click", toggleSlider);

function toggleSlider() {
  slider.classList.add("show");
  document.documentElement.classList.add("no-scroll");
}

/********************/
/* carousel sluiten */
/********************/
// de sluit-button wordt opgezocht in de html
var sluitButton = document.querySelector("button img");

// button luisterd naar kliks
sluitButton.addEventListener("click", sluitMenu);

// in de functie wordt de class van de section verwijderd
function sluitMenu() {
  var deSlider = document.querySelector(".swiper");
  deSlider.classList.remove("show");
  document.documentElement.classList.remove("no-scroll");
}



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

/* een add event listener toevoegen, zodat het luistert naar een klik op de radio button */
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

/*********************/
/* een foto uploaden */
/*********************/
// link code url: https://www.youtube.com/watch?v=lzK8vM_wdoY en hulp van Sanne

/* id naam van de input in de HTML opzoeken */
const image_input = document.querySelector ("#image_input");
/* var aanmaken waar de foto kan worden opgeslagen */
var uploaded_image = "";

/* een add event listener toevoegen, zodat als je op de input klikt je bestanden kan openen */
image_input.addEventListener("change", function(){
  // om het bestand te lezen dat geselecteerd is moet je de filereader object gebruiken
  const reader = new FileReader ();
  // als de foto geüpload is wordt het opgeslagen in de variable uploaded_image en daarna wordt de filereader gelezen
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;

    // de foto wordt zichtbaar in de geselecteerd grid view
    const deLijst = document.querySelector(".delijst ul");

    var liHTML = 
   `<li class="sights"><img src="${uploaded_image}" alt="hoge uitzicht"></li>`;

   deLijst.insertAdjacentHTML("afterbegin", liHTML);

  });
  // zonder deze code werkt het niet
  reader.readAsDataURL(this.files[0]);
})

/*********************/
/* foto verwijderen */
/********************/
//https://swiperjs.com/get-started en hulp van Sanne*/

/* de verwijder knop van de carousel opzoeken in de html */
var verwijderButtons = document.querySelectorAll(".swiper-wrapper li button");
// deze regel gelt voor elke verwijder knop en als je een add event listener toevoegd verwijderd de foto na het klikken op de knop
verwijderButtons.forEach(verwijderButton => {
  verwijderButton.addEventListener("click", verwijderFoto);
});

function verwijderFoto(event) {
  var currentButton = event.currentTarget;
  var currentLi = currentButton.closest("li");
  // hier wordt de hele li waarin de foto zit verwijderd
  currentLi.remove();

  // de teller van de carousel wordt steeds geüpdatet als je een foto verwijderd
  swiper.update();
}
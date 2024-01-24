"use strict";

// QUERY SELECTOR

const charactersUl = document.querySelector(".js_charactersUl");
const favouriteCharactersUl = document.querySelector(
  ".js_favouriteCharactersUl"
);
const disneyForm = document.querySelector(".js_form");
const userInput = document.querySelector(".js_userInput");

//VARIABLES DE DATOS

let charactersData = [];
let favouritesData = [];

const favouritesStored = JSON.parse(localStorage.getItem("favouritesData"));
if (favouritesStored) {
  favouritesData = favouritesStored;

  showFavourites(favouriteCharactersUl);
}

// FUNCIONES

function showOne(characterObj) {
  console.log("voy a pintar" + characterObj._id);

  const favouriteCharacterIndex = favouritesData.findIndex(
    (eachCharacter) => eachCharacter._id === characterObj._id
  );

  if (favouriteCharacterIndex === -1) {
    charactersUl.innerHTML += ` 
  <li class="characterCard js_mainList" data-id="${characterObj._id}">
    <img
      src="${characterObj.imageUrl}"
      alt="Image"
    />
    <h4>${characterObj.name}</h4>
  </li>
`;
  } else {
    charactersUl.innerHTML += ` 
    <li class="favouriteCard characterCard js_mainList" data-id="${characterObj._id}">
      <img
        src="${characterObj.imageUrl}"
        alt="Image"
      />
      <h4>${characterObj.name}</h4>
    </li>
  `;
  }
}

function showAll() {
  charactersUl.innerHTML = " ";

  for (const eachCharacter of charactersData) {
    showOne(eachCharacter);
  }

  const allCharactersLi = document.querySelectorAll(".js_mainList");

  for (const characterLi of allCharactersLi) {
    characterLi.addEventListener("click", handleClickCharacter);
  }
}

function showOneFavourite(favouriteObj) {
  favouriteCharactersUl.innerHTML += `
    <li class="favouriteCharacter_Card js_favouriteCharacterCard" data-id="${favouriteObj._id}">
      <img
        src="${favouriteObj.imageUrl}"
        alt="Favourite Image"
      />
      <h4>${favouriteObj.name}</h4>
      <button class="deleteFavBtn js_deleteFavouriteBtn" data-id="${favouriteObj._id}">X</button>
    </li>
  `;
}

function showFavourites() {
  favouriteCharactersUl.innerHTML = "";

  for (const eachFavouriteCharacter of favouritesData) {
    showOneFavourite(eachFavouriteCharacter);
  }

  const allDeleteBtn = document.querySelectorAll(".js_deleteFavouriteBtn");

  for (const eachDeleteBtn of allDeleteBtn) {
    eachDeleteBtn.addEventListener("click", handlerDeleteFavourite);
  }
}

//FUNCIONES DE EVENTOS

function handleClickCharacter(event) {
  const clickedCharacterLi = event.currentTarget;

  const clickedCharacterId = parseInt(clickedCharacterLi.dataset.id);

  const selectedCharacterObj = charactersData.find(
    (eachCharacter) => eachCharacter._id === clickedCharacterId
  );

  const favouriteCharacterIndex = favouritesData.findIndex(
    (eachCharacter) => eachCharacter._id === clickedCharacterId
  );

  if (favouriteCharacterIndex === -1) {
    favouritesData.push(selectedCharacterObj);
  } else {
    favouritesData.splice(favouriteCharacterIndex, 1);
  }

  localStorage.setItem("favouritesData", JSON.stringify(favouritesData));

  showFavourites();

  showAll();

  // clickedCharacterLi.classList.toggle("favouriteCard");
}
function handlerDeleteFavourite(event) {
  const clickedFavCharacterLi = event.currentTarget;
  const clickedFavCharacterId = parseInt(clickedFavCharacterLi.dataset.id);

  // const selectedFavCharacterObj = favouritesData.find(
  //   (eachCharacter) => eachCharacter._id === clickedFavCharacterId
  // );

  const favouriteCharacterIndex = favouritesData.findIndex(
    (favCharacter) => favCharacter._id === parseInt(clickedFavCharacterId)
  );

  favouritesData.splice(favouriteCharacterIndex, 1);

  localStorage.setItem("favouritesData", JSON.stringify(favouritesData));

  showFavourites();
  showAll();
}

// EVENTOS

disneyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(`//api.disneyapi.dev/character?pageSize=50&name=${userInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data.data)) {
        charactersData = data.data;
      } else {
        charactersData = [data.data];
      }

      showAll();
    });
});

// CODIGO CUANDO CARGA LA PAGINA

fetch("//api.disneyapi.dev/character?pageSize=50")
  .then((response) => response.json())
  .then((data) => {
    charactersData = data.data;
    showAll();
  });

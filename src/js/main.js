"use strict";

// QUERY SELECTOR
const charactersUl = document.querySelector(".js_charactersUl");
const favouriteCharactersUl = document.querySelector(
  ".js_favouriteCharactersUl"
);

const btnSearch = document.querySelector(".js_btnSearch");
// const userInput = document.querySelector('.js_userInput');

//VARIABLES DE DATOS

let charactersData = [];
// let favouriteData = [];

// FUNCIONES

function showOne(characterObj) {
  charactersUl.innerHTML += ` 
        <li class="characterCard js_mainList" data-id="${characterObj._id}" >
          <img
          src= ${characterObj.imageUrl}
            
            alt=""
          />
          <h4>${characterObj.name}</h4>
        </li>
        `;
}

function showAll() {
  for (const eachCharacter of charactersData) {
    showOne(eachCharacter);
  }

  const allCharactersLi = document.querySelectorAll(".js_mainList");
  //   console.log(allCharactersLi);
  //como es una lista de arrays, no le puedes poner directamente el evento a const allCharacterLi

  for (const characterLi of allCharactersLi) {
    characterLi.addEventListener("click", handleClickCharacter);
  }
}

//FUNCIONES DE EVENTOS (Handle..)

function handleClickCharacter(event) {
  const clickedCharacterLi = event.currentTarget;
  //   console.log(clickedCharacterLi);

  clickedCharacterLi.classList.toggle("favouriteCard");

  console.log(clickedCharacterLi.dataset.id);

  const selectedCharacterObj = charactersData.find(
    (eachCharacter) => eachCharacter.id === clickedCharacterLi.dataset._id
  );
  console.log(selectedCharacterObj);

  favouriteCharactersUl.innerHTML += `
        <li class= "favouriteCharacter_Card js_mainList" >
         <img
         src= ${selectedCharacterObj.imageUrl}

          alt=""
     />
        <h4>${selectedCharacterObj.name}</h4>
       </li>
  `;
}
// function handleClickSearch(){
// charactersUl.innerHTML=userInput.value;
// console.log(handleClickSearch);
// }

// EVENTOS
// btnSearch.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("Holis");
// });
// CODIGO CUANDO CARGA LA PAGINA

fetch("//api.disneyapi.dev/character?pageSize=50")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.data);
    charactersData = data.data;
    showAll();
  });

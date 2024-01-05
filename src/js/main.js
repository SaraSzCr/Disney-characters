"use strict";

// QUERY SELECTOR
const charactersUl = document.querySelector(".js_charactersUl");

//VARIABLES DE DATOS

let charactersData = [];

// FUNCIONES

function showOne(characterObj) {
  charactersUl.innerHTML += ` 
        <li >
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
}

//FUNCIONES DE EVENTOS (Handle..)

// EVENTOS

// CODIGO CUANDO CARGA LA PAGINA

fetch("//api.disneyapi.dev/character?pageSize=50")
  .then((response) => response.json())
  .then((data => {
    console.log(data.data);
    charactersData = data.data
    showAll()
  }));


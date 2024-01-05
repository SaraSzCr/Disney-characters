'use strict';

// QUERY SELECTOR
const charactersUl = document.querySelector(".js_charactersUl");

//VARIABLES DE DATOS

const charactersData = [ 
    {
        "_id": 112,
        "films": [
        "Hercules (film)"
        ],
        "shortFilms": [],
        "tvShows": [
        "Hercules (TV series)"
        ],
        "videoGames": [
        "Kingdom Hearts III"
        ],
        "parkAttractions": [],
        "allies": [],
        "enemies": [],
        "sourceUrl": "https://disney.fandom.com/wiki/Achilles_(Hercules)",
        "name": "Achilles",
        "imageUrl": "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
        "createdAt": "2021-04-12T01:31:30.547Z",
        "updatedAt": "2021-12-20T20:39:18.033Z",
        "url": "https://api.disneyapi.dev/characters/112",
        "__v": 0
        },
        {
        "_id": 18,
        "films": [
        "The Fox and the Hound",
        "The Fox and the Hound 2"
        ],
        "shortFilms": [],
        "tvShows": [],
        "videoGames": [],
        "parkAttractions": [],
        "allies": [],
        "enemies": [],
        "sourceUrl": "https://disney.fandom.com/wiki/Abigail_the_Cow",
        "name": "Abigail the Cow",
        "imageUrl": "https://static.wikia.nocookie.net/disney/images/0/05/Fox-disneyscreencaps_com-901.jpg",
        "createdAt": "2021-04-12T01:26:03.413Z",
        "updatedAt": "2021-12-20T20:39:18.032Z",
        "url": "https://api.disneyapi.dev/characters/18",
        "__v": 0
        },
        {
            "_id": 16,
            "films": [
            "Cheetah"
            ],
            "shortFilms": [],
            "tvShows": [],
            "videoGames": [],
            "parkAttractions": [],
            "allies": [],
            "enemies": [],
            "sourceUrl": "https://disney.fandom.com/wiki/Abdullah",
            "name": "Abdullah",
            "imageUrl": "https://static.wikia.nocookie.net/disney/images/c/cb/1087603-44532-clp-950.jpg",
            "createdAt": "2021-04-12T01:26:02.377Z",
            "updatedAt": "2021-12-20T20:39:18.032Z",
            "url": "https://api.disneyapi.dev/characters/16",
            "__v": 0
            },
            {
            "_id": 45,
            "films": [
            "Mary Poppins (film)",
            "Mary Poppins Returns"
            ],
            "shortFilms": [],
            "tvShows": [],
            "videoGames": [],
            "parkAttractions": [],
            "allies": [],
            "enemies": [],
            "sourceUrl": "https://disney.fandom.com/wiki/Admiral_Boom_and_Mr._Binnacle",
            "name": "Admiral Boom and Mr. Binnacle",
            "imageUrl": "https://static.wikia.nocookie.net/disney/images/b/be/Marypoppins-disneyscreencaps_com-1086.jpg",
            "createdAt": "2021-04-12T01:26:21.560Z",
            "updatedAt": "2021-12-20T20:39:18.033Z",
            "url": "https://api.disneyapi.dev/characters/45",
            "__v": 0
            }


];

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

function showAll (){
    for(const eachCharacter of charactersData){
        showOne (eachCharacter)
    }

}

//FUNCIONES DE EVENTOS (Handle..)

// EVENTOS

// CODIGO CUANDO CARGA LA PAGINA



showAll();



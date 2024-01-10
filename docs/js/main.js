const l=document.querySelector(".js_charactersUl"),u=document.querySelector(".js_favouriteCharactersUl"),f=document.querySelector(".js_form"),v=document.querySelector(".js_userInput");let n=[],a=[];const d=JSON.parse(localStorage.getItem("favouritesData"));d&&(a=d,o());function m(e){l.innerHTML+=` 
    <li class="characterCard js_mainList" data-id="${e._id}">
      <img
        src="${e.imageUrl}"
        alt="Image"
      />
      <h4>${e.name}</h4>
    </li>
  `}function h(){l.innerHTML=" ";for(const t of n)m(t);const e=document.querySelectorAll(".js_mainList");for(const t of e)t.addEventListener("click",_)}function C(e){u.innerHTML+=`
    <li class="favouriteCharacter_Card js_favouriteCharacterCard" data-id="${e._id}">
      <img
        src="${e.imageUrl}"
        alt="Favourite Image"
      />
      <h4>${e.name}</h4>
      <button class="deleteFavBtn js_deleteFavouriteBtn" data-id="${e._id}">X</button>
    </li>
  `}function o(){u.innerHTML="";for(const t of a)C(t);const e=document.querySelectorAll(".js_deleteFavouriteBtn");for(const t of e)t.addEventListener("click",g)}function _(e){const t=e.currentTarget,c=parseInt(t.dataset.id),i=n.find(s=>s._id===c),r=a.findIndex(s=>s._id===c);r===-1?a.push(i):a.splice(r,1),localStorage.setItem("favouritesData",JSON.stringify(a)),o(),t.classList.toggle("favouriteCard")}function g(e){const t=e.currentTarget,c=parseInt(t.dataset.id);a.find(r=>r._id===c);const i=a.findIndex(r=>r._id===parseInt(c));a.splice(i,1),o()}f.addEventListener("submit",e=>{e.preventDefault(),fetch(`//api.disneyapi.dev/character?pageSize=50&name=${v.value}`).then(t=>t.json()).then(t=>{Array.isArray(t.data)?n=t.data:n=[t.data],h()})});fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{n=e.data,h()});
//# sourceMappingURL=main.js.map

import { response } from "express";
import { parse } from "querystring";
import { parseArgs } from "util";
import {IUser} from "./user";

async function getUsers(){
  await fetch("http://localhost:3000/htl/dating",{})
  .then((response) => response.json())
  .then((data) => {
    createList(data, (<HTMLInputElement>document.getElementById("search-input")).value);
  });
}
async function searchUsers(){
  await fetch("http://localhost:3000/htl/dating",{})
  .then((response) => response.json())
  .then((data) => {
    createList(data, (<HTMLInputElement>document.getElementById("search-input")).value);
  });
}

function createList(users, name){
  users.forEach(u => {
    console.log(u);

    const searchResults = document.getElementById("search-results")!;
    searchResults.innerHTML = "";

   if (users.length > 0) {
    const ul = document.createElement("ul");
    for (const user of users) {
      const li = document.createElement("li");
      li.textContent = user.name;

      var p = document.createElement("p");
      p.textContent = user.age;
      li.appendChild(p);
      
      p = document.createElement("p");
      p.textContent = user.gender;
      li.appendChild(p);
      p = document.createElement("p");
      p.textContent = user.email;
      li.appendChild(p);
      p = document.createElement("p");
      p.textContent = user.description;
      li.appendChild(p);
      
      if(user.hasOwnProperty('imgPath')){
        const pic = document.createElement("img");
        pic.setAttribute("src", user.imgPath);
        li.appendChild(pic);
      }

      ul.appendChild(li);
    }
    searchResults.appendChild(ul);
  } else {
    const p = document.createElement("p");
    p.textContent = "Keine Benutzer gefunden.";
    searchResults.appendChild(p);
  }
})
}
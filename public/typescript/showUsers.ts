import { response } from "express";
import {IUser} from "./user";

async function getUsers(){
  await fetch("http://localhost:3000/all",{})
  .then((response) => response.json())
  .then((data) => {
    createList(data);
  });
}

function createList(users){
  users.forEach(u => {
    console.log(u);
 
    const searchResults = document.getElementById("search-results")!;
    searchResults.innerHTML = "";

   if (users.length > 0) {
    const ul = document.createElement("ul");
    for (const user of users) {
      const li = document.createElement("li");
      li.textContent = user.name;
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
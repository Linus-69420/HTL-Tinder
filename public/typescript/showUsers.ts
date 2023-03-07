import { response } from "express";
import {IUser} from "./user";

getUsers();

async function getUsers(){
  await fetch("http://localhost:3000/all",{})
  .then((response) => response.json())
  .then((data) => {
    createList(data);
  });
}

function createList(users){

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

  /*users.forEach(u => {
    console.log(u);
    const test = document.createElement("h3");
    test.textContent = u.name + " email:" + u.email + "\n";
    const search = document.getElementById("search-results");
    search?.appendChild(test);
  })*/
}
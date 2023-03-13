import { response } from "express";
import { parse } from "querystring";
import { parseArgs } from "util";
import { IUser } from "./user";

async function getUsers() {
  await fetch("http://localhost:3000/htl/dating", {})
    .then((response) => response.json())
    .then((data) => {
      createList(data, (<HTMLInputElement>document.getElementById("search-input")).value);
    });
}
async function searchUsers() {
  await fetch("http://localhost:3000/htl/dating", {})
    .then((response) => response.json())
    .then((data) => {
      createList(data, (<HTMLInputElement>document.getElementById("search-input")).value);
    });
}

function createList(users: IUser[], name) {
  const searchResults = document.getElementById("search-results")!;
  searchResults.innerHTML = "";
  const ul = document.createElement("ul");

  if (users.length > 0) {
    users.forEach(u => {

      if (u.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
        console.log(u);
        const li = document.createElement("li");
        li.textContent = u.name;

        var p = document.createElement("p");
        p.textContent = u.age.toString();
        li.appendChild(p);

        p = document.createElement("p");
        p.textContent = u.gender;
        li.appendChild(p);
        p = document.createElement("p");
        p.textContent = u.email;
        li.appendChild(p);
        p = document.createElement("p");
        p.textContent = u.description;
        li.appendChild(p);

        if (u.hasOwnProperty('imgPath')) {
          const pic = document.createElement("img");
          pic.setAttribute("src", u.imgPath?.toString()!);
          li.appendChild(pic);
        }
        ul.appendChild(li);
      }
    });

    searchResults.appendChild(ul);
  } else {
    const p = document.createElement("p");
    p.textContent = "Keine Benutzer gefunden.";
    searchResults.appendChild(p);
  }
}

import { response } from "express";
import { parse } from "querystring";
import { parseArgs } from "util";
import { IUser } from "./user";

async function searchUsers() {
  await fetch("http://localhost:3000/htl/dating", {})
    .then((response) => response.json())
    .then((data) => {
      createList(data, (<HTMLInputElement>document.getElementById("search-input")).value);
    });
}

function createList(users: IUser[], name) {
  let usersFound: Boolean = false;
  const searchResults = document.getElementById("search-results")!;
  searchResults.innerHTML = "";
  const ul = document.createElement("ul");

  if (users.length > 0 && name != "") {
    users.forEach(u => {

      if (u.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
        usersFound = true;
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

    const div1 = document.createElement("div");
        div1.className = "ProfileItem";
        div1.textContent = "Hallo";
        const div2 = document.createElement("div");
        div2.className = "ProfileImg";
        const div3 = document.createElement("div");
        div3.className = "imageContain";
        const img = document.createElement("img");
        img.src = "https://placehold.it/200x200";

        div3.appendChild(img);
        div2.appendChild(div3);

        const div4 = document.createElement("div");
        div4.className = "ProfileDes";
        const a = document.createElement("a");
        a.className = "profileTitle";
        a.textContent = "Username";
        const div5 = document.createElement("div");
        div5.className = "profileInfo";
        div4.append(a, div5);
        div1.appendChild(div2);

        searchResults.appendChild(div1);
  } 
  if(!usersFound){
    searchResults.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = "Keine Benutzer gefunden.";
    searchResults.appendChild(p);
  }
}

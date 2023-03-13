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
  console.log(name);

  if(name === "all")
  {
    usersFound = true;
    users.forEach(u => {
        showUsers(u, searchResults);
    });
  }
  if (users.length > 0 && name != "" && name !== "all") {
    users.forEach(u => {

      if (u.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
        usersFound = true;

        showUsers(u, searchResults);
      }
    });
  } 
  if(!usersFound){
    searchResults.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = "Keine Benutzer gefunden.";
    searchResults.appendChild(p);
  }
}

function showUsers(u, searchResults) {
  const div1 = document.createElement("div");
  div1.className = "ProfileItem";
  const div2 = document.createElement("div");
  div2.className = "ProfileImg";
  const div3 = document.createElement("div");
  div3.className = "imageContain";
  const img = document.createElement("img");
  img.setAttribute("src", u.imgPath!);  
  const div4 = document.createElement("div");
  div4.className = "ProfileDes";
  const a = document.createElement("a");
  a.className = "profileTitle";
  a.textContent = u.name;
  const div5 = document.createElement("div");
  div5.className = "profileInfo";
  div5.textContent = "Alter: " + u.age;
  const div6 = document.createElement("div");
  div6.className = "profileInfo";
  div6.textContent = "E-Mail: " + u.email;
  const div7 = document.createElement("div");
  div7.className = "profileInfo";
  div7.textContent = u.gender;
  const div8 = document.createElement("div");
  div8.className = "profileInfo";
  div8.textContent = "Beschreibung: " + u.description;
  const br = document.createElement("br");

  div3.appendChild(img);
  div2.appendChild(div3);
  div4.append(a, div5, div6, div7, div8);
  div1.append(div2, div4);
  searchResults.append(br, div1, br);
}

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
  users.forEach(u => {
    console.log(u);
    const test = document.createElement("h3");
    test.textContent = u.name;
    const search = document.getElementById("search-results");
    search?.appendChild(test);
  })
}
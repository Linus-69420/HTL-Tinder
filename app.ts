import express, { response } from "express";
import { join } from "path";
import { UserSevice } from "./userService";

const app = express();
let userService = new UserSevice();

app.get("/", (request, response) => {
    const file: string = join(__dirname, "/public/html/index.html");
    response.sendFile(file);
});

app.get("/:id", (request, response) => {
    return JSON.stringify(userService.getUserById(Number(request.params.id)));
});

app.get("/all", (request, response) => {
    return JSON.stringify(userService.getAllUsers());
});

app.post("/new:user", (request, response) => {
    userService.addUser(JSON.parse(request.params.user));
});

app.put("/update:user", (request, response) => {
    userService.updateUser(JSON.parse(request.params.user));
});

app.delete("/delete:id", (request, response) => {
    userService.deleteUser(Number(request.params.id));
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
// das hier könnte funktionieren, aber idk ob ich das in eine eigene Datei machen soll oder nicht
/*
const searchForm = document.querySelector('#search-form') as HTMLFormElement;
const searchInput = document.querySelector('#search-input') as HTMLInputElement;
const searchResults = document.querySelector('#search-results') as HTMLElement;

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Rufen Sie die Benutzerliste vom Server ab
  const response = await fetch('/users');
  const users = await response.json();

  // Suchen Sie nach Benutzern, die dem Suchkriterium entsprechen
  const searchTerm = searchInput.value.toLowerCase();
  const matchingUsers = users.filter((user: any) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(searchTerm);
  });

  // Löschen Sie zuvor angezeigte Suchergebnisse
  searchResults.innerHTML = '';

  // Zeigen Sie die Ergebnisse an
  matchingUsers.forEach((user: any) => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    userCard.innerHTML = `
      <h2>${user.firstName} ${user.lastName}</h2>
      <p>${user.email}</p>
    `;
    searchResults.appendChild(userCard);
  });
});
*/
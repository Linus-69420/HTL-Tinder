/*const searchForm = document.querySelector('#search-form') as HTMLFormElement;
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
});*/
import { UserSevice } from "./userService";

const userService = new UserSevice();

// Suchformular
const form = document.getElementById("search-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();

  // Suchbegriff aus dem Formular lesen
  const searchTerm = (document.getElementById("search-input") as HTMLInputElement).value;

  // Benutzerliste zurücksetzen
  const searchResults = document.getElementById("search-results")!;
  searchResults.innerHTML = "";

  // Benutzer suchen
  //const users = userService.searchUsers(searchTerm);
  //const users = userService.getUserById(searchTerm);
  const users = userService.getAllUsers();

  // Benutzerliste aufbauen
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
});


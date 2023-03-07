"use strict";
exports.__esModule = true;
// Suchformular
var form = document.getElementById("search-form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Suchbegriff aus dem Formular lesen
    var searchTerm = document.getElementById("search-input").value;
    // Benutzerliste zurücksetzen
    var searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";
    // Benutzer suchen
    var users = [];
    fetch("http://localhost:3000/all", {})
        .then(function (response) { return response.json(); })
        .then(function (data) {
        users = JSON.parse(data);
    });
    console.log(users);
    users.forEach(function (u) {
        console.log(u);
    });
    var test = document.createElement("p");
    test.textContent = "Hallo!";
    // Benutzerliste aufbauen
    if (users.length > 0) {
        var ul = document.createElement("ul");
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            var li = document.createElement("li");
            li.textContent = user.name;
            ul.appendChild(li);
        }
        searchResults.appendChild(ul);
    }
    else {
        var p = document.createElement("p");
        p.textContent = "Keine Benutzer gefunden.";
        searchResults.appendChild(p);
    }
});
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

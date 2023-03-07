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

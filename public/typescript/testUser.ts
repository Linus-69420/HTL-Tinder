import { UserSevice } from "./userService";

const userService = new UserSevice();

const searchResults = document.getElementById("search-results")!;
  searchResults.innerHTML = "";

const users = userService.getAllUsers();

console.log(users.length);

const ul = document.createElement("ul");
    for (const user of users) {
      const li = document.createElement("li");
      li.textContent = user.name;
      ul.appendChild(li);
    }
    searchResults.appendChild(ul);
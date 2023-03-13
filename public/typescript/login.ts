import { IUser } from "./user";
console.log("e");

async function getUser() {
    const nameInput: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
    const pwInput: HTMLInputElement = document.getElementById('password') as HTMLInputElement;
    console.log(nameInput.value, pwInput.value);

    /*
    await fetch(`http://localhost:3000/htl/dating/${nameInput}/${pwInput}`, {})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);4
        displayUser(data);
      });*/
  }

function displayUser(user:IUser) {
    console.log(user);
}
import { response } from "express";
import { IUser } from "./user";

async function getUser() {
    const nameInput: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
    const pwInput: HTMLInputElement = document.getElementById('password') as HTMLInputElement;

    if (nameInput.value !== "" && pwInput.value !== "") {
        console.log(nameInput.value, pwInput.value);
        await fetch(`http://localhost:3000/htl/dating/${nameInput.value}/${pwInput.value}`, {})
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                displayUser(data);
            });
    }
    else {
        const userDiv = document.getElementById("user")!;
        userDiv.innerHTML = "Benutzername oder Passwort falsch";
    }
}

function displayUser(user: IUser) {
    const userDiv = document.getElementById("user")!;
    userDiv.innerHTML = user.name + user.age + user.description;
}
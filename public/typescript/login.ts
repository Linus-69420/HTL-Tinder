import { response } from "express";
import { IUser } from "./user";

let currentUser: IUser;

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

function displayUser(u: IUser) {
    currentUser = u;
    const login = document.getElementById("login")!;
    login.classList.toggle("noDisplay")

    const container = document.getElementById("user")!;
    container.innerHTML = "";

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

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("onclick", "deleteUser()");
    deleteBtn.innerHTML = "Delete";

    div3.appendChild(img);
    div2.appendChild(div3);
    div4.append(a, div5, div6, div7, div8);
    div1.append(div2, div4);
    container.append(br, div1, br);
    container.appendChild(deleteBtn);
}

async function deleteUser() {
    fetch('http://localhost:3000/htl/dating/' + currentUser.id, {
        method: 'DELETE',
    })
    .then((res) => { res.json() });

    setTimeout(() => refreshPage(), 1000);
}

async function refreshPage() {
    
    window.location.reload();
}
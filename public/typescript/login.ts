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
    deleteBtn.setAttribute("id", "delete");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("onclick", "deleteUser()");
    deleteBtn.innerHTML = "Delete";

    const editBtn = document.createElement("button");
    editBtn.setAttribute("id", "edit");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("onclick", "editUser()");
    editBtn.setAttribute("style", "float: left");
    editBtn.innerHTML = "Edit";

    div3.appendChild(img);
    div2.appendChild(div3);
    div4.append(a, div5, div6, div7, div8);
    div1.append(div2, div4);
    container.append(br, div1, br);
    container.appendChild(editBtn);
    container.appendChild(deleteBtn);
}

function editUser() {
    const sectionEdit = document.createElement("section");
    sectionEdit.setAttribute("class", "register");
    sectionEdit.setAttribute("id", "edit");

    const header = document.createElement("h1");
    header.textContent = "Edit";

    const form = document.createElement("form");

    const nameLabel = document.createElement("label");
    nameLabel.innerHTML = "Name";
    nameLabel.setAttribute("for", "name");
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("placeholder", currentUser.name);

    const emailLabel = document.createElement("label");
    emailLabel.innerHTML = "Email";
    emailLabel.setAttribute("for", "email");
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("placeholder", currentUser.email);

    const passworLabel = document.createElement("label");
    passworLabel.innerHTML = "Password";
    passworLabel.setAttribute("for", "password");
    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");
    passwordInput.setAttribute("name", "password");
    passwordInput.setAttribute("placeholder", currentUser.password);

    const ageLabel = document.createElement("label");
    ageLabel.innerHTML = "Alter";
    ageLabel.setAttribute("for", "age");
    const ageInput = document.createElement("input");
    ageInput.setAttribute("type", "age");
    ageInput.setAttribute("id", "age");
    ageInput.setAttribute("name", "age");
    ageInput.setAttribute("placeholder", currentUser.age.toString());

    const genderLabel = document.createElement("label");
    genderLabel.innerHTML = "Geschlecht";
    genderLabel.setAttribute("for", "gender");
    const genderSelecttion = document.createElement("select");
    genderSelecttion.setAttribute("type", "gender");
    genderSelecttion.setAttribute("id", "gender");
    genderSelecttion.setAttribute("name", "gender");
    genderSelecttion.setAttribute("placeholder", currentUser.gender);

    const genderOption1 = document.createElement("option");
    genderOption1.setAttribute("value", "männlich");
    genderOption1.innerHTML = "männlich";
    const genderOption2 = document.createElement("option");
    genderOption2.setAttribute("value", "weiblich");
    genderOption2.innerHTML = "weiblich";
    const genderOption3 = document.createElement("option");
    genderOption3.setAttribute("value", "divers");
    genderOption3.innerHTML = "divers";

    genderSelecttion.append(genderOption1, genderOption2, genderOption3);


    form.append(
        nameLabel,
        nameInput,
        passworLabel,
        passwordInput,
        ageLabel,
        ageInput,
        emailLabel,
        emailInput,
        genderLabel,
        genderSelecttion
    );

    const editSubmitBtn = document.createElement("button");
    editSubmitBtn.setAttribute("id", "delete");
    editSubmitBtn.setAttribute("type", "button");
    editSubmitBtn.setAttribute("onclick", "putUser()");
    editSubmitBtn.innerHTML = "Submit";

    sectionEdit.append(header, form);

    const container = document.getElementById("user")!;
    container.appendChild(sectionEdit);
    container.appendChild(editSubmitBtn);
}

async function deleteUser() {
    fetch('http://localhost:3000/htl/dating/' + currentUser.id, {
        method: 'DELETE',
    })
        .then((res) => { res.json() });

    setTimeout(() => refreshPage(), 1000);
}

async function putUser() {
    const nameInput: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
    const emailInput: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
    const pwInput: HTMLInputElement = document.getElementById('password') as HTMLInputElement;
    const ageInput: HTMLInputElement = document.getElementById('age') as HTMLInputElement;
    const genderInput: HTMLSelectElement = document.getElementById('gender') as HTMLSelectElement;
  
    currentUser.name = nameInput.value;
    currentUser.email = emailInput.value;
    currentUser.password = pwInput.value;
    currentUser.age = Number(ageInput.value);
    currentUser.gender = genderInput.value;

    console.log(nameInput.value, emailInput.value);

    /*await fetch(`http://localhost:3000/htl/dating/` + currentUser.id, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(currentUser)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
    setTimeout(() => refreshPage(), 1000);*/
}

async function refreshPage() {
    window.location.reload();
}
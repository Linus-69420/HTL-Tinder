"use strict";
exports.__esModule = true;
/*const form = document.querySelector<HTMLFormElement>("register-form");
const nameinput = form?.querySelector<HTMLInputElement>('input[name="name"]');
const emailinput = form?.querySelector<HTMLInputElement>('input[name="email"]');
const ageinput = form?.querySelector<HTMLInputElement>('input[name="age"]');
const genderinput = form?.querySelector<HTMLSelectElement>('select[name="gender"]');

form?.addEventListener('submit', (event) => {
    
    const name = nameinput?.value;
    const email = emailinput?.value;
    const age = ageinput?.value;
    const gender = genderinput?.value;

    console.log(name);
    console.log(email);
    console.log(age);
    console.log(gender);
});*/
function addUser() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var ageInput = document.getElementById('age');
    var genderInput = document.getElementById('gender');
    var newUser = {
        name: nameInput.value,
        email: emailInput.value,
        age: parseInt(ageInput.value),
        gender: genderInput.value
    };
    console.log(newUser);
    fetch("http://localhost:3000/new", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(newUser)
    });
}
var addUserButton = document.getElementById('submit');
addUserButton.addEventListener('submit', addUser);

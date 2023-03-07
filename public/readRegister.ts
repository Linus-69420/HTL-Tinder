import { IUser } from "./user";
const form = document.querySelector<HTMLFormElement>("register-form");
const nameinput = form?.querySelector<HTMLInputElement>('input[name="name"]');
const emailinput = form?.querySelector<HTMLInputElement>('input[name="email"]');
const ageinput = form?.querySelector<HTMLInputElement>('input[name="age"]');
const genderinput = form?.querySelector<HTMLSelectElement>('select[name="gender"]');

form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameinput?.value;
    const email = emailinput?.value;
    const age = ageinput?.value;
    const gender = genderinput?.value;

    console.log(name);
    console.log(email);
    console.log(age);
    console.log(gender);
});
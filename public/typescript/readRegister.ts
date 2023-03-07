import { IUser } from "./user";
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

function addUser(): void {
    const nameInput: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
    const emailInput: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
    const ageInput: HTMLInputElement = document.getElementById('age') as HTMLInputElement;
    const genderInput: HTMLSelectElement = document.getElementById('gender') as HTMLSelectElement;
  
    const newUser: IUser = {
      name: nameInput.value,
      email: emailInput.value,
      age: parseInt(ageInput.value),
      gender: genderInput.value
    };
    
    console.log(newUser);
  }
  
  const addUserButton: HTMLButtonElement = document.getElementById('submit') as HTMLButtonElement;
  addUserButton.addEventListener('submit', addUser);
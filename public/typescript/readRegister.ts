import { IUser } from "./user";

async function createUser() {
  const nameInput: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
    const emailInput: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
    const pwInput: HTMLInputElement = document.getElementById('password') as HTMLInputElement;
    const ageInput: HTMLInputElement = document.getElementById('age') as HTMLInputElement;
    const genderInput: HTMLSelectElement = document.getElementById('gender') as HTMLSelectElement;
    const img: HTMLInputElement = document.getElementById('pic') as HTMLInputElement;
  
    const newUser: IUser = {
      name: nameInput.value,
      email: emailInput.value,
      password: pwInput.value,
      age: parseInt(ageInput.value),
      gender: genderInput.value,
      description : `Ich bin ${nameInput.value} und bin ${ageInput.value} Jahre alt.`,
      imgPath: img.value
    };
    
    
    console.log(newUser);
    await fetch(`http://localhost:3000/htl/dating/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(newUser)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}
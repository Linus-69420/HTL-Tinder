import { IUser } from "./user";

const fs = require('fs');
console.log("e");
function addUser(user: IUser): void {
    var data = fs.readFileSync('/public/json/users.json');
    var users = JSON.parse(data);
    users.push(user);
    let newData = JSON.stringify(users);
    fs.writeFile('/public/json/users.json', newData, error => {
      if(error) throw error;

      console.log("New Data added!");
    })
  }

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
    addUser(newUser);
    /*await fetch(`http://localhost:3000/htl/dating/`, {})
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            addUser(data);
        });*/
}
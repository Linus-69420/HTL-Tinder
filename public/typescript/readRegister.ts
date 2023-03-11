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
  
  console.log("e");
function addUser(): void {
    const nameInput: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
    const emailInput: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
    const ageInput: HTMLInputElement = document.getElementById('age') as HTMLInputElement;
    const genderInput: HTMLSelectElement = document.getElementById('gender') as HTMLSelectElement;
  
    const newUser: IUser = {
      name: nameInput.value,
      email: emailInput.value,
      age: parseInt(ageInput.value),
      gender: genderInput.value,
      description : "f"
    };
      /*fetch("http://localhost:3000/new", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(newUser), // body data type must match "Content-Type" header
    });*/
  }

async function createUser() {
  const nameInput: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
    const emailInput: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
    const ageInput: HTMLInputElement = document.getElementById('age') as HTMLInputElement;
    const genderInput: HTMLSelectElement = document.getElementById('gender') as HTMLSelectElement;
  
    const newUser: IUser = {
      name: nameInput.value,
      email: emailInput.value,
      age: parseInt(ageInput.value),
      gender: genderInput.value,
      description : "idk"
    };
    var data = new FormData();
    data.append( "json", JSON.stringify( newUser ) );

    await fetch("http://localhost:3000/htl/dating",
    {
        method: "POST",
        body: data
    })
    .then(function(res){ return res; })
    .then(function(data){ alert( JSON.stringify( data ) ); console.log(data); })
}
import { IUser } from "./user";


let users : IUser[] = [];

function dislike(){
    if(users.length >0)
        displayRandomUser();
}

function like(){
    if(users.length >0)
        displayRandomUser();
}

async function getUsers() {
    console.log("e");
    await fetch("http://localhost:3000/htl/dating",{})
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        saveUsers(data);
        displayRandomUser();
    });
}


function displayRandomUser() : void {
    const container = document.getElementById("container")!;
    container.innerHTML = "";
    if(users.length > 0) {
        console.log("edff");
        const num = Math.floor(Math.random() * users.length);
        const user = users[num];
        users.splice(num, 1);
    
        const card = document.createElement("div");
        card.className = "card";
    
        const img = document.createElement("img");
        img.setAttribute("src","https://via.placeholder.com/200x200");
        if(user.hasOwnProperty('imgPath')){
            img.setAttribute("src", user.imgPath!);
          }
    
        const name = document.createElement("h2");
        name.innerHTML = user.name;
    
        const age = document.createElement("p");
        age.innerHTML = user.age.toString();
    
        const description = document.createElement("p");
        description.innerHTML = user.description;
    
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(description);
        container?.appendChild(card);
    }
    else{
        const container = document.getElementById("container");
        const header = document.createElement("h2");
        header.innerHTML = "Keine neuen User gefunden";

        container?.appendChild(header);
    }
}

function saveUsers(data : IUser[]){
    users = data;
}
import { IUser } from "./user";

let nextId = 1;

const users: Array<IUser> = [{
    id: nextId,
    name: "Linus",
    age: 17,
    gender: "male",
    email: "Linus@htl.at",
    description: "Hallo ich bin Linus und ein Gott in Deutsch"
},
{
    id: ++nextId,
    name: "Bajtik",
    age: 17,
    gender: "female",
    email: "Bajtik@htl.at",
    description: "Chinese hier, ich kann gut Mathe"
},
{
    id: ++nextId,
    name: "Oliver",
    age: 17,
    gender: "male",
    email: "Oliver@htl.at",
    description: "Massive Aggresionsprobleme wegen Typescript/Javascript"
},
{
    id: ++nextId,
    name: "Sukii",
    age: 17,
    gender: "male",
    email: "sukii@htl.at",
    description: "mache eher wenig bei dem projekt"
}
];

//export function searchUsers(searchTerm: string): IUser[] {
    //const lowerCaseSearchTerm = searchTerm.toLowerCase();
    //return this.users.filter(() =>
    //    user.name.toLowerCase().includes(lowerCaseSearchTerm)
    //);
//}


export function getAllUsers() : IUser[] {
    return users;
}

export function getUserById(id : number) : IUser | undefined {
    return users.find(u => u.id == id)
}

export function addUser(name : string, age : number, gender : string, email : string, description : string ) : IUser {
   const user = {
    id : ++nextId,
    name : name,
    age : age,
    gender : gender,
    email : email,
    description : description
   }

   users.push(user);
   return user;
}

export function deleteUser(user : IUser) : void {
    users.forEach((item, index) => {
        if (item === user) users.splice(index, 1);
    });
}
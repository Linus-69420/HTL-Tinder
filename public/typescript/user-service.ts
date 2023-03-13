import { IUser } from "./user";
import { write, read} from "./user-repository";

//export function searchUsers(searchTerm: string): IUser[] {
    //const lowerCaseSearchTerm = searchTerm.toLowerCase();
    //return this.users.filter(() =>
    //    user.name.toLowerCase().includes(lowerCaseSearchTerm)
    //);
//}

let users  : IUser[] = read();
let nextId =  users[users.length -1].id!;

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
   write(users);
   return user;
}

export function updateUser(id : number, name : string, age : number, gender : string, email : string, description : string) : IUser | undefined {
    let user : IUser | undefined = getUserById(id);

        if (user !== undefined) {
            const newName : string =name;
            const newAge : number = age;
            const newGender : string = gender;
            const newDescription : string = gender;
            const newEmail : string = email;

            user.name = name;
            user.age = age;
            user.gender = gender;
            user.description = description;
            user.email = email;
        }
    write(users);

    return user;
}

export function deleteUser(user : IUser) : void {
    users.forEach((item, index) => {
        if (item === user) users.splice(index, 1);
    });
    write(users);
}
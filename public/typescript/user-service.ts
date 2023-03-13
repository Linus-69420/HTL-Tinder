import { isUnionTypeNode } from "typescript";
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

export function getUserByNameAndPw(name : string, pw: string) : IUser | undefined{
    return users.find(u => u.name === name && u.password === pw );
}

export function addUser(name : string,password : string, age : number, gender : string, email : string, description : string, imgPath? : string ) : IUser {
    let optionalImgPath;
    if (typeof imgPath !== 'undefined') {
        optionalImgPath = imgPath;
    }

    const user :IUser = {
    id : ++nextId,
    name : name,
    password : password,
    age : age,
    gender : gender,
    email : email,
    description : description,
    imgPath: optionalImgPath
   }

   users.push(user);
   write(users);
   return user;
}

export function updateUser(id : number, name : string, password : string, age : number, gender : string, email : string, description : string) : IUser | undefined {
    let user : IUser | undefined = getUserById(id);

        if (user !== undefined) {
            user.name = name;
            user.password = password;
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
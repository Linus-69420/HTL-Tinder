import { IUser } from "./user";

export class UserSevice {
   
users : IUser[] = [{
        id: 1,
        name: "linus",
        age: 17,
        gender: "male",
        email: "Linus@htl.at",
    },
    {
        id: 2,
        name: "Bajtik",
        age: 17,
        gender: "female",
        email: "Bajtik@htl.at",
    }
];

searchUsers(searchTerm: string): IUser[] {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return this.users.filter((user) =>
    user.name.toLowerCase().includes(lowerCaseSearchTerm)
  );
}

getAllUsers() : IUser[] {
    return this.users;
}

getUserById(id : number) : IUser | undefined {
    return this.users.find(u => u.id == id)
}

addUser(user : IUser) : void {
    user.id = this.users[this.users.length-1].id! +1;
    this.users.push(user);
}

deleteUser(id : number) : void {
    let user = this.users.filter(u => u.id == id);
}

updateUser(user : IUser) : void {
    if(user === undefined){
        return;
    }

    let userToUpdate : IUser | undefined = this.getUserById(user.id!);
    if(userToUpdate !== undefined){
        userToUpdate.name = user.name;
        userToUpdate.email = user.name;
        userToUpdate.gender = user.name;
    }  
}
}
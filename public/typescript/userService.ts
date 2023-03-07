import { IUser } from "./user";

export class UserSevice {
   
    users : Array<IUser> = [{
            id: 1,
            name: "Linus",
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
        },
        {
            id: 3,
            name: "Oliver",
            age: 17,
            gender: "male",
            email: "Oliver@htl.at",
        }
    ];

searchUsers(searchTerm: string): IUser[] {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return this.users.filter((user) =>
    user.name.toLowerCase().includes(lowerCaseSearchTerm)
  );
}
    userCount : number = 2;

    getAllUsers() : IUser[] {
        return this.users;
    }

    getUserById(id : number) : IUser | undefined {
        return this.users.find(u => u.id == id)
    }

    addUser(user : IUser) : void {
        this.userCount++;
        user.id = this.userCount;
        this.users.push(user);
    }

    deleteUser(id : number) : boolean {
        let user = this.users.find(u => u.id == id);
        if(user !== undefined){
            this.users.forEach( (item, index) => {
                if(item === user) this.users.splice(index,1);
                });
            return true;
        }

        return false;
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
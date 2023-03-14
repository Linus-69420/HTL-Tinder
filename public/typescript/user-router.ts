import express, { response } from "express";
import { IUser } from "./user";
import { getAllUsers, getUserById, addUser, deleteUser, updateUser, getUserByNameAndPw } from "./user-service";
const userRouter = express.Router();


userRouter
.get("/", (request, response) => {
    return response.send(JSON.stringify(getAllUsers()));
})
.get("/:id", (request, response) => {
    const user = getUserById(Number(request.params.id));
    if (user === undefined) {
        return response.status(404);
    }
    return response.send(JSON.stringify(user));
})
.get('/:name/:password', (request, response) => {
    const name : string = request.params.name;
    const password : string = request.params.password;
    
    const user : IUser | undefined = getUserByNameAndPw(name, password);

    if(user !== undefined){
        return response.send(JSON.stringify(user));
    }
    return response.status(404);
})
.post("/", (request, response) => {
    const name : string = request.body.name;
    const password : string = request.body.password;
    const age : number = Number(request.body.age);
    const gender : string = request.body.gender;
    const description : string = request.body.description;
    const email : string = request.body.email;
    const imgPath = request.body.imgPath;

    return response.send(JSON.stringify(addUser(name, password, age, gender, email, description, imgPath))).status(200);
})
.put("/:id", (request, response) => {
    const id: number = Number(request.params.id);
      
    const name : string = request.body.name;
    const password : string = request.body.password;
    const age : number = Number(request.body.age);
    const gender : string = request.body.gender;
    const description : string = request.body.description;
    const email : string = request.body.email;
    let user : IUser | undefined  = updateUser(id, name, password, age, gender, email, description);

    if(user !== undefined){
        return response.send(JSON.stringify(user)).status(200);
    }
    
    return response.status(404);
})
.delete("/:id", (request, response) => {
    const user = getUserById(Number(request.params.id));
        if (user !== undefined) {
            deleteUser(user);
            return response.status(200);
        }
        return response.status(404);
});

module.exports = userRouter;
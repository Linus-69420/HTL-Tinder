import express, { response } from "express";
import { getAllUsers, getUserById, addUser, deleteUser } from "./user-repository";
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
.post("/", (request, response) => {
    const name : string = request.body.name;
    const age : number = Number(request.body.age);
    const gender : string = request.body.gender;
    const description : string = request.body.gender;
    const email : string = request.body.email;

    return response.send(JSON.stringify(addUser(name, age, gender, email, description))).status(200);
})
.put("/:id", (request, response) => {
    const id: number = Number(request.params.id);
        let user = getUserById(id);

        if (user !== undefined) {
            const name : string = request.body.name;
            const age : number = Number(request.body.age);
            const gender : string = request.body.gender;
            const description : string = request.body.gender;
            const email : string = request.body.email;

            user.name = name;
            user.age = age;
            user.gender = gender;
            user.description = description;
            user.email = email;

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
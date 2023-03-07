import express, { response } from "express";
import { join } from "path";
import { IUser } from "./user";
import { UserSevice } from "./userService";

const app = express();
let userService = new UserSevice();

app.get("/", (request, response) => {
    const file: string = join(__dirname, "/public/html/index.html");
    response.sendFile(file);
});

app.get("/all", (request, response) => {
    let users = userService.getAllUsers();
    if(users !== null){
        return response.send(JSON.stringify(JSON.stringify(users)));
    }
    return response.send("No users found");
});

app.get("/id:id", (request, response) => {
    let user = userService.getUserById(Number(request.params.id));

    if(user !== undefined){
        return response.send(JSON.stringify(user));
    }

    return response.send("No user with id"+ request.params.id);
});

app.post("/new", (request, response) => {
    console.log("jex");
    userService.addUser(JSON.parse(request.body));
});

app.put("/update:user", (request, response) => {
    userService.updateUser(JSON.parse(request.params.user));
});

app.get("/delete:id", (request, response) => {
    if(userService.deleteUser(1/*Number(request.params.id)*/)){
        return response.send("User mit der id: " + request.params.id + " gelöscht");
    }
    return response.send("User mit der id: " + request.params.id + " existiert nicht");
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

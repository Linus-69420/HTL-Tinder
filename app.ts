import express, { response } from "express";
import { join } from "path";
import { UserSevice } from "./userService";

const app = express();
let userService = new UserSevice();

app.get("/", (request, response) => {
    const file: string = join(__dirname, "/public/index.html");
    response.sendFile(file);
});

app.get("/all", (request, response) => {
    let users = userService.getAllUsers();
    if(users !== null){
        return response.send(JSON.stringify(JSON.stringify(users)));
    }
    return response.send("No users found");
});

app.get("/:id", (request, response) => {
    return response.send(JSON.stringify(userService.getUserById(Number(request.params.id))));
});

app.post("/new:user", (request, response) => {
    userService.addUser(JSON.parse(request.params.user));
});

app.put("/update:user", (request, response) => {
    userService.updateUser(JSON.parse(request.params.user));
});

app.delete("/delete:id", (request, response) => {
    userService.deleteUser(Number(request.params.id));
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
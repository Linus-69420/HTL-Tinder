import express, { response } from "express";
import { join } from "path";
import { UserSevice } from "./userService";

const app = express();
let userService = new UserSevice();

app.get("/", (request, response) => {
    const file: string = join(__dirname, "/public/html/index.html");
    response.sendFile(file);
});

app.get("/:id", (request, response) => {
    return JSON.stringify(userService.getUserById(Number(request.params.id)));
});

app.get("/all", (request, response) => {
    return JSON.stringify(userService.getAllUsers());
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
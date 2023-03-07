import express, { response } from "express";
import { join } from "path";
import { IUser } from "./user";
import { UserSevice } from "./userService";
import cors from "cors";
var bodyParser = require('body-parser')

let userService = new UserSevice();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.get("/", (request, response) => {
    const file: string = join(__dirname, "/../html/index.html");
    response.sendFile(file);
});

app.get("/all", (request, response) => {
    let users = userService.getAllUsers();
    if(users !== null){
        return response.send(JSON.stringify(users));
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
    console.log(request);
    console.log(response);
    console.log(request.body);
    if(request.body.id !== undefined){
        return response.send("Fehler beim Einfügen");
    }
    console.log("e")
    userService.addUser(request.body);
    return response.send("Erfolgreich eingefügt");
});

app.put("/update", (request, response) => {
    if(request.body.id === undefined){
        return response.send("Fehler beim updaten");
    }
    userService.updateUser(request.body);
    return response.send("Erfolgreich geupdated");
});

app.delete("/delete:id", (request, response) => {
    if(userService.deleteUser(Number(request.params.id))){
        return response.send("User mit der id: " + request.params.id + " gelöscht");
    }
    return response.send("User mit der id: " + request.params.id + " existiert nicht");
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});



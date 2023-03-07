"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var userService_1 = require("./userService");
var cors_1 = require("cors");
var bodyParser = require('body-parser');
var userService = new userService_1.UserSevice();
var app = (0, express_1["default"])();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((0, cors_1["default"])());
app.get("/", function (request, response) {
    var file = (0, path_1.join)(__dirname, "/../html/index.html");
    response.sendFile(file);
});
app.get("/all", function (request, response) {
    var users = userService.getAllUsers();
    if (users !== null) {
        return response.send(JSON.stringify(users));
    }
    return response.send("No users found");
});
app.get("/id:id", function (request, response) {
    var user = userService.getUserById(Number(request.params.id));
    if (user !== undefined) {
        return response.send(JSON.stringify(user));
    }
    return response.send("No user with id" + request.params.id);
});
app.post("/new", function (request, response) {
    console.log(request);
    console.log(response);
    console.log(request.body);
    if (request.body.id !== undefined) {
        return response.send("Fehler beim Einfügen");
    }
    console.log("e");
    userService.addUser(request.body);
    return response.send("Erfolgreich eingefügt");
});
app.put("/update", function (request, response) {
    if (request.body.id === undefined) {
        return response.send("Fehler beim updaten");
    }
    userService.updateUser(request.body);
    return response.send("Erfolgreich geupdated");
});
app["delete"]("/delete:id", function (request, response) {
    if (userService.deleteUser(Number(request.params.id))) {
        return response.send("User mit der id: " + request.params.id + " gelöscht");
    }
    return response.send("User mit der id: " + request.params.id + " existiert nicht");
});
app.listen(3000, function () {
    console.log("Server listening on port 3000");
});

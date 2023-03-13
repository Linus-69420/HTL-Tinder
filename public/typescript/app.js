"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var bodyParser = require('body-parser');
var userRouter = require("./user-router");
var app = (0, express_1["default"])();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((0, cors_1["default"])());
app.use("/htl/dating", userRouter);
app.listen(3000, function () {
    console.log("Server listening on port 3000");
});

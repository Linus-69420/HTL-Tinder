import express, { response } from "express";
import { join } from "path";
import { IUser } from "./user";
import cors from "cors";
var bodyParser = require('body-parser');
const userRouter = require("./user-router");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use("/htl/dating", userRouter);


app.listen(3000, () => {
    console.log("Server listening on port 3000");
});



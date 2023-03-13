import { IUser } from "./user";
import { readFile, writeFile } from "fs/promises";
import { readFileSync } from "fs";

const path : string = "../json/users.json";

export async function write(users : IUser[]){
    await writeFile(path, JSON.stringify(users));
}

export function read () : IUser[] {
    const data : string = readFileSync(path, "utf-8");
    let users : IUser[] = JSON.parse(data);  
    return users;
}
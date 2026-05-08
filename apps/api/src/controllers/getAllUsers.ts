import User from "../models/user";
import { Request,Response } from "express";


async function handleGetAllUsers(req:Request, res:Response) {
    const allUsers = await User.find({});
    const html = `<ul> ${allUsers.map(
        (user) => `<li> ${user.name} </li>`
    ).join("")}</ul>`;
    return res.send(html);
}

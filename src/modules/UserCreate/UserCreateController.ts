import { Request, Response } from "express";
import { UserCreateService } from "./UserCreateService";
import bcrypt from "bcrypt"

export async function userCreate(req: Request, res: Response) {
    const userService = new UserCreateService();
    const { username, email, password } = req.body;

    const user = await userService.execute({username, email, password: bcrypt.hashSync(password, 8)})

    return res.json(user)
}
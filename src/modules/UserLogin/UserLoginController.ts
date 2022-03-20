import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { prisma } from '../../database/client';

import "dotenv/config"

export async function loginUser(req: Request, res: Response) {
    
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({where: {username}})

    if(!user) 
    return res
    .status(401)
    .json({error: "Username or password are incorrects", auth: false})

    const userPassMatch = bcrypt.compareSync(password, user.password);
    
    if(!userPassMatch) 
    return res
    .status(401)
    .json({err: "Username or password are incorrect", auth: false});

    const token = jwt.sign(user.username, process.env.TOKEN_KEY);

    res.header("auth-token", token);
    res.status(200).json({token: token, auth: true})

}
import { Router } from "express";

import { userCreate } from "../modules/UserCreate/UserCreateController";
import { loginUser } from "../modules/UserLogin/UserLoginController";

const routes = Router();

routes.post("/users", (req, res) => {
    return userCreate(req, res);
})

routes.post("/login", (req, res) => {
    return loginUser(req, res);
})

export { routes }
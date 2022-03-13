import { Router } from "express";

import { userCreate } from "../modules/UserCreate/UserCreateController";

const routes = Router();

routes.post("/users", (req, res) => {
    return userCreate(req, res);
})

export { routes }
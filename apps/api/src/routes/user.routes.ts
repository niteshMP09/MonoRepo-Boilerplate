import { Router } from "express";
import { listUsers } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", listUsers);

export { userRouter };

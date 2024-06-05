import express from "express";
import { edit, deleted, logout, see } from "../controlas/userControla";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/delete", deleted);
userRouter.get("/logout", logout);
userRouter.get("/:id", see);

export default userRouter;

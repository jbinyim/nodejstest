import express from "express";
import { join, login } from "../controlas/userControla";
import { trending, search } from "../controlas/videoControla";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;

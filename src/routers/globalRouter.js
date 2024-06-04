import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res, next) => {
  return res.send("I love middle");
};

const handleJoin = (req, res, next) => {
  return res.send("Here is join");
};

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;

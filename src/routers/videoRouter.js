import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res, next) => {
  return res.send("Watch Video");
};

const handleEdit = (req, res, next) => {
  return res.send("Edit video");
};

videoRouter.get("/watch", handleWatchVideo);
videoRouter.get("/edit", handleEdit);

export default videoRouter;

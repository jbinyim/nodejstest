import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  deleteVideo,
  upload,
} from "../controlas/videoControla";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;

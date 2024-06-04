import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res, next) => {
  return res.send("Edit User");
};

const handleDelete = (req, res, next) => {
  return res.send("Delte User");
};

userRouter.get("/edit", handleEditUser);
userRouter.get("/delete", handleDelete);

export default userRouter;

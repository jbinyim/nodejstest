import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();

const morganMiddleWare = morgan("dev");
app.use(morganMiddleWare);

app.use("/", globalRouter);

app.use("/user", userRouter);

app.use("/video", videoRouter);

const handleListening = () => {
  console.log(`serverListening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);

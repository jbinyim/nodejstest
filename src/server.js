import "./db";
import "./models/video";
import app from "./index";

const PORT = 4000;

const handleListening = () => {
  console.log(`serverListening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);

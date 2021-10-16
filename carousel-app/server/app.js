import express from "express";
import  dotenv from "dotenv";
import path from 'path';
import images from "./routes/images.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const __dirname = process.env.PWD;

app.use("/images", images);
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

//Serve react index.html file
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

//Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).send({error: "Server error!!"});
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
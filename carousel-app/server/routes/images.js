import express from "express";
import * as fsp from "fs/promises";

const router = express.Router();
const __dirname = process.env.PWD;
const file = `${__dirname}/public/data/data.json`;

router.use(express.static("public"));
router.use(express.json());


async function readData(file){
  try {
    console.log("reading file...");
    const fileData = await fsp.readFile(file, "utf-8");
    return fileData;
  }
  catch (err) {
    console.error(err);
  }
}

const imageData = await readData(file);
const data = JSON.parse(imageData);

router.get('/all', (req, res) => {
  return res.status(200).json(data);
});

router.get('/cats', (req, res) => {
  return res.status(200).json(data.catsList);
});

router.get('/sharks', (req, res) => {
  return res.status(200).send(data.sharksList);
});

export default router;
import { React } from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import "./Stage.css";

const getAllImages = async() => {
  try{
    const allImages = await axios.get('https://localhost:3001/images/all');
    return await allImages;
  }
  catch (error) {
    console.log("Error retrieving all files");
  }
};
// const catImages = axios.get('/images/cats');
// const sharkImages = axios.get('/images/cats');
const allData = getAllImages();

console.log(allData);

// useEffect(() => {
//   getAllImages()
// }, [])

const Stage = (props) => (
  <div className="stage">
    <img src="" alt="" />
  </div>
);

export default Stage;
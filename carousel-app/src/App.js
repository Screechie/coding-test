import React from "react";
import { useState, useEffect } from "react";
import { getAllImages, getCatImages, getSharkImages } from "./api";
import "./styles.css";
import Button from "./components/Button/Button";
import Stage from "./components/Stage/Stage";
import LeftArrow from "./components/Arrow/LeftArrow";
import RightArrow from "./components/Arrow/RightArrow";

function App() {

  const [btnState, setBtnstate] = useState([false, false]);
  const [dataState, setDatastate] = useState([]);
  const [curImgIndex, setCurImgIndex] = useState(0);

  useEffect(() => {
    getData();
    async function getData() {
      const [sharks, cats ] = btnState;
  
      if(!sharks && !cats) {
        setDatastate([]);
        return;
      }
  
      if(sharks && cats){
        const {catsList, sharksList} = await getAllImages();
        //check to make sure arrays exist
        let data = [...catsList,...sharksList];
        setDatastate(data);
        return;
      }
      
      if(sharks){
        const data = await getSharkImages();
        setDatastate(data);
        return;
      }
  
      if(cats) {
        const data = await getCatImages();
        setDatastate(data);
        return;
      }
    }

    // return () => {
    //   cleanu
    // }
  }, [btnState]);

  const handleButtonClick = (title) => {
    switch (title) {
      case "Sharks":
        setBtnstate([!btnState[0],btnState[1]]);
        break;
      case "Cats":
        setBtnstate([btnState[0],!btnState[1]]);
        break;
      default:
        return;
    }
  };

  const decrementImageIndex = () => {
    if(curImgIndex - 1 < 0) {
      return;
    }
    setCurImgIndex(curImgIndex - 1);
  };

  const incrementImageIndex = () => {
    if(curImgIndex + 1 > dataState.length) {
      return;
    }
    setCurImgIndex(curImgIndex + 1);
  };

  console.log(dataState);
  return(
    <div className="container">
      <div className="btn-container">
        <Button isSelected = { btnState[0]} buttonHandler={handleButtonClick} title="Sharks" />
        <Button isSelected = { btnState[1]} buttonHandler={handleButtonClick} title="Cats" />
      </div>
      <div className="stage-container">
        { curImgIndex > 0 && <LeftArrow clickHandler={decrementImageIndex}/> }
        <Stage img={dataState[curImgIndex]}/>
        { curImgIndex < dataState.length -1 && <RightArrow clickHandler={incrementImageIndex}/> }
      </div>
    </div>
    );
}

export default App;
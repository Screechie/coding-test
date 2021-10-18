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
  const [isLoading, setIsLoading] = useState(false);

  const randomizeArray = (arr) => {
    return arr.sort((a,b) =>  0.5 - Math.random());
  }

  useEffect(() => {
    getData();
    async function getData() {
      const [sharks, cats ] = btnState;
  
      if(!sharks && !cats) {
        setDatastate([]);
        return;
      }
      setIsLoading(true);

      if(sharks && cats){
        const data = await getAllImages();
        const catsList = data.data.catsList;
        const sharksList = data.data.sharksList;
        //Add check to make sure arrays exist
        const allData = [...catsList,...sharksList];
        randomizeArray(allData);
        setDatastate(allData);
        setTimeout(() => setIsLoading(false), 500);
        return;
      }
      
      if(sharks){
        const sharkData = await getSharkImages();
        setDatastate(sharkData.data);
        setTimeout(() => setIsLoading(false), 500);
        return;
      }
  
      if(cats) {
        const catData = await getCatImages();
        setDatastate(catData.data);
        setTimeout(() => setIsLoading(false), 500);
        return;
      }
    }
  }, [btnState]);

  const Loading = () => (
    <div className="loading-container">
      <h1 className="loading">Loading images...</h1>
    </div>
  );

  const InitMessage = () => (
    <div className="init-message-container">
      <h1 className="init-message">No images to Show. Please select a category from above to begin.</h1>
    </div>
  );

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

  return(
    <div className="container">
      <div className="btn-container">
        <Button isSelected = { btnState[0]} buttonHandler={handleButtonClick} title="Sharks" />
        <Button isSelected = { btnState[1]} buttonHandler={handleButtonClick} title="Cats" />
      </div>
      <div className="stage-container">
        { 
          isLoading ? 
          <Loading/> : 
          <>
            { curImgIndex > 0 && <LeftArrow clickHandler={decrementImageIndex}/> }
            {dataState.length === 0 ? <InitMessage/> : <Stage img={dataState[curImgIndex]}/>}
            { curImgIndex < dataState.length -1 && <RightArrow clickHandler={incrementImageIndex}/> }
          </>
        } 
      </div>
    </div>
    );
}

export default App;
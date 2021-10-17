import React from "react";
import "./styles.css";
import Button from "./components/Button/Button";
import Stage from "./components/Stage/Stage";
import LeftArrow from "./components/Arrow/LeftArrow";
import RightArrow from "./components/Arrow/RightArrow";

function App() {
  return(
    <div className="container">
      <div className="btn-container">
        <Button title="Sharks"/>
        <Button title="Cats"/>
      </div>
      <div className="stage-container">
        <LeftArrow/>
        <Stage/>
        <RightArrow/>
      </div>
    </div>
    );
}

export default App;
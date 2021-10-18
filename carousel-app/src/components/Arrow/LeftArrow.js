import React from "react";
import "./Arrow.css";


const LeftArrow = (props) => (
<div className="arrow-container">
  <i className="left" onClick={props.clickHandler}></i>
</div>
);

export default LeftArrow;
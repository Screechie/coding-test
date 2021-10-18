import React from "react";
import "./Arrow.css";

const RightArrow = (props) => (
<div className="arrow-container">
  <i className="right" onClick={props.clickHandler}></i>
</div>
);

export default RightArrow;
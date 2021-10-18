import React from "react";
import './Image.css';

const Image = (props) => (
  <img className="image" src={props.imgSrc} alt="" />
);

export default Image;
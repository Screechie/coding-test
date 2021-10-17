import React from "react";
import Image from "../Image/Image";
import "./Stage.css";

const Stage = (props) => (
  <div className="stage">
   <Image imgSrc={props.img} />
  </div>
);

export default Stage;
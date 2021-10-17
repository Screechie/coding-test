import React from "react";
import "./Button.css";


const Button = (props) => {
    let _className = "button"
    _className = props.isSelected ? _className + " selected" : _className;
    const photoHandler = () => (props.buttonHandler(props.title));
    return <button className={_className} onClick={photoHandler}>{props.title}</button>
}

export default Button;
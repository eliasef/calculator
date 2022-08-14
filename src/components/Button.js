import React from "react";
import "./Button.css";

function Button(props) {
    
  let classes = "button ";
  classes += props.operation ? "operation" : "";
  classes += props.double ? "double" : "";
  classes += props.triple ? "triple" : "";

  return (
    <button
      // onClick={(event) => {
      //   return props.click && props.click(event.target.innerHTML)
      // }}
      onClick={(event) => {
        return props.click && props.click(event.target.innerHTML)
      }}
      className={classes}
    >
      {props.label}
    </button>
  );
}

export default Button;

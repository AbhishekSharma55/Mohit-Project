import React from "react";
import "./Button.css";

const Button = ({ text, href }) => {
  return (
    <button
      className="custom-button"
      onClick={() => {
        window.open(href);
        console.log("Button clicked")
      }}
    >
      <span className="custom-span">{text}</span>
    </button>
  );
};

export default Button;

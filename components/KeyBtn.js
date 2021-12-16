import React from "react";
import { useState, useRef, useEffect } from "react";

const KeyBtn = ({ keyValue, color, text, addText, textAdded}) => {
  const keyRef = useRef();

  function keyPress(x) {
    //blue
    if (x === "rgb(0, 102, 255)") {
      keyRef.current.style.backgroundColor = "rgb(0, 55, 138)";
    }
    //red
    if (x === "rgb(179, 0, 0)") {
      keyRef.current.style.backgroundColor = "rgb(125, 0, 0)";
    }
  }

  function keyLift(x) {
    //blue
    if (x === "rgb(0, 102, 255)") {
      keyRef.current.style.backgroundColor = "rgb(0, 102, 255)";
    }
    //red
    if (x === "rgb(179, 0, 0)") {
      keyRef.current.style.backgroundColor = "rgb(179, 0, 0)";
    }
  }

  //reverts key to og color if mouse leaves key without keylift
  function mouseOut(x) {
    //blue
    if (x === "rgb(0, 102, 255)") {
      keyRef.current.style.backgroundColor = "rgb(0, 102, 255)";
    }
    //red
    if (x === "rgb(179, 0, 0)") {
      keyRef.current.style.backgroundColor = "rgb(179, 0, 0)";
    }
  }

  return (
    <div
      style={{ userSelect: "none", backgroundColor: color, height: "100%" }}
      onMouseDown={() => {
        keyPress(color)
        addText(textAdded += keyValue)
        text.current.innerText = textAdded
      }}
      onMouseUp={() => {
        keyLift(color);
      }}
      onMouseOut={() => {
        mouseOut(color);
      }}
      ref={keyRef}
    >
      {keyValue}
    </div>
  );
};

export default KeyBtn;

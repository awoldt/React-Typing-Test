import React from "react";
import { useState, useRef} from "react";

const KeyBtn = ({ keyValue, color }) => {

  const keyRef = useRef();


  function keyPress(x) {
    //blue
    if (x === "rgb(0, 102, 255)") {
      keyRef.current.style.backgroundColor = 'rgb(0, 55, 138)'
    }
    //red
    if (x === "rgb(179, 0, 0)") {
      keyRef.current.style.backgroundColor = 'rgb(125, 0, 0)'
    }
  }

  function keyLift(x) {
    //blue
    if (x === "rgb(0, 102, 255)") {
      keyRef.current.style.backgroundColor = 'rgb(0, 102, 255)'
    }
    //red
    if (x === "rgb(179, 0, 0)") {
      keyRef.current.style.backgroundColor = 'rgb(179, 0, 0)'
    }
  }

  return (
    <div
      style={{ userSelect: "none", backgroundColor: color, height: "100%" }}
      onMouseDown={() => {keyPress(color)}}
      onMouseUp={() => {keyLift(color)}}
      ref={keyRef}
    >
      {keyValue}
    </div>
  );
};

export default KeyBtn;

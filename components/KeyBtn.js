import React from "react";
import { useState } from "react";

const KeyBtn = ({ keyValue, keyColor }) => {
  const [bgColor, setBgColor] = useState(keyColor);

  return (
    <div
      style={{ userSelect: "none", backgroundColor: bgColor, height: "100%" }}
      onMouseDown={() => {
        setBgColor("rgb(0, 72, 179)");
      }}
      onMouseUp={() => {
        setBgColor("rgb(0, 102, 255");
      }}
    >
      {keyValue}
    </div>
  );
};

export default KeyBtn;

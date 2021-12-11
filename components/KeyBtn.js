import React from "react";
import { useState } from "react";

const KeyBtn = ({ keyValue, color }) => {
 

  return (
    <div
      style={{ userSelect: "none", backgroundColor: color, height: "100%"}}
      
    >
      {keyValue}
    </div>
  );
};

export default KeyBtn;

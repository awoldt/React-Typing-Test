import React from "react";

const ScoreBoard = ({ scoreData }) => {
  return (
    <div style={{marginTop: '15px'}}>
      <span>Correct: {scoreData[0]}</span>
      <span style={{ marginLeft: "50px" }}>Wrong: {scoreData[1]}</span>
    </div>
  );
};

export default ScoreBoard;

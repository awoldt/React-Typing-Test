import React from "react";

const ScoreBoard = ({ scoreData, spellings, wordsArray }) => {
  return (
    <div style={{ marginTop: "15px" }}>
      <span>Correct: {scoreData[0]}</span>
      <br></br>
      {spellings.map((x, index) => {
        if (x == 1) {
          return (
            <>
              <span>{wordsArray[index]}</span>
              <br></br>
            </>
          );
        }
      })}

      <span style={{ marginLeft: "50px" }}>Wrong: {scoreData[1]}</span>
      <br></br>
      {spellings.map((x, index) => {
        if (x == 0) {
          return (
            <>
              <span>{wordsArray[index]}</span>
              <br></br>
            </>
          );
        }
      })}
    </div>
  );
};

export default ScoreBoard;

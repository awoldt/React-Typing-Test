import React from "react";
import { Button } from "react-bootstrap";

const FinalScore = ({ finalScores }) => {


console.log("correct: " + finalScores[0])
console.log("incorrect " + finalScores[1]);
console.log(finalScores[0]/(finalScores[0]+finalScores[1]))

  return (
    <div>
      <Button variant="danger" onClick={() => {window.location.reload()}}>Restart</Button>
      <p>
        Congrats, you scored a{" "}
        {((finalScores[0] / (finalScores[0] + finalScores[1])) * 100).toFixed(0)}%
      </p>
    </div>
  );
};

export default FinalScore;

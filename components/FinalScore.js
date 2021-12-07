import React from "react";
import { Button } from "react-bootstrap";
import ScoreBoard from "../components/ScoreBoard";

const FinalScore = ({ finalScores, wordSpellings, words }) => {
  console.log("correct: " + finalScores[0]);
  console.log("incorrect " + finalScores[1]);
  console.log(finalScores[0] / (finalScores[0] + finalScores[1]));

  return (
    <div
      style={{ marginTop: "25px" }}
      className="text-center bg-warning"
      style={{ padding: "10px" }}
    >
      <Button
        variant="danger"
        onClick={() => {
          window.location.reload();
        }}
      >
        Restart
      </Button>
      <p>
        Out of the {finalScores[0] + finalScores[1]} words you typed, you got{" "}
        {((finalScores[0] / (finalScores[0] + finalScores[1])) * 100).toFixed(
          0
        )}
        % of them correct
      </p>
      <ScoreBoard
        scoreData={finalScores}
        wordSpellings={wordSpellings}
        words={words}
      />
    </div>
  );
};

export default FinalScore;

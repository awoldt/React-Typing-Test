import React from "react";
import { Button } from "react-bootstrap";
import ScoreBoard from "../components/ScoreBoard";

const FinalScore = ({ finalScores, wordSpellings, words }) => {
  console.log("correct: " + finalScores[0]);
  console.log("incorrect " + finalScores[1]);
  console.log(finalScores[0] / (finalScores[0] + finalScores[1]));

  return (
    <div
      style={{ marginTop: "25px", padding: "10px", backgroundColor: '#e6e6e6'}}
      className="text-center"
    >
      <Button
        variant="danger"
        onClick={() => {
          window.location.reload();
        }}
      >
        Restart
      </Button>
      <p style={{fontSize: '25px', marginTop: '25px'}}>
        Out of the {finalScores[0] + finalScores[1]} words you typed, you got{" "}
        {((finalScores[0] / (finalScores[0] + finalScores[1])) * 100).toFixed(
          0
        )}
        % of them correct
      </p>
      <ScoreBoard
        scoreData={finalScores}
        spellings={wordSpellings}
        wordsArray={words}
      />
    </div>
  );
};

export default FinalScore;

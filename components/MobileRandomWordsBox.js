import React from "react";
import { useState } from "react";
import { FormControl } from "react-bootstrap";

const MobileRandomWordsBox = ({ wordsData, wordsSpellings }) => {
  const [wordsArray, setWordsArray] = useState(wordsData);
  const [wordSpellingsArray, setWordSpellingsArray] = useState(wordsSpellings);
  const [currentWord, setCurrentWord] = useState(wordsData[0]); //the word being displayed to user
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0); //(["c":0, "a":1, "r":2])
  
  return (
    <div style={{ border: "1px solid yellow" }} className="text-center">
      <span style={{ fontSize: "30px" }}>{currentWord}</span>

      <FormControl
        placeholder="Type here to start test"
        style={{ marginTop: "25px" }}
      />
    </div>
  );
};

export default MobileRandomWordsBox;

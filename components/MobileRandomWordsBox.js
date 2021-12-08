import React from "react";
import { useState, useEffect, useRef } from "react";
import { FormControl } from "react-bootstrap";
import { Container } from "react-bootstrap";

const MobileRandomWordsBox = ({ wordsData, wordsSpellings }) => {
  const [wordsArray, setWordsArray] = useState(wordsData);
  const [wordSpellingsArray, setWordSpellingsArray] = useState(wordsSpellings);
  const [currentWord, setCurrentWord] = useState(wordsData[0]); 
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0); 

  const [currentTyped, setCurrentTyped] = useState("");

  const inuptRef = useRef();


  useEffect(() => {
    //compare user char with correct char
  }, [currentTyped]);

  return (
    <Container>
      <div className="text-center" style={{fontSize: '50px'}}>
        {wordsSpellings[currentWordIndex].map((x, index) => {
          //behind current word to spell
          if (index < currentCharIndex) {
            //correctly spelled recent char
            if (
              currentTyped[index] ===
              wordsSpellings[currentWordIndex][index]
            ) {
              return (
                <span key={index} style={{ color: "green" }}>
                  {x}
                </span>
              );
            }
            //spelled past char incorrectly
            else {
              return (
                <span key={index} style={{ color: "red" }}>
                  {x}
                </span>
              );
            }
          }
          //char currently spelling
          else if (index === currentCharIndex) {
            return (
              <span key={index} style={{ color: "yellow" }}>
                {x}
              </span>
            );
          }
          //chars infront of char currently spelling
          else if (index > currentCharIndex) {
            return (
              <span key={index} className="text-secondary">
                {x}
              </span>
            );
          }
        })}
      </div>

      <FormControl
        ref={inuptRef}
        placeholder="Type here to start test"
        style={{ marginTop: "25px", maxWidth: "450px" }}
        onKeyDown={(e) => {
          //SPACE
          if (e.key === " ") {
            inuptRef.current.value = "";
            setCurrentTyped("");
            setCurrentCharIndex(0);
            setCurrentWordIndex((currentWordIndex += 1));
          }
          //BACKSPACE
          else if (e.key === "Backspace") {
            //do nothing
          }
          //CHAR
          else {
            //only add chars to input if less than current length of word spelling
            if (
              currentTyped.length < wordSpellingsArray[currentWordIndex].length
            ) {
              setCurrentTyped((currentTyped += e.key));
              setCurrentCharIndex((currentCharIndex += 1));
            } else {
              e.preventDefault();
            }
          }
        }}
        onKeyUp={(e) => {
          if (e.key === "Backspace") {
            console.log("backspace1!!");
            if (currentCharIndex !== 0) {
              setCurrentCharIndex((currentCharIndex -= 1));
            }

            setCurrentTyped(currentTyped.substring(0, currentTyped.length - 1));
          }
        }}
      />
    </Container>
  );
};

export default MobileRandomWordsBox;

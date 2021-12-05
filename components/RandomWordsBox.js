import React from "react";
import { useState, useEffect, useRef } from "react";

const RandomWordsBox = ({ wordsData, wordsSpellings }) => {
  console.log("RENDERED RANDOMWORDSBOX");

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0); //(["c":0, "a":1, "r":2])
  const [currentWord, setCurrentWord] = useState(wordsData[currentWordIndex]); //which word user is on (["car":0, "cat":1, "can":2])
  const [currentWordLength, setCurrentWordLength] = useState(
    currentWord.length
  );
  const [currentSpelling, setCurrentSpelling] = useState(
    wordsSpellings[currentWordIndex]
  );
  const [currentTyped, setCurrentTyped] = useState(""); //what the user has currently typed (UPDATES ON USER INPUT WITH USEEFFECT)
  const [score, setScore] = useState([0, 0]);

  const inputRef = useRef();

  function checkSpelling(word, spelling, charIndex) {
    //CORRECT
    if (currentSpelling[charIndex - 1] === currentTyped[charIndex - 1]) {
      console.log("Correct spelling");
      console.log("word to spell: " + word);
      console.log(spelling);
      console.log("------");
      console.log(
        currentSpelling[charIndex - 1] + " to " + currentTyped[charIndex - 1]
      );
    }
    //WRONG
    else {
      console.log("Wrong spelling");
      console.log("word to spell: " + word);
      console.log(spelling);
      console.log("------");
      console.log(
        currentSpelling[charIndex - 1] + " to " + currentTyped[charIndex]
      );
    }
  }

  function tallyScore(word, spelling) {
    //CORRECT
    if (word === spelling.toLowerCase()) {
      console.log("POINT");
      console.log(word + " to " + spelling);
      var x = [...score];
      x[0] += 1;
      setScore(x);
    }
    //WRONG
    else {
      console.log("NO POINT");
      console.log(word + " to " + spelling);
      var x = [...score];
      x[1] += 1;
      setScore(x);
    }
  }

  function removeSpaces(word) {
    const x = word.split(" ");

    //remove space from word
    if (x.indexOf("") === 1) {
      return x[0];
    } else {
      return x[0];
    }
  }

  useEffect(() => {
    setCurrentWordLength(currentWord.length);
    //check spelling only if user has inputed something
    if (currentTyped !== "") {
      checkSpelling(currentWord, currentTyped, currentCharIndex);
      
    }
  }, [currentTyped]);

  return (
    <div style={{ border: "1px solid red", padding: "25px" }}>
      <span>
        Correct: {score[0]} Incorrect {score[1]}
      </span>
      <br></br>
      <br></br>
      {wordsData.map((x, index) => {

        if(currentWordIndex === index) {
return (
          <div
            style={{ display: "inline-block", marginRight: "10px", backgroundColor: 'yellow', padding: '10px', borderRadius: '10px'}}
            key={index}
          >
            <span>{x}</span>
          </div>
        );
        } else {
          return (
            <div
              style={{ display: "inline-block", marginRight: "10px", backgroundColor: 'white', padding: '10px', borderRadius: '10px'}}
              key={index}
            >
              <span>{x}</span>
            </div>
          );
        }


        
      })}
      <br></br>
      <br></br>
      <input
        type="text"
        onKeyDown={(e) => {
          //SPACE
          if (e.key === " ") {
            console.log("space");
            //if space after last word, end test
            if (wordsData.length === currentWordIndex + 1) {
              removeSpaces(currentTyped);
              tallyScore(currentWord, removeSpaces(currentTyped));
              alert("end of test");
              inputRef.current.value = "";
            } else {
              tallyScore(currentWord, removeSpaces(currentTyped)); //remove spaces if input is too fast and factors space in when comparing strings
              setCurrentWordIndex((currentWordIndex += 1));
              setCurrentWord(wordsData[currentWordIndex]);
              setCurrentSpelling(wordsSpellings[currentWordIndex]);
              setCurrentCharIndex(0);
              setCurrentTyped("");
              inputRef.current.value = "";
            }
          }
          //BACKSPACE
          else if (e.key === "Backspace") {
            //do nothing
          }
          //CHARACTER INPUT
          else {
            console.log("input key");
            //dont let user input anymore if lengtrh of currentTyped is length of currentWord
            if (removeSpaces(currentTyped).length === currentWordLength) {
              e.preventDefault();
            } else {
              setCurrentTyped((currentTyped += e.key));
              setCurrentCharIndex((currentCharIndex += 1));
            }
          }
        }}
        onKeyUp={(e) => {
          if (e.key === "Backspace") {
            console.log("backspace");
            if(currentCharIndex !== 0) {
              setCurrentCharIndex((currentCharIndex -= 1));
            }
            
            setCurrentTyped(currentTyped.substring(0, currentTyped.length - 1));
          }
        }}
        ref={inputRef}
      />
    </div>
  );
};

export default RandomWordsBox;

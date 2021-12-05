import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { FormControl } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import ScoreBoard from "./ScoreBoard";
import Timer from "../components/Timer";

const RandomWordsBox = ({ wordsData, wordsSpellings }) => {
  console.log("RENDERED RANDOMWORDSBOX");
  const [displayTimer, setDisplayTimer] = useState(false);
  const [testOver, setTestOver] = useState(false);
  const [wordsArray, setWordsArray] = useState(wordsData);
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

  //remove spaces if input is too fast and factors space in when comparing strings
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

    if (currentTyped !== "") {
      checkSpelling(currentWord, currentTyped, currentCharIndex); //check spelling only if user has inputed something
    }
  }, [currentTyped]); //runs on every char input user types and inital mount

  return (
    <Fade>
      <div style={{ border: "1px solid red", padding: "25px" }}>
        <ScoreBoard scoreData={score} />
        {displayTimer && <Timer showTimer={setDisplayTimer}/>}
        <br></br>
        <br></br>
        {wordsArray.map((x, index) => {
          //WORD CURRENTLY SPELLING, BLUE HOVER OVER COLOR
          if (currentWordIndex === index) {
            return (
              <div
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  backgroundColor: "rgb(51, 162, 255)",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "25px",
                }}
                key={index}
              >
                {wordsSpellings[currentWordIndex].map((y, index2) => {
                  if (index2 < currentCharIndex) {
                    console.log(
                      "current char: " +
                        wordsSpellings[currentWordIndex][index2]
                    );
                    console.log("current typed char: " + currentTyped[index2]);

                    //correct char
                    if (
                      wordsSpellings[currentWordIndex][index2] ===
                      currentTyped[index2]
                    ) {
                      return (
                        <span key={index2} style={{ color: "black" }}>
                          {y}
                        </span>
                      );
                    }
                    //wrong char
                    else {
                      return (
                        <span key={index2} style={{ color: "red" }}>
                          {currentTyped[index2]}
                        </span>
                      );
                    }
                  } else {
                    return (
                      <span key={index2} style={{ color: "white" }}>
                        {y}
                      </span>
                    );
                  }
                })}
              </div>
            );
          } else {
            //WORD BEHIND CURRENT WORD SPELLING
            if (index < currentWordIndex) {
              //past spelling was correct
              if (wordsArray[index] === wordsData[index]) {
                return (
                  <div
                    style={{
                      display: "inline-block",
                      marginRight: "10px",
                      backgroundColor: "white",
                      borderRadius: "10px",
                      fontSize: "25px",
                      backgroundColor: "rgb(97, 217, 124, .3)",
                      padding: "5px",
                    }}
                    key={index}
                  >
                    <span>{x}</span>
                  </div>
                );
                //past spelling was wrong
              } else {
                return (
                  <div
                    style={{
                      display: "inline-block",
                      marginRight: "10px",
                      backgroundColor: "white",
                      borderRadius: "10px",
                      fontSize: "25px",
                      color: "red",
                    }}
                    key={index}
                  >
                    <span>
                      {x !== "" && (
                        <>
                          <i>{x}</i>
                          <br></br>
                        </>
                      )}
                      <strike>
                        <i>{wordsData[index]}</i>{" "}
                      </strike>
                    </span>
                  </div>
                );
              }
              //WORD INFRONT OF CURRENT WORD SPELLING
            } else {
              return (
                <div
                  style={{
                    display: "inline-block",
                    marginRight: "10px",
                    backgroundColor: "white",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                  key={index}
                >
                  <span className="text-secondary">{x}</span>
                </div>
              );
            }
          }
        })}

        <br></br>
        <br></br>

        <FormControl
          placeholder="Start typing here"
          aria-label="input"
          style={{
            border: "1px solid black",
            maxWidth: "400px",
            borderRight: "0px",
            borderLeft: "0px",
            borderTop: "0px",
            borderRadius: "0px",
          }}
          onKeyDown={(e) => {
            setDisplayTimer(true); //shows timer after user starts test
            
            //SPACE
            if (e.key === " ") {
              console.log("space");
              //if space after last word, end test
              if (wordsData.length === currentWordIndex + 1) {
                if (testOver === false) {
                  tallyScore(currentWord, removeSpaces(currentTyped)); //tally score once more
                  setTestOver(true);
                }

                removeSpaces(currentTyped);
                alert("end of test");
                inputRef.current.value = "";
              } else {
                //need to update wordsData array to contain word how user spelled it after hitting space
                var x = [...wordsArray];
                x[currentWordIndex] = currentTyped;

                setWordsArray(x);

                tallyScore(currentWord, removeSpaces(currentTyped));
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
              if (currentCharIndex !== 0) {
                setCurrentCharIndex((currentCharIndex -= 1));
              }

              setCurrentTyped(
                currentTyped.substring(0, currentTyped.length - 1)
              );
            }
          }}
          ref={inputRef}
        />
      </div>
    </Fade>
  );
};

export default RandomWordsBox;

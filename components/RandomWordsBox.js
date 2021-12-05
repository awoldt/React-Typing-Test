import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { FormControl } from "react-bootstrap";
import ScoreBoard from "./ScoreBoard";
import Timer from "../components/Timer";
import RestartTest from "./FinalScore";

const RandomWordsBox = ({ wordsData, wordsSpellings }) => {
  console.log("RENDERED RANDOMWORDSBOX");
  const [displayTimer, setDisplayTimer] = useState(false);
  const [testOver, setTestOver] = useState(false);
  const [finishedTest, setFinishedTest] = useState(false);

  const [wordsArray, setWordsArray] = useState(wordsData);
  const [wordSpellingsArray, setWordSpellingsArray] = useState(wordsSpellings);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0); //(["c":0, "a":1, "r":2])
  const [currentWord, setCurrentWord] = useState(wordsData[currentWordIndex]); //which word user is on (["car":0, "cat":1, "can":2])
  const [currentWordLength, setCurrentWordLength] = useState(
    currentWord.length
  );
  const [currentSpelling, setCurrentSpelling] = useState(
    wordSpellingsArray[currentWordIndex]
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
    <div style={{ border: "1px solid red", padding: "25px" }}>
      <ScoreBoard scoreData={score} />

      {finishedTest && <RestartTest finalScores={score} />}
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
              {wordSpellingsArray[currentWordIndex].map((y, index2) => {
                if (index2 < currentCharIndex) {
                  console.log(
                    "current char: " +
                      wordSpellingsArray[currentWordIndex][index2]
                  );
                  console.log("current typed char: " + currentTyped[index2]);

                  //correct char
                  if (
                    wordSpellingsArray[currentWordIndex][index2] ===
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
          //wont allow you to type after test is finished
          if (finishedTest === true) {
            e.preventDefault();
          } else {
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
                setDisplayTimer(false);
                setFinishedTest(true)
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
                setCurrentSpelling(wordSpellingsArray[currentWordIndex]);
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
          }
        }}
        onKeyUp={(e) => {
          if (e.key === "Backspace") {
            console.log("backspace");
            if (currentCharIndex !== 0) {
              setCurrentCharIndex((currentCharIndex -= 1));
            }

            setCurrentTyped(currentTyped.substring(0, currentTyped.length - 1));
          }
        }}
        ref={inputRef}
      />
      {displayTimer && finishedTest === false && (
        <Timer showTimer={setDisplayTimer} finished={setFinishedTest} />
      )}
      {displayTimer === false && (
        <>
          <br></br>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-stopwatch"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
              <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
            </svg>{" "}
            60
          </span>
        </>
      )}
    </div>
  );
};

export default RandomWordsBox;

import React from "react";
import { useState, useRef } from "react";
import { FormControl, Row, Col } from "react-bootstrap";
import { Container, Button } from "react-bootstrap";
import Timer from "./Timer";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

import CustomNav from "./CustomNav";

const MobileRandomWordsBox = ({ wordsData, wordsSpellings }) => {
  const [wordsArray, setWordsArray] = useState(wordsData);
  const [wordSpellingsArray, setWordSpellingsArray] = useState(wordsSpellings);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const [charsTyped, setCharsTyped] = useState(0);

  const [currentTyped, setCurrentTyped] = useState("");

  const [testOver, setTestOver] = useState(false);
  const [score, setScore] = useState([]); //array containing 0s and 1s for each word spelled
  const [correct, setCorrect] = useState(0); //tally of all correctly spelled words
  const [incorrect, setIncorrect] = useState(0); //tally of all incorrecly spelled words
  const [displayTimer, setDisplayTimer] = useState(false);

  const inuptRef = useRef();

  return (
    <>
      <CustomNav />
      <Container>
        <div className="text-center">
          {testOver === false &&
            wordsSpellings[currentWordIndex].map((x, index) => {
              //behind current word to spell
              if (index < currentCharIndex) {
                //correctly spelled recent char
                if (
                  currentTyped[index].toLowerCase() ===
                  wordsSpellings[currentWordIndex][index]
                ) {
                  return (
                    <span
                      key={index}
                      style={{ color: "green", fontSize: "50px" }}
                    >
                      {x}
                    </span>
                  );
                }
                //spelled past char incorrectly
                else {
                  return (
                    <span
                      key={index}
                      style={{ color: "red", fontSize: "50px" }}
                    >
                      {x}
                    </span>
                  );
                }
              }
              //char currently spelling
              else if (index === currentCharIndex) {
                return (
                  <span
                    key={index}
                    style={{
                      color: "grey",
                      textDecoration: "underline",
                      fontSize: "50px",
                    }}
                  >
                    {x}
                  </span>
                );
              }
              //chars infront of char currently spelling
              else if (index > currentCharIndex) {
                return (
                  <span key={index} style={{ fontSize: "50px" }}>
                    {x}
                  </span>
                );
              }
            })}

          {testOver && (
            <Row>
              <span style={{ fontSize: "20px", marginTop: "25px" }}>
                Out of the {score.length} words you typed, you got{" "}
                {(correct / score.length).toFixed(2) * 100}% correct
              </span>
              <code style={{ marginBottom: "20px" }}>
                Your WPM score is {charsTyped / 5}
              </code>

              <Button
                variant="danger"
                style={{ marginBottom: "25px" }}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Restart
              </Button>

              <Col>
                <span
                  style={{
                    fontSize: "20px",
                    textDecoration: "underline",
                    color: "green",
                  }}
                >
                  Correct
                </span>
                <br></br>
                {score.map((x, index) => {
                  if (x === 1) {
                    return (
                      <>
                        <span style={{ fontSize: "18px" }}>
                          {wordsArray[index]}
                        </span>
                        <br></br>
                      </>
                    );
                  }
                })}
              </Col>
              <Col>
                <span
                  style={{
                    fontSize: "20px",
                    textDecoration: "underline",
                    color: "red",
                  }}
                >
                  Incorrect
                </span>
                <br></br>
                {score.map((x, index) => {
                  if (x === 0) {
                    return (
                      <>
                        <span style={{ fontSize: "18px" }}>
                          {wordsArray[index]}
                        </span>
                        <br></br>
                      </>
                    );
                  }
                })}
              </Col>
            </Row>
          )}
        </div>

        <Row className="justify-content-center text-center">
          <FormControl
            className="text-center"
            ref={inuptRef}
            placeholder="Type here to start test"
            style={{ marginTop: "25px", maxWidth: "450px" }}
            onKeyDown={(e) => {
              //starts test after first char type
              if (displayTimer === false) {
                setDisplayTimer(true);
              }

              //SPACE
              if (e.key === " ") {
                inuptRef.current.value = "";
                //tally score
                if (
                  currentTyped.toLowerCase() == wordsArray[currentWordIndex]
                ) {
                  var x = [...score];
                  x.push(1);
                  setScore(x);
                  setCorrect((correct += 1));
                } else {
                  var x = [...score];
                  x.push(0);
                  setScore(x);
                  setIncorrect((incorrect += 1));
                }
                setCurrentTyped("");
                setCurrentCharIndex(0);
                //end of test
                if (currentWordIndex === 99) {
                  inuptRef.current.remove();
                  setTestOver(true);
                } else {
                  setCurrentWordIndex((currentWordIndex += 1));
                }
              }
              //BACKSPACE
              else if (e.key === "Backspace") {
                //do nothing
              }
              //CAPS LOCK
              else if (e.key === "CapsLock") {
                e.preventDefault();
              }
              //SHIFT
              else if (e.key === "Shift") {
                e.preventDefault();
              }
              //TAB
              else if (e.key === "Tab") {
                e.preventDefault();
              }
              //CONTROL
              else if (e.key === "Control") {
                e.preventDefault();
              }
              //ENTER
              else if (e.key === "Enter") {
                e.preventDefault();
              }
              //ALT
              else if (e.key === "Alt") {
                e.preventDefault();
              }
              //CHARACTER INPUT (IMPORTANT)
              else {
                //only add chars to input if less than current length of word spelling
                if (
                  currentTyped.length <
                  wordSpellingsArray[currentWordIndex].length
                ) {
                  setCurrentTyped((currentTyped += e.key));
                  setCurrentCharIndex((currentCharIndex += 1));
                  setCharsTyped((charsTyped += 1));
                } else {
                  e.preventDefault();
                }
              }
            }}
            onKeyUp={(e) => {
              if (e.key === "Backspace") {
                if (currentCharIndex !== 0) {
                  setCurrentCharIndex((currentCharIndex -= 1));
                }

                setCurrentTyped(
                  currentTyped.substring(0, currentTyped.length - 1)
                );
              }
            }}
          />

          {displayTimer && testOver === false && (
            <Timer
              showTimer={setDisplayTimer}
              finished={setTestOver}
              input={inuptRef}
            />
          )}

          {displayTimer === false && testOver === false && (
            <span style={{ marginTop: "25px" }}>
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
          )}

          {displayTimer === false && testOver && (
            <span>
              <br></br>
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
              <i>Time limit has expired</i>
            </span>
          )}
        </Row>

        <hr style={{ marginTop: "50px" }}></hr>

        <p className="text-center">Challenge your friends</p>
        <div className="text-center" style={{ marginBottom: "25px" }}>
          <FacebookShareButton
            url={"https://typesnap.com"}
            style={{ marginRight: "8px" }}
          >
            <FacebookIcon size={40} />
          </FacebookShareButton>
          <TwitterShareButton
            url={"https://typesnap.com"}
            style={{ marginRight: "8px" }}
          >
            <TwitterIcon size={40} />
          </TwitterShareButton>
          <RedditShareButton url={"https://typesnap.com"}>
            <RedditIcon size={40} />
          </RedditShareButton>
        </div>

        <div>
          <h1>Typesnap</h1>
          <p className="'text-center">
            Speed typing tests measure the accuracy of words typed correctly
            within a given time limit. Typesnap speed typing test randomly
            generates 100 different words for you to type as fast as possible. A
            light grey box will hover over the current word to be spelled, and
            as you type the screen will indicate if you&apos;ve spelled anything
            wrong. After hitting space once each words is spelled, it will be
            green if correct or red with a line through it if incorrect.
            <br></br>
            <br></br>
            At the end you can view all the words you managed to type before the
            time ran out. Words spelled correctly or incorrectly will be labeled
            as such. With all the words typed, your WPM will be calculated and
            displayed.
          </p>
          <h2 style={{ marginTop: "25px" }}>What is WPM</h2>
          <p>
            WPM, or better known as Words per Minute, is the speed in which one
            can type on a keyboard. Calculating WPM is simply dividing how many
            characters were typed within 1 minute divided by 5. WPM formula
            considers 5 keystrokes as a word.
            <br></br>
            <br></br>
            <code>Total characters typed / 5</code>
            <br></br>
            <br></br>
            For example, if one was to type 546 characters within a 1 minute
            time limit, that person&apos;s WPM score would be 109.2, meaning
            they can type on average 109 words every minute.
          </p>

          <h2 style={{ marginTop: "25px" }}>Average Typing Speeds</h2>
          <p>On average, speed typing results can be broken down as such: </p>
          <ul>
            <li>
              20-30 words per minute: <b>Slow</b>
            </li>
            <li>
              30-40 words per minute: <b>Average</b>
            </li>
            <li>
              40-50 words per minute: <b>Good</b>
            </li>
            <li>
              50-60 words per minute: <b>Great</b>
            </li>
            <li>
              60-70 words per minute: <b>Expert</b>
            </li>
          </ul>

          <h2 style={{ marginTop: "25px" }}>How to Improve Typing Speeds</h2>
          <p>
            Getting better at typing is like anything else in life that requires
            practice. Start by watching your fingers as you type. Notice where
            each key&apos;s placement is on the keybaord, and form a mental
            image in your head as your type as to where each letter is. Make
            sure to keep your back straight and posture upright as your type,
            never leaning your head too far fowards or backwards.
            <br></br>
            <br></br>
            Use this website as a tool to improve your typing skills overtime.
            Hit the restart button after your test ends to keep up the practice!
          </p>
          <div
            className="text-secondary"
            style={{ fontSize: "10px", marginBottom: "25px" }}
          >
            Icons made by{" "}
            <a
              href="https://www.freepik.com"
              title="Freepik"
              style={{ textDecoration: "none" }}
            >
              Freepik
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              style={{ textDecoration: "none" }}
            >
              www.flaticon.com
            </a>
          </div>
        </div>
        <p className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-brush"
            viewBox="0 0 16 16"
          >
            <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
          </svg>{" "}
          Made by{" "}
          <a
            href="https://awoldt.com"
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Awoldt
          </a>
        </p>
      </Container>
    </>
  );
};

export default MobileRandomWordsBox;

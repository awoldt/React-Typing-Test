import React from "react";
import { useState, useRef } from "react";
import { FormControl, Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Timer from "./Timer";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  FacebookMessengerIcon,
} from "react-share";

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
    <Container>
      <div className="text-center">
        {testOver === false &&
          wordsSpellings[currentWordIndex].map((x, index) => {
            //behind current word to spell
            if (index < currentCharIndex) {
              //correctly spelled recent char
              if (
                currentTyped[index].toLocaleLowerCase() ===
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
                  <span key={index} style={{ color: "red", fontSize: "50px" }}>
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
              if (currentTyped == wordsArray[currentWordIndex]) {
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
            //CHAR
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
              console.log("backspace1!!");
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
      <div className="text-center" style={{marginBottom: '25px'}}>
        <FacebookShareButton url={"https://typesnap.com"} style={{marginRight: "8px"}}> 
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
        <p className="'text-center">
          Speed typing tests measure the accuracy of words typed correctly
          within a given time limit. The test above randomly generates 100
          different words for you to type as fast as possible. A light grey box
          will hover over the current word to be spelled, and as you type the
          screen will indicate if you&apos;ve spelled anything wrong.
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
          characters were typed during the timeframe by 5. WPM formula considers
          5 keystrokes as a word.
          <br></br>
          <br></br>
          <code>Total characters typed / 5</code>
          <br></br>
          <br></br>
          For example, if one was to type 546 characters within a 1 minute time
          limit, that person&apos;s WPM score would be 109.2
        </p>

        <h2 style={{ marginTop: "25px" }}>How to Improve Typing Speeds</h2>
        <p>
          Getting better at typing is like anything else in life that requires
          practice. Start by watching your fingers as you type. Notice where
          each key&apos;s placement is on the keybaord, and form a mental image
          in your head as your type as to where each letter is. Make sure to
          keep your back straight and posture upright as your type, never
          leaning your head too far fowards or backwards.
          <br></br>
          <br></br>
          Use this website as a tool to improve your typing skills overtime. Hit
          the restart button after your test ends to keep up the practice!
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
    </Container>
  );
};

export default MobileRandomWordsBox;

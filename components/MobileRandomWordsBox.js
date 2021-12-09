import React from "react";
import { useState, useEffect, useRef } from "react";
import { FormControl, Row} from "react-bootstrap";
import { Container } from "react-bootstrap";

const MobileRandomWordsBox = ({ wordsData, wordsSpellings }) => {
  const [wordsArray, setWordsArray] = useState(wordsData);
  const [wordSpellingsArray, setWordSpellingsArray] = useState(wordsSpellings);
  const [currentWord, setCurrentWord] = useState(wordsData[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const [currentTyped, setCurrentTyped] = useState("");

  const [testOver, setTestOver] = useState(false);

  const inuptRef = useRef();

  return (
    <Container>
      <div className="text-center" style={{ fontSize: "50px" }}>
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
                <span key={index} style={{ color: "grey" }}>
                  {x}
                </span>
              );
            }
            //chars infront of char currently spelling
            else if (index > currentCharIndex) {
              return <span key={index}>{x}</span>;
            }
          })}

        {testOver && <p>You have finsihed the test</p>}
      </div>

          <Row className="justify-content-center">
<FormControl
        className="text-center"
        ref={inuptRef}
        placeholder="Type here to start test"
        style={{ marginTop: "25px", maxWidth: "450px" }}
        onKeyDown={(e) => {
          //SPACE
          if (e.key === " ") {
            inuptRef.current.value = "";
            setCurrentTyped("");
            setCurrentCharIndex(0);
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

          </Row>

      

      <hr style={{ marginTop: "50px" }}></hr>

      <div >
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

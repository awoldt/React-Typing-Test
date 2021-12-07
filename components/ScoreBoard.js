import React from "react";
import { Row, Col } from "react-bootstrap";

const ScoreBoard = ({ scoreData, spellings, wordsArray }) => {
  return (
    <div style={{ marginTop: "15px" }}>
      <Row style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Col>
          <span>
            <b>Correct: {scoreData[0]}</b>
          </span>
          <br></br>
          {spellings.map((x, index) => {
            if (x == 1) {
              return (
                <>
                  <span>{wordsArray[index]}</span>
                  <br></br>
                </>
              );
            }
          })}
        </Col>
        <Col>
          <span>
            <b>Wrong: {scoreData[1]}</b>
          </span>
          <br></br>
          {spellings.map((x, index) => {
            if (x == 0) {
              return (
                <>
                  <span>{wordsArray[index]}</span>
                  <br></br>
                </>
              );
            }
          })}
        </Col>
      </Row>
    </div>
  );
};

export default ScoreBoard;

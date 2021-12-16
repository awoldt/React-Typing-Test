import React from "react";
import { Row, Col, Container, Dropdown } from "react-bootstrap";
import { useState, useRef } from "react";
import KeyBtn from "../../components/KeyBtn";

const Index = () => {
  const [keyColor, setKeyColor] = useState("rgb(0, 102, 255)"); //default blue key color
  const [keyBorder, setKeyBorder] = useState("4px solid rgb(0, 56, 140)"); //default blue key border
  const [keyboardBackplate, setKeyboardBackplate] = useState("rgb(0, 31, 77)"); //default blue backplate color
  const [userText, setUserText] = useState("");

  const upperRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middleRow = ["A", "S", "S", "D", "F", "G", "H", "J", "K", "L"];
  const lowerRow = ["Z", "X", "C", "V", "B", "N", "M"];

  const textareaRef = useRef();

  return (
    <Container>
      <textarea style={{ width: "100%", height: "250px" }} ref={textareaRef} />

      <Dropdown>
        <Dropdown.Toggle variant="secondary">Theme</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setKeyColor("rgb(0, 102, 255)");
              setKeyboardBackplate("rgb(0, 31, 77)");
              setKeyBorder("4px solid rgb(0, 56, 140)");
            }}
          >
            Blue
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setKeyColor("rgb(179, 0, 0)");
              setKeyboardBackplate("rgb(77, 0, 0)");
              setKeyBorder("4px solid rgb(128, 0, 0)");
            }}
          >
            Red
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div
        style={{
          backgroundColor: keyboardBackplate,
          padding: "25px",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        {" "}
        <Row
          style={{
            borderRadius: "10px",
            marginTop: "25px",
          }}
        >
          {upperRow.map((x, index) => {
            return (
              <Col
                key={index}
                style={{
                  cursor: "pointer",
                  padding: "0px",
                  border: keyBorder,
                  borderRadius: "5px",
                  fontSize: "25px",
                }}
                className="text-center m-2"
              >
                <KeyBtn
                  keyValue={x}
                  color={keyColor}
                  text={textareaRef}
                  addText={setUserText}
                  textAdded={userText}
                />
              </Col>
            );
          })}
        </Row>
        <Row
          style={{
            borderRadius: "10px",
            marginLeft: "25px",
            marginRight: "25px",
          }}
        >
          {middleRow.map((x, index) => {
            return (
              <Col
                key={index}
                style={{
                  cursor: "pointer",
                  padding: "0px",
                  border: keyBorder,
                  borderRadius: "5px",
                  fontSize: "25px",
                }}
                className="text-center m-2"
              >
                <KeyBtn
                  keyValue={x}
                  color={keyColor}
                  text={textareaRef}
                  addText={setUserText}
                  textAdded={userText}
                />
              </Col>
            );
          })}
        </Row>
        <Row
          style={{
            borderRadius: "10px",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          {lowerRow.map((x, index) => {
            return (
              <Col
                key={index}
                style={{
                  cursor: "pointer",
                  padding: "0px",
                  border: keyBorder,
                  borderRadius: "5px",
                  fontSize: "25px",
                }}
                className="text-center m-2"
              >
                <KeyBtn
                  keyValue={x}
                  color={keyColor}
                  text={textareaRef}
                  addText={setUserText}
                  textAdded={userText}
                />
              </Col>
            );
          })}
        </Row>
        <Row className="text-center justify-content-center mt-2">
          <div
            style={{
              backgroundColor: keyColor,
              cursor: "pointer",
              border: keyBorder,
              width: "800px",
              height: "50px",
              userSelect: "none",
            }}
          >
            Space
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default Index;

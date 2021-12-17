import React from "react";
import { Row, Col, Container, Dropdown, Alert } from "react-bootstrap";
import { useState, useRef } from "react";
import KeyBtn from "../../components/KeyBtn";
import Head from "next/head";
import isMobile from "ismobilejs";
import CustomNav from "../../components/CustomNav";

const Index = ({ mobile }) => {
  const [keyColor, setKeyColor] = useState("rgb(0, 102, 255)"); //default blue key color
  const [keyBorder, setKeyBorder] = useState("4px solid rgb(0, 56, 140)"); //default blue key border
  const [keyboardBackplate, setKeyboardBackplate] = useState("rgb(0, 31, 77)"); //default blue backplate color
  const [userText, setUserText] = useState("");

  const upperRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middleRow = ["A", "S", "S", "D", "F", "G", "H", "J", "K", "L"];
  const lowerRow = ["Z", "X", "C", "V", "B", "N", "M"];

  const textareaRef = useRef();
  const spacebarRef = useRef();

  return (
    <>
      <Head>
        <title>Online Virtual Keyboard | Typesnap</title>
        <meta
          name="description"
          content="Type using a virual keyboard with multiple built-in themes. Built with Reactjs, works on any browser."
        ></meta>
        <meta property="og:title" content="Online Virtual Keyboard" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://typesnap.com/keyboard" />
        <link rel="canonical" href="https://typesnap.com/keyboard" />
      </Head>

      <CustomNav />

      <Container>
        {mobile && (
          <Alert variant={"danger"} style={{ marginTop: "15px" }}>
            This page is not optimized for mobile
          </Alert>
        )}

        <textarea
          style={{
            width: "100%",
            height: "250px",
            marginTop: "25px",
            marginBottom: "25px",
            border: "3px solid #cccccc",
          }}
          ref={textareaRef}
          disabled
        />

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
            marginTop: "5px",
            borderRadius: "10px",
            marginBottom: "25px",
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
              ref={spacebarRef}
              style={{
                backgroundColor: keyColor,
                cursor: "pointer",
                border: keyBorder,
                width: "800px",
                height: "50px",
                userSelect: "none",
              }}
              onClick={() => {
                setUserText((userText += " "));
              }}
              onMouseDown={() => {
                //blue
                if (keyColor === "rgb(0, 102, 255)") {
                  spacebarRef.current.style.backgroundColor = "rgb(0, 55, 138)";
                }
                //red
                if (keyColor === "rgb(179, 0, 0)") {
                  spacebarRef.current.style.backgroundColor = "rgb(125, 0, 0)";
                }
              }}
              onMouseUp={() => {
                //blue
                if (keyColor === "rgb(0, 102, 255)") {
                  spacebarRef.current.style.backgroundColor =
                    "rgb(0, 102, 255)";
                }
                //red
                if (keyColor === "rgb(179, 0, 0)") {
                  spacebarRef.current.style.backgroundColor = "rgb(179, 0, 0)";
                }
              }}
            ></div>
          </Row>
        </div>
        <h1 className="text-center">Virtual Keyboard</h1>
        <p className="text-center">
          Use your mouse to type in the textbox above
        </p>
        <div
          className="text-secondary text-center"
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
      </Container>
    </>
  );
};

export default Index;

export async function getServerSideProps({ req }) {
  const userAgent = isMobile(req.headers["user-agent"]).any; //true if mobile device false if desktop

  return {
    props: {
      mobile: userAgent,
    },
  };
}

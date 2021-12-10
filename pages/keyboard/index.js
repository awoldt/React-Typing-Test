import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import KeyBtn from "../../components/KeyBtn";

const index = () => {
  const [theme, setTheme] = useState("blue"); //default theme
  const [keyColor, setKeyColor] = useState("rgb(0, 102, 255)"); //default blue key color

  return (
    <Container>
      <Row
        style={{
          backgroundColor: "rgb(0, 31, 77)",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "25px",
        }}
      >
        <Col
          style={{
            backgroundColor: keyColor,
            cursor: "pointer",
            border: "4px solid rgb(0, 56, 140)",
            borderRadius: "5px",
            fontSize: "19px",
            padding: "0px",
          }}
          className="text-center m-2"
        >
          <KeyBtn keyValue={"Q"} keyColor={keyColor} />
        </Col>
        <Col
          style={{
            backgroundColor: keyColor,
            cursor: "pointer",
            border: "4px solid rgb(0, 56, 140)",
            borderRadius: "5px",
            fontSize: "19px",
            padding: "0px",
          }}
          className="text-center m-2"
        >
          <KeyBtn keyValue={"W"} keyColor={keyColor} />
        </Col>
        <Col
          style={{
            backgroundColor: keyColor,
            cursor: "pointer",
            border: "4px solid rgb(0, 56, 140)",
            borderRadius: "5px",
            fontSize: "19px",
            padding: "0px",
          }}
          className="text-center m-2"
        >
          <KeyBtn keyValue={"E"} keyColor={keyColor} />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default index;

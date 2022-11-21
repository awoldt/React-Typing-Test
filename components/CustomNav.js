import React from "react";
import { Navbar, Container } from "react-bootstrap";

const CustomNav = () => {
  return (
    <Navbar style={{ backgroundColor: "rgb(51, 162, 255)" }}>
      <Container style={{ padding: "0px", marginLeft: "50px" }}>
        <Navbar.Brand href={"/"} style={{ color: "white", fontSize: "23px" }}>
          <img
            alt="typing logo"
            src="/favicon.ico"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CustomNav;

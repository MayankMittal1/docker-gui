import React from "react";
import { Button, Col, Row } from "reactstrap";
import AppCard from "./AppCard";
import NavBar from "../NavBar/NavBar"

const GetStarted = () => {
  return (
    <>
      <NavBar />
      <Row
        className="text-center"
        style={{
          margin: "40px",
        }}
      >
        <h6>
          Let's get started! Set up your own container in a few easy steps!
        </h6>
      </Row>
      <Row
        className="text-center"
        style={{
          marginTop: "40px",
        }}
      >
        <h1> SELECT YOUR APP!</h1>
      </Row>
      <Row>
        <Col
          className="d-flex justify-content-center"
          style={{
            paddingLeft: "320px",
          }}
        >
          <AppCard isSelected={false} />
        </Col>
        <Col className="d-flex justify-content-center">
          <AppCard isSelected={false} />
        </Col>
        <Col
          className="d-flex justify-content-center"
          style={{
            paddingRight: "320px",
          }}
        >
          <AppCard isSelected={true} />
        </Col>
      </Row>

      <Row>
      <div style={{
        marginTop: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Button
          color="primary"
          href="#"
          tag="a"
        >
          Next
        </Button>
      </div>
    </Row>
    </>
  );
};

export default GetStarted;

import React from "react";
import { Button, Col, Row } from "reactstrap";
import Checkpoint from "./Checkpoint";
import NavBar from "../../NavBar/NavBar"

const ProgressBar = () => {
  return (
    <>
      <NavBar />
      <Row
        className="text-center"
        style={{
          margin: "40px",
        }}
      >
      </Row>
      
      <Row>
        <Col
          className="d-flex justify-content-center"
          style={{
            paddingLeft: "320px",
          }}
        >
          <Checkpoint isSelected={false} />
        </Col>
        <Col className="d-flex justify-content-center">
          <Checkpoint isSelected={false} />
        </Col>
        <Col
          className="d-flex justify-content-center"
          style={{
            paddingRight: "320px",
          }}
        >
          <Checkpoint isSelected={true} />
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

export default ProgressBar;

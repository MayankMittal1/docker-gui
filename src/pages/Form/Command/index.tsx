import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import Check_cmd from "../Check-cmd";
import "./style.css";

function Command() {
  return (
    <div>
      <div className="centre">
        <Form>
          <Row>
            <FormGroup className="bar"></FormGroup>
            <Col>
              <Input placeholder="Enter the command " />
            </Col>
            <Col>
              <Button className="search">Continue</Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <Row
          style={{
            fontSize: "40px",
            textAlign: "center",
            color: "aliceblue",
            padding: "1rem",
          }}
        >
          <b>OR</b>
        </Row>
        <Row>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button>Upload</Button>
          </div>
        </Row>
      </div>
      <div style={{margin : "5rem"}}>
        <Check_cmd></Check_cmd>

        <Check_cmd></Check_cmd>

        <Check_cmd></Check_cmd>
      </div>
      <div className="centre">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>
            <Button className="search">Previous</Button>
          </Col>
          <Col xs="4">
            <Button className="search">Save and Continue</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Command;

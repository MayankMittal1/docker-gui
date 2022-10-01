import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import Variables from "../Variables";
import "./style.css";

function Port() {
  return (
    <div>
      <div className="centre">
        <Form>
          <Row >
            <FormGroup className="bar"></FormGroup>
            <Col>
              <Input placeholder="Enter port number" />
            </Col>
            <Col>
              <Button className="search">[]</Button>
            </Col>
          </Row>
        </Form>
        <h2>VARIABLES</h2>
      </div>
      <Variables></Variables>

      <Variables></Variables>

      <Variables></Variables>
<div className="centre">
      <Row style={{padding : "2rem"}}>
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

export default Port;

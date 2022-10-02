import React, { useState } from "react";
import { PromptProps } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import { Counter } from "../../features/counter/Counter";
import "./style.css";

function Port() {
  const [count, setCount] = useState(1);
  const temp = (
    <div className="page">
      <div className="variables">
        <Row className="rows" style={{ padding: "0.5rem" }}>
          <Col>
            <Form>
              <Input className="light" placeholder="Key"></Input>
            </Form>
          </Col>
          <Col>
            <Form>
              <Input className="light" placeholder="Value"></Input>
            </Form>
          </Col>

          <Col></Col>
        </Row>
      </div>
    </div>
  );

  const arr: any[] = [];

  for (let i: number = 0; i < count; i++) {
    arr.push(temp);
  }

  return (
    <div>
      <div className="centre">
        <Form>
          <Row>
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
        <Button
          className="btn plus-btn"
          onClick={() => {
            let tempcount = count;
            tempcount++;
            setCount(tempcount);
          }}
        >
          +
        </Button>
        <Button className="btn">Upload</Button>
      </div>

      {arr.map((jsx) => jsx)}

      <div className="centre">
        <Row style={{ padding: "2rem" }}>
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

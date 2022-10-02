import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import "./style.css";

function Variables() {
  return (
    <div className="page">
      <div className="variables">
        <Row className="rows">
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
          <Col>
            <Button className="btn">+</Button>
            <Button className="btn">Upload</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Variables;

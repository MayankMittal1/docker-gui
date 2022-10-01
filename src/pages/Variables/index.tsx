import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import "./style.css";

function Variables() {
  return (
    <div className="page">
      <Row>
        <Col xs="3">
          <div className="prog-page">
            <div className="prog1">
              Checkpoint 1<p>This is some other description</p>
            </div>
            <div className="prog1">
              Checkpoint 2 <p>This is some other description</p>
            </div>
            <div className="prog1">
              Checkpoint 3 <p>This is some other description</p>
            </div>
            <div className="prog1">
              Checkpoint 4 <p>This is some other description</p>
            </div>
          </div>
        </Col>
        <Col xs="9">
          <div className="variables">
            <Row className="rows">
              <Col>
                <Form>
                  <Input className="light" placeholder="Key"></Input>
                </Form>
              </Col>x
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
        </Col>
      </Row>
    </div>
  );
}

export default Variables;

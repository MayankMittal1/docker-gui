import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import "./style.css";

function Check_cmd() {
  return (
    <div className="page">
      
          <div className="variables">
            <Row className="rows">
              <Col></Col>
              <Col>
                <FormGroup check>
                  <Input type="checkbox" />
                </FormGroup>
              </Col>
              <Col>
                <Form>
                  <Input className="light check" placeholder="Command"></Input>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </div>
      
    </div>
  );
}

export default Check_cmd;

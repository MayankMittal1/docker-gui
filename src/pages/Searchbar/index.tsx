import React, {useState} from "react";
import { Button,  Col,  Form, FormGroup, Input, Row} from "reactstrap"
import "./style.css"

function SearchBar(

) {
  return (
    <div className="centre">
      <Form>
        <Row>
          <FormGroup className="bar"></FormGroup>
          <Col>
            <Input />
          </Col>
          <Col>
            <Button className="search">Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchBar;

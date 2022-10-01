import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import { searchImages } from "../../../utils/search";
import "./style.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="centre">
      <Form>
        <Row>
          <FormGroup className="bar"></FormGroup>
          <Col>
            <Input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Button
              className="search"
              onClick={() => {
                searchImages(search).then((data) => {
                  console.log(data);
                });
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBar;

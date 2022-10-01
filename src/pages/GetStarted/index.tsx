import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import AppCard from "./AppCard";
import NavBar from "../NavBar/NavBar";
import { supportedApps } from "../../constants/supportedApps";
const GetStarted = () => {
  const [selected, setSelected] = useState<string>("");
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
        {Object.keys(supportedApps).map((key) => {
          return (
            <Col className="d-flex justify-content-center">
              <AppCard
                isSelected={selected === key}
                apps={supportedApps}
                type={key}
                select={() => {
                  setSelected(key);
                }}
              />
            </Col>
          );
        })}
      </Row>

      <Row>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button color="primary" href="#" tag="a">
            Next
          </Button>
        </div>
      </Row>
    </>
  );
};

export default GetStarted;

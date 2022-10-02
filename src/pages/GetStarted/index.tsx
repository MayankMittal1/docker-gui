import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import AppCard from "./AppCard";
import NavBar from "../NavBar/NavBar";
import { supportedApps } from "../../constants/supportedApps";
import { useHistory } from "react-router-dom";
import { loadApp } from "../../redux/appSlice";
import { useAppDispatch } from "../../app/hooks";
const GetStarted = () => {
  const [selected, setSelected] = useState<string>("");
  const history = useHistory();
  const dispatch = useAppDispatch();
  return (
    <>
      <NavBar />
      <Container
        fluid
        style={{
          background: "black",
          color: "white",
          height: "100vh",
        }}
      >
        <Row className="text-center">
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
          {Object.keys(supportedApps).map((key, i) => {
            return (
              <Col className="d-flex justify-content-center" key={i}>
                <AppCard
                  isSelected={selected === key}
                  apps={supportedApps}
                  type={key}
                  select={() => {
                    setSelected(key);
                  }}
                  key={i}
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
            <Button
              color="primary"
              disabled={selected === ""}
              onClick={() => {
                if (selected && selected !== "") {
                  dispatch(loadApp(selected));
                  history.push(`/create/${selected}`);
                }
              }}
            >
              Next
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default GetStarted;

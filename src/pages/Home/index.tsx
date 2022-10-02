import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import NavBar from "../NavBar/NavBar";
import logo from "../../assets/logo.png";
const Home = () => {
  const history = useHistory();
  return (
    <>
      <NavBar />
      <Container
        fluid
        style={{ background: "black", color: "white", height: "100vh" }}
      >
        <Row>
          <Col className="d-flex justify-content-center">
            <img src={logo} height="300px" />
          </Col>
        </Row>
        <Row className="align-middle">
          <div
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "40px",
            }}
          >
            Koala_GUID
          </div>
        </Row>

        <Row className="align-middle">
          <div
            style={{
              fontSize: "30px",
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "80px",
            }}
          >
            Dockerise your application with the minimum number of clicks!
          </div>
        </Row>

        <Row>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              color="primary"
              onClick={() => {
                history.push("/getStarted");
              }}
            >
              Get Started
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Home;

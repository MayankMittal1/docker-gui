import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Row } from "reactstrap";
import NavBar from "../NavBar/NavBar";
const Home = () => {
  const history = useHistory();
  return (
    <>
      <NavBar />
      <Row className="align-middle">
        <div
          style={{
            fontSize: "70px",
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            paddingTop: "80px",
          }}
        >
          DOCKER-GUI
        </div>
      </Row>

      <Row className="align-middle">
        <div
          style={{
            fontSize: "30px",
            color: "black",
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
    </>
  );
};

export default Home;

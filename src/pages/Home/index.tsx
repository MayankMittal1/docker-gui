import React from "react";
import { Button, Col, Row } from "reactstrap";

const Home = () => {
  return (
    <>
    <Row class="align-middle"> 
        <div style={{
          fontSize:"70px",
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          paddingTop: "80px"
        }}>DOCKER-GUI</div>
    </Row>

    <Row class="align-middle"> 
        <div style={{
          fontSize:"30px",
          color: "black",
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "80px"
        }}>Dockerise your application with the minimum number of clicks!</div>
    </Row>

    <Row>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Button
          color="primary"
          href="#"
          tag="a"
        >
          Get Started
        </Button>
      </div>
    </Row>
    </>
  );
};

export default Home;

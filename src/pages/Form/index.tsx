import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { supportedApps } from "../../constants/supportedApps";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../steps/step1/SearchBar";
import ProgressBar from "../Step1/ProgressBar";
import InputField from "./Input";
const Form = () => {
  const { app } = useParams();
  const [step, setStep] = React.useState(0);
  return (
    <>
      <NavBar />
      <Container
        fluid
        style={{
          background: "black",
          height: "100vh",
        }}
      >
        <Row>
          <Col className="col-3" style={{ height: "100vh" }}>
            <ProgressBar
              current={step}
              allSteps={(supportedApps as any)[app as string].steps}
              steps={(supportedApps as any)[app as string].modes.development}
              changeStep={setStep}
            />
          </Col>
          <Col>
            <InputField
              steps={(supportedApps as any)[app as string].modes.development}
              current={step}
              allSteps={(supportedApps as any)[app as string].steps}
              changeStep={setStep}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Form;

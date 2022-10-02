import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { supportedApps } from "../../constants/supportedApps";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../steps/step1/SearchBar";
import ProgressBar from "../Step1/ProgressBar";
import InputField from "./Input";
import { useAppSelector } from "../../app/hooks";
import appSlice, { selectAppSlice } from "../../redux/appSlice";
const Form = () => {
  const { app } = useParams();
  const [step, setStep] = React.useState(0);
  const state = useAppSelector(selectAppSlice);
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
              steps={Object.keys((supportedApps as any)[app as string].steps)}
              changeStep={setStep}
            />
          </Col>
          <Col>
            <InputField
              allSteps={(supportedApps as any)[app as string].steps}
              steps={Object.keys((supportedApps as any)[app as string].steps)}
              changeStep={setStep}
              current={step}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Form;

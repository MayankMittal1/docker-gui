import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Row } from "reactstrap";
import NavBar from "../NavBar/NavBar";
import ProgressBar from "../Step1/ProgressBar";
import Port from "../Port";
import { supportedApps } from "../../constants/supportedApps";
import { useParams } from "react-router-dom";
const Test = () => {
  const { app } = useParams();
  const [step, setStep] = React.useState(0);

  const history = useHistory();
  return (
    <>
      <NavBar />
      {/* <ProgressBar
        current={step}
        allSteps={(supportedApps as any)[app as string].steps}
        steps={(supportedApps as any)[app as string].modes.development}
        changeStep={setStep}
      /> */}
      <Port></Port>
    </>
  );
};

export default Test;

import React from "react";
import { Button, Col, Row } from "reactstrap";
import Checkpoint from "../Form/Checkpoint/Checkpoint";
import NavBar from "../NavBar/NavBar";
import "./style.css";

const ProgressBar = ({
  steps,
  current,
  allSteps,
  changeStep,
}: {
  steps: any;
  current: any;
  allSteps: any;
  changeStep: any;
}) => {
  return (
    <div className="d-flex flex-column justify-content-between h-50 mt-5">
      {steps.map((key: string, i: React.Key) => {
        return (
          <div
            style={{
              cursor: "pointer",
            }}
            className="prog1"
            key={i}
            onClick={() => {
              changeStep(i);
            }}
          >
            <Row className="mt-4">
              <Col>
                <h5>{allSteps[key].name}</h5>
              </Col>
              <Col className="col-2 d-flex align-items-center">
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    outline: "3px solid grey",
                    backgroundColor:
                      current < i
                        ? "transparent"
                        : current === i
                        ? "green"
                        : "grey",
                  }}
                ></div>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;

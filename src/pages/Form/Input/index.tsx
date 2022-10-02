import React from "react";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectAppSlice, setVar } from "../../../redux/appSlice";
import { generate } from "../../../utils/generate";
const InputField = ({
  steps,
  current,
  allSteps,
  changeStep,
}: {
  steps: any;
  current: number;
  allSteps: any;
  changeStep: any;
}) => {
  const state = useAppSelector(selectAppSlice);
  const finish = () => {
    const element = document.createElement("a");
    const file = new Blob(generate(state), { type: "text/text;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "Dockerfile";
    document.body.appendChild(element);
    element.click();
  };
  const dispatch = useAppDispatch();
  return (
    <Container
      style={{
        width: "80%",
      }}
    >
      <Label
        className="mt-5"
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {allSteps[steps[current]].description}
      </Label>
      {allSteps[steps[current]].variables &&
        !allSteps[steps[current]].multiple &&
        (allSteps[steps[current]].variables as Array<string>).map(
          (variable: string) => {
            return (
              <>
                <Input
                  type="text"
                  placeholder={variable}
                  id={`input-${variable}`}
                  className="mt-4"
                  value={state[variable]}
                  onChange={(e) => {
                    dispatch(setVar({ type: variable, val: e.target.value }));
                  }}
                ></Input>
              </>
            );
          }
        )}
      {allSteps[steps[current]].variables &&
        allSteps[steps[current]].multiple &&
        (allSteps[steps[current]].variables as Array<string>).map(
          (variable: string) => {
            return <Input></Input>;
          }
        )}
      <p className="text-muted mt-5">
        *Do not change the default values unless needed
      </p>
      <Row>
        <Col className="col-9"></Col>
        <Col>
          <Row>
            <Col>
              <Button
                disabled={current === 0}
                onClick={() => {
                  changeStep(current - 1);
                }}
              >
                Previous
              </Button>
            </Col>
            <Col>
              {current !== steps.length - 1 ? (
                <Button
                  color="primary"
                  onClick={() => {
                    changeStep(current + 1);
                  }}
                >
                  Next
                </Button>
              ) : (
                <Button
                  color="primary"
                  onClick={() => {
                    finish();
                  }}
                >
                  Finish
                </Button>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default InputField;

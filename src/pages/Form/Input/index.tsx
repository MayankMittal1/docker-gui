import React from "react";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectAppSlice, setVar } from "../../../redux/appSlice";
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
      ;
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
              <Button
                color="primary"
                onClick={() => {
                  changeStep(current + 1);
                }}
              >
                Next
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default InputField;

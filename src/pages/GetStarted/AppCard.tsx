import React from "react";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

const AppCard = ({
  isSelected,
  apps,
  type,
  select,
}: {
  isSelected: boolean;
  apps: any;
  type: string;
  select: any;
}) => {
  return (
    <>
      <Card
        className="text-center"
        style={
          isSelected
            ? {
                borderWidth: "3px",
                borderColor: "blue",
                borderRadius: "8px",
                marginTop: "40px",
                padding: "8px",
                width: "18rem",
                cursor: "pointer",
                color: "black",
              }
            : {
                padding: "8px",
                marginTop: "40px",
                width: "18rem",
                cursor: "pointer",
                color: "black",
              }
        }
        onClick={select}
      >
        <CardBody>
          <Row style={{ height: "90%" }} className="d-flex align-items-center">
            <Col>
              <img alt="Sample" src={apps[type].icon} width="100%" />
            </Col>
          </Row>
          <Row style={{ height: "10%" }} className="d-flex align-items-center">
            <CardTitle tag="h5">{apps[type].name}</CardTitle>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default AppCard;

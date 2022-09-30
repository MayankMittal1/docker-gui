import React from "react";
import { Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";

const AppCard = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <>
    
      <Card
        className="text-center"
        style={
          isSelected
            ? {
                borderWidth: "8px",
                borderColor: "green",
                borderRadius: "8px",
                marginTop: "40px",
                padding:"8px",
                width: "18rem",
              }
            : {
                padding:"8px",
                marginTop: "40px",
                width: "18rem",
              }
        }
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
        </CardBody>
      </Card>
    </>
  );
};

export default AppCard;

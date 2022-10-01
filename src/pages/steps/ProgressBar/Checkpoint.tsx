import React from "react";
import { Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";

const Checkpoint = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <>
    
      <div
        className="text-center"
        style={
          isSelected
            ? {
                backgroundColor:"green",
                borderRadius: "50%",
                marginTop: "40px",
                padding:"8px",
                width: "18rem",
              }
            : {
                backgroundColor:"grey",
                borderRadius: "50%",
                marginTop: "40px",
                padding:"8px", 
                width: "9rem",
              }
        }
      >
        
      </div>
    </>
  );
};

export default Checkpoint;
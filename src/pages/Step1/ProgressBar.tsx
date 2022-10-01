import React from "react";
import { Button, Col, Row } from "reactstrap";
import Checkpoint from "../Checkpoint/Checkpoint";
import NavBar from "../Nav";
import "./style.css"

const ProgressBar = () => {
  return (
    <div style={{ position: "fixed" }}>

      <div className="prog-page">
        <div className="prog1">
          Checkpoint 1<p>This is some description</p>
        </div>
        <div className="prog1">
          Checkpoint 2 <p>This is some description</p>
        </div>
        <div className="prog1">
          Checkpoint 3 <p>This is some description</p>
        </div>
        <div className="prog1">
          Checkpoint 4 <p>This is some description</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

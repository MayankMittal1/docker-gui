import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import "./style.css";

function Image() {
  return (
    <div className="page">
      <Row>
        <Col>
          <div className="prog-page">
            <div className="prog1">,</div>
            <div className="prog1"></div>
            <div className="prog1"></div>
            <div className="prog1"></div>
          </div>
        </Col>
        <Col>
          <div className="img-page">
            <Row className="rows">
              <Col className="cols">
                <div className="image">
                  <div>
                    <img src="" alt="img1" />
                  </div>
                </div>
              </Col>
              <Col className="cols">
                <div className="image">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis similique, eius quaerat quod quis minus nulla
                    inventore dolor unde, voluptatem velit! Porro sapiente natus
                    dolores eligendi illum excepturi fugit provident.
                  </div>
                </div>
              </Col>
              <Col className="cols">
                <div className="image">
                  <div>
                    <img src="" alt="img2" />
                  </div>
                </div>
              </Col>
              <Col className="cols">
                <div className="image">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis similique, eius quaerat quod quis minus nulla
                    inventore dolor unde, voluptatem velit! Porro sapiente natus
                    dolores eligendi illum excepturi fugit provident.
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Image;

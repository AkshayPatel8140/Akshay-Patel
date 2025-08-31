import React from "react";
import { Col, Row } from "react-bootstrap";
import * as SI from "react-icons/si";
import * as DI from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiAppstore />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiSlack />
      </Col>
    </Row>
  );
}

export default Toolstack;

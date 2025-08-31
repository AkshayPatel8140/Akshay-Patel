import React from "react";
import { Col, Row } from "react-bootstrap";
import * as DI from "react-icons/di";
import * as SI from "react-icons/si";
import * as CG from "react-icons/cg";
import * as TB from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CG.CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TB.TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiSqllite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiGraphql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DI.DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiYarn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiSonarqube />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SI.SiGithub />
      </Col>
    </Row>
  );
}

export default Techstack;

// "react-icons": "^4.8.0",
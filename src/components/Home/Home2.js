import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Strings from "../../data/strings";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              - I fell in love with programming, and along the way, I've built, broken, and learned a lot more than “just something.” 😄
              <br />
              - Passionate about leveraging technology to solve real-world problems with a focus on <b className="purple">impact</b>, <b className="purple">scale</b>, and <b className="purple">simplicity</b>.
              <br />
              - Fluent in <b className="purple">Python</b>, <b className="purple">JavaScript</b>, <b className="purple">TypeScript</b>, and <b className="purple">React</b> — comfortable moving across the stack and into systems programming when needed.
              <br />
              - Experienced in <b className="purple">AI/ML development</b> (transformers, LangChain, OpenCV), <b className="purple">full-stack engineering</b>, and building scalable, <b className="purple">distributed systems</b>.
              <br />
              - Proven track record in edge computing, IoT automation, and <b className="purple">mobile App development</b> with React Native and serverless backends.
              <br />
              - I prefer building with Node.js, Next.js, and the modern React ecosystem, optimizing for SSR, <b className="purple">API efficiency</b>, and <b className="purple">seamless UX</b> across devices.
              <br />
              - Deeply collaborative, fast-learning, and constantly exploring new paradigms from <b className="purple">LLM pipelines</b> and <b className="purple">agent-based systems</b> to realtime collaboration and multi-modal UX.
              <br />
              <br />
              * Seeking opportunities to apply my skills and knowledge in dynamic and impactful projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={Strings.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={Strings.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={Strings.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={Strings.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={Strings.email}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <IoIosMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

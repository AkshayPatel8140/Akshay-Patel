import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone,
            <br />
            My name is <span className="purple">Akshay Patel </span> and I am originally from Gujarat, India. I am recently completed a <span className="purple">Master of Science in Computer Science (MSCS)</span> from San Francisco Bay University in California.
            <br />
            I bring over <span className="purple">4.5 years</span> of experience as a <span className="purple">Software Developer</span>, specializing in Backend development and Mobile application Development. During my tenure at e-infochips Private Limited, I honed my skills in mobile application development, working on numerous projects that have significantly enhanced my expertise in this field.
            <br />
            I hold a Bachelor's degree in <span className="purple">Information Technology</span> from Gujarat Technical University, which I completed in 2019.
            <br />
            <br />
            Thank you for visiting my portfolio. I look forward to connecting with you and exploring potential opportunities.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about creating innovative solutions that drive positive change."
          </p>
          {/* <footer className="blockquote-footer">Akshay</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

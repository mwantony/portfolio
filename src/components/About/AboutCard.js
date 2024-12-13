import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Antony Maziero Warken</span> from{" "}
            <span className="purple">Santa Catarina, Brazil</span>.
            <br />
            I have worked as a developer in some companies, always striving to
            learn more and improve my skills.
            <br />
            <br />
            I have fluent English, which allows me to work on international
            projects.
            <br />
            <br />I am passionate about creating innovative solutions and
            constantly seek new opportunities to grow professionally. Let's
            connect and explore how we can collaborate!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

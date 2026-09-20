import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import { useLanguage } from "../../context/LanguageContext";

function Sobre() {
  const { t } = useLanguage();

  return (
    <Container fluid className="about-section">
      <Container>
        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t.about.title1} <strong className="purple"> {t.about.title2} </strong>{t.about.title3}
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={"https://github.com/mwantony.png"}
              alt="about"
              className="img-fluid"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          {t.about.skillsTitle1} <strong className="purple">{t.about.skillsTitle2}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t.about.toolsTitle1}</strong> {t.about.toolsTitle2}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default Sobre;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function Sobre() {
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
              Quem <strong className="purple"> sou </strong>eu?
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
          Habilidades <strong className="purple">Profissionais</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Ferramentas</strong> que uso
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default Sobre;

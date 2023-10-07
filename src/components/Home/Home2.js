import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              SAIBA QUEM <span className="purple"> SOU </span> EU
            </h1>
            <p className="home-about-body">
              Meu nome é Antony Maziero Warken e sou um entusiasta do
              desenvolvimento de sistemas. 🤷‍♂️
              <br />
              <br />
              Tenho um nível avançado de{" "}
              <i>
                <b className="purple">inglês</b>
              </i>
              , o que me permite participar de projetos internacionais
              <br />
              <br />
              Estou aprofundando meus conhecimento em tecnologias como &nbsp;
              <i>
                <b className="purple">ReactJS, </b>
                <b className="purple">NodeJS, </b>
                <b className="purple">NextJS, </b> e
                <b className="purple"> MySQL</b>
              </i>
              <br />
              <br />
              Sempre que possível, desenvolvo projetos com{" "}
              <b className="purple">Node.js</b>,
              <i>
                <b className="purple">
                  {" "}
                  Bibliotecas e Frameworks modernos do JavaScript
                </b>
              </i>
              &nbsp;como
              <i>
                <b className="purple"> React.js e Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src="https://github.com/mwantony.png"
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FALE COMIGO</h1>
            <p>
              Sinta-se livre para se<span className="purple"> conectar </span>
              comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://wa.me/5549991042777"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <IoLogoWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/mwantony"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/antonymazierowarken/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/antonymazierowarken"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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

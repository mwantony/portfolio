import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
              QUEM <span className="purple"> SOU </span> EU?
            </h1>
            <p className="home-about-body">
              Sou Antony Maziero Warken, desenvolvedor com experiência na
              criação de aplicações web e sistemas voltados para negócios.
              <br />
              <br />
              Tenho experiência com ReactJS, PHP, Laravel e desenvolvimento de
              interfaces, além de ter criado soluções próprias, como o sistema
              de gestão e comandas para restaurantes da{" "}
              <a href="https://tyra.com.br" target="_blank" rel="noreferrer">
                Tyra
              </a>
              .
              <br />
              <br />
              Gosto de transformar ideias em produtos funcionais, aprender novas
              tecnologias e enfrentar desafios que me façam evoluir. Atualmente,
              busco novas oportunidades para aplicar minha experiência, ampliar
              meus conhecimentos e colaborar com projetos que gerem impacto real.
              <br />
              <br />
              Também possuo inglês avançado e facilidade para aprender novas
              ferramentas e tecnologias.
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
              Sinta-se à vontade para
              <span className="purple"> se conectar </span>
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

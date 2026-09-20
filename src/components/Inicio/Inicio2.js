import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Home2() {
  const { t } = useLanguage();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t.home.whoTitle1} <span className="purple"> {t.home.whoTitle2} </span> {t.home.whoTitle3}
            </h1>
            <p className="home-about-body">
              {t.home.bioP1}
              <br />
              <br />
              {t.home.bioP3}
              <br />
              <br />
              {t.home.bioP4}
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
            <h1>{t.home.connectTitle}</h1>
            <p>
              {t.home.connectSubtitle1}
              <span className="purple">{t.home.connectSubtitleHighlight}</span>
              {t.home.connectSubtitle2}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://wa.me/5549991206029"
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

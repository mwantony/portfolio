import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  <svg
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M0 30.752H30V0.228912H0V30.752Z"
                      fill="url(#pattern0)"
                    />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use xlinkHref="#image0" transform="scale(0.015625)" />
                      </pattern>
                      <image
                        id="image0"
                        width="64"
                        height="64"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> ANTONY MAZIERO WARKEN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

          
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

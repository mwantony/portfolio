import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import blog from "../../Assets/Projects/blog.png";
import tyra from "../../Assets/Projects/tyra.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Some of the projects I've worked on recently.{" "}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tyra}
              isBlog={false}
              title="Tyra"
              description="Welcome to the official Tyra repository, a modern web system developed with React and PHP Laravel. With Tyra, we are transforming the restaurants way of delivering and serving their clients."
              ghLink="https://github.com/mwantony/tyra-frontend"
              demoLink="https://tyra.com.br"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Welcome to my Personal Portfolio! This is where you can explore my work and learn more about my professional journey. I created this portfolio using the powerful React framework to provide an interactive and engaging experience."
              ghLink="https://github.com/mwantony/portfolio"
              demoLink="https://antonymazierowarken.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog"
              description="This is my personal space where I share my ideas, thoughts, and knowledge on various topics. What makes this blog special is that it was built with the powerful Next.js technology."
              ghLink="https://github.com/mwantony/blog"
              demoLink="https://antonymwblog.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

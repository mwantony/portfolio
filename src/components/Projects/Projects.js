import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import blog from "../../Assets/Projects/blog.png";
import vinki from "../../Assets/Projects/vinki.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Meus projetos <strong className="purple">recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui tem alguns projetos que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vinki}
              isBlog={false}
              title="Vinki"
              description="Bem-vindo ao repositório oficial do Vinki, um moderno e-commerce desenvolvido com React e Node. Com o Vinki, estamos transformando a experiência de compras online, oferecendo aos nossos clientes uma interface elegante e recursos avançados."
              ghLink="https://github.com/mwantony/vinki"
              demoLink="https://www.vinki.com.br"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Bem-vindo ao meu Portfolio Pessoal!

              Este é o lugar onde você pode explorar meu trabalho e conhecer mais sobre minha jornada profissional. Criei este portfolio com o poderoso framework React para proporcionar uma experiência interativa e envolvente."
              ghLink="https://github.com/mwantony/portfolio"
              demoLink="https://antonymazierowarken.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog"
              description="Este é o meu espaço pessoal onde compartilho minhas ideias, pensamentos e conhecimentos sobre diversos tópicos. O que torna este blog especial é que foi construído com a poderosa tecnologia Next.js."
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

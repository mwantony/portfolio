import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import blog from "../../Assets/Projects/blog.png";
import tyra from "../../Assets/Projects/tyra.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projetos() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Projetos <strong className="purple">recentes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Alguns dos projetos em que trabalhei recentemente.{" "}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tyra}
              isBlog={false}
              title="Tyra"
              description="Bem-vindo ao repositório oficial do Tyra, um sistema web moderno desenvolvido com React e PHP Laravel. Com o Tyra, estamos transformando a forma como os restaurantes entregam e atendem seus clientes."
              ghLink="https://github.com/mwantony/tyra-frontend"
              demoLink="https://tyra.com.br"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Bem-vindo ao meu Portfólio Pessoal! Aqui você pode explorar meu trabalho e aprender mais sobre minha trajetória profissional. Criei este portfólio usando o poderoso framework React para proporcionar uma experiência interativa e envolvente."
              ghLink="https://github.com/mwantony/portfolio"
              demoLink="https://antonymazierowarken.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog"
              description="Este é meu espaço pessoal, onde compartilho minhas ideias, pensamentos e conhecimento sobre diversos tópicos. O que torna este blog especial é que ele foi criado com a poderosa tecnologia Next.js."
              ghLink="https://github.com/mwantony/blog"
              demoLink="https://antonymwblog.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projetos;

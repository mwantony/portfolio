import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, meu nome é{" "}
            <span className="purple">Antony Maziero Warken</span> e sou de{" "}
            <span className="purple">Santa Catarina, Brasil</span>.
            <br />
            Trabalhei como desenvolvedor em algumas empresas, sempre buscando
            aprender mais e aprimorar minhas habilidades.
            <br />
            <br />
            Tenho inglês fluente, o que me permite trabalhar em projetos
            internacionais.
            <br />
            <br />
            Sou apaixonado por criar soluções inovadoras e busco constantemente
            novas oportunidades de crescimento profissional. Vamos nos conectar
            e explorar como podemos colaborar!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

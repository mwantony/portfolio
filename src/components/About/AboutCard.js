import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu sou <span className="purple">Antony Maziero Warken </span>
            de <span className="purple"> Santa Catarina, Brasil.</span>
            <br />
            Sou um estudante do segundo ano do Ensino Médio
            <br />
            Além disso, atualmente sou CEO de um e-commerce chamado{" "}
            <a href="https://www.vinki.com.br" target="_blank" rel="noreferrer">
              Vinki
            </a>
            .
            <br />
            <br />
            Além de codar, aqui tem algumas atividades que eu amo fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ler
            </li>
            <li className="about-activity">
              <ImPointRight /> Finanças
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "O investimento mais importante que você pode fazer é em você mesmo."{" "}
          </p>
          <footer className="blockquote-footer">Warren Buffett</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

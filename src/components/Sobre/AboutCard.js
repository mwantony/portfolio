import React from "react";
import Card from "react-bootstrap/Card";
import { useLanguage } from "../../context/LanguageContext";

function AboutCard() {
  const { t } = useLanguage();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t.about.bio1}{" "}
            <span className="purple">{t.about.bioName}</span> {t.about.bioFrom}{" "}
            <span className="purple">{t.about.bioLocation}</span>.
            <br />
            {t.about.bioP2}
            <br />
            <br />
            {t.about.bioP3}
            <br />
            <br />
            {t.about.bioP4}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

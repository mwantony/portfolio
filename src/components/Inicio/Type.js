import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../context/LanguageContext";

function Type() {
  const { language, t } = useLanguage();

  return (
    <Typewriter
      key={language}
      options={{
        strings: t.home.typeStrings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

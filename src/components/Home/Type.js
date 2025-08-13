import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor Web",
          "Freelancer",
          "Desenvolvedor ReactJS",
          "Desenvolvedor NextJS",
          "Desenvolvedor NodeJS",
          "Desenvolvedor Full-Stack",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

import React, { createContext, useContext, useState } from "react";

const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      resume: "Resumo",
    },
    home: {
      greeting: "Olá!",
      im: "Eu sou",
      typeStrings: [
        "Desenvolvedor Web",
        "Freelancer",
        "Desenvolvedor ReactJS",
        "Desenvolvedor NextJS",
        "Desenvolvedor NodeJS",
        "Desenvolvedor Full-Stack",
      ],
      whoTitle1: "QUEM",
      whoTitle2: "SOU",
      whoTitle3: "EU?",
      bioP1: "Sou Antony Maziero Warken, desenvolvedor com experiência na criação de aplicações web e sistemas voltados para negócios.",
      bioP3: "Gosto de transformar ideias em produtos funcionais, aprender novas tecnologias e enfrentar desafios que me façam evoluir. Atualmente, busco novas oportunidades para aplicar minha experiência, ampliar meus conhecimentos e colaborar com projetos que gerem impacto real.",
      bioP4: "Também possuo inglês avançado e facilidade para aprender novas ferramentas e tecnologias.",
      connectTitle: "FALE COMIGO",
      connectSubtitle1: "Sinta-se à vontade para",
      connectSubtitleHighlight: " se conectar ",
      connectSubtitle2: "comigo",
    },
    about: {
      title1: "Quem",
      title2: "sou",
      title3: "eu?",
      bio1: "Olá, meu nome é",
      bioName: "Antony Maziero Warken",
      bioFrom: "e sou de",
      bioLocation: "Santa Catarina, Brasil",
      bioP2: "Trabalhei como desenvolvedor em algumas empresas, sempre buscando aprender mais e aprimorar minhas habilidades.",
      bioP3: "Tenho inglês fluente, o que me permite trabalhar em projetos internacionais.",
      bioP4: "Sou apaixonado por criar soluções inovadoras e busco constantemente novas oportunidades de crescimento profissional. Vamos nos conectar e explorar como podemos colaborar!",
      skillsTitle1: "Habilidades",
      skillsTitle2: "Profissionais",
      toolsTitle1: "Ferramentas",
      toolsTitle2: "que uso",
      githubDays1: "Dias",
      githubDays2: "contribuídos",
    },
    resume: {
      download: "Baixar",
    },
    footer: {
      developedBy: "Desenvolvido por",
      copyright: "Copyright ©",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      resume: "Resume",
    },
    home: {
      greeting: "Hi there!",
      im: "I am",
      typeStrings: [
        "Web Developer",
        "Freelancer",
        "ReactJS Developer",
        "NextJS Developer",
        "NodeJS Developer",
        "Full-Stack Developer",
      ],
      whoTitle1: "WHO",
      whoTitle2: "AM",
      whoTitle3: "I?",
      bioP1: "I'm Antony Maziero Warken, a developer experienced in building web applications and business-oriented systems.",
      bioP3: "I enjoy turning ideas into functional products, learning new technologies, and taking on challenges that push me to grow. Currently, I am seeking new opportunities to apply my experience, expand my knowledge, and collaborate on high-impact projects.",
      bioP4: "I also have advanced English proficiency and great agility in learning new tools and technologies.",
      connectTitle: "FIND ME ON",
      connectSubtitle1: "Feel free to",
      connectSubtitleHighlight: " connect ",
      connectSubtitle2: "with me",
    },
    about: {
      title1: "Who",
      title2: "I",
      title3: "am?",
      bio1: "Hello, my name is",
      bioName: "Antony Maziero Warken",
      bioFrom: "and I am from",
      bioLocation: "Santa Catarina, Brazil",
      bioP2: "I have worked as a developer at various companies, always seeking to learn more and sharpen my skills.",
      bioP3: "I am fluent in English, which allows me to work comfortably on international projects.",
      bioP4: "I am passionate about building innovative solutions and constantly looking for new opportunities for professional growth. Let's connect and explore how we can collaborate!",
      skillsTitle1: "Professional",
      skillsTitle2: "Skillset",
      toolsTitle1: "Tools",
      toolsTitle2: "I use",
      githubDays1: "Days",
      githubDays2: "I Code",
    },
    resume: {
      download: "Download",
    },
    footer: {
      developedBy: "Designed & Developed by",
      copyright: "Copyright ©",
    },
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_lang");
      return saved === "en" || saved === "pt" ? saved : "pt";
    } catch (e) {
      return "pt";
    }
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("portfolio_lang", lang);
    } catch (e) {}
  };

  const t = translations[language] || translations.pt;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

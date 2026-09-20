import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Resumo from "./components/Resumo/ResumeNew";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Inicio from "./components/Inicio/Inicio";
import SpectrumBackground from "./components/SpectrumBackground";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let lenisInstance = null;
    let rafId = null;

    import("lenis")
      .then(({ default: Lenis }) => {
        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        function raf(time) {
          lenisInstance.raf(time);
          rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);
      })
      .catch((err) => {
        console.warn("Lenis smooth scroll:", err);
      });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <SpectrumBackground />
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/resumo" element={<Resumo />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

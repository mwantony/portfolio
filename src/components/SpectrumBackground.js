import React, { useEffect, useState } from "react";
import "./SpectrumBackground.css";

function SpectrumBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 25 });

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const x = Math.round((e.clientX / window.innerWidth) * 100);
        const y = Math.round((e.clientY / window.innerHeight) * 100);
        setMousePos({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="spectrum-wrapper" aria-hidden="true">
      <div
        className="spectrum-mouse-spotlight"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 210, 255, 0.04), rgba(37, 99, 235, 0.025), transparent 65%)`,
        }}
      />
      <div className="spectrum-orb orb-1" />
      <div className="spectrum-orb orb-2" />
      <div className="spectrum-orb orb-3" />
      <div className="spectrum-orb orb-4" />
      <div className="spectrum-orb orb-5" />
      <div className="spectrum-grid-overlay" />
      <div className="spectrum-beam" />
    </div>
  );
}

export default SpectrumBackground;

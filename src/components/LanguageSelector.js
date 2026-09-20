import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./LanguageSelector.css";

export const BrazilFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 720 504"
    width="21"
    height="15"
    className="flag-icon"
    style={{ display: "block" }}
    aria-label="Bandeira do Brasil"
  >
    <rect width="720" height="504" fill="#009b3a" rx="8" />
    <polygon points="360,40 680,252 360,464 40,252" fill="#fedf00" />
    <circle cx="360" cy="252" r="120" fill="#002776" />
    <path
      d="M 242 260 A 130 130 0 0 0 478 244 A 120 120 0 0 1 242 260"
      fill="#ffffff"
    />
  </svg>
);

export const USAFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 741 390"
    width="21"
    height="15"
    className="flag-icon"
    style={{ display: "block" }}
    aria-label="United States Flag"
  >
    <rect width="741" height="390" fill="#b22234" rx="8" />
    <path
      d="M0,45H741 M0,105H741 M0,165H741 M0,225H741 M0,285H741 M0,345H741"
      stroke="#ffffff"
      strokeWidth="30"
    />
    <rect width="296" height="210" fill="#3c3b6e" rx="4" />
    <g fill="#ffffff">
      <circle cx="50" cy="35" r="9" />
      <circle cx="115" cy="35" r="9" />
      <circle cx="180" cy="35" r="9" />
      <circle cx="245" cy="35" r="9" />
      <circle cx="82" cy="70" r="9" />
      <circle cx="147" cy="70" r="9" />
      <circle cx="212" cy="70" r="9" />
      <circle cx="50" cy="105" r="9" />
      <circle cx="115" cy="105" r="9" />
      <circle cx="180" cy="105" r="9" />
      <circle cx="245" cy="105" r="9" />
      <circle cx="82" cy="140" r="9" />
      <circle cx="147" cy="140" r="9" />
      <circle cx="212" cy="140" r="9" />
      <circle cx="50" cy="175" r="9" />
      <circle cx="115" cy="175" r="9" />
      <circle cx="180" cy="175" r="9" />
      <circle cx="245" cy="175" r="9" />
    </g>
  </svg>
);

const ChevronIcon = ({ className = "" }) => (
  <svg
    className={`lang-chevron ${className}`}
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CheckIcon = ({ className = "" }) => (
  <svg
    className={`lang-check-icon ${className}`}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const languages = [
  { code: "pt", label: "Português", shortLabel: "PT", Flag: BrazilFlag },
  { code: "en", label: "English", shortLabel: "EN", Flag: USAFlag },
];

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang =
    languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="custom-lang-selector" ref={dropdownRef}>
      <button
        type="button"
        className={`lang-trigger-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Selecionar Idioma"
      >
        <span className="lang-flag-wrapper">
          <currentLang.Flag />
        </span>
        <span className="lang-code-text">{currentLang.shortLabel}</span>
        <ChevronIcon className={isOpen ? "rotate" : ""} />
      </button>

      {isOpen && (
        <div className="lang-dropdown-menu" role="menu">
          {languages.map(({ code, label, shortLabel, Flag }) => {
            const isSelected = code === language;
            return (
              <button
                key={code}
                type="button"
                className={`lang-option-item ${isSelected ? "selected" : ""}`}
                onClick={() => handleSelect(code)}
                role="menuitem"
              >
                <span className="lang-option-flag">
                  <Flag />
                </span>
                <span className="lang-option-name">{label}</span>
                <span className="lang-option-badge">{shortLabel}</span>
                {isSelected && <CheckIcon />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;

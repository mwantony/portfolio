import { createContext, useContext, useEffect, useState } from 'react';
import ptTranslations from '../locales/pt.json';
import enTranslations from '../locales/en.json';

const translations = {
  'pt-BR': ptTranslations,
  en: enTranslations,
};

const LanguageContext = createContext(null);

// Deep-get translation value by dot-path key e.g. "hero.title"
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    // 1. Check localStorage immediately to avoid FOUC
    const stored = localStorage.getItem('portfolio-lang');
    if (stored && translations[stored]) return stored;
    // 2. Browser language fallback
    const browserLang = navigator.language;
    if (browserLang?.startsWith('pt')) return 'pt-BR';
    return 'en';
  });

  const [isDetecting, setIsDetecting] = useState(false);

  useEffect(() => {
    // IP detection only when no stored preference exists
    const stored = localStorage.getItem('portfolio-lang');
    if (stored) return;

    setIsDetecting(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    fetch('https://ipwho.is/', { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        clearTimeout(timeout);
        if (data?.country_code === 'BR') {
          setLang('pt-BR');
          localStorage.setItem('portfolio-lang', 'pt-BR');
        } else {
          localStorage.setItem('portfolio-lang', 'en');
        }
      })
      .catch(() => {
        // Silently fail — keep the browser-detected lang
        clearTimeout(timeout);
      })
      .finally(() => setIsDetecting(false));

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  const switchLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  };

  // Translation function: t('hero.title') or t('nav.home')
  const t = (key) => {
    const value = getNestedValue(translations[lang], key);
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLang, t, isDetecting }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

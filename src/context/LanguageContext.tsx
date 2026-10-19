import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../types';
import { detectUserLanguage, persistLanguagePreference } from '../services/ipLocation';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isDetecting: boolean;
  detectionSource: 'storage' | 'ip' | 'browser' | 'manual';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<Language>('pt');
  const [isDetecting, setIsDetecting] = useState<boolean>(true);
  const [detectionSource, setDetectionSource] = useState<'storage' | 'ip' | 'browser' | 'manual'>('storage');

  useEffect(() => {
    let isMounted = true;

    const initLanguage = async () => {
      try {
        const { language: detectedLang, source } = await detectUserLanguage();
        if (isMounted) {
          setLanguageState(detectedLang);
          setDetectionSource(source);
          i18n.changeLanguage(detectedLang);
          document.documentElement.lang = detectedLang === 'pt' ? 'pt-BR' : 'en';
        }
      } catch (err) {
        console.error('Error during automatic language detection:', err);
      } finally {
        if (isMounted) {
          setIsDetecting(false);
        }
      }
    };

    initLanguage();

    return () => {
      isMounted = false;
    };
  }, [i18n]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    setDetectionSource('manual');
    persistLanguagePreference(newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang === 'pt' ? 'pt-BR' : 'en';
  };

  const toggleLanguage = () => {
    const nextLang = language === 'pt' ? 'en' : 'pt';
    setLanguage(nextLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isDetecting,
        detectionSource,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

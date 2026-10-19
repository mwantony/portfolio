import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage, isDetecting } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="flex items-center rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-0.5 text-xs font-mono">
      <div className="pl-1.5 pr-1 text-txt-light-muted dark:text-txt-dark-muted hidden sm:block">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <button
        onClick={() => setLanguage('pt')}
        type="button"
        disabled={isDetecting}
        className={`relative px-2 py-1 rounded font-medium transition-colors duration-150 ${
          language === 'pt'
            ? 'text-white'
            : 'text-txt-light-secondary dark:text-txt-dark-secondary hover:text-txt-light-primary dark:hover:text-txt-dark-primary'
        }`}
        aria-label="Selecionar Português"
      >
        {language === 'pt' && (
          <motion.div
            layoutId="lang-pill"
            className="absolute inset-0 bg-accent-600 dark:bg-accent-500 rounded"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        <span className="relative z-10">PT</span>
      </button>

      <button
        onClick={() => setLanguage('en')}
        type="button"
        disabled={isDetecting}
        className={`relative px-2 py-1 rounded font-medium transition-colors duration-150 ${
          language === 'en'
            ? 'text-white'
            : 'text-txt-light-secondary dark:text-txt-dark-secondary hover:text-txt-light-primary dark:hover:text-txt-dark-primary'
        }`}
        aria-label="Select English"
      >
        {language === 'en' && (
          <motion.div
            layoutId="lang-pill"
            className="absolute inset-0 bg-accent-600 dark:bg-accent-500 rounded"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  );
};

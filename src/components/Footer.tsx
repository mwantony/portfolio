import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-light dark:border-border-dark py-12 bg-surface-light/40 dark:bg-canvas-dark/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Brand & Mission (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 font-mono text-sm font-semibold">
              <div className="w-6 h-6 rounded-md bg-accent-500/10 text-accent-600 dark:text-accent-400 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="text-txt-light-primary dark:text-txt-dark-primary font-bold">antony</span>
              <span className="text-accent-500 font-bold">.dev</span>
            </div>
            <p className="text-xs text-txt-light-secondary dark:text-txt-dark-secondary max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-txt-light-primary dark:text-txt-dark-primary font-semibold">
              {t('footer.quickLinks')}
            </div>
            <ul className="space-y-1.5 text-xs text-txt-light-secondary dark:text-txt-dark-secondary">
              <li>
                <a href="#hero" className="hover:text-accent-500 transition-colors">{t('nav.home')}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent-500 transition-colors">{t('nav.about')}</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent-500 transition-colors">{t('nav.skills')}</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent-500 transition-colors">{t('nav.projects')}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-500 transition-colors">{t('nav.contact')}</a>
              </li>
            </ul>
          </div>

          {/* Active Settings & Back To Top (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-txt-light-primary dark:text-txt-dark-primary font-semibold">
              {t('footer.activeSettings')}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2 py-1 rounded bg-canvas-light dark:bg-canvas-dark border border-border-light dark:border-border-dark text-txt-light-secondary dark:text-txt-dark-secondary">
                {t('footer.themeLabel')} <strong className="text-txt-light-primary dark:text-txt-dark-primary uppercase">{theme}</strong>
              </span>
              <span className="px-2 py-1 rounded bg-canvas-light dark:bg-canvas-dark border border-border-light dark:border-border-dark text-txt-light-secondary dark:text-txt-dark-secondary">
                {t('footer.langLabel')} <strong className="text-txt-light-primary dark:text-txt-dark-primary uppercase">{language}</strong>
              </span>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-txt-light-secondary dark:text-txt-dark-secondary hover:text-accent-500 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t('footer.backToTop')}</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-txt-light-secondary dark:text-txt-dark-secondary">
          <div>
            &copy; {new Date().getFullYear()} Antony. {t('footer.rights')}
          </div>
          <div className="font-mono text-[11px]">
            {t('footer.builtWith')}
          </div>
        </div>
      </div>
    </footer>
  );
};

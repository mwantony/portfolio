import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

const navLinks = [
  { href: '#hero', key: 'home' },
  { href: '#about', key: 'about' },
  { href: '#skills', key: 'skills' },
  { href: '#projects', key: 'projects' },
  { href: '#contact', key: 'contact' },
];

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-border-light/80 dark:border-border-dark/80 shadow-sm py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group font-mono text-sm tracking-tight font-semibold"
          >
            <div className="w-8 h-8 rounded-lg bg-accent-500/10 dark:bg-accent-500/20 text-accent-600 dark:text-accent-400 border border-accent-500/20 flex items-center justify-center transition-transform group-hover:scale-105">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex items-center">
              <span className="text-txt-light-primary dark:text-txt-dark-primary font-bold">antony</span>
              <span className="text-accent-500 font-bold">.dev</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1 animate-pulse" title={t('nav.available')} />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-border-light/80 dark:border-border-dark/80 bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur-md px-3 py-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.key;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1 text-xs font-medium rounded-full transition-colors duration-150 ${
                    isActive
                      ? 'text-accent-600 dark:text-accent-400 font-semibold'
                      : 'text-txt-light-secondary dark:text-txt-dark-secondary hover:text-txt-light-primary dark:hover:text-txt-dark-primary'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-dot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-500"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Language, Theme, Contact CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-txt-light-primary text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity"
            >
              <span>{t('nav.contact')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-txt-light-primary dark:text-txt-dark-primary focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden border-b border-border-light dark:border-border-dark glass-panel px-4 py-4"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === link.key
                      ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400 font-semibold'
                      : 'text-txt-light-secondary dark:text-txt-dark-secondary'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              <div className="pt-2 border-t border-border-light dark:border-border-dark flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full text-center py-2 rounded-md bg-txt-light-primary text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium"
                >
                  {t('nav.contact')}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

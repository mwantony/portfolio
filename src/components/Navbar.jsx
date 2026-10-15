import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const NAV_ITEMS = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'resume', href: '#resume' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, switchLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection observer for active nav link
  useEffect(() => {
    const sections = NAV_ITEMS.map(i => document.querySelector(i.href));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close lang menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="section-inner">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}>
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNavClick('#home'); }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.2rem',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 800,
              fontSize: '1rem',
            }}>A</span>
            <span style={{ color: 'var(--text-primary)' }}>Antony</span>
            <span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop nav links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {NAV_ITEMS.map(item => (
              <a
                key={item.key}
                href={item.href}
                onClick={e => { e.preventDefault(); handleNavClick(item.href); }}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: activeSection === item.key ? 'var(--accent)' : 'var(--text-secondary)',
                  background: activeSection === item.key ? 'var(--accent-glow)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  if (activeSection !== item.key) e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={e => {
                  if (activeSection !== item.key) e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Language switcher */}
            <div ref={langRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setLangMenuOpen(o => !o)}
                aria-label="Switch language"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  border: '1.5px solid var(--border-color)',
                  background: 'transparent',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
              >
                <Globe size={14} />
                {lang === 'pt-BR' ? 'PT' : 'EN'}
              </button>
              {langMenuOpen && (
                <div style={{
                  position: 'absolute',
                  top: '110%',
                  right: 0,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-card)',
                  overflow: 'hidden',
                  zIndex: 200,
                  minWidth: '120px',
                }}>
                  {['pt-BR', 'en'].map(l => (
                    <button
                      key={l}
                      onClick={() => { switchLang(l); setLangMenuOpen(false); }}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '10px 16px',
                        textAlign: 'left',
                        background: lang === l ? 'var(--accent-glow)' : 'transparent',
                        color: lang === l ? 'var(--accent)' : 'var(--text-secondary)',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: lang === l ? 600 : 400,
                        transition: 'background 0.15s',
                      }}
                    >
                      {l === 'pt-BR' ? '🇧🇷 Português' : '🇺🇸 English'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t('theme.toggle_dark') : t('theme.toggle_light')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '10px',
                border: '1.5px solid var(--border-color)',
                background: 'transparent',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '10px',
                border: '1.5px solid var(--border-color)',
                background: 'transparent',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--bg-card)',
          borderTop: '1px solid var(--border-color)',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          {NAV_ITEMS.map(item => (
            <a
              key={item.key}
              href={item.href}
              onClick={e => { e.preventDefault(); handleNavClick(item.href); }}
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                color: activeSection === item.key ? 'var(--accent)' : 'var(--text-primary)',
                background: activeSection === item.key ? 'var(--accent-glow)' : 'transparent',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

import { useEffect, useRef } from 'react';
import { ArrowDown, Folder, FileText } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { useLanguage } from '../context/LanguageContext';

const TECH_BADGES = ['React', 'Node.js', 'Laravel', 'Angular', 'Supabase', 'TypeScript', 'PostgreSQL', 'Docker'];

export default function Hero() {
  const { t } = useLanguage();
  const badgeRef = useRef(null);

  // Stagger animation on mount
  useEffect(() => {
    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + i * 120);
    });
  }, []);

  const scrollToProjects = () =>
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToResume = () =>
    document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: '64px',
    }}>
      {/* Background glow orbs */}
      <div className="glow-orb" style={{
        width: 600,
        height: 600,
        background: 'var(--accent)',
        top: '-10%',
        right: '-15%',
        opacity: 0.12,
      }} />
      <div className="glow-orb" style={{
        width: 400,
        height: 400,
        background: '#38bdf8',
        bottom: '5%',
        left: '-10%',
        opacity: 0.08,
      }} />

      {/* Grid pattern overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `radial-gradient(circle, var(--border-color) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1, paddingTop: '40px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '780px' }}>

          {/* Availability badge */}
          <div className="hero-animate" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '999px',
            background: 'var(--accent-glow)',
            border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)',
            marginBottom: '28px',
          }}>
            <span style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#22c55e',
              animation: 'pulseRing 2s infinite',
              display: 'block',
            }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)' }}>
              {t('hero.greeting')} Antony — Available for hire
            </span>
          </div>

          {/* Main heading */}
          <h1 className="hero-animate" style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            margin: '0 0 20px',
            letterSpacing: '-0.03em',
          }}>
            {t('hero.name').split(' ').slice(0, 1).join(' ')}{' '}
            <span className="gradient-text">
              {t('hero.name').split(' ').slice(1).join(' ')}
            </span>
          </h1>

          {/* Title */}
          <div className="hero-animate" style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <span style={{
              width: 32,
              height: 2,
              background: 'var(--accent)',
              display: 'inline-block',
              flexShrink: 0,
            }} />
            {t('hero.title')}
          </div>

          {/* Subtitle */}
          <p className="hero-animate" style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '540px',
            margin: '0 0 36px',
          }}>
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="hero-animate" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '56px' }}>
            <button className="btn-primary" onClick={scrollToProjects}>
              <Folder size={18} />
              {t('hero.cta_projects')}
            </button>
            <button className="btn-secondary" onClick={scrollToResume}>
              <FileText size={18} />
              {t('hero.cta_resume')}
            </button>
          </div>

          {/* Tech badges */}
          <div className="hero-animate" style={{ marginBottom: '48px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Tech Stack
            </p>
            <div ref={badgeRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {TECH_BADGES.map((tech, i) => (
                <span
                  key={tech}
                  className="tag"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social links row */}
          <div className="hero-animate" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="https://github.com/mwantony"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
            <GitHubIcon size={18} />
              mwantony
            </a>
            <span style={{ color: 'var(--border-color)' }}>•</span>
            <a
              href="https://linkedin.com/in/antonymazierowarken"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
            <LinkedInIcon size={18} />
              antonymazierowarken
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-muted)',
          animation: 'float 3s ease-in-out infinite',
        }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {t('hero.scroll')}
          </span>
          <ArrowDown size={16} />
        </div>
      </div>
    </div>
  );
}

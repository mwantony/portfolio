import { useEffect, useRef, useState } from 'react';
import { Download, ExternalLink, FileText, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GDOC_PREVIEW_URL = 'https://docs.google.com/document/d/1Ah5W49Ago4xYMoYqBy5rbqF3b62g_4Dzr2diXvb0A28/preview';
const GDOC_PDF_URL = 'https://docs.google.com/document/d/1Ah5W49Ago4xYMoYqBy5rbqF3b62g_4Dzr2diXvb0A28/export?format=pdf';
const GDOC_URL = 'https://docs.google.com/document/d/1Ah5W49Ago4xYMoYqBy5rbqF3b62g_4Dzr2diXvb0A28/view';

function RevealOnScroll({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }, delay);
      }
    }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} style={{
      opacity: 0,
      transform: 'translateY(20px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function Resume() {
  const { t } = useLanguage();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
      <div className="divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />

      <div className="glow-orb" style={{
        width: 400,
        height: 400,
        background: 'var(--accent)',
        top: '10%',
        left: '-8%',
        opacity: 0.07,
      }} />

      <div className="section-inner">
        <RevealOnScroll>
          <p className="section-label">{t('resume.subtitle')}</p>
          <h2 className="section-title">{t('resume.title')}</h2>
        </RevealOnScroll>

        {/* Action buttons */}
        <RevealOnScroll delay={100} style={{ marginTop: '32px', marginBottom: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href={GDOC_PDF_URL}
            download="Antony_Maziero_Warken_CV.pdf"
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            <Download size={18} />
            {t('resume.download')}
          </a>
          <a
            href={GDOC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ textDecoration: 'none' }}
          >
            <ExternalLink size={18} />
            {t('resume.open_docs')}
          </a>
        </RevealOnScroll>

        {/* Iframe embed */}
        <RevealOnScroll delay={200}>
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-card)',
            boxShadow: 'var(--shadow-card)',
            position: 'relative',
          }}>
            {/* Loading state */}
            {!iframeLoaded && (
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                background: 'var(--bg-card)',
                zIndex: 10,
              }}>
                <Loader2 size={32} style={{ color: 'var(--accent)', animation: 'spin 1s linear infinite' }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{t('resume.loading')}</p>
                <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
              </div>
            )}

            {/* Header bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              borderBottom: '1px solid var(--border-color)',
              background: 'var(--bg-secondary)',
            }}>
              <FileText size={16} style={{ color: 'var(--accent)' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Antony Maziero Warken — Curriculum Vitae
              </span>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', opacity: 0.7 }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', opacity: 0.7 }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', opacity: 0.7 }} />
              </div>
            </div>

            {/* Mobile fallback */}
            {isMobile ? (
              <div style={{
                padding: '48px 24px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
              }}>
                <FileText size={48} style={{ color: 'var(--text-muted)' }} />
                <p style={{ color: 'var(--text-secondary)', maxWidth: '380px' }}>
                  {t('resume.mobile_note')}
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <a href={GDOC_PDF_URL} download="Antony_Maziero_Warken_CV.pdf" className="btn-primary" style={{ textDecoration: 'none' }}>
                    <Download size={16} /> {t('resume.download')}
                  </a>
                  <a href={GDOC_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textDecoration: 'none' }}>
                    <ExternalLink size={16} /> {t('resume.open_docs')}
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                src={GDOC_PREVIEW_URL}
                title="Resume / Currículo - Antony Maziero Warken"
                width="100%"
                height="820"
                style={{ display: 'block', border: 'none' }}
                onLoad={() => setIframeLoaded(true)}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            )}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

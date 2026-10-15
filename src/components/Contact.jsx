import { useEffect, useRef } from 'react';
import { Mail, Link, FolderGit2, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WHATSAPP_NUMBER = '55XXXXXXXXXXX'; // Replace with actual number

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
    }, { threshold: 0.08 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease', ...style }}>
      {children}
    </div>
  );
}

function ContactCard({ icon, label, value, href, delay }) {
  return (
    <RevealOnScroll delay={delay}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '20px 24px',
          borderRadius: '14px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          textDecoration: 'none',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
          boxShadow: 'var(--shadow-card)',
          color: 'inherit',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
          e.currentTarget.style.borderColor = 'var(--accent)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--shadow-card)';
          e.currentTarget.style.borderColor = 'var(--border-color)';
        }}
      >
        {/* Icon */}
        <div style={{
          width: 48,
          height: 48,
          borderRadius: '14px',
          background: 'var(--accent-glow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent)',
          flexShrink: 0,
        }}>
          {icon}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>
            {label}
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {value}
          </div>
        </div>

        <ArrowUpRight size={18} style={{ color: 'var(--text-muted)', flexShrink: 0, transition: 'color 0.2s' }} />
      </a>
    </RevealOnScroll>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const whatsappMsg = encodeURIComponent(t('contact.whatsapp_msg'));
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

  const contacts = [
    {
      icon: <Mail size={22} />,
      label: t('contact.email_label'),
      value: 'againplayi7@gmail.com',
      href: 'mailto:againplayi7@gmail.com',
      delay: 100,
    },
    {
      icon: <Link size={22} />,
      label: t('contact.linkedin_label'),
      value: 'antonymazierowarken',
      href: 'https://linkedin.com/in/antonymazierowarken',
      delay: 180,
    },
    {
      icon: <FolderGit2 size={22} />,
      label: t('contact.github_label'),
      value: 'github.com/mwantony',
      href: 'https://github.com/mwantony',
      delay: 260,
    },
    {
      icon: <MessageCircle size={22} />,
      label: t('contact.whatsapp_label'),
      value: 'WhatsApp',
      href: whatsappUrl,
      delay: 340,
    },
  ];

  return (
    <div className="section" style={{ position: 'relative' }}>
      <div className="glow-orb" style={{
        width: 500,
        height: 500,
        background: '#38bdf8',
        top: '0%',
        right: '-15%',
        opacity: 0.06,
      }} />

      <div className="section-inner">
        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Left: text */}
          <div>
            <RevealOnScroll>
              <p className="section-label">{t('contact.subtitle')}</p>
              <h2 className="section-title">{t('contact.title')}</h2>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontSize: '1rem',
                maxWidth: '420px',
                marginTop: '16px',
              }}>
                {t('contact.description')}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={150} style={{ marginTop: '40px' }}>
              <div style={{
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '24px',
                borderRadius: '16px',
                background: 'var(--accent-glow)',
                border: '1px solid color-mix(in srgb, var(--accent) 25%, transparent)',
              }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'pulseRing 2s infinite' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent)' }}>
                    Open to opportunities
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Freelance • Full-time • Remote
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {contacts.map((c) => (
              <ContactCard key={c.label} {...c} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}

import { Heart, Coffee, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '48px 0 32px',
    }}>
      <div className="section-inner">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '32px',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              marginBottom: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{
                width: 28,
                height: 28,
                borderRadius: '8px',
                background: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 800,
                fontSize: '0.875rem',
              }}>A</span>
              Antony Maziero Warken
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
              Full-Stack Developer
            </p>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { icon: <Github size={18} />, href: 'https://github.com/mwantony', label: 'GitHub' },
              { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/antonymazierowarken', label: 'LinkedIn' },
              { icon: <Mail size={18} />, href: 'mailto:againplayi7@gmail.com', label: 'Email' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  border: '1.5px solid var(--border-color)',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="divider" />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '24px',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
            © {currentYear} Antony Maziero Warken. {t('footer.rights')}
          </p>
          <p style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            {t('footer.made_with')}
            <Heart size={13} style={{ color: '#ef4444', fill: '#ef4444', margin: '0 2px' }} />
            {t('footer.and')}
            <Coffee size={13} style={{ margin: '0 2px' }} />
            {t('footer.coffee')}
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useRef } from 'react';
import {
  Code2, Server, Database, Cloud, Layers,
  Zap, Globe, Terminal, CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SKILLS = [
  { icon: <Code2 size={18} />, label: 'Frontend', items: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
  { icon: <Server size={18} />, label: 'Backend', items: ['Node.js', 'Laravel', 'PHP', 'Express', 'REST APIs'] },
  { icon: <Database size={18} />, label: 'Database', items: ['PostgreSQL', 'MySQL', 'Supabase', 'Redis', 'Prisma'] },
  { icon: <Cloud size={18} />, label: 'DevOps & Cloud', items: ['Docker', 'Git', 'CI/CD', 'Linux', 'Nginx'] },
];

const STATS = [
  { value: '3+', labelKey: 'about.years' },
  { value: '20+', labelKey: 'about.projects_count' },
  { value: '12+', labelKey: 'about.technologies' },
];

function useIntersection(ref, options = {}) {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }, { threshold: 0.1, ...options });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

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
    }, { threshold: 0.1 });
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

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
      <div className="divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />

      <div className="section-inner">
        {/* Header */}
        <RevealOnScroll>
          <p className="section-label">{t('about.subtitle')}</p>
          <h2 className="section-title">{t('about.title')}</h2>
        </RevealOnScroll>

        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '64px',
          marginTop: '48px',
          alignItems: 'start',
        }}>
          {/* Left: Bio */}
          <div>
            <RevealOnScroll delay={100}>
              {/* Avatar / Name card */}
              <div className="card" style={{
                padding: '32px',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}>
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, var(--accent), #a78bfa)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#fff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  flexShrink: 0,
                }}>
                  A
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700 }}>Antony Maziero Warken</h3>
                  <p style={{ margin: '4px 0 8px', color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
                    Full-Stack Developer
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="tag">🇧🇷 Brasil</span>
                    <span className="tag">Remote</span>
                    <span className="tag" style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', borderColor: 'rgba(34,197,94,0.2)' }}>
                      ● Open to work
                    </span>
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px', fontSize: '0.975rem' }}>
                {t('about.paragraph1')}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.975rem' }}>
                {t('about.paragraph2')}
              </p>
            </RevealOnScroll>

            {/* Stats */}
            <RevealOnScroll delay={200} style={{ marginTop: '32px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
              }}>
                {STATS.map((stat, i) => (
                  <div key={i} className="card" style={{ padding: '20px 16px', textAlign: 'center' }}>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--accent)',
                      fontFamily: "'Space Grotesk', sans-serif",
                      lineHeight: 1,
                      marginBottom: '6px',
                    }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                      {t(stat.labelKey)}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Skills grid */}
          <div>
            <RevealOnScroll delay={150}>
              <p className="section-label" style={{ marginBottom: '20px' }}>{t('about.skills_title')}</p>
            </RevealOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {SKILLS.map((skill, i) => (
                <RevealOnScroll key={skill.label} delay={200 + i * 80}>
                  <div className="card" style={{ padding: '24px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '16px',
                    }}>
                      <div style={{
                        width: 36,
                        height: 36,
                        borderRadius: '10px',
                        background: 'var(--accent-glow)',
                        color: 'var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {skill.icon}
                      </div>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{skill.label}</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {skill.items.map(item => (
                        <li key={item} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.82rem',
                          color: 'var(--text-secondary)',
                        }}>
                          <CheckCircle2 size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}

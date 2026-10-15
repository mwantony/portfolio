import { ExternalLink, Star } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import { useLanguage } from '../context/LanguageContext';

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
    <div ref={ref} style={{
      opacity: 0,
      transform: 'translateY(24px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const projects = t('projects.items') || [];

  return (
    <div className="section" style={{ position: 'relative' }}>
      {/* Accent glow */}
      <div className="glow-orb" style={{
        width: 500,
        height: 500,
        background: '#a78bfa',
        bottom: '-10%',
        right: '-10%',
        opacity: 0.07,
      }} />

      <div className="section-inner">
        <RevealOnScroll>
          <p className="section-label">{t('projects.subtitle')}</p>
          <h2 className="section-title">{t('projects.title')}</h2>
        </RevealOnScroll>

        {/* Featured projects */}
        <div style={{ marginTop: '48px' }}>
          {/* Big featured 2 cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '24px',
          }}>
            {projects.filter(p => p.featured).map((project, i) => (
              <RevealOnScroll key={project.id} delay={i * 100}>
                <ProjectCard project={project} t={t} featured />
              </RevealOnScroll>
            ))}
          </div>

          {/* Other projects smaller grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {projects.filter(p => !p.featured).map((project, i) => (
              <RevealOnScroll key={project.id} delay={i * 80}>
                <ProjectCard project={project} t={t} />
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* View all */}
        <RevealOnScroll delay={200} style={{ marginTop: '48px', textAlign: 'center' }}>
          <a
            href="https://github.com/mwantony"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex' }}
          >
            <GitHubIcon size={18} />
            {t('projects.view_all')}
          </a>
        </RevealOnScroll>
      </div>
    </div>
  );
}

function ProjectCard({ project, t, featured = false }) {
  return (
    <div className="card" style={{
      padding: featured ? '32px' : '24px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, var(--accent), #a78bfa)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
      }} className="card-accent-line" />

      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '16px',
        gap: '12px',
      }}>
        <div>
          {featured && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginBottom: '6px',
            }}>
              <Star size={12} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Featured</span>
            </div>
          )}
          <h3 style={{
            margin: 0,
            fontSize: featured ? '1.3rem' : '1.05rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}>
            {project.name}
          </h3>
        </div>

        {/* Action links */}
        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                border: '1.5px solid var(--border-color)',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              <GitHubIcon size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              style={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                border: '1.5px solid var(--border-color)',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '0.875rem',
        lineHeight: 1.75,
        flex: 1,
        margin: '0 0 20px',
      }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tags.map(tag => (
          <span key={tag} className="tag" style={{ fontSize: '0.7rem' }}>
            {tag}
          </span>
        ))}
      </div>

      <style>{`
        .card:hover .card-accent-line { opacity: 1 !important; }
      `}</style>
    </div>
  );
}

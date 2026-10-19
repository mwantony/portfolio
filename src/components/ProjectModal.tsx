import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, BarChart2 } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
            className="relative w-full max-w-3xl rounded-2xl modern-card shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col"
          >
            {/* Header image banner */}
            <div className="relative h-48 sm:h-64 w-full overflow-hidden shrink-0">
              <img
                src={project.image}
                alt={project.title[language]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Close Button */}
              <button
                onClick={onClose}
                type="button"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors focus:outline-none"
                aria-label={t('projects.closeModal')}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category & Title on Image */}
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-2.5 py-1 rounded text-[11px] font-mono uppercase font-semibold bg-accent-500 text-white mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {project.title[language]}
                </h3>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Full Description */}
              <p className="text-sm sm:text-base text-txt-light-secondary dark:text-txt-dark-secondary leading-relaxed">
                {project.fullDescription[language]}
              </p>

              {/* Stats / Impact Metrics if available */}
              {project.stats && project.stats.length > 0 && (
                <div className="p-4 rounded-xl bg-canvas-light dark:bg-canvas-dark border border-border-light dark:border-border-dark">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-txt-light-secondary dark:text-txt-dark-secondary mb-3">
                    <BarChart2 className="w-4 h-4 text-accent-500" />
                    <span>BENCHMARKS & PERFORMANCE</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-lg sm:text-xl font-extrabold text-accent-600 dark:text-accent-400">
                          {stat.value}
                        </div>
                        <div className="text-[11px] font-mono text-txt-light-secondary dark:text-txt-dark-secondary">
                          {stat.label[language]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-txt-light-primary dark:text-txt-dark-primary mb-3">
                  {t('projects.highlightsTitle')}
                </h4>
                <div className="space-y-2">
                  {project.highlights[language].map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-txt-light-secondary dark:text-txt-dark-secondary">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-txt-light-primary dark:text-txt-dark-primary mb-2.5">
                  Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-canvas-light dark:bg-canvas-dark border border-border-light dark:border-border-dark text-txt-light-primary dark:text-txt-dark-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="p-4 sm:p-6 border-t border-border-light dark:border-border-dark flex flex-wrap items-center justify-between gap-3 bg-canvas-light/50 dark:bg-canvas-dark/50">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-600 hover:bg-accent-700 text-white text-xs font-medium transition-colors"
                  >
                    <span>{t('projects.liveDemo')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-txt-light-primary dark:text-txt-dark-primary text-xs font-medium hover:border-accent-500 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{t('projects.viewCode')}</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                type="button"
                className="px-4 py-2 rounded-xl border border-border-light dark:border-border-dark text-txt-light-secondary dark:text-txt-dark-secondary text-xs hover:text-txt-light-primary dark:hover:text-txt-dark-primary transition-colors"
              >
                {t('projects.closeModal')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: t('projects.filter.all') },
    { key: 'fullstack', label: t('projects.filter.fullstack') },
    { key: 'frontend', label: t('projects.filter.frontend') },
    { key: 'backend', label: t('projects.filter.backend') },
  ];

  const filteredProjects = projectsData.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 border-t border-border-light dark:border-border-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent-500"></span>
              {t('projects.sectionTag')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-txt-light-primary dark:text-txt-dark-primary mb-3">
              {t('projects.title')}
            </h2>
            <p className="text-base sm:text-lg text-txt-light-secondary dark:text-txt-dark-secondary max-w-xl">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark self-start md:self-auto">
            {filterTabs.map((tab) => {
              const isSelected = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  type="button"
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isSelected
                      ? 'text-white'
                      : 'text-txt-light-secondary dark:text-txt-dark-secondary hover:text-txt-light-primary dark:hover:text-txt-dark-primary'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-project-filter"
                      className="absolute inset-0 bg-txt-light-primary dark:bg-accent-500 rounded-lg"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="modern-card rounded-2xl overflow-hidden flex flex-col group"
              >
                {/* Image Container with Hover Zoom & Badge */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative h-48 w-full overflow-hidden cursor-pointer bg-canvas-light dark:bg-canvas-dark"
                >
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-medium flex items-center gap-1.5">
                      <span>{t('projects.viewDetails')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase font-semibold bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md text-txt-light-primary dark:text-txt-dark-primary border border-border-light/60 dark:border-border-dark/60">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase font-semibold bg-accent-500 text-white flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        {t('projects.featuredBadge')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-bold text-txt-light-primary dark:text-txt-dark-primary hover:text-accent-500 transition-colors cursor-pointer mb-2"
                    >
                      {project.title[language]}
                    </h3>
                    <p className="text-xs text-txt-light-secondary dark:text-txt-dark-secondary line-clamp-3 mb-4 leading-relaxed">
                      {project.shortDescription[language]}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-canvas-light dark:bg-canvas-dark border border-border-light/70 dark:border-border-dark/70 text-txt-light-secondary dark:text-txt-dark-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-txt-light-secondary dark:text-txt-dark-secondary">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions Row */}
                    <div className="pt-3 border-t border-border-light/60 dark:border-border-dark/60 flex items-center justify-between text-xs">
                      <button
                        onClick={() => setSelectedProject(project)}
                        type="button"
                        className="text-accent-600 dark:text-accent-400 font-medium hover:underline flex items-center gap-1"
                      >
                        <span>{t('projects.viewDetails')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg border border-border-light dark:border-border-dark hover:border-accent-500 text-txt-light-secondary dark:text-txt-dark-secondary hover:text-txt-light-primary dark:hover:text-txt-dark-primary transition-colors"
                            aria-label={`${project.title[language]} GitHub`}
                            title="GitHub"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg border border-border-light dark:border-border-dark hover:border-accent-500 text-txt-light-secondary dark:text-txt-dark-secondary hover:text-txt-light-primary dark:hover:text-txt-dark-primary transition-colors"
                            aria-label={`${project.title[language]} Demo`}
                            title="Live Demo"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

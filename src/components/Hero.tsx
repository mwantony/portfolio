import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code2, Sparkles, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Subtle Modernist Grid & Radial Glow */}
      <div className="absolute inset-0 modern-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (8 cols) */}
          <motion.div
            className="lg:col-span-8 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status / Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md text-xs font-mono mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-txt-light-secondary dark:text-txt-dark-secondary">
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
              <span className="block text-txt-light-secondary dark:text-txt-dark-secondary text-lg sm:text-2xl font-mono font-medium mb-2">
                {t('hero.greeting')} <span className="text-txt-light-primary dark:text-txt-dark-primary font-bold">{t('hero.name')}</span>
              </span>
              <span className="text-txt-light-primary dark:text-txt-dark-primary">
                {t('hero.role')}
              </span>
            </h1>

            {/* High Impact Tagline & Bio */}
            <p className="text-lg sm:text-xl text-txt-light-primary dark:text-txt-dark-primary font-medium max-w-2xl mb-4 leading-relaxed">
              {t('hero.tagline')}
            </p>
            <p className="text-sm sm:text-base text-txt-light-secondary dark:text-txt-dark-secondary max-w-2xl mb-8 leading-relaxed">
              {t('hero.bio')}
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-txt-light-primary text-white dark:bg-white dark:text-zinc-950 font-medium text-sm shadow-sm hover:opacity-95 hover:shadow-md transition-all duration-200 group"
              >
                <span>{t('hero.ctaProjects')}</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-txt-light-primary dark:text-txt-dark-primary font-medium text-sm hover:border-accent-500 dark:hover:border-accent-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-accent-500" />
                <span>{t('hero.ctaContact')}</span>
              </a>

              {/* Social Link Badges */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-txt-light-secondary dark:text-txt-dark-secondary hover:text-txt-light-primary dark:hover:text-txt-dark-primary hover:border-accent-500 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-txt-light-secondary dark:text-txt-dark-secondary hover:text-txt-light-primary dark:hover:text-txt-dark-primary hover:border-accent-500 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Modernist Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border-light dark:border-border-dark w-full max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-txt-light-primary dark:text-txt-dark-primary">
                  5+
                </div>
                <div className="text-xs text-txt-light-secondary dark:text-txt-dark-secondary font-mono mt-0.5">
                  {t('hero.statExperience')}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-accent-600 dark:text-accent-400">
                  35+
                </div>
                <div className="text-xs text-txt-light-secondary dark:text-txt-dark-secondary font-mono mt-0.5">
                  {t('hero.statProjects')}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">
                  100%
                </div>
                <div className="text-xs text-txt-light-secondary dark:text-txt-dark-secondary font-mono mt-0.5">
                  {t('hero.statSatisfaction')}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Asymmetric Modernist Interactive Specimen (4 cols) */}
          <motion.div
            className="lg:col-span-4 hidden lg:flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tech Card Specimen */}
            <div className="modern-card rounded-2xl p-6 relative overflow-hidden shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-light dark:border-border-dark text-xs font-mono text-txt-light-secondary dark:text-txt-dark-secondary">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-accent-500" />
                  core_stack.json
                </span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px]">
                  ACTIVE
                </span>
              </div>

              <div className="font-mono text-xs space-y-2 leading-relaxed">
                <div className="text-txt-light-secondary dark:text-txt-dark-secondary">
                  <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                  <span className="text-accent-600 dark:text-accent-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-txt-light-primary dark:text-txt-dark-primary">frontend:</span>{' '}
                  <span className="text-amber-600 dark:text-amber-300">['React', 'TypeScript', 'Tailwind']</span>,
                </div>
                <div className="pl-4">
                  <span className="text-txt-light-primary dark:text-txt-dark-primary">backend:</span>{' '}
                  <span className="text-amber-600 dark:text-amber-300">['Supabase', 'Node.js', 'REST APIs']</span>,
                </div>
                <div className="pl-4">
                  <span className="text-txt-light-primary dark:text-txt-dark-primary">cloud & deploy:</span>{' '}
                  <span className="text-amber-600 dark:text-amber-300">['Vercel', 'PostgreSQL', 'Docker']</span>,
                </div>
                <div className="pl-4">
                  <span className="text-txt-light-primary dark:text-txt-dark-primary">design:</span>{' '}
                  <span className="text-amber-600 dark:text-amber-300">['Figma', 'UI/UX Design', 'Design Systems']</span>
                </div>
                <div className="text-txt-light-secondary dark:text-txt-dark-secondary">&#125;;</div>
              </div>
            </div>

            {/* Secondary Badge Card */}
            <div className="glass-panel rounded-2xl p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-txt-light-primary dark:text-txt-dark-primary">
                    Modern Stack Focus
                  </div>
                  <div className="text-[11px] text-txt-light-secondary dark:text-txt-dark-secondary">
                    React &bull; Supabase &bull; Vercel
                  </div>
                </div>
              </div>
              <Sparkles className="w-4 h-4 text-accent-500" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

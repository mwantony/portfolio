import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Layers, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { experienceData } from '../data/experience';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const pillars = [
    {
      icon: ShieldCheck,
      title: t('about.pillar1.title'),
      desc: t('about.pillar1.desc'),
    },
    {
      icon: Zap,
      title: t('about.pillar2.title'),
      desc: t('about.pillar2.desc'),
    },
    {
      icon: Layers,
      title: t('about.pillar3.title'),
      desc: t('about.pillar3.desc'),
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-border-light dark:border-border-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent-500"></span>
            {t('about.sectionTag')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-txt-light-primary dark:text-txt-dark-primary mb-3">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg text-txt-light-secondary dark:text-txt-dark-secondary max-w-2xl">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Narrative & Engineering Pillars (Asymmetric Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left: Professional Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-txt-light-secondary dark:text-txt-dark-secondary leading-relaxed">
            <p className="text-txt-light-primary dark:text-txt-dark-primary font-medium">
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
            <p className="text-sm sm:text-base border-l-2 border-accent-500 pl-4 italic text-txt-light-primary dark:text-txt-dark-primary">
              "{t('about.p3')}"
            </p>
          </div>

          {/* Right: Pillars / Value props (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="modern-card p-5 rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-txt-light-primary dark:text-txt-dark-primary mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-txt-light-secondary dark:text-txt-dark-secondary leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Career Evolution Timeline */}
        <div className="pt-10 border-t border-border-light dark:border-border-dark">
          <div className="flex items-center gap-2 mb-10">
            <Briefcase className="w-5 h-5 text-accent-500" />
            <h3 className="text-xl font-bold tracking-tight text-txt-light-primary dark:text-txt-dark-primary">
              {t('about.timelineTitle')}
            </h3>
          </div>

          <div className="space-y-8 relative before:absolute before:top-3 before:bottom-3 before:left-4 sm:before:left-5 before:w-0.5 before:-translate-x-1/2 before:bg-border-light dark:before:bg-border-dark">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="relative pl-9 sm:pl-12"
              >
                {/* Timeline node */}
                <div
                  className={`absolute left-4 sm:left-5 top-7 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 ${
                    exp.isCurrent
                      ? 'border-accent-500 bg-white dark:bg-canvas-dark ring-4 ring-accent-500/20'
                      : 'border-border-light dark:border-border-dark bg-canvas-light dark:bg-canvas-dark'
                  }`}
                />

                <div className="modern-card rounded-2xl p-6">
                  {/* Role & Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-txt-light-primary dark:text-txt-dark-primary">
                        {exp.role[language]}
                      </h4>
                      <div className="text-sm font-medium text-accent-600 dark:text-accent-400">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-txt-light-secondary dark:text-txt-dark-secondary">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period[language]}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location[language]}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-txt-light-secondary dark:text-txt-dark-secondary mb-4 leading-relaxed">
                    {exp.description[language]}
                  </p>

                  {/* Key Achievements Bullet points */}
                  <div className="space-y-2 mb-4">
                    {exp.achievements[language].map((ach, achIdx) => (
                      <div key={achIdx} className="flex items-start gap-2 text-xs text-txt-light-primary dark:text-txt-dark-primary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-light/60 dark:border-border-dark/60">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-canvas-light dark:bg-canvas-dark border border-border-light dark:border-border-dark text-txt-light-secondary dark:text-txt-dark-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

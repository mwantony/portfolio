import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Atom,
  FileCode2,
  Palette,
  Globe,
  Sparkles,
  Layout,
  Server,
  Layers,
  Network,
  Database,
  Cpu,
  Terminal,
  Box,
  GitBranch,
  Workflow,
  HardDrive,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Gauge,
  Code2,
  LucideIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { skillsData } from '../data/skills';
import { SkillCategory } from '../types';

// Map icon string names to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  Atom,
  FileCode2,
  Palette,
  Globe,
  Sparkles,
  Layout,
  Server,
  Layers,
  Network,
  Database,
  Cpu,
  Terminal,
  Box,
  GitBranch,
  Workflow,
  HardDrive,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Gauge,
};

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all');

  const categories: { key: SkillCategory | 'all'; label: string }[] = [
    { key: 'all', label: t('skills.tabs.all') },
    { key: 'frontend', label: t('skills.tabs.frontend') },
    { key: 'backend', label: t('skills.tabs.backend') },
    { key: 'devops', label: t('skills.tabs.devops') },
    { key: 'architecture', label: t('skills.tabs.architecture') },
  ];

  const filteredSkills = skillsData.filter((skill) =>
    selectedCategory === 'all' ? true : skill.category === selectedCategory
  );

  return (
    <section id="skills" className="py-24 border-t border-border-light dark:border-border-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent-500"></span>
              {t('skills.sectionTag')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-txt-light-primary dark:text-txt-dark-primary mb-3">
              {t('skills.title')}
            </h2>
            <p className="text-base sm:text-lg text-txt-light-secondary dark:text-txt-dark-secondary max-w-xl">
              {t('skills.subtitle')}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex gap-1.5 p-1 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark self-start md:self-auto overflow-x-auto scrollbar-hide max-w-full" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  type="button"
                  className={`relative shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isSelected
                      ? 'text-white'
                      : 'text-txt-light-secondary dark:text-txt-dark-secondary hover:text-txt-light-primary dark:hover:text-txt-dark-primary'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-skill-tab"
                      className="absolute inset-0 bg-txt-light-primary dark:bg-accent-500 rounded-lg"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="modern-card p-4 rounded-xl group relative overflow-hidden"
                >
                  {/* Featured dot */}
                  {skill.featured && (
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-accent-500" title="Key Stack" />
                  )}

                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-lg bg-surface-light dark:bg-canvas-dark border border-border-light dark:border-border-dark text-txt-light-primary dark:text-txt-dark-primary group-hover:text-accent-500 group-hover:border-accent-500/50 transition-colors shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-txt-light-primary dark:text-txt-dark-primary tracking-tight leading-snug">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-txt-light-secondary dark:text-txt-dark-secondary">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-border-light/60 dark:border-border-dark/60 text-txt-light-secondary dark:text-txt-dark-secondary">
                    <span>{t(`skills.level.${skill.level}`)}</span>
                    <span className="text-accent-600 dark:text-accent-400 font-medium">
                      {skill.yearsOfExperience}+ {t('skills.yearsSuffix')}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

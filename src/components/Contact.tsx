import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  MessageSquare,
  MapPin,
  Clock,
  Sparkles,
  AlertCircle,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.invalidEmail');
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.required');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate sending with realistic network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});

      // Reset success status after 6 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 6000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-t border-border-light dark:border-border-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent-600 dark:text-accent-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent-500"></span>
            {t('contact.sectionTag')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-txt-light-primary dark:text-txt-dark-primary mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg text-txt-light-secondary dark:text-txt-dark-secondary max-w-xl">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="modern-card p-6 sm:p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Form Status Banner */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm flex items-start gap-3"
                    >
                      <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">{t('contact.form.successTitle')}</div>
                        <div className="text-xs mt-0.5">{t('contact.form.successDesc')}</div>
                      </div>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">{t('contact.form.errorTitle')}</div>
                        <div className="text-xs mt-0.5">{t('contact.form.errorDesc')}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-txt-light-primary dark:text-txt-dark-primary mb-1.5">
                      {t('contact.form.nameLabel')} <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('contact.form.namePlaceholder')}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-canvas-light dark:bg-canvas-dark border transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40 ${
                        errors.name
                          ? 'border-red-500 dark:border-red-400'
                          : 'border-border-light dark:border-border-dark focus:border-accent-500'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-500 mt-1 block font-mono">{errors.name}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-txt-light-primary dark:text-txt-dark-primary mb-1.5">
                      {t('contact.form.emailLabel')} <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-canvas-light dark:bg-canvas-dark border transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40 ${
                        errors.email
                          ? 'border-red-500 dark:border-red-400'
                          : 'border-border-light dark:border-border-dark focus:border-accent-500'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 mt-1 block font-mono">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-mono font-medium text-txt-light-primary dark:text-txt-dark-primary mb-1.5">
                    {t('contact.form.subjectLabel')} <span className="text-accent-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-canvas-light dark:bg-canvas-dark border transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40 ${
                      errors.subject
                        ? 'border-red-500 dark:border-red-400'
                        : 'border-border-light dark:border-border-dark focus:border-accent-500'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-500 mt-1 block font-mono">{errors.subject}</span>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono font-medium text-txt-light-primary dark:text-txt-dark-primary mb-1.5">
                    {t('contact.form.messageLabel')} <span className="text-accent-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-canvas-light dark:bg-canvas-dark border transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40 resize-none ${
                      errors.message
                        ? 'border-red-500 dark:border-red-400'
                        : 'border-border-light dark:border-border-dark focus:border-accent-500'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 mt-1 block font-mono">{errors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-txt-light-primary text-white dark:bg-white dark:text-zinc-950 font-medium text-sm hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('contact.form.submitButton')}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Email Direct Box */}
            <div className="modern-card p-6 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-txt-light-secondary dark:text-txt-dark-secondary mb-3">
                <Mail className="w-4 h-4 text-accent-500" />
                <span>{t('contact.direct.email')}</span>
              </div>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-canvas-light dark:bg-canvas-dark border border-border-light dark:border-border-dark">
                <span className="font-mono text-xs sm:text-sm truncate font-medium text-txt-light-primary dark:text-txt-dark-primary">
                  {profileData.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark border border-transparent hover:border-border-light dark:hover:border-border-dark transition-colors shrink-0"
                  aria-label={t('contact.direct.copyEmail')}
                  title={t('contact.direct.copyEmail')}
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-txt-light-secondary dark:text-txt-dark-secondary" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono mt-1.5 block">
                  {t('contact.direct.emailCopied')}
                </span>
              )}
            </div>

            {/* Location & Availability */}
            <div className="modern-card p-6 rounded-2xl space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-txt-light-secondary dark:text-txt-dark-secondary">
                    {t('contact.direct.location')}
                  </div>
                  <div className="text-sm font-medium text-txt-light-primary dark:text-txt-dark-primary mt-0.5">
                    {profileData.location[language]}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-border-light/60 dark:border-border-dark/60">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-txt-light-secondary dark:text-txt-dark-secondary">
                    {t('contact.direct.availability')}
                  </div>
                  <div className="text-sm font-medium text-txt-light-primary dark:text-txt-dark-primary mt-0.5">
                    {profileData.availability[language]}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="modern-card p-6 rounded-2xl">
              <div className="text-xs font-mono uppercase tracking-wider text-txt-light-secondary dark:text-txt-dark-secondary mb-3">
                {t('contact.direct.socials')}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border-light dark:border-border-dark bg-canvas-light dark:bg-canvas-dark text-xs font-medium hover:border-accent-500 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border-light dark:border-border-dark bg-canvas-light dark:bg-canvas-dark text-xs font-medium hover:border-accent-500 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

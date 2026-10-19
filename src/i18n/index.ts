import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslation from './locales/pt.json';
import enTranslation from './locales/en.json';

const resources = {
  pt: {
    translation: ptTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // Initial fallback language before IP detection finishes
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
    },
  });

export default i18n;

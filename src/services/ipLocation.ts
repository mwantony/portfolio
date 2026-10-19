import { Language } from '../types';

const STORAGE_KEY = 'portfolio_language_preference';

/**
 * Detects language based on browser navigator as fallback
 */
export const getBrowserFallbackLanguage = (): Language => {
  if (typeof window === 'undefined' || !navigator.language) {
    return 'pt';
  }
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith('pt')) {
    return 'pt';
  }
  return 'en';
};

/**
 * Detects user language via IP Geolocation API with timeout and robust fallbacks
 */
export const detectUserLanguage = async (): Promise<{ language: Language; source: 'storage' | 'ip' | 'browser' }> => {
  // 1. Check if user has previously set a language manually
  try {
    const savedLang = localStorage.getItem(STORAGE_KEY);
    if (savedLang === 'pt' || savedLang === 'en') {
      return { language: savedLang as Language, source: 'storage' };
    }
  } catch (e) {
    console.warn('LocalStorage unavailable for language preference', e);
  }

  // 2. Query Geolocation by IP
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    // Primary free geolocation endpoint
    const response = await fetch('https://ipapi.co/json/', {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      const countryCode = data.country_code || data.country;
      if (countryCode && typeof countryCode === 'string') {
        const detected: Language = countryCode.toUpperCase() === 'BR' ? 'pt' : 'en';
        return { language: detected, source: 'ip' };
      }
    }
  } catch (error) {
    // If ipapi fails (rate limit, adblocker, cors), attempt secondary lightweight fallback
    try {
      const fallbackController = new AbortController();
      const fallbackTimeout = setTimeout(() => fallbackController.abort(), 2500);
      
      const fallbackResp = await fetch('https://ipwhois.app/json/', {
        signal: fallbackController.signal,
      });
      clearTimeout(fallbackTimeout);

      if (fallbackResp.ok) {
        const fallbackData = await fallbackResp.json();
        const code = fallbackData.country_code;
        if (code && typeof code === 'string') {
          const detected: Language = code.toUpperCase() === 'BR' ? 'pt' : 'en';
          return { language: detected, source: 'ip' };
        }
      }
    } catch {
      // Ignore fallback error, move to browser fallback
    }
  }

  // 3. Fallback to navigator.language
  return { language: getBrowserFallbackLanguage(), source: 'browser' };
};

/**
 * Persists user language choice
 */
export const persistLanguagePreference = (lang: Language): void => {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    console.warn('Could not save language preference', e);
  }
};

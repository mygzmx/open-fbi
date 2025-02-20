import { normalizeLocale, supportLocales } from '@/locales/resources';

export const OPEN_FBI_THEME = "OPEN_FBI_THEME";
export const COOKIE_CACHE_DAYS = 30;

// ENV
export const isDev = process.env.NODE_ENV === 'development';
export const isOnServerSide = typeof window === 'undefined';

export const DEFAULT_LANG = 'en';
export const OPEN_FBI_LOCALE = 'OPEN_FBI_LOCALE';

/**
 * Check if the language is supported
 * @param locale
 */
export const isLocaleNotSupport = (locale: string) => {
  return normalizeLocale(locale) === DEFAULT_LANG || !supportLocales.includes(locale);
};


// export const OPEN_FBI_GOOGLE_CODE = isDev ? "" : "G-391BN8089P";
export const OPEN_FBI_GOOGLE_CODE = "";

export const OFFICIAL_SITE = process.env.OFFICIAL_SITE || "https://www.openfbi.com";

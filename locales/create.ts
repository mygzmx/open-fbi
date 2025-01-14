import i18n, { InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';
import { isRtlLang } from 'rtl-detect';
import { normalizeLocale } from '@/locales/resources';
import { COOKIE_CACHE_DAYS, DEFAULT_LANG, OPEN_FBI_LOCALE } from "@/utils/const";

export const createI18nNext = (lang?: string) => {
  const instance = i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
      resourcesToBackend(async (lng: string, ns: string) => {
        return import(`@/locales/${normalizeLocale(lng)}/${ns}.json`);
      }),
    );
  // Dynamically set HTML direction on language change
  instance.on('languageChanged', (lng) => {
    if (typeof window !== 'undefined') {
      document.documentElement.dir = isRtlLang(lng) ? 'rtl' : 'ltr';
    }
  });
  return {
    init: () =>
      instance.init({
        debug: false,
        defaultNS: ['common', 'download'],
        detection: {
          caches: ['cookie'],
          cookieMinutes: 60 * 24 * COOKIE_CACHE_DAYS,
          /**
             Set `sameSite` to `lax` so that the i18n cookie can be passed to the
             server side when returning from the OAuth authorization website.
             ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value
             discussion: https://github.com/lobehub/lobe-chat/pull/1474
          */
          cookieOptions: { sameSite: 'lax' },
          lookupCookie: OPEN_FBI_LOCALE,
        },
        fallbackLng: DEFAULT_LANG,
        interpolation: {
          escapeValue: false,
        },
        lng: lang,
      } as InitOptions, () => {

      }),
    instance,
  };
};

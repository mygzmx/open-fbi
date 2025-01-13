export const locales = [
  'ar',
  'en',
  'zh'
] as const;

export type Locales = (typeof locales)[number];

export const normalizeLocale = (locale?: string): string => {
  if (!locale) return 'en';
  const l = locales.some(l => l === locale);
  return l ? locale : 'en';
};

type LocaleOptions = {
  label: string;
  value: Locales;
}[];

export const localeOptions: LocaleOptions = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: '简体中文',
    value: 'zh',
  },
  // {
  //   label: '繁體中文',
  //   value: 'zh-TW',
  // },
  // {
  //   label: '日本語',
  //   value: 'ja-JP',
  // },
  // {
  //   label: '한국어',
  //   value: 'ko-KR',
  // },
  // {
  //   label: 'Deutsch',
  //   value: 'de-DE',
  // },
  // {
  //   label: 'Español',
  //   value: 'es-ES',
  // },
  // {
  //   label: 'العربية',
  //   value: 'ar',
  // },
  // {
  //   label: 'Français',
  //   value: 'fr-FR',
  // },
  // {
  //   label: 'Português',
  //   value: 'pt-BR',
  // },
  // {
  //   label: 'Русский',
  //   value: 'ru-RU',
  // },
  // {
  //   label: 'Türkçe',
  //   value: 'tr-TR',
  // },
  // {
  //   label: 'Polski',
  //   value: 'pl-PL',
  // },
  // {
  //   label: 'Nederlands',
  //   value: 'nl-NL',
  // },
  // {
  //   label: 'Italiano',
  //   value: 'it-IT',
  // },
  // {
  //   label: 'Tiếng Việt',
  //   value: 'vi-VN',
  // },
  // {
  //   label: 'Български',
  //   value: 'bg-BG',
  // },
] as LocaleOptions;

export const supportLocales: string[] = [...locales];

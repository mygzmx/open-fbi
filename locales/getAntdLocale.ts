import { normalizeLocale } from '@/locales/resources';

export const getAntdLocale = async (lang?: string) => {
  let normalLang = normalizeLocale(lang);

  // due to antd only have ar-EG locale, we need to convert ar to ar-EG
  // refs: https://ant.design/docs/react/i18n

  // And we don't want to handle it in `normalizeLocale` function
  // because of other locale files are all `ar` not `ar-EG`
  if (normalLang === 'ar') normalLang = 'ar-SA';
  if (normalLang === 'en') normalLang = 'en-US';
  if (normalLang === 'zh') normalLang = 'zh-CN';

  const { default: locale } = await import(`antd-mobile/es/locales/${normalLang.replace('_', '-')}.js`);

  return locale;
};

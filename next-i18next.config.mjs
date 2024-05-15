import path from "path";

const i18nConfig = {
  // https://www.i18next.com/overview/configuration-options#logging
  // debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
      locales: ['en', 'zhHans', 'ko', 'zh', 'es'],
      localeDetection: false, // 是否自动区域设置检测
  },
  react: { useSuspense: false },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath: path.resolve('./locales'),
    ns: ['common'],
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
}

export default i18nConfig;

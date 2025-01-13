import type { NextConfig } from "next";
// 网站服务api
const BaseUrlObj = {
  // HOT: http://192.168.1.70:8080
  test: 'http://192.168.0.253:8080',
  staging: 'https://yfbwww.webfic.com',
  prod: 'https://www.webfic.com'
}

/** ⬇⬇⬇⬇⬇⬇✨✨✨✨✨✨ 环境,手动更换 ✨✨✨✨✨✨⬇⬇⬇⬇⬇⬇*/
// 部署环境 "test" | "staging" | "prod"
const environment = "staging"; // 测试环境部署专用
// const environment = process.env.NODE_ENV === "development" ? "test" : (process.env.script_env || "prod");
/** ⬆⬆⬆⬆⬆⬆✨✨✨✨✨✨ ℹℹℹℹℹℹℹℹℹℹ ✨✨✨✨✨✨⬆⬆⬆⬆⬆⬆ */

const buildId = `open_fbi_${environment}_20241022`; // 构建ID
const WebDomain = "https://www.openfbi.com";
const BaseUrl = BaseUrlObj[environment]
process.title = `next-${buildId}`;

console.log('\x1B[44m%s\x1B[49m', '-------------------------- ✨ ✨ ✨ ✨ ✨ ✨ --------------------------')
console.log('\x1B[34m%s\x1B[39m', '部署环境:', environment, '构建ID:', buildId)
console.log('\x1B[34m%s\x1B[39m', '网站域名:', WebDomain)
console.log('\x1B[34m%s\x1B[39m', 'API:', BaseUrl)
console.log('\x1B[44m%s\x1B[49m', '-------------------------- ✨ ✨ ✨ ✨ ✨ ✨ --------------------------')

const nextConfig: NextConfig = {
  reactStrictMode: true,
  generateBuildId: async () => {
    return buildId;
  },
  transpilePackages: ['antd-mobile'],
  // 内置多语言
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeDetection: false, // 是否自动区域设置检测
  },
  images: {
    unoptimized: true
  },
  // 环境配置
  env: {
    BaseUrl,
    WebDomain,
  },
  // rewrites: async () => [
  //   // we need a proxy to bypass the restriction
  //   { source: '/api/chat/google', destination: `${API_PROXY_ENDPOINT}/api/chat/google` },
  // ],
  // 参考 https://nextjs.org/docs/messages/swc-disabled
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
  },
}

export default nextConfig;

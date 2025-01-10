import path from "path";
import i18nConfig from "./next-i18next.config.mjs";
import type { NextConfig } from "next";

// 网站域名
const WebDomainObj = {
  dramabox: {
    test: 'https://dramabox.hw.dzods.cn',
    staging: 'https://yfbwww.dramabox.com',
    prod: 'https://www.dramabox.com'
  },
}
// 网站服务api
const BaseUrlObj = {
  // QAT: 'http://192.168.0.253:8080',
  // HOT: http://192.168.1.70:8080
  test: 'http://192.168.0.253:8080',
  staging: 'https://yfbwww.webfic.com',
  prod: 'https://www.webfic.com'
}
// ipua
const IpUaUrlObj = {
  // test: "https://hotdrama.hw.dzods.cn/drama-box/ad/cache/ua",
  test: 'https://drama.hw.dzods.cn/drama-box/ad/cache/ua',
  staging: 'https://yfbapi.dramaboxdb.com/drama-box/ad/cache/ua',
  prod: 'https://api.dramaboxdb.com/drama-box/ad/cache/ua'
}

/** ⬇⬇⬇⬇⬇⬇✨✨✨✨✨✨ 环境,手动更换 ✨✨✨✨✨✨⬇⬇⬇⬇⬇⬇*/
// 部署环境 "test" | "staging" | "prod"
const environment = "staging"; // 测试环境部署专用
// const environment = process.env.NODE_ENV === "development" ? "test" : (process.env.script_env || "prod");
const Platform = 'dramabox'; // 产品线 "dramabox" | "dramaboxapp"
/** ⬆⬆⬆⬆⬆⬆✨✨✨✨✨✨ ℹℹℹℹℹℹℹℹℹℹ ✨✨✨✨✨✨⬆⬆⬆⬆⬆⬆ */

const buildId = `${Platform}_${environment}_20240514`; // 构建ID
const WebDomain = WebDomainObj[Platform][environment];
const BaseUrl = BaseUrlObj[environment]
const IpUaUrl = IpUaUrlObj[environment]
process.title = `next-${buildId}`;

console.log('\x1B[44m%s\x1B[49m', '-------------------------- ✨ ✨ ✨ ✨ ✨ ✨ --------------------------')
console.log('\x1B[34m%s\x1B[39m', '部署环境:', environment, '构建ID:', buildId)
console.log('\x1B[34m%s\x1B[39m', '网站域名:', WebDomain)
console.log('\x1B[34m%s\x1B[39m', 'API:', BaseUrl)
console.log('\x1B[34m%s\x1B[39m', 'IPUA:', IpUaUrl)
console.log('\x1B[44m%s\x1B[49m', '-------------------------- ✨ ✨ ✨ ✨ ✨ ✨ --------------------------')


const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Configuring the Build ID
  generateBuildId: async () => {
    return buildId;
  },
  transpilePackages: ['antd-mobile'],
  sassOptions: {
    includePaths: [path.join('./', 'styles')],
    prependData: `@import "common.module.scss";`
  },
  // 内置多语言
  i18n: i18nConfig.i18n,
  images: { // 远程图片资源域名
    domains: [
      "reshot.hw.dzods.cn",
      "res.dramabox.com",
      "nas2osstest.wpzkj.cn",
      "nchapter.dramaboxdb.com",
      "dzztstgvideo.cbread.cn",
      "nvideo.dramaboxdb.com",
      "nakavideo.dramaboxdb.com"
    ],
  },
  // 环境配置
  env: {
    BaseUrl,
    WebDomain,
    IpUaUrl,
    Platform,
  },
  // rewrites: async () => [
  //   // due to google api not work correct in some countries
  //   // we need a proxy to bypass the restriction
  //   { source: '/api/chat/google', destination: `${API_PROXY_ENDPOINT}/api/chat/google` },
  // ],
  // 参考 https://nextjs.org/docs/messages/swc-disabled
  experimental: {
    optimizePackageImports: [
      'emoji-mart',
      '@emoji-mart/react',
      '@emoji-mart/data',
      '@icons-pack/react-simple-icons',
      '@lobehub/ui',
      'gpt-tokenizer',
      'chroma-js',
      'shiki',
    ],
    webVitalsAttribution: ['CLS', 'LCP'],
  },
}

export default nextConfig;

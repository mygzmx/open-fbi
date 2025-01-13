import { AnyObject } from "@/typings/hive.interfaces";
import { ELanguage } from "@/typings/home.interface";

// AbortController超时配置
const fetchWithTimeout = (url: string, options: RequestInit & { timeout?: number }): Promise<Response | void> => {
  const { timeout = 10000 } = options; // 设置默认超时时间为10000ms
  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(`Request Timeout of ${timeout}ms exceeded; \n URL: ${url} \n Request Init: \n${JSON.stringify(options)}`), timeout);
  return fetch(url, {
    ...options,
    signal: controller.signal
  }).then((response) => {
    clearTimeout(timerId);
    return response;
  }).catch((error) => {
    clearTimeout(timerId);
    throw error;
  });
};

// // Promise.race超时配置
// const fetchWithTimeoutPromise = (url: string, options: RequestInit & { timeout?: number } = {}): Promise<Response | unknown> => {
//   const { timeout = 10000 } = options; // 设置默认超时时间为10000ms
//   const timeoutPromise = new Promise((_, reject) =>
//     setTimeout(() => reject(new Error('Request Timeout of 5000ms exceeded')), timeout)
//   );
//   return Promise.race([fetch(url, options), timeoutPromise]);
// }

export const geFetch = async (url: string, params?: AnyObject, data?: AnyObject) => {
  try {
    const _params = params ? { ...params} : { };
    const keys = Object.keys(_params);
    const queryStr = keys.reduce((prev, curr, index) => {
      const str = prev + `${curr}=${_params[curr]}`;
      return keys.length === index + 1 ? str : str + '&';
    }, '?');

    let input = process.env.BaseUrl + url + encodeURI(queryStr);
    if (url.includes('/client')) {
      input = url + encodeURI(queryStr);
    }

    const response = await fetchWithTimeout(input, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        "pline": "DRAMABOX", // 当前域名， 区分产品线
        "ptype":"APP"
      } as HeadersInit,
      keepalive: false,
      body: data ? JSON.stringify(data) : null,
    });

    if (response && response.status === 200 && response.ok) {
      const res = await response.json();
      if (res.status === 0) {
        return res.data;
      }
      return 'BadRequest'
    }
    return 'BadRequest'
  } catch (e) {
    console.error(`\n >>> 请求失败 - 500 <<< \n` +
      `错误信息: ${(e || '').toString()} \n` +
      `请求路径: ${url} \n` +
      `请求体: ${JSON.stringify(data)} \n` +
      `请求参数: ${JSON.stringify(params)}`
    );
    return 'BadRequest'
  }
}

export const poFetch = async (url: string, data?: AnyObject, language?: ELanguage, params?: AnyObject) => {
  try {
    let queryStr = '';
    let input = process.env.BaseUrl + url;
    if (url.includes('/client') || url.includes('http')) {
      input = url;
    }
    if (params) {
      const _params = params ? {...params} : {};
      const keys = Object.keys(_params);
      queryStr = keys.reduce((prev, curr, index) => {
        const str = prev + `${curr}=${_params[curr]}`;
        return keys.length === index + 1 ? str : str + '&';
      }, '?');
      input += encodeURI(queryStr);
    }

    const response = await fetchWithTimeout(input, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "pline": "DRAMABOX", // 当前域名， 区分产品线
        "language": language ?? "",
        "ptype":"APP"
      } as HeadersInit,
      keepalive: false,
      body: data ? JSON.stringify(data) : null,
    });

    if (response && response.status === 200 && response.ok) {
      const res = await response.json();
      if (res.status === 0) {
        return res.data;
      }
      return 'BadRequest'
    }
    return 'BadRequest'
  } catch (e) {
    console.error(`\n >>> 请求失败 - 500 <<< \n` +
      `错误信息: ${(e || '').toString()} \n` +
      `请求路径: ${url}; 语言：${language || ''} \n` +
      `请求体: ${JSON.stringify(data)}`
    );
    return 'BadRequest'
  }
}

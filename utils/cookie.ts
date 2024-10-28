import dayjs from 'dayjs';
import { COOKIE_CACHE_DAYS, OPEN_FBI_THEME } from "@/utils/const";

export const getCookieTheme = (cookieStr?: string): 'dark' | 'light'  => {
  const arrCookie = (cookieStr || document.cookie || "").split("; ");
  for (let i = 0; i < arrCookie.length; i++) {
    const arr = arrCookie[i].split("=");
    if (arr[0] === OPEN_FBI_THEME) {
      const _locale = arr[1];
      if (_locale && ['dark', 'light'].includes(_locale)){
        return _locale as 'dark' | 'light';
      }
    }
  }
  return 'light';
};


export const setCookieTheme = (value: 'dark' | 'light') => {
  try {
    const expires = dayjs().add(COOKIE_CACHE_DAYS, 'day').toISOString();
    document.cookie = `${OPEN_FBI_THEME}=${value};expires=${expires};path=/;`;
  } catch (e) {}
};

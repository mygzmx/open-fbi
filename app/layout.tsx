import React, { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Lora } from "next/font/google";
// import { GoogleAnalytics as GA } from '@next/third-parties/google';
import { cookies } from 'next/headers';
import "@/app/globals.scss";
import { isDev, OPEN_FBI_THEME, DEFAULT_LANG, OPEN_FBI_LOCALE } from "@/utils/const";
import { isRtlLang } from 'rtl-detect';
import GlobalProvider from '@/layout/GlobalProvider';

const lora = Lora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

const title = "FEHUB - Frontend Engineer Hub";
const description = "Looking for something to watch during your daily commute, lunch break, or just to unwind after a long day? Look no further than our DramaBox! With our app, you...";
const OFFICIAL_SITE = process.env.OFFICIAL_SITE;
export const metadata: Metadata = {
  title,
  keywords: ["DramaBox - Stream Drama Shorts", "Reels", "Entertainment", "DramaBox App", "DramaBox", "drama"],
  description,
  appleWebApp: {
    statusBarStyle: 'black-translucent',
    title,
  },
  icons: {
    apple: '/apple-touch-icon.png',
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.ico',
  },
  manifest: '/manifest.json',
  metadataBase: new URL(OFFICIAL_SITE),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {

  const cookieStore = await cookies();
  const theme = cookieStore.get(OPEN_FBI_THEME);
  const lang = cookieStore.get(OPEN_FBI_LOCALE);
  const direction = isRtlLang(lang?.value || DEFAULT_LANG) ? 'rtl' : 'ltr';

  return (
    <html dir={direction} lang={lang?.value || DEFAULT_LANG} data-theme={theme?.value || "light"} suppressHydrationWarning>
      <body className={lora.className}>
      <GlobalProvider>
        {children}
      </GlobalProvider>
      </body>
      {/*{!isDev ? <GA gaId="G-391BN8089P"/> : null}*/}
    </html>
  );
}

export default RootLayout;

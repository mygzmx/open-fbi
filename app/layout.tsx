import React, { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Lora } from "next/font/google";
// import { GoogleAnalytics as GA } from '@next/third-parties/google';
import NextTopLoader from 'nextjs-toploader';
import { ReduxProvider } from "@/store/ReduxProvider";
import { cookies } from 'next/headers';
import "@/app/globals.scss";
import { OPEN_FBI_THEME } from "@/utils/const";
import PageLayout from "@/components/layout";

const lora = Lora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "FEHUB - Frontend Engineer Hub",
  keywords: ["DramaBox - Stream Drama Shorts", "Reels", "Entertainment", "DramaBox App", "DramaBox", "drama"],
  description: "Looking for something to watch during your daily commute, lunch break, or just to unwind after a long day? Look no further than our DramaBox! With our app, you...",
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

  return (
    <html lang="en" data-theme={theme?.value || "light"}>
      <body className={lora.className}>
        <NextTopLoader color={'#FF375F'} />
        <ReduxProvider>
          <PageLayout theme={theme?.value || "light"}>
            {children}
          </PageLayout>
        </ReduxProvider>
      </body>
      {/*{process.env.NODE_ENV === 'production' ? <GA gaId="G-391BN8089P"/> : null}*/}
    </html>
  );
}

export default RootLayout;

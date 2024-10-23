import React from "react";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { GoogleAnalytics as GA } from '@next/third-parties/google';
import NextTopLoader from 'nextjs-toploader';
import { ReduxProvider } from "@/store/ReduxProvider";
import "@/app/globals.scss";

const lora = Lora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "DramaBox - Stream Drama Shorts",
  keywords: ["DramaBox - Stream Drama Shorts", "Reels", "Entertainment", "DramaBox App", "DramaBox", "drama"],
  description: "Looking for something to watch during your daily commute, lunch break, or just to unwind after a long day? Look no further than our DramaBox! With our app, you...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <NextTopLoader />
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
      {process.env.NODE_ENV === 'production' ? <GA gaId="G-391BN8089P"/> : null}
    </html>
  );
}

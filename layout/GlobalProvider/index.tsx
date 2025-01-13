import { cookies } from 'next/headers';
import React, { ReactNode } from 'react';
import { isMobileDevice } from '@/utils/responsive';
import Locale from './Locale';
import NextTopLoader from "nextjs-toploader";
import { ReduxProvider } from "@/store/ReduxProvider";
import { getAntdLocale } from "@/locales/getAntdLocale";
import PageLayout from "@/layout/page";
import { OPEN_FBI_THEME } from "@/utils/const";

interface GlobalLayoutProps {
  children: ReactNode;
}

const GlobalProvider = async ({ children }: GlobalLayoutProps) => {
  // get default theme config to use with ssr
  const cookieStore = await cookies();
  // get default locale config to use with ssr
  const defaultLang = cookieStore.get(OPEN_FBI_LOCALE);
  const antdLocale = await getAntdLocale(defaultLang?.value);

  const isMobile = await isMobileDevice();
  const theme = cookieStore.get(OPEN_FBI_THEME);

  return (
      <Locale antdLocale={antdLocale} defaultLang={defaultLang?.value}>
        <NextTopLoader color={'#FF375F'} />
        <ReduxProvider>
          <PageLayout theme={theme?.value || "light"}>
            {children}
          </PageLayout>
        </ReduxProvider>
      </Locale>
  );
};

export default GlobalProvider;

import React, { memo } from 'react';
import Brave from '@/components/BrowserIcon/components/Brave';
import Chrome from '@/components/BrowserIcon/components/Chrome';
import Chromium from '@/components/BrowserIcon/components/Chromium';
import Edge from '@/components/BrowserIcon/components/Edge';
import Firefox from '@/components/BrowserIcon/components/Firefox';
import Opera from '@/components/BrowserIcon/components/Opera';
import Safari from '@/components/BrowserIcon/components/Safari';
import Samsung from '@/components/BrowserIcon/components/Samsung';
import Sun from "@/components/BrowserIcon/components/Sun";
import Moon from "@/components/BrowserIcon/components/Moon";

const lastVersion = {
  'Sun': Sun,
  'Moon': Moon,
  'Brave': Brave,
  'Chrome': Chrome,
  'Chromium': Chromium,
  'Edge': Edge,
  'Firefox': Firefox,
  'Mobile Safari': Safari,
  'Opera': Opera,
  'Safari': Safari,
  'Samsung': Samsung,
};

export type Browsers = keyof typeof lastVersion;

interface BrowserIconProps {
  browser: string;
  className?: string;
  size: number | string;
  style?: React.CSSProperties;
}

// eslint-disable-next-line react/display-name
export const BrowserIcon = memo<BrowserIconProps>(({ browser, className, style, size }) => {
  const Component = lastVersion[browser as Browsers];

  if (!Component) return null;

  return (
    <Component
      className={className}
      height={size}
      style={{
        ...style,
        minHeight: size,
        minWidth: size,
      }}
      width={size}
    />
  );
});

'use client';

import { Button } from 'antd-mobile';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from "next-i18next";

const NotFound = memo(() => {
  const { t } = useTranslation('error');
  return (
    <div>
      404
    </div>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;

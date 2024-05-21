'use client';

import { Button } from 'antd-mobile';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from "next-i18next";

const NotFound = memo(() => {
  const { t } = useTranslation('error');
  return (
    <div>
      <h1
        style={{
          filter: 'blur(8px)',
          fontSize: `min(${100 / 3}px, 50vw)`,
          fontWeight: 'bolder',
          margin: 0,
          opacity: 0.12,
          position: 'absolute',
          zIndex: 0,
        }}
      >
        404
      </h1>
      <h2 style={{ fontWeight: 'bold', marginTop: '1em', textAlign: 'center' }}>
        {t('notFound.title')}
      </h2>
      <p style={{ marginBottom: '2em' }}>{t('notFound.desc')}</p>
      <Link href="/">
        <Button type={'primary'}>{t('notFound.backHome')}</Button>
      </Link>
    </div>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;

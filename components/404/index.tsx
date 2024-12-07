'use client';

import { Button } from 'antd-mobile';
import Link from 'next/link';
import { memo } from 'react';

const NotFound = memo(() => {
  return (
    <div>
      404
    </div>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;

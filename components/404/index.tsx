'use client';

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

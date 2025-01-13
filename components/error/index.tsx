'use client';
import Link from 'next/link';
import { memo } from 'react';

interface ErrorCaptureProps {
  error: Error;
  reset: () => void;
}

const ErrorCapture = memo<ErrorCaptureProps>(({ reset, error }) => {

  // useLayoutEffect(() => {
  //   sentryCaptureException(error);
  // }, [error]);

  return (
    <div>
      <button onClick={() => reset()}>retry</button>
      <Link href="/">
        <button type={'info'}>backHome</button>
      </Link>
    </div>
  );
});

ErrorCapture.displayName = 'ErrorCapture';

export default ErrorCapture;

'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="flex h-[50vh] flex-col items-center justify-center gap-6 text-center">
      <h2 className="text-3xl font-bold text-[var(--foreground)]">
        Something went wrong!
      </h2>
      <p className="max-w-md text-(--input)">
        We encountered an error while loading the country data. This might be a temporary API issue.
      </p>

      <button
        onClick={
          () => reset()
        }
        className="rounded-md bg-[var(--element)] px-6 py-3 font-semibold shadow-md transition-transform hover:-translate-y-1 hover:opacity-80"
      >
        Try Again
      </button>
    </div>
  );
}
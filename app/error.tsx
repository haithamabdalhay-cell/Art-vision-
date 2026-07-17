'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Keep this for debugging in development.
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Something went wrong</p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">We could not load this section.</h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
          Please try again. If the issue persists, refresh the page.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
        >
          Try again
        </button>
      </div>
    </main>
  );
}

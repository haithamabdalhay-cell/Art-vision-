'use client';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Critical error</p>
          <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">The application encountered an unexpected error.</h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            {error.message || 'Please refresh the page and try again.'}
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
          >
            Reload safely
          </button>
        </main>
      </body>
    </html>
  );
}

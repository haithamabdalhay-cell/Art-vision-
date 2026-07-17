'use client';

type HeroSectionProps = {
  badge: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel: string;
  isArabic: boolean;
};

export default function HeroSection({
  badge,
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  isArabic
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 p-8 shadow-glow sm:p-12">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-cyan-400/10 to-transparent" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.95fr] items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100 ring-1 ring-cyan-300/20">
            {badge}
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block text-cyan-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">{title}</span>
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">{subtitle}</p>

          <div className={`flex flex-wrap gap-4 ${isArabic ? 'justify-end' : 'justify-start'}`}>
            <a
              href="#services"
              className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] animate-pulse-glow"
            >
              {primaryLabel}
            </a>
            <a
              href="#work"
              className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-cyan-400/5 p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,240,255,0.24),_transparent_28%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,206,255,0.18),_transparent_32%)]" />
          <div className="relative z-10 flex h-full w-full flex-col justify-between gap-5">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span className="uppercase tracking-[0.35em] text-cyan-200/80">Cinematic Quality</span>
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-100">
                Showreel
              </span>
            </div>

            <div className="relative h-[260px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/75 shadow-glow">
              <video
                src="/logo/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.35))]" />
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-cyan-100">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Visual Storytelling
              </div>
              <div className="absolute inset-x-0 bottom-5 mx-6 flex items-center justify-between text-xs text-slate-400">
                <span>Brand Films</span>
                <span>High-Impact Motion</span>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 text-sm text-slate-300 shadow-glow-lg">
              <p className="text-white">A premium cinematic placeholder for your growth story.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

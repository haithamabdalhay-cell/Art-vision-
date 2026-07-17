"use client";

import Link from 'next/link';
import { FiGlobe } from 'react-icons/fi';

type HeaderProps = {
  isArabic: boolean;
  language: 'en' | 'ar';
  onLanguageToggle: () => void;
  sections: { id: string; label: string }[];
  homeLabel: string;
  contactLabel: string;
};

export default function Header({
  isArabic,
  language,
  onLanguageToggle,
  sections,
  homeLabel,
  contactLabel
}: HeaderProps) {
  return (
    <header className="relative z-20 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-slate-950/50 px-6 py-5 shadow-glow">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/20 overflow-hidden">
          <img src="/my-logo.png" alt="Art Vision" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-sm text-cyan-200/90">Art Vision</p>
          <p className="text-xs text-slate-400">Growth & Strategy Agency</p>
        </div>
      </div>

      <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
        {sections.map((section) => {
          const href = `#${section.id}`;

          return (
            <Link
              key={section.id}
              href={href}
              className="rounded-full px-4 py-2 transition hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              {section.label}
            </Link>
          );
        })}
        <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-cyan-400/10 hover:text-cyan-100">
          {homeLabel}
        </Link>
      </nav>

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={onLanguageToggle}
          className="glass flex items-center gap-2 rounded-full border-white/10 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300/30"
          aria-label="Toggle language"
        >
          <FiGlobe size={18} className="text-cyan-300" />
          {language.toUpperCase()}
        </button>

        <Link href="#contact" className="ml-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-2 text-sm font-semibold text-[#041226]">{contactLabel}</Link>
      </div>
    </header>
  );
}

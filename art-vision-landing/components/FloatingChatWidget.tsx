'use client';

import { BsMessenger, BsWhatsapp } from 'react-icons/bs';

type FloatingChatWidgetProps = {
  tooltip: string;
};

export default function FloatingChatWidget({ tooltip }: FloatingChatWidgetProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div className="group relative">
        <a
          href="https://wa.me/9647709753878"
          target="_blank"
          rel="noreferrer"
          className="glass flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/90 px-5 py-4 text-cyan-100 shadow-glow transition hover:-translate-y-1 hover:bg-cyan-400/10"
        >
          <BsWhatsapp size={24} className="text-[#25D366]" />
          <BsMessenger size={24} className="text-[#0084FF]" />
        </a>
        <div className="pointer-events-none absolute -bottom-14 right-0 hidden w-max rounded-2xl border border-white/10 bg-slate-950/95 px-4 py-2 text-xs text-slate-100 shadow-glow opacity-0 transition duration-300 group-hover:block group-hover:opacity-100">
          {tooltip}
        </div>
      </div>
    </div>
  );
}

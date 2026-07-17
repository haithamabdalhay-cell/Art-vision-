"use client";
import React from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

type Props = {
  title: string;
  subtitle?: string;
  highlight?: boolean;
  badge?: string;
  isArabic: boolean;
  buttonLabel?: string;
};

export default function PricingCard({ title, subtitle, highlight, badge, isArabic, buttonLabel }: Props) {

  return (
    <div
      className={`group relative flex flex-col justify-between gap-4 rounded-xl bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] ${
        highlight ? "border-2 border-cyan-400/60 shadow-[0_10px_30px_-10px_rgba(8,145,178,0.15)]" : "border border-white/10"
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {badge && (
        <div className="absolute left-4 -top-3 rounded-full bg-cyan-500/90 px-3 py-1 text-xs font-semibold text-white">{badge}</div>
      )}

      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {subtitle && <p className="mt-2 text-sm text-white/70">{subtitle}</p>}
      </div>

      <div className="mt-4 flex items-end justify-end gap-4">
        <WhatsAppButton packageName={title} isArabic={isArabic}>
          {buttonLabel ?? (isArabic ? 'تواصل الآن' : 'Start Conversation')}
        </WhatsAppButton>
      </div>
    </div>
  );
}

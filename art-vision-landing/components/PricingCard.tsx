"use client";
import React from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

type Props = {
  title: string;
  subtitle?: string;
  priceUSD?: number;
  priceRange?: [number, number];
  currency: "USD" | "IQD";
  highlight?: boolean;
  badge?: string;
  isArabic: boolean;
  buttonLabel?: string;
};

export default function PricingCard({ title, subtitle, priceUSD, priceRange, currency, highlight, badge, isArabic, buttonLabel }: Props) {
  const convert = (v?: number) => {
    if (v == null) return "—";
    if (currency === "USD") return `$${v}`;
    return `IQD ${Number(v * 1500).toLocaleString("en-US")}`;
  };

  const priceLabel = priceRange ? `${convert(priceRange[0])} - ${convert(priceRange[1])}` : convert(priceUSD);

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

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <div className="text-2xl font-bold text-white">{priceLabel}</div>
        </div>
        <WhatsAppButton packageName={title} priceLabel={priceUSD ? `$${priceUSD}` : undefined} isArabic={isArabic}>
          {buttonLabel ?? (isArabic ? 'اطلب الباقة' : 'Order Package')}
        </WhatsAppButton>
      </div>
    </div>
  );
}

"use client";
import React from "react";

type Props = {
  packageName: string;
  priceLabel?: string;
  isArabic?: boolean;
  children?: React.ReactNode;
};

export default function WhatsAppButton({ packageName, priceLabel, isArabic = true, children }: Props) {
  const message = isArabic
    ? `مرحباً هيثم، أنا مهتم بباقة ${packageName}${priceLabel ? ` (${priceLabel})` : ""}`
    : `Hello Haitham, I'm interested in the ${packageName}${priceLabel ? ` (${priceLabel})` : ""}`;

  const url = `https://wa.me/9647709753878?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-md bg-cyan-500/90 px-4 py-2 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.03] focus:outline-none"
    >
      {children ?? (isArabic ? "اطلب الباقة" : "Order Package")}
    </a>
  );
}

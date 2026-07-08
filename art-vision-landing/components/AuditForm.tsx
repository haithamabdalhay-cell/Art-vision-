'use client';

import { useState } from 'react';

type AuditFormProps = {
  title: string;
  subtitle?: string;
  nameLabel: string;
  linkLabel: string;
  phoneLabel: string;
  buttonLabel: string;
  isArabic: boolean;
};

const WHATSAPP_NUMBER = '9647709753878';

export default function AuditForm({
  title,
  subtitle,
  nameLabel,
  linkLabel,
  phoneLabel,
  buttonLabel,
  isArabic
}: AuditFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessLink, setBusinessLink] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = isArabic
      ? `مرحباً، أنا مهتم بالحصول على تقييم مجاني لنشاطي.\nإليك بياناتي:\nالاسم: ${name || '-'}\nرقم الهاتف: ${phone || '-'}\nرابط النشاط: ${businessLink || '-'}`
      : `Hello, I'm interested in receiving a complimentary audit for my business.\nHere are my details:\nName: ${name || '-'}\nPhone: ${phone || '-'}\nBusiness Link: ${businessLink || '-'}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="glass relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-glow">
      <div className="absolute -right-16 top-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-8 bottom-8 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.8fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
            {isArabic ? 'عرض مجاني' : 'Free Audit'}
          </p>
          <h2 className="text-3xl font-semibold text-white">{title}</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            {subtitle ||
              (isArabic
                ? 'قدم تفاصيلك، وسأقوم شخصياً بتقييم حساباتك للعثور على فرص نمو مخفية.'
                : 'Submit your details, and I will personally audit your accounts for hidden growth potential.')}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass rounded-[1.8rem] border border-white/10 p-6 shadow-glass-lg"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-200">
              <span>{nameLabel}</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={nameLabel}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none ring-1 ring-transparent transition focus:border-cyan-300/40 focus:ring-cyan-300/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-200">
              <span>{phoneLabel}</span>
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder={phoneLabel}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none ring-1 ring-transparent transition focus:border-cyan-300/40 focus:ring-cyan-300/20"
              />
            </label>
          </div>

          <label className="mt-4 space-y-2 text-sm text-slate-200">
            <span>{linkLabel}</span>
            <input
              type="url"
              value={businessLink}
              onChange={(event) => setBusinessLink(event.target.value)}
              placeholder={linkLabel}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none ring-1 ring-transparent transition focus:border-cyan-300/40 focus:ring-cyan-300/20"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
          >
            {buttonLabel}
          </button>
        </form>
      </div>
    </section>
  );
}

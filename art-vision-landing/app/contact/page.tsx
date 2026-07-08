'use client';

import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChatWidget from '@/components/FloatingChatWidget';
import WhatsAppButton from '@/components/WhatsAppButton';

const copy = {
  en: {
    nav: [
      { id: 'services', label: 'Services' },
      { id: 'work', label: 'Our Work' },
      { id: 'audit', label: 'Free Audit' }
    ],
    homeLabel: 'Home',
    contactLabel: 'Request Consultation',
    pageTitle: 'Let’s build your next growth chapter',
    pageSubtitle: 'Tell us what you need and we will turn it into a clear plan, a premium experience, and measurable growth.',
    cardTitle: 'Start a conversation',
    cardText: 'Whether you need a new campaign, content system, visuals, or full-scale growth support, we can help you move faster.',
    quickTitle: 'Fast ways to begin',
    quickItems: [
      'Strategy audit for your brand or campaign',
      'Visual production for ads, social, and launches',
      'Growth support for restaurants, car brands, brokers, and luxury businesses'
    ],
    footerBy: 'Prepared by Haitham Abdalhay - Marketing Manager | Art Vision',
    tooltip: "Got a project? Let's plan together."
  },
  ar: {
    nav: [
      { id: 'services', label: 'الخدمات' },
      { id: 'work', label: 'أعمالنا' },
      { id: 'audit', label: 'التقييم' }
    ],
    homeLabel: 'الرئيسية',
    contactLabel: 'اطلب استشارة',
    pageTitle: 'لنبدأ فصل النمو القادم معًا',
    pageSubtitle: 'أخبرنا بما تحتاجه وسنحوّله إلى خطة واضحة، تجربة مميزة، ونمو قابل للقياس.',
    cardTitle: 'ابدأ محادثة مباشرة',
    cardText: 'سواء كنت تحتاج حملة جديدة، نظام محتوى، إنتاج بصري، أو دعم نمو شامل، نحن هنا لتسريع تقدمك.',
    quickTitle: 'أسرع الطرق للبدء',
    quickItems: [
      'تقييم استراتيجي لعلامتك أو حملتك',
      'إنتاج بصري للإعلانات والسوشيال والطلاقات',
      'دعم نمو للمطاعم، السيارات، وسماسرة الفوركس والأعمال الفاخرة'
    ],
    footerBy: 'Prepared by Haitham Abdalhay - Marketing Manager | Art Vision',
    tooltip: 'هل لديك مشروع؟ دعنا نخطط معًا.'
  }
};

export default function Page() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [currency, setCurrency] = useState<'USD' | 'IQD'>('USD');

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('artvision-language');
    const storedCurrency = window.localStorage.getItem('artvision-currency');

    if (storedLanguage === 'ar' || storedLanguage === 'en') {
      setLanguage(storedLanguage);
    }
    if (storedCurrency === 'USD' || storedCurrency === 'IQD') {
      setCurrency(storedCurrency);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('artvision-language', language);
    window.localStorage.setItem('artvision-currency', currency);
  }, [language, currency]);

  const isArabic = language === 'ar';
  const text = useMemo(() => copy[language], [language]);

  return (
    <main dir={isArabic ? 'rtl' : 'ltr'} lang={isArabic ? 'ar' : 'en'} className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-[1300px] px-6 py-6 md:px-10 lg:px-12">
        <Header
          isArabic={isArabic}
          language={language}
          onLanguageToggle={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          currency={currency}
          onCurrencyToggle={() => setCurrency(currency === 'USD' ? 'IQD' : 'USD')}
          sections={text.nav}
          homeLabel={text.homeLabel}
          contactLabel={text.contactLabel}
        />

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-8 shadow-glow sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
                {isArabic ? 'تواصل معنا' : 'Contact'}
              </p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                {text.pageTitle}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                {text.pageSubtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <WhatsAppButton packageName={isArabic ? 'استشارة مخصصة' : 'Custom Consultation'} isArabic={isArabic}>
                  {isArabic ? 'ابدأ محادثة الآن' : 'Start a Conversation'}
                </WhatsAppButton>
                <a href="mailto:haithamabdalhay@gmail.com" className="inline-flex items-center rounded-full border border-cyan-400/30 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/10">
                  {isArabic ? 'أرسل بريدًا' : 'Send Email'}
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-cyan-400/10 p-6">
              <h2 className="text-xl font-semibold text-white">{text.cardTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{text.cardText}</p>
              <div className="mt-6 space-y-3">
                {text.quickItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer isArabic={isArabic} text={text.footerBy} />
      </div>

      <FloatingChatWidget tooltip={text.tooltip} />
    </main>
  );
}

'use client';

import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChatWidget from '@/components/FloatingChatWidget';
import ClientsMarquee from '@/components/ClientsMarquee';

const copy = {
  en: {
    nav: [
      { id: 'services', label: 'Services' },
      { id: 'work', label: 'Our Work' },
      { id: 'audit', label: 'Free Audit' }
    ],
    homeLabel: 'Home',
    contactLabel: 'Request Consultation',
    pageTitle: 'Work that blends strategy, design, and growth',
    pageSubtitle: 'We build campaigns and creative systems that transform attention into measurable impact for premium brands.',
    cards: [
      {
        title: 'Luxury hospitality',
        text: 'Cinematic content, premium photography, and launch campaigns for restaurants and hospitality brands.'
      },
      {
        title: 'Automotive',
        text: 'Visual identity and social systems that help car businesses stand out with authority and clarity.'
      },
      {
        title: 'Finance & brokerage',
        text: 'Conversion-focused messaging and clean digital assets that strengthen trust and accelerate action.'
      }
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
    pageTitle: 'أعمال تجمع بين الاستراتيجية والتصميم والنمو',
    pageSubtitle: 'نصمم حملات وأنظمة إبداعية تحول الانتباه إلى تأثير قابل للقياس للعلامات التجارية المتميزة.',
    cards: [
      {
        title: 'الضيافة الفاخرة',
        text: 'محتوى سينمائي، تصوير فاخر، وحملات إطلاق للمطاعم ومؤسسات الضيافة.'
      },
      {
        title: 'السيارات',
        text: 'هوية بصرية وأنظمة سوشيال تساعد الشركات في قطاع السيارات على التميز بالوضوح والسلطة.'
      },
      {
        title: 'التمويل والوساطة',
        text: 'رسائل موجهة للتحويل وأصول رقمية أنيقة تعزز الثقة وتسرع اتخاذ القرار.'
      }
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

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
              {isArabic ? 'أعمالنا' : 'Our Work'}
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{text.pageTitle}</h1>
            <p className="mt-4 text-base leading-8 text-slate-300">{text.pageSubtitle}</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {text.cards.map((card) => (
              <div key={card.title} className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
                <h2 className="text-xl font-semibold text-white">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ClientsMarquee isArabic={isArabic} />
          </div>
        </section>

        <Footer isArabic={isArabic} text={text.footerBy} />
      </div>

      <FloatingChatWidget tooltip={text.tooltip} />
    </main>
  );
}

'use client';

import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ClientsMarquee from '@/components/ClientsMarquee';
import FeatureCards from '@/components/FeatureCards';
import NicheCards from '@/components/NicheCards';
import ProcessTimeline from '@/components/ProcessTimeline';
import StrategistBio from '@/components/StrategistBio';
import AuditForm from '@/components/AuditForm';
import FloatingChatWidget from '@/components/FloatingChatWidget';
import Footer from '@/components/Footer';

const copy = {
  en: {
    nav: [
      { id: 'services', label: 'Services' },
      { id: 'work', label: 'Our Work' },
      { id: 'audit', label: 'Free Audit' }
    ],
    homeLabel: 'Home',
    contactLabel: 'Request Consultation',
    badge: 'Exclusive Custom Offer',
    heroTitle: "We Don't Just Build Brands. We Drive Revenue.",
    heroSubtitle:
      'Performance-focused marketing solutions. Cinematic visual production, and data-driven strategies designed to scale your business and boost your bottom line.',
    explore: 'Start Your Growth',
    work: 'View Our Results',
    whyTitle: 'Strategic Expertise That Drives Results.',
    nichesTitle: 'Specialized Scaling for High-Demand Sectors.',
    auditTitle: 'Get Your Free Growth Roadmap',
    auditSubtitle: 'Submit your details, and I will personally audit your accounts for hidden growth potential.',
    auditName: 'Name',
    auditLink: 'Business Link',
    auditPhone: 'Phone',
    auditButton: 'Get Free Analysis',
    tooltip: "Got a project? Let's plan together.",
    footerBy:
      'Prepared by Haitham Abdalhay - Marketing Manager | Art Vision',
    pricingTitle: 'Strategic Investment for Scalable Growth.',
    processTitle: 'Our Proven Growth Journey.',
    meetStrategie: 'Meet the Strategist'
  },
  ar: {
    nav: [
      { id: 'services', label: 'الخدمات' },
      { id: 'work', label: 'أعمالنا' },
      { id: 'audit', label: 'التقييم' }
    ],
    homeLabel: 'الرئيسية',
    contactLabel: 'اطلب استشارة',
    badge: 'عرض مخصص حصري',
    heroTitle: 'نحن لا نبني العلامات التجارية فحسب. نحن نحرك الإيرادات.',
    heroSubtitle:
      'حلول تسويقية موجهة للأداء. إنتاج بصري سينمائي، واستراتيجيات قائمة على البيانات مصممة لتوسيع نشاطك وزيادة أرباحك.',
    explore: 'ابدأ نموك',
    work: 'عرض النتائج',
    whyTitle: 'الخبرة الاستراتيجية التي تحقق النتائج.',
    nichesTitle: 'تقديم متخصص للقطاعات عالية الطلب.',
    auditTitle: 'احصل على خريطة نموك المجانية',
    auditSubtitle: 'قدم تفاصيلك، وسأقيم حساباتك شخصياً للعثور على فرص النمو المخفية.',
    auditName: 'الاسم',
    auditLink: 'رابط النشاط',
    auditPhone: 'رقم الهاتف',
    auditButton: 'احصل على تحليل مجاني',
    tooltip: 'هل لديك مشروع؟ دعنا نخطط معًا.',
    footerBy:
      'Prepared by Haitham Abdalhay - Marketing Manager | Art Vision',
    pricingTitle: 'استثمار استراتيجي للنمو القابل للتوسع.',
    processTitle: 'رحلة نموك المثبتة.',
    meetStrategie: 'تعرف على الاستراتيجي'
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
    <main
      dir={isArabic ? 'rtl' : 'ltr'}
      lang={isArabic ? 'ar' : 'en'}
      className="relative min-h-screen overflow-hidden scrollbar-thin"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl animate-float-sphere" />
        <div className="absolute right-10 top-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl animate-float-sphere" />
        <div className="absolute left-1/2 top-[80%] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl animate-float-sphere" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 py-6 md:px-10 lg:px-12">
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

        <HeroSection
          badge={text.badge}
          title={text.heroTitle}
          subtitle={text.heroSubtitle}
          primaryLabel={text.explore}
          secondaryLabel={text.work}
          isArabic={isArabic}
        />

        <section className="mt-16">
          <StrategistBio isArabic={isArabic} />
        </section>

        <section id="work" className="mt-16">
          <ClientsMarquee isArabic={isArabic} />
        </section>

        <section className="mt-20">
          <FeatureCards isArabic={isArabic} />
        </section>

        <section className="mt-20">
          <NicheCards title={text.nichesTitle} isArabic={isArabic} />
        </section>

        <section className="mt-20">
          <ProcessTimeline isArabic={isArabic} />
        </section>

        <section id="audit" className="mt-20">
          <AuditForm
            title={text.auditTitle}
            subtitle={text.auditSubtitle}
            nameLabel={text.auditName}
            linkLabel={text.auditLink}
            phoneLabel={text.auditPhone}
            buttonLabel={text.auditButton}
            isArabic={isArabic}
          />
        </section>

        <Footer isArabic={isArabic} text={text.footerBy} />
      </div>

      <FloatingChatWidget tooltip={text.tooltip} />
    </main>
  );
}

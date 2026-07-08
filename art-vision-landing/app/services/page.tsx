"use client";
import { useEffect, useMemo, useState } from "react";
import Header from '@/components/Header';
import PricingCard from "@/components/PricingCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from '@/components/Footer';
import FloatingChatWidget from '@/components/FloatingChatWidget';

const copy = {
  en: {
    nav: [
      { id: 'services', label: 'Services' },
      { id: 'work', label: 'Our Work' },
      { id: 'audit', label: 'Free Audit' }
    ],
    homeLabel: 'Home',
    contactLabel: 'Request Consultation',
    pageLabel: 'Services & Pricing',
    pageTitle: 'Strategic investment for scalable growth.',
    pageSubtitle: 'Choose the right service packages to scale your brand with a performance-first approach.',
    heroHeading: 'Strategic pricing for high-impact services',
    heroParagraph: 'All prices are designed to deliver maximum ROI with clear value and scaling momentum.',
    videoHeading: 'Visual Production & Video',
    videoParagraph: 'Cinematic, conversion-focused video that turns views into revenue.',
    photographyHeading: 'Professional Photography',
    photographyParagraph: 'Capture your brand with premium imagery that sells every time.',
    photographyEventsHeading: 'Events & Gatherings Packages',
    photographyCommercialHeading: 'Food & Restaurant Packages',
    socialHeading: 'Social Media Growth & Management',
    socialParagraph: 'Content, community, and campaigns built to move your business forward.',
    techHeading: 'Tech Solutions & Systems',
    techParagraph: 'Automation and platforms that save time and increase operational efficiency.',
    brandingHeading: 'Branding & Visual Identity',
    brandingParagraph: 'A distinctive brand identity that earns trust and market authority.',
    contactText: 'Need a tailored proposal? Send a message and get a free growth roadmap for your business.',
    contactCta: 'Request a Consultation',
    footerBy: 'Prepared by Haitham Abdalhay - Marketing Manager | Art Vision',
    tooltip: "Got a project? Let's plan together.",
    currencyLabel: 'Currency',
    languageLabel: 'Language'
  },
  ar: {
    nav: [
      { id: 'services', label: 'الخدمات' },
      { id: 'work', label: 'أعمالنا' },
      { id: 'audit', label: 'التقييم' }
    ],
    homeLabel: 'الرئيسية',
    contactLabel: 'اطلب استشارة',
    pageLabel: 'الخدمات والأسعار',
    pageTitle: 'استثمار استراتيجي للنمو القابل للتوسع.',
    pageSubtitle: 'اختر الباقات والخدمات المناسبة لتوسيع علامتك التجارية بمنهج أداء أولاً.',
    heroHeading: 'تسعير استراتيجي لخدمات ذات تأثير عالي',
    heroParagraph: 'تم تصميم جميع الأسعار لتقديم أقصى عائد على الاستثمار مع وضوح القيمة وزخم النمو.',
    videoHeading: 'الإنتاج المرئي وتصوير الفيديو',
    videoParagraph: 'فيديوهات سينمائية بخطاف بصري قوي يحول المشاهدات إلى مبيعات وأرباح.',
    photographyHeading: 'التصوير الفوتوغرافي',
    photographyParagraph: 'نلتقط الذكريات بأعلى جودة، ونصنع صوراً جذابة ترفع أداء علامتك التجارية.',
    photographyEventsHeading: 'باقات المناسبات والتجمعات',
    photographyCommercialHeading: 'باقات تصوير المطاعم والأطعمة',
    socialHeading: 'إدارة السوشيال ميديا والنمو',
    socialParagraph: 'لا نكتفي بالنشر؛ نحن نبني استراتيجية رقمية متكاملة لزيادة التفاعل وإغلاق الصفقات.',
    techHeading: 'الحلول البرمجية وتطوير الأنظمة',
    techParagraph: 'أتمتة ذكية وبنية تحتية رقمية قوية توفر وقت فريقك وتزيد من كفاءة العمليات.',
    brandingHeading: 'تأسيس العلامة التجارية والهوية البصرية',
    brandingParagraph: 'نصنع هوية بصرية فريدة تمنحك السلطة والثقة في السوق.',
    contactText: 'هل تحتاج عرض مخصص؟ أرسل لنا رسالة وسنعدّ خريطة نمو مجانية لحسابك.',
    contactCta: 'اطلب استشارة',
    footerBy: 'Prepared by Haitham Abdalhay - Marketing Manager | Art Vision',
    tooltip: 'هل لديك مشروع؟ دعنا نخطط معًا.',
    currencyLabel: 'العملة',
    languageLabel: 'اللغة'
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

  const translate = (field: { en: string; ar: string }) => (isArabic ? field.ar : field.en);

  const pricing = useMemo(() => ({
    video: [
      {
        title: { en: 'The Hero Shot', ar: 'باقة اللقطة الواحدة' },
        price: 150,
        desc: {
          en: 'A single cinematic ad production with professional script, field filming, and advanced editing.',
          ar: 'إنتاج فيديو إعلاني سينمائي واحد عالي التأثير، يشمل كتابة سيناريو احترافي، تصوير ميداني، ومونتاج متقدم.'
        }
      },
      {
        title: { en: 'The Content Engine', ar: 'باقة المحتوى السريع' },
        price: 450,
        desc: {
          en: 'Six vertical videos (Reels/TikTok), fast edits, and color grading for rapid reach.',
          ar: 'إنتاج 6 فيديوهات عمودية (Reels/TikTok)، مونتاج سريع، وتعديل ألوان لتعزيز الانتشار السريع واستهداف الخوارزميات.'
        }
      },
      {
        title: { en: 'The Commercial Launch', ar: 'باقة الإطلاق الاحترافي' },
        price: 600,
        desc: {
          en: 'Two premium cinematic videos for paid ads, plus motion graphics and persuasive copywriting.',
          ar: 'إنتاج 2 فيديو سينمائي Premium للإعلانات الممولة، مؤثرات بصرية وموشن جرافيك، مع كتابة المحتوى الإعلاني البيعي Copywriting.'
        }
      },
      {
        title: { en: 'The Ultimate Production', ar: 'باقة الإنتاج المتكامل' },
        price: 1000,
        desc: {
          en: 'Four cinematic videos, BTS coverage, and eight branded graphic assets.',
          ar: 'إنتاج 4 فيديوهات سينمائية، تغطية خلف الكواليس BTS، و8 تصاميم جرافيك مكملة للهوية البصرية.'
        }
      }
    ],
    photography: {
      events: [
        {
          title: { en: 'Basic Moments', ar: 'باقة اللحظات' },
          price: 150,
          desc: {
            en: '2 hours of professional photography with 40 retouched high-resolution images.',
            ar: 'تصوير فوتوغرافي احترافي لمدة ساعتين، وتسليم 40 صورة معدلة بدقة عالية.'
          }
        },
        {
          title: { en: 'Premium Excellence', ar: 'باقة التميز' },
          price: 350,
          desc: {
            en: '4 hours of shooting, 80 retouched images, plus a cinematic highlight video.',
            ar: 'تصوير لمدة 4 ساعات، تسليم 80 صورة معدلة، بالإضافة إلى فيديو هايلايت سينمائي (دقيقة واحدة).'
          }
        },
        {
          title: { en: 'Ultimate Memory', ar: 'باقة الذكرى' },
          priceRange: [600, 750],
          desc: {
            en: '6 hours coverage, 150 edited photos, premium printed album, and a 3-minute cinematic edit.',
            ar: 'تغطية شاملة (6 ساعات)، تسليم 150 صورة معدلة، ألبوم مطبوع فاخر، وفيديو مونتاج سينمائي متكامل (3 دقائق).'
          }
        }
      ],
      commercial: [
        {
          title: { en: 'Menu Shot', ar: 'باقة القائمة' },
          price: 200,
          desc: {
            en: '8 premium dish shots with professional lighting and color editing.',
            ar: 'تصوير 8 أطباق رئيسية بإضاءة احترافية وتعديل ألوان دقيق.'
          }
        },
        {
          title: { en: 'Experience Package', ar: 'باقة التجربة' },
          price: 400,
          desc: {
            en: '15 premium dishes plus 5 lifestyle shots ready for social media.',
            ar: 'تصوير 15 طبقاً احترافياً + 5 لقطات للمكان جاهزة للسوشيال ميديا.'
          }
        },
        {
          title: { en: 'Full Brand Launch', ar: 'باقة الإطلاق' },
          priceRange: [600, 800],
          desc: {
            en: 'Complete menu coverage, lifestyle shots, and food stylist coordination.',
            ar: 'تصوير القائمة كاملة، لقطات لايف ستايل، وتنسيق الأطباق بواسطة Food Stylist.'
          }
        }
      ]
    },
    social: {
      plans: [
        {
          title: { en: 'Basic Presence', ar: 'باقة التواجد' },
          price: 300,
          desc: {
            en: '12 designed posts, comment management, and a monthly performance report.',
            ar: 'جدولة ونشر 12 منشوراً بتصميم احترافي، إدارة الردود، وتقرير شهري.'
          }
        },
        {
          title: { en: 'Growth Partner', ar: 'باقة النمو' },
          price: 500,
          desc: {
            en: 'Full management, 16 posts, 4 reels, 2 shoots, and a detailed performance report.',
            ar: 'إدارة شاملة، 16 منشوراً، 4 فيديوهات (Reels)، جلستا تصوير ميداني، وتقرير أداء مفصل.'
          },
          highlight: true
        },
        {
          title: { en: 'Scale & Ads', ar: 'باقة التوسع' },
          price: 750,
          desc: {
            en: 'Full social management plus paid ad setup, targeting, and conversion tracking.',
            ar: 'الإدارة الشاملة + إعداد وإدارة الحملات الإعلانية المدفوعة، استهداف ومتابعة التحويلات.'
          }
        }
      ],
      addons: [
        {
          title: { en: 'Ads Management', ar: 'إدارة الحملات الإعلانية' },
          price: 200,
          desc: {
            en: 'Professional campaign setup and supervision (ad budget not included).',
            ar: 'إعداد وإشراف احترافي للحملات الإعلانية (لا يشمل ميزانية الإعلانات).'
          }
        },
        {
          title: { en: 'Chatbot Integration', ar: 'أنظمة أتمتة الرد الذكي' },
          price: 200,
          desc: {
            en: 'Smart automated response systems to capture every lead.',
            ar: 'تفعيل أنظمة الرد الآلي المتقدمة لضمان عدم ضياع أي عميل محتمل.'
          }
        }
      ]
    },
    tech: [
      {
        title: { en: 'Business Website', ar: 'موقع ويب للشركات' },
        priceRange: [500, 1500],
        desc: {
          en: 'Custom responsive website design with speed and performance optimization.',
          ar: 'تصميم وتطوير موقع تعريفي مخصص، متوافق مع الجوال، وسرعة وأداء عالي.'
        }
      },
      {
        title: { en: 'Web/Mobile App', ar: 'تطبيقات الويب والموبايل' },
        price: 500,
        desc: {
          en: 'Custom app and platform development starting from $500.',
          ar: 'بناء تطبيقات ومنصات مخصصة — يبدأ من 500$.'
        }
      },
      {
        title: { en: 'Workflow Automation', ar: 'أتمتة سير العمل' },
        price: undefined,
        desc: {
          en: 'Pricing based on project scope.',
          ar: 'التسعير حسب متطلبات المشروع.'
        }
      }
    ],
    branding: [
      {
        title: { en: 'Pro Logo', ar: 'تصميم الشعار الاحترافي' },
        price: 200,
        desc: {
          en: 'A unique logo with primary and secondary versions.',
          ar: 'تصميم شعار فريد، يشمل النسخ الأساسية والملونة.'
        }
      },
      {
        title: { en: 'Visual Identity', ar: 'الهوية البصرية المتكاملة' },
        price: 600,
        desc: {
          en: 'Full visual identity including colors, fonts, and business cards.',
          ar: 'تصميم متكامل يشمل الألوان، الخطوط، وبطاقات العمل.'
        }
      },
      {
        title: { en: 'Complete Branding', ar: 'بناء البراندينج الكامل' },
        priceRange: [1000, 1800],
        desc: {
          en: 'Integrated brand strategy and brand guidelines.',
          ar: 'استراتيجية الهوية المتكاملة ودليل العلامة (Brand Guidelines).'
        }
      }
    ]
  }), []);

  const formatPrice = (value?: number) => {
    if (value == null) return "التسعير حسب المشروع";
    if (currency === "USD") return `$${value}`;
    return `IQD ${Number(value * 1500).toLocaleString("en-US")}`;
  };

  return (
    <main dir={isArabic ? 'rtl' : 'ltr'} lang={isArabic ? 'ar' : 'en'} className="min-h-screen bg-gradient-to-b from-[#0B101E] via-[#071021] to-[#00060b] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
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

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glass-lg">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">{text.pageLabel}</p>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">{text.pageTitle}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-300">{text.pageSubtitle}</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-200">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5.5h18v13H3z" />
                  <path d="M9 8.5l5 3-5 3V8.5z" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{isArabic ? 'إنتاج فيديو احترافي' : 'Video-first creative'}</h3>
              <p className="mt-2 text-sm text-slate-300">{isArabic ? 'صور وإعلانات تتحرك لتزيد من التحويلات.' : 'Ads and video content designed to drive real results.'}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
                  <path d="M7 5v-1h10v1" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{isArabic ? 'تصوير يجذب العملاء' : 'Premium photography'}</h3>
              <p className="mt-2 text-sm text-slate-300">{isArabic ? 'صور تجارية جذابة جاهزة للسوشيال.' : 'Beautiful brand imagery optimized for social channels.'}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-200">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19h16" />
                  <path d="M4 15h10" />
                  <path d="M4 11h16" />
                  <path d="M9 7l3-3 3 3" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{isArabic ? 'استراتيجية رقمية مكتملة' : 'Growth systems'}</h3>
              <p className="mt-2 text-sm text-slate-300">{isArabic ? 'إدارة وتطوير مع حضور رقمي قوي.' : 'Systems and campaigns built for sustainable growth.'}</p>
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass-lg">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">{text.videoHeading}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{text.videoHeading}</h2>
                <p className="mt-3 max-w-2xl text-slate-300">{text.videoParagraph}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {pricing.video.map(v => (
                <PricingCard
                  key={v.title.en}
                  title={translate(v.title)}
                  subtitle={translate(v.desc)}
                  priceUSD={v.price}
                  currency={currency}
                  isArabic={isArabic}
                />
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass-lg">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">{text.photographyHeading}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{text.photographyHeading}</h2>
              <p className="mt-3 max-w-2xl text-slate-300">{text.photographyParagraph}</p>
            </div>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white">{text.photographyEventsHeading}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {pricing.photography.events.map(p => (
                    <PricingCard key={p.title.en} title={translate(p.title)} subtitle={translate(p.desc)} priceUSD={p.price} priceRange={p.priceRange as any} currency={currency} isArabic={isArabic} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">{text.photographyCommercialHeading}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {pricing.photography.commercial.map(p => (
                    <PricingCard key={p.title.en} title={translate(p.title)} subtitle={translate(p.desc)} priceUSD={p.price} priceRange={p.priceRange as any} currency={currency} isArabic={isArabic} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass-lg">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">{text.socialHeading}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{text.socialHeading}</h2>
              <p className="mt-3 max-w-2xl text-slate-300">{text.socialParagraph}</p>
            </div>
            <div className="mt-8 grid gap-4">
              {pricing.social.plans.map(p => (
                <PricingCard
                  key={p.title.en}
                  title={translate(p.title)}
                  subtitle={translate(p.desc)}
                  priceUSD={p.price}
                  currency={currency}
                  highlight={p.highlight}
                  badge={p.highlight ? (isArabic ? "الأكثر طلباً" : "Most Popular") : undefined}
                  isArabic={isArabic}
                />
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white">{isArabic ? 'الإضافات الإعلانية' : 'Add-on services'}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {pricing.social.addons.map(a => (
                  <PricingCard key={a.title.en} title={translate(a.title)} subtitle={translate(a.desc)} priceUSD={a.price} currency={currency} isArabic={isArabic} />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass-lg">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">{text.techHeading}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{text.techHeading}</h2>
              <p className="mt-3 max-w-2xl text-slate-300">{text.techParagraph}</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {pricing.tech.map(t => (
                <PricingCard key={t.title.en} title={translate(t.title)} subtitle={translate(t.desc)} priceUSD={t.price} priceRange={(t as any).priceRange} currency={currency} isArabic={isArabic} />
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass-lg">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">{text.brandingHeading}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{text.brandingHeading}</h2>
              <p className="mt-3 max-w-2xl text-slate-300">{text.brandingParagraph}</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {pricing.branding.map(b => (
                <PricingCard key={b.title.en} title={translate(b.title)} subtitle={translate(b.desc)} priceUSD={b.price} priceRange={(b as any).priceRange} currency={currency} isArabic={isArabic} />
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="mt-12 rounded-[2rem] border border-white/10 bg-cyan-500/10 p-10 text-center text-white shadow-glass-lg">
          <p className="mx-auto max-w-2xl text-lg text-white/80">{text.contactText}</p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton packageName={isArabic ? 'استشارة عامة' : 'General Consultation'} isArabic={isArabic}>{text.contactCta}</WhatsAppButton>
          </div>
        </footer>

        <Footer isArabic={isArabic} text={text.footerBy} />
      </div>
      <FloatingChatWidget tooltip={text.tooltip} />
    </main>
  );
}

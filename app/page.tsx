'use client';

import { useEffect, useMemo, useState } from 'react';
import AuditForm from '@/components/AuditForm';
import ClientsMarquee from '@/components/ClientsMarquee';
import FloatingChatWidget from '@/components/FloatingChatWidget';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

type Lang = 'en' | 'ar';

const copy = {
  en: {
    nav: [
      { id: 'services', label: 'Services' },
      { id: 'work', label: 'Work' },
      { id: 'approach', label: 'Approach' },
      { id: 'audit', label: 'Audit' },
      { id: 'contact', label: 'Contact' }
    ],
    heroEyebrow: 'Art Visions Creative Growth Studio',
    heroTitle: 'We craft brand experiences that turn attention into lasting market authority.',
    heroSubtitle:
      'Art Visions blends visual storytelling, strategic media systems, and digital operations to help ambitious brands scale with elegance, precision, and measurable momentum.',
    heroPrimary: 'Start Your Brand Conversation',
    heroSecondary: 'Explore Our Services',
    heroStatA: 'Premium brand launches delivered across hospitality, automotive, and finance.',
    heroStatB: 'Cross-channel creative systems built for sustained lead quality and conversion.',
    servicesEyebrow: 'Service Architecture',
    servicesTitle: 'Complete creative and growth services designed as one connected system.',
    services: [
      {
        title: 'Cinematic Content Production',
        body: 'High-impact brand films and social-first video sequences built to elevate perception and strengthen conversion intent.',
        cta: 'Plan Your Campaign'
      },
      {
        title: 'Photography and Visual Direction',
        body: 'Editorial-grade product, lifestyle, and campaign imagery that positions your brand with clarity and prestige.',
        cta: 'Build Your Visual Library'
      },
      {
        title: 'Social and Performance Operations',
        body: 'Content frameworks, media execution, and reporting routines that keep your growth engine consistent and data-aware.',
        cta: 'Design Your Growth System'
      },
      {
        title: 'Brand Identity and Positioning',
        body: 'Strategic voice, visual language, and guidelines that align every touchpoint with your market narrative.',
        cta: 'Shape Your Brand Presence'
      },
      {
        title: 'Web and Automation Experience',
        body: 'Conversion-ready websites, lead capture journeys, and workflow automation that streamline operations end to end.',
        cta: 'Upgrade Your Digital Infrastructure'
      },
      {
        title: 'Launch Strategy and Advisory',
        body: 'Go-to-market playbooks, campaign sequencing, and executive-level guidance to accelerate confident expansion.',
        cta: 'Book a Strategy Session'
      }
    ],
    galleryEyebrow: 'Portfolio Showcase',
    galleryTitle: 'Our YouTube portfolio, organized by specialization.',
    galleryNote:
      'Select a category to explore its dedicated playlist. Each tile represents a core production direction our team delivers for clients.',
    portfolioLinksLabel: 'Direct Portfolio Channels',
    portfolioLinks: [
      { label: 'Instagram', href: 'https://www.instagram.com/art._.vision_/' },
      { label: 'YouTube', href: 'https://www.youtube.com/@art._.vision_h/playlists' },
      { label: 'Behance', href: 'https://www.behance.net/haitham_abdalhay' }
    ],
    youtubeCategories: [
      {
        name: 'Culinary Production',
        href: 'https://www.youtube.com/watch?v=8NdUEdNlIUA&list=PL9eBVOvP33QliXevBtelnDZ6ELHjsyPLt',
        image:
          'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80',
        alt: 'Culinary video production setup featuring plated food and cinematic lighting'
      },
      {
        name: 'Medical Branding Content',
        href: 'https://youtube.com/playlist?list=PL9eBVOvP33Ql91xFGotCzHa8z0b5ZqCSi&si=SFtdDujAGRFHYH-Z',
        image:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
        alt: 'Professional healthcare visual production for clinics and medical brands'
      },
      {
        name: 'Fitness and Gym Campaigns',
        href: 'https://youtube.com/playlist?list=PL9eBVOvP33QkWCMEOMY_auyPlSgNoXl_p&si=FDX_4G83ziu9tSe8',
        image:
          'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
        alt: 'Athletic training visual tailored for gym and fitness marketing'
      },
      {
        name: 'Watches and Jewelry Visuals',
        href: 'https://youtube.com/playlist?list=PL9eBVOvP33QkbJPAbjP03Oc5zO_RaGh6A&si=X_pA2VH40pgpQPj2',
        image:
          'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80',
        alt: 'Luxury watch and jewelry cinematography for premium retail brands'
      },
      {
        name: 'Automotive Storytelling',
        href: 'https://youtube.com/playlist?list=PL9eBVOvP33QmlS-pu_KeFfMcXjtvxvYCA&si=fS0Q0_EcZWsTFOfi',
        image:
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
        alt: 'Automotive commercial scene with premium car-focused production style'
      },
      {
        name: 'Restaurant Campaign Films',
        href: 'https://youtube.com/playlist?list=PL9eBVOvP33Qmo0upJrT4Sc-rs8HSxLPtT&si=ImpmROZzQlpf5_8X',
        image:
          'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
        alt: 'Restaurant atmosphere and food storytelling for hospitality growth campaigns'
      },
      {
        name: 'Fashion and Style Editorial',
        href: 'https://youtube.com/playlist?list=PL9eBVOvP33QkLgf01RnBco5Sn4e5rm-pA&si=C9X4xzyTOVili55v',
        image:
          'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Fashion campaign production with editorial aesthetics and luxury styling'
      }
    ],
    workEyebrow: 'Impact Narrative',
    workTitle: 'Selected sectors where strategy, visuals, and growth operations move together.',
    workCards: [
      {
        title: 'Luxury Hospitality',
        body: 'Brand storytelling systems that transform venue aesthetics into sustained demand and loyal guest communities.'
      },
      {
        title: 'Automotive and High-Value Retail',
        body: 'Authority-first content and campaign orchestration that help premium inventory stand out with confidence.'
      },
      {
        title: 'Finance and Brokerage Services',
        body: 'Trust-centered messaging frameworks that support credibility, education, and decisive lead action.'
      }
    ],
    approachEyebrow: 'Execution Model',
    approachTitle: 'A seamless journey from strategy to creative to scaled delivery.',
    steps: [
      {
        title: 'Discovery and Positioning',
        body: 'We define your growth constraints, brand strengths, and audience psychology before production begins.'
      },
      {
        title: 'Creative and System Design',
        body: 'We craft your content direction, user journey, and media structure as one integrated architecture.'
      },
      {
        title: 'Launch and Continuous Optimization',
        body: 'We monitor outcomes, refine execution, and compound gains through disciplined iteration cycles.'
      }
    ],
    auditTitle: 'Request a Complimentary Growth Audit',
    auditSubtitle:
      'Share your current digital presence and receive a focused roadmap highlighting positioning, creative, and conversion opportunities.',
    auditName: 'Full Name',
    auditLink: 'Business Link',
    auditPhone: 'Phone Number',
    auditButton: 'Send My Audit Request',
    contactEyebrow: 'Contact Art Visions',
    contactTitle: 'Let us shape your next growth chapter with precision and artistry.',
    contactBody:
      'From strategic campaigns to visual ecosystems and web experiences, we help brands scale with confidence and distinction.',
    contactPrimary: 'Start on WhatsApp',
    contactSecondary: 'Email the Team',
    footerBy: 'Prepared by Haitham Abdalhay - Marketing Manager | Art Vision',
    tooltip: "Got a project? Let's plan together.",
    languageLabel: 'Language'
  },
  ar: {
    nav: [
      { id: 'services', label: 'الخدمات' },
      { id: 'work', label: 'الأعمال' },
      { id: 'approach', label: 'آلية العمل' },
      { id: 'audit', label: 'التقييم' },
      { id: 'contact', label: 'التواصل' }
    ],
    heroEyebrow: 'استوديو Art Visions للنمو الإبداعي',
    heroTitle: 'نصنع تجارب علامة تجارية تحول الانتباه إلى حضور سوقي راسخ.',
    heroSubtitle:
      'تمزج Art Visions بين السرد البصري والأنظمة التسويقية والعمليات الرقمية لمساعدة العلامات الطموحة على التوسع بأناقة ودقة وزخم قابل للقياس.',
    heroPrimary: 'ابدأ حوار العلامة',
    heroSecondary: 'استعرض خدماتنا',
    heroStatA: 'إطلاقات راقية نُفذت لقطاعات الضيافة والسيارات والتمويل.',
    heroStatB: 'أنظمة إبداعية متعددة القنوات ترفع جودة العملاء المحتملين بشكل مستمر.',
    servicesEyebrow: 'منظومة الخدمات',
    servicesTitle: 'منظومة خدمات متكاملة تربط الإبداع بالنمو ضمن مسار واحد.',
    services: [
      {
        title: 'إنتاج المحتوى السينمائي',
        body: 'أفلام وهوية بصرية للفيديو الاجتماعي تعزز قيمة العلامة وتدعم نية الشراء بثقة.',
        cta: 'خطط حملتك'
      },
      {
        title: 'التصوير الفوتوغرافي والتوجيه البصري',
        body: 'صور احترافية بنَفَس تحريري للمنتجات وأسلوب الحياة والحملات لتموضع أكثر هيبة ووضوحًا.',
        cta: 'ابنِ مكتبتك البصرية'
      },
      {
        title: 'تشغيل السوشيال والأداء الرقمي',
        body: 'أطر محتوى وتنفيذ إعلامي ومتابعة نتائج تحافظ على استمرارية محرك النمو لديك.',
        cta: 'صمم نظام النمو'
      },
      {
        title: 'بناء الهوية والتموضع',
        body: 'لغة علامة ودليل بصري متكامل ينسّق جميع نقاط التماس ضمن سرد سوقي موحد.',
        cta: 'شكّل حضور علامتك'
      },
      {
        title: 'تجارب الويب والأتمتة',
        body: 'مواقع جاهزة للتحويل ومسارات التقاط عملاء وأتمتة ذكية تُحسن كفاءة التشغيل.',
        cta: 'طوّر بنيتك الرقمية'
      },
      {
        title: 'استراتيجية الإطلاق والإرشاد',
        body: 'خرائط دخول للسوق وتسلسل حملات وتوجيه تنفيذي يسرّع التوسع بثبات.',
        cta: 'احجز جلسة استراتيجية'
      }
    ],
    galleryEyebrow: 'معرض الأعمال',
    galleryTitle: 'معرض أعمالنا على يوتيوب، مُقسَّم حسب التخصص.',
    galleryNote:
      'اختر أي تصنيف لاستكشاف قائمة التشغيل الخاصة به مباشرة. كل بطاقة تمثل مسار إنتاج رئيسي نقدمه لعملائنا.',
    portfolioLinksLabel: 'روابط البورتفوليو المباشرة',
    portfolioLinks: [
      { label: 'Instagram', href: 'https://www.instagram.com/art._.vision_/' },
      { label: 'YouTube', href: 'https://www.youtube.com/@art._.vision_h/playlists' },
      { label: 'Behance', href: 'https://www.behance.net/haitham_abdalhay' }
    ],
    youtubeCategories: [
      {
        name: 'إنتاج الطهي والمأكولات',
        href: 'https://www.youtube.com/watch?v=8NdUEdNlIUA&list=PL9eBVOvP33QliXevBtelnDZ6ELHjsyPLt',
        image:
          'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80',
        alt: 'إخراج بصري للطهي والمأكولات بإضاءة سينمائية'
      },
      {
        name: 'المحتوى الطبي الاحترافي',
        href: 'https://youtube.com/playlist?list=PL9eBVOvP33Ql91xFGotCzHa8z0b5ZqCSi&si=SFtdDujAGRFHYH-Z',
        image:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
        alt: 'إنتاج مرئي للمجال الطبي والعيادات'
      },
      {
        name: 'حملات النوادي واللياقة',
        href: 'https://youtube.com/playlist?list=PL9eBVOvP33QkWCMEOMY_auyPlSgNoXl_p&si=FDX_4G83ziu9tSe8',
        image:
          'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
        alt: 'محتوى رياضي مخصص للنوادي ومجال اللياقة'
      },
      {
        name: 'الساعات والمجوهرات',
        href: 'https://youtube.com/playlist?list=PL9eBVOvP33QkbJPAbjP03Oc5zO_RaGh6A&si=X_pA2VH40pgpQPj2',
        image:
          'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80',
        alt: 'تصوير فاخر للساعات والمجوهرات'
      },
      {
        name: 'الإنتاج الإبداعي للسيارات',
        href: 'https://youtube.com/playlist?list=PL9eBVOvP33QmlS-pu_KeFfMcXjtvxvYCA&si=fS0Q0_EcZWsTFOfi',
        image:
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
        alt: 'تصوير وإخراج سينمائي لقطاع السيارات'
      },
      {
        name: 'المطاعم وتجارب الضيافة',
        href: 'https://youtube.com/playlist?list=PL9eBVOvP33Qmo0upJrT4Sc-rs8HSxLPtT&si=ImpmROZzQlpf5_8X',
        image:
          'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
        alt: 'إنتاج حملات بصرية للمطاعم والضيافة'
      },
      {
        name: 'الموضة والجمال',
        href: 'https://youtube.com/playlist?list=PL9eBVOvP33QkLgf01RnBco5Sn4e5rm-pA&si=C9X4xzyTOVili55v',
        image:
          'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
        alt: 'محتوى أزياء وجمال بطابع تحريري راقٍ'
      }
    ],
    workEyebrow: 'أثر الأعمال',
    workTitle: 'قطاعات مختارة ندمج فيها الاستراتيجية والإبداع والتشغيل لتحقيق نمو متماسك.',
    workCards: [
      {
        title: 'الضيافة الفاخرة',
        body: 'أنظمة سرد وهوية بصرية تحول جاذبية المكان إلى طلب مستمر وعلاقة ولاء أقوى.'
      },
      {
        title: 'السيارات والتجزئة عالية القيمة',
        body: 'محتوى يرسخ السلطة وتنسيق حملات يساعد المنتجات المميزة على الظهور بثقة.'
      },
      {
        title: 'الخدمات المالية والوساطة',
        body: 'رسائل تبني الثقة وتدعم المصداقية وتدفع العميل لاتخاذ القرار بسرعة ووضوح.'
      }
    ],
    approachEyebrow: 'آلية العمل',
    approachTitle: 'رحلة سلسة من الاستراتيجية إلى الإبداع ثم التوسع التشغيلي.',
    steps: [
      {
        title: 'الاستكشاف والتموضع',
        body: 'نحدد قيود النمو ومكامن قوة العلامة ودوافع الجمهور قبل بدء الإنتاج.'
      },
      {
        title: 'تصميم الإبداع والأنظمة',
        body: 'نبني اتجاه المحتوى ومسار المستخدم وهيكل الحملات كمنظومة مترابطة واحدة.'
      },
      {
        title: 'الإطلاق والتحسين المستمر',
        body: 'نراقب النتائج ونطور التنفيذ ونراكم المكاسب عبر دورات تحسين منضبطة.'
      }
    ],
    auditTitle: 'اطلب تقييم نمو مجاني',
    auditSubtitle:
      'شارك حضورك الرقمي الحالي لتحصل على خريطة مركزة توضّح فرص التموضع والإبداع والتحويل.',
    auditName: 'الاسم الكامل',
    auditLink: 'رابط النشاط',
    auditPhone: 'رقم الهاتف',
    auditButton: 'أرسل طلب التقييم',
    contactEyebrow: 'تواصل مع Art Visions',
    contactTitle: 'لنصمم فصل نموك القادم بدقة إبداعية ورؤية استراتيجية.',
    contactBody:
      'من الحملات الاستراتيجية إلى الأنظمة البصرية وتجارب الويب، نساعدك على التوسع بحضور قوي وتميز واضح.',
    contactPrimary: 'ابدأ عبر واتساب',
    contactSecondary: 'راسل الفريق',
    footerBy: 'Prepared by Haitham Abdalhay - Marketing Manager | Art Vision',
    tooltip: 'هل لديك مشروع؟ دعنا نخطط معًا.',
    languageLabel: 'اللغة'
  }
};

export default function Page() {
  const [language, setLanguage] = useState<Lang>('en');

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('artvision-language');
    if (storedLanguage === 'ar' || storedLanguage === 'en') {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('artvision-language', language);
  }, [language]);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const isArabic = language === 'ar';
  const text = useMemo(() => copy[language], [language]);

  return (
    <main dir={isArabic ? 'rtl' : 'ltr'} lang={isArabic ? 'ar' : 'en'} className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl animate-float-sphere" />
        <div className="absolute right-8 top-1/4 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl animate-float-sphere" />
        <div className="absolute left-1/3 top-[75%] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl animate-float-sphere" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 pb-8 pt-6 md:px-10 lg:px-12">
        <header className="glass sticky top-4 z-40 rounded-3xl border border-white/10 bg-slate-950/75 px-5 py-4 shadow-glow backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/25 bg-cyan-400/10">
                <img src="/my-logo.png" alt="Art Visions brand mark" className="h-full w-full object-cover" />
              </span>
              <span>
                <span className="block text-sm text-cyan-100">Art Visions</span>
                <span className="block text-xs text-slate-400">Creative Growth Studio</span>
              </span>
            </a>

            <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              {text.nav.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="nav-chip rounded-full px-4 py-2 transition hover:bg-cyan-400/12 hover:text-cyan-100">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300/35"
                aria-label="Toggle language"
              >
                {text.languageLabel}: {language.toUpperCase()}
              </button>
              <a href="#contact" className="rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2 text-sm font-semibold text-[#041226] transition hover:brightness-105">
                {isArabic ? 'ابدأ مشروعك' : 'Start Your Project'}
              </a>
            </div>
          </div>
        </header>

        <section id="top" className="reveal-item mt-8 overflow-hidden rounded-[2.2rem] border border-white/10 bg-slate-950/55 p-8 shadow-glow sm:p-12" data-reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/85">{text.heroEyebrow}</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">{text.heroTitle}</h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300">{text.heroSubtitle}</p>
              <div className={`flex flex-wrap gap-4 ${isArabic ? 'justify-end' : 'justify-start'}`}>
                <a href="#contact" className="hero-btn inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950">
                  {text.heroPrimary}
                </a>
                <a href="#services" className="hero-btn inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100">
                  {text.heroSecondary}
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 text-sm text-slate-200">{text.heroStatA}</div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 text-sm text-slate-200">{text.heroStatB}</div>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-400/5 p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,240,255,0.22),_transparent_32%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_30%)]" />
              <div className="relative h-full rounded-[1.6rem] border border-white/10 bg-slate-950/80 p-6">
                <div className="grid h-full items-center gap-6 md:grid-cols-[0.9fr_1.1fr]">
                  <div className="flex justify-center">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-cyan-300 shadow-[0_0_28px_rgba(56,189,248,0.55)]">
                      <img src="/logo/my_Image.png" alt="Haitham Abdalhay" className="h-full w-full object-cover" />
                      <div className="pointer-events-none absolute inset-0 rounded-full border border-cyan-200/20" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                      {isArabic ? 'تعرّف على الاستراتيجي' : 'Meet the Strategist'}
                    </p>
                    <h3 className="text-3xl font-semibold text-white">Haitham Abdalhay</h3>
                    <p className="text-sm font-semibold text-cyan-100">
                      {isArabic ? 'مدير التسويق | Art Visions' : 'Marketing Manager | Art Visions'}
                    </p>
                    <p className="text-sm leading-7 text-slate-300">
                      {isArabic
                        ? 'التسويق ليس إعلانات فقط، بل بناء مسار نمو واضح قابل للقياس. نعمل معك لتحويل الانتباه إلى نتائج فعلية ومستدامة.'
                        : 'Marketing is more than advertising. It is a measurable growth system that turns attention into consistent business outcomes.'}
                    </p>
                    <a
                      href="#audit"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/15 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/25"
                    >
                      {isArabic ? 'احصل على استشارة مجانية' : 'Get a Free Consultation'}
                      <span aria-hidden="true">{'->'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="reveal-item mt-20" data-reveal>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">{text.servicesEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{text.servicesTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {text.services.map((service) => (
              <article key={service.title} className="service-card group rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-6 shadow-glass-lg transition">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.body}</p>
                <div className="mt-6">
                  <WhatsAppButton packageName={service.title} isArabic={isArabic}>
                    {service.cta}
                  </WhatsAppButton>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal-item mt-20" data-reveal>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">{text.galleryEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{text.galleryTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{text.galleryNote}</p>
          </div>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="text-sm text-slate-300">{text.portfolioLinksLabel}:</span>
            {text.portfolioLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-300/35 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {text.youtubeCategories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/65 transition hover:-translate-y-1 hover:border-cyan-300/45"
              >
                <figure>
                  <img src={category.image} alt={category.alt} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <figcaption className="border-t border-white/10 p-4 text-base font-semibold text-white">
                    {category.name}
                  </figcaption>
                </figure>
              </a>
            ))}
          </div>
        </section>

        <section id="work" className="reveal-item mt-20" data-reveal>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">{text.workEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{text.workTitle}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {text.workCards.map((card) => (
              <article key={card.title} className="rounded-[1.5rem] border border-cyan-300/20 bg-cyan-400/10 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/60 p-4">
            <ClientsMarquee isArabic={isArabic} />
          </div>
        </section>

        <section id="approach" className="reveal-item mt-20" data-reveal>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">{text.approachEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{text.approachTitle}</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {text.steps.map((step, index) => (
              <article key={step.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="audit" className="reveal-item mt-20" data-reveal>
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

        <section id="contact" className="reveal-item mt-20 rounded-[2rem] border border-cyan-300/25 bg-cyan-500/10 p-8 shadow-glass-lg sm:p-10" data-reveal>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">{text.contactEyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{text.contactTitle}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-200">{text.contactBody}</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-6">
              <div className="flex flex-col gap-4 sm:flex-row">
                <WhatsAppButton packageName={isArabic ? 'استشارة استراتيجية' : 'Strategic Consultation'} isArabic={isArabic}>
                  {text.contactPrimary}
                </WhatsAppButton>
                <a
                  href="mailto:haithamabdalhay@gmail.com"
                  className="inline-flex items-center justify-center rounded-md border border-cyan-300/35 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/10"
                >
                  {text.contactSecondary}
                </a>
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

'use client';

import Image from 'next/image';
import { MdAnalytics, MdDesignServices, MdVideocam } from 'react-icons/md';

type FeatureCardsProps = {
  isArabic: boolean;
};

const features = [
  {
    title: 'Cinematic Content Production',
    description:
      'Cinematic visuals engineered to grab attention and convert scrollers into loyal customers.',
    icon: MdVideocam,
    titleAr: 'الإنتاج السينمائي للمحتوى',
    descriptionAr: 'مرئيات سينمائية مصممة لجذب الانتباه وتحويل المتصفحين إلى عملاء مخلصين.',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600'
  },
  {
    title: 'Photography and Visual Direction',
    description:
      'Editorial-grade imagery and visual systems crafted to elevate brand presence across every customer touchpoint.',
    icon: MdDesignServices,
    titleAr: 'التصوير والإخراج البصري',
    descriptionAr: 'صور تحريرية فائقة الجودة وأنظمة بصرية مصممة لرفع حضور العلامة التجارية في كل نقطة تواصل.',
    image:
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600'
  },
  {
    title: 'Social and Performance Operations',
    description:
      'Data-driven social growth and performance loops designed to scale awareness, engagement, and measurable outcomes.',
    icon: MdAnalytics,
    titleAr: 'عمليات السوشيال والأداء',
    descriptionAr: 'نمو اجتماعي وحلقات أداء مدفوعة بالبيانات لتوسيع الوعي والتفاعل والنتائج القابلة للقياس.',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600'
  },
  {
    title: 'Brand Identity and Positioning',
    description:
      'Crafting iconic brand identities that do not just look good, they dominate your market niche.',
    icon: MdDesignServices,
    titleAr: 'هوية العلامة التجارية والتموضع',
    descriptionAr: 'صياغة هويات علامات تجارية أيقونية لا تبدو جيدة فقط، بل تهيمن على تخصصك السوقي.',
    image:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600'
  },
  {
    title: 'Web and Automation Experience',
    description:
      'Elegant digital experiences with intelligent automation to streamline operations and amplify user journeys.',
    icon: MdAnalytics,
    titleAr: 'تجربة الويب والأتمتة',
    descriptionAr: 'تجارب رقمية أنيقة مع أتمتة ذكية لتبسيط العمليات وتعزيز رحلات المستخدم.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600'
  },
  {
    title: 'Launch Strategy and Advisory',
    description:
      'Strategic launch orchestration and advisory support to align vision, execution, and accelerated market entry.',
    icon: MdVideocam,
    titleAr: 'استراتيجية الإطلاق والاستشارات',
    descriptionAr: 'تنسيق استراتيجي للإطلاق ودعم استشاري لمواءمة الرؤية والتنفيذ وتسريع دخول السوق.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600'
  }
];

const noiseTexture =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.15' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

export default function FeatureCards({ isArabic }: FeatureCardsProps) {
  return (
    <section className="glass rounded-[2rem] border border-white/10 bg-slate-950/55 p-8 shadow-glass-lg">
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
          {isArabic ? 'لماذا نحن' : 'Why Choose Us?'}
        </p>
        <h2 className="text-3xl font-semibold text-white">
          {isArabic
            ? 'الخبرة الاستراتيجية التي تحقق النتائج.'
            : 'Strategic Expertise That Drives Results.'}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]"
            >
              <Image
                src={feature.image}
                alt={isArabic ? feature.titleAr : feature.title}
                fill
                className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale contrast-125 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-60 group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

              <div
                className="pointer-events-none absolute inset-0 z-[5] opacity-[0.012]"
                style={{ backgroundImage: noiseTexture, backgroundRepeat: 'repeat' }}
              />

              <div className="pointer-events-none absolute inset-0 z-[6] overflow-hidden">
                <div className="absolute inset-y-0 left-[-120%] w-[60%] -skew-x-12 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:animate-card-sheen" />
              </div>

              <div className="relative z-10">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-cyan-500/5 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200">
                  <Icon size={24} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {isArabic ? feature.titleAr : feature.title}
                </h3>

                <p className="text-sm leading-6 text-slate-200">
                  {isArabic ? feature.descriptionAr : feature.description}
                </p>

                <div className="mt-6 rounded-2xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100">
                  {isArabic ? 'متوسط +35% نمو' : 'Avg. +35% Growth'}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

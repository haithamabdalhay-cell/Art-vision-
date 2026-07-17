'use client';

import { MdAnalytics, MdDesignServices, MdVideocam } from 'react-icons/md';

type FeatureCardsProps = {
  isArabic: boolean;
};

const features = [
  {
    title: 'Brand Authority & Identity',
    description: 'Crafting iconic brand identities that do not just look good, they dominate your market niche.',
    icon: MdDesignServices,
    titleAr: 'سلطة العلامة التجارية والهوية',
    descriptionAr: 'صياغة هويات العلامات التجارية الأيقونية التي لا تبدو جيدة فحسب - بل تهيمن على تخصصك السوقي.'
  },
  {
    title: 'Data-Driven Growth',
    description: 'We optimize for ROI, using precise analytics to turn every dollar of your ad spend into measurable revenue.',
    icon: MdAnalytics,
    titleAr: 'النمو المدفوع بالبيانات',
    descriptionAr: 'نحن نحسن للعائد على الاستثمار، باستخدام التحليلات الدقيقة لتحويل كل دولار من إنفاقك الإعلاني إلى إيراد قابل للقياس.'
  },
  {
    title: 'High-Conversion Content',
    description: 'Cinematic visuals engineered to grab attention and convert scrollers into loyal customers.',
    icon: MdVideocam,
    titleAr: 'محتوى عالي التحويل',
    descriptionAr: 'رسوميات سينمائية مصممة لجذب الانتباه وتحويل المتصفحين إلى عملاء مخلصين.'
  }
];

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

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="glass floating-panel rounded-[1.8rem] border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.16)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200">
                <Icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {isArabic ? feature.titleAr : feature.title}
              </h3>
              <p className="text-sm leading-6 text-slate-300">
                {isArabic ? feature.descriptionAr : feature.description}
              </p>
              <div className="mt-6 rounded-2xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100">
                {isArabic ? 'متوسط +35% نمو' : 'Avg. +35% Growth'}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

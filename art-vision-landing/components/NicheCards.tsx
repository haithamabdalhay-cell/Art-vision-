'use client';

import { AiFillPhone } from 'react-icons/ai';
import { GiMeal } from 'react-icons/gi';
import { RiCalendarEventFill } from 'react-icons/ri';

type NicheCardsProps = {
  title: string;
  isArabic: boolean;
};

const niches = [
  {
    title: 'Hospitality & Dining',
    description: 'Drive physical footfall and online orders with automated sales funnels and crave-worthy food styling.',
    icon: GiMeal,
    titleAr: 'الضيافة والمطاعم',
    descriptionAr: 'زيادة الزيارات المادية والطلبات عبر الإنترنت من خلال مسامير المبيعات الآلية وتصميم الطعام الجذاب.'
  },
  {
    title: 'Mobile Apps & Tech',
    description: 'Scalable user acquisition strategies focused on maximizing app installs and long-term user retention.',
    icon: AiFillPhone,
    titleAr: 'التطبيقات الجوالة والتكنولوجيا',
    descriptionAr: 'استراتيجيات اكتساب المستخدمين القابلة للتوسع، مركزة على زيادة تثبيتات التطبيق والاحتفاظ بالمستخدمين على المدى الطويل.'
  },
  {
    title: 'Events & Workshops',
    description: 'Maximize attendance and ticket sales through targeted lead generation and scarcity-driven marketing.',
    icon: RiCalendarEventFill,
    titleAr: 'الفعاليات وورش العمل',
    descriptionAr: 'تعظيم الحضور ومبيعات التذاكر من خلال توليد العملاء المحتملين الموجهة والتسويق القائم على الندرة.'
  }
];

export default function NicheCards({ title, isArabic }: NicheCardsProps) {
  return (
    <section className="glass rounded-[2rem] border border-white/10 bg-slate-950/55 p-8 shadow-glass-lg">
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
          {isArabic ? 'القطاعات المستهدفة' : 'Industry Focus'}
        </p>
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {niches.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="glass floating-panel rounded-[1.8rem] border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.16)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200">
                <Icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {isArabic ? item.titleAr : item.title}
              </h3>
              <p className="text-sm leading-6 text-slate-300">
                {isArabic ? item.descriptionAr : item.description}
              </p>
              <div className="mt-6 rounded-2xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100">
                {isArabic ? 'القطاع الرائد' : 'Industry Leader'}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

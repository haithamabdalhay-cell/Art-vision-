'use client';

import { FaBrain, FaRocket } from 'react-icons/fa';
import { BsBarChartLine } from 'react-icons/bs';

type ProcessTimelineProps = {
  isArabic: boolean;
};

const steps = [
  {
    icon: FaBrain,
    title: 'Analysis & Strategy',
    description: 'We audit your current performance to uncover missed revenue opportunities.',
    titleAr: 'التحليل والاستراتيجية',
    descriptionAr: 'نحن نتفقد أدائك الحالي للكشف عن فرص الإيرادات المفقودة.'
  },

  {
    icon: BsBarChartLine,
    title: 'Creative Execution',
    description: 'Cinematic production and high-converting creative assets that engage your audience.',
    titleAr: 'تنفيذ الإبداع',
    descriptionAr: 'الإنتاج السينمائي والمحتوى الإبداعي عالي التحويل الذي يجذب جمهورك.'
  },
  {
    icon: FaRocket,
    title: 'Optimization & Scale',
    description: 'Continuous reporting, A/B testing, and campaign scaling to maximize your ROI.',
    titleAr: 'التحسين والتوسيع',
    descriptionAr: 'التقارير المستمرة واختبار A/B وتوسيع الحملات لتحقيق أقصى عائد على الاستثمار.'
  }
];

export default function ProcessTimeline({ isArabic }: ProcessTimelineProps) {
  return (
    <section className="glass rounded-[2rem] border border-white/10 bg-slate-950/55 p-8 shadow-glass-lg">
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
          {isArabic ? 'رحلة النمو' : 'Growth Journey'}
        </p>
        <h2 className="text-3xl font-semibold text-white">
          {isArabic ? 'رحلة نموك المثبتة.' : 'Our Proven Growth Journey.'}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <div
              key={step.title}
              className="glass rounded-[1.8rem] border border-white/10 p-6 text-slate-200 shadow-glass-lg transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(34,211,238,0.16)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-100">
                <StepIcon size={22} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {isArabic ? step.titleAr : step.title}
              </h3>
              <p className="text-sm leading-6 text-slate-300">
                {isArabic ? step.descriptionAr : step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

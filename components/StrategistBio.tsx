'use client';

type StrategistBioProps = {
  isArabic: boolean;
};

export default function StrategistBio({ isArabic }: StrategistBioProps) {
  return (
    <section className="glass relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 p-8 shadow-glow sm:p-12">
      <div className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-2 items-center">
        {/* Image Side - Dynamic placement based on RTL */}
        <div className={`flex justify-center ${isArabic ? 'lg:order-last' : 'lg:order-first'}`}>
          <div className="relative">
            <div className="relative h-64 w-64 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)]">
              <img
                src="/logo/my_Image.png"
                alt="Haitham Abdalhay"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-300/20 shadow-[inset_0_0_20px_rgba(34,211,238,0.2)]" />
          </div>
        </div>

        {/* Text Side */}
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80 mb-3">
              {isArabic ? 'تعرف على الاستراتيجي' : 'Meet the Strategist'}
            </p>
            <h2 className="text-3xl font-semibold text-white mb-4">
              {isArabic ? 'Haitham Abdalhay' : 'Haitham Abdalhay'}
            </h2>
            <p className="text-sm text-cyan-200 mb-6 font-semibold">
              {isArabic ? 'مدير التسويق | فن الرؤية' : 'Marketing Manager | Art Vision'}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm leading-7 text-slate-300">
              {isArabic
                ? 'التسويق ليس مجرد إعلانات؛ إنه بناء آلة إيرادات موثوقة. أنا Haitham Abdalhay، وأنا لا أدير الحسابات فقط - بل أشارك مع الشركات في توسيع تأثيرها وتعظيم أرباحها. دعنا نتوقف عن إهدار ميزانية إعلاناتك ونبدأ في تحقيق نتائج حقيقية.'
                : "Marketing isn't just about ads; it's about building a predictable revenue machine. I'm Haitham Abdalhay. I don't just manage accounts—I partner with businesses to scale their impact and maximize their bottom line. Let's stop wasting your ad spend and start driving real results."}
            </p>
          </div>

          <a
            href="#audit"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400/20 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/30 border border-cyan-400/30"
          >
            {isArabic ? 'احصل على استشارة مجانية' : 'Get a Free Consultation'}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

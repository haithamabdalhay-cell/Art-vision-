'use client';

import { withBasePath } from '@/lib/assetPath';

type ClientsMarqueeProps = {
  isArabic: boolean;
};

// Restaurant logos
const restaurantLogos = [
  { name: 'ALAGHA land.png', folder: 'restaurant' },
  { name: 'ALPINA.png', folder: 'restaurant' },
  { name: 'BARLEY.png', folder: 'restaurant' },
  { name: 'DAMASQUINO .png', folder: 'restaurant' },
  { name: 'DENARO restaurant .png', folder: 'restaurant' },
  { name: 'karam alkhal .png', folder: 'restaurant' },
  { name: 'Naranj .png', folder: 'restaurant' },
  { name: 'Ozikizler.png', folder: 'restaurant' },
  { name: 'PappaRoti.png', folder: 'restaurant' },
  { name: 'PRegO.png', folder: 'restaurant' },
  { name: 'sweet taste.png', folder: 'restaurant' },
  { name: 'Tag .png', folder: 'restaurant', label: 'Taj' },
  { name: 'TCHE TCHE.png', folder: 'restaurant' },
  { name: 'The Dates.png', folder: 'restaurant' },
  { name: 'Tofiq HALWACHY.png', folder: 'restaurant' },
  { name: 'wood Lounge.png', folder: 'restaurant' }
];

// Company logos
const companyLogos = [
  { name: 'WOOW ORGANICS.png', folder: "company's" },
  { name: 'Zama safe.png', folder: "company's" }
];

// Cars logos
const carsLogos = [
  { name: 'ALHAYDAR .png', folder: 'cars' }
];

// Forex Brokers logos
const forexBrokersLogos = [
  { name: 'Axp broker .png', folder: 'forex brokers' },
  { name: 'dowjonez broker.png', folder: 'forex brokers' }
];

// Watches and Jewelry logos
const watchesJewelryLogos = [
  { name: 'Jasmine Road.png', folder: 'watches and jewelry' },
  { name: 'Time Inventors.png', folder: 'watches and jewelry' },
  { name: 'WATCH HUB.png', folder: 'watches and jewelry' },
  { name: 'Zoughaib & Co.__Kurdistan .png', folder: 'watches and jewelry' }
];

type LogoItem = {
  name: string;
  folder: string;
  label?: string;
};

const getLogoLabel = (logo: LogoItem) =>
  (logo.label ?? logo.name)
    .replace(/\.png$/i, '')
    .replace(/[_]+/g, ' ')
    .trim();

const getLogoSrc = (logo: LogoItem) =>
  withBasePath(`/logo/${encodeURIComponent(logo.folder)}/${encodeURIComponent(logo.name)}`);

export default function ClientsMarquee({ isArabic }: ClientsMarqueeProps) {
  const allLogos = [...restaurantLogos, ...companyLogos, ...carsLogos, ...forexBrokersLogos, ...watchesJewelryLogos];

  return (
    <div className="glass relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 p-5 shadow-glass-lg">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
            {isArabic ? 'عملاء متميزون' : 'Trusted by premium brands'}
          </p>
          <h2 className="text-2xl font-semibold text-white">
            {isArabic ? 'شركاء النجاح' : 'Client Showcase'}
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-950/80 to-slate-900/90 p-4 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
        <div className="flex animate-marquee gap-4 whitespace-nowrap">
          {[...allLogos, ...allLogos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex min-h-[132px] min-w-[142px] items-center justify-center rounded-2xl border border-cyan-300/20 bg-slate-950/80 p-3 shadow-lg shadow-cyan-950/30"
            >
              <div className="flex w-full flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-full items-center justify-center rounded-xl bg-white/95 p-2">
                  <img
                    src={getLogoSrc(logo)}
                    alt={getLogoLabel(logo)}
                    className="max-w-full max-h-12 object-contain"
                    style={{ maxWidth: '100%', maxHeight: '48px' }}
                  />
                </div>
                <p className="text-[11px] font-medium leading-tight text-slate-200">
                  {getLogoLabel(logo)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurants Section */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">
          {isArabic ? 'المطاعم والضيافة' : 'Restaurants & Hospitality'}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {restaurantLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center h-32 rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors"
            >
              <img
                src={getLogoSrc(logo)}
                alt={getLogoLabel(logo)}
                className="max-w-full max-h-16 object-contain"
                style={{ maxWidth: '100%', maxHeight: '64px' }}
              />
              <p className="mt-2 text-xs text-slate-300 text-center">
                {getLogoLabel(logo)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Companies Section */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">
          {isArabic ? 'الشركات' : 'Companies'}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {companyLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center h-32 rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors"
            >
              <img
                src={getLogoSrc(logo)}
                alt={getLogoLabel(logo)}
                className="max-w-full max-h-16 object-contain"
                style={{ maxWidth: '100%', maxHeight: '64px' }}
              />
              <p className="mt-2 text-xs text-slate-300 text-center">
                {getLogoLabel(logo)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Cars Section */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">
          {isArabic ? 'السيارات' : 'Cars & Automotive'}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {carsLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center h-32 rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors"
            >
              <img
                src={getLogoSrc(logo)}
                alt={getLogoLabel(logo)}
                className="max-w-full max-h-16 object-contain"
                style={{ maxWidth: '100%', maxHeight: '64px' }}
              />
              <p className="mt-2 text-xs text-slate-300 text-center">
                {getLogoLabel(logo)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Forex Brokers Section */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">
          {isArabic ? 'وسطاء الفوركس' : 'Forex Brokers'}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {forexBrokersLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center h-32 rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors"
            >
              <img
                src={getLogoSrc(logo)}
                alt={getLogoLabel(logo)}
                className="max-w-full max-h-16 object-contain"
                style={{ maxWidth: '100%', maxHeight: '64px' }}
              />
              <p className="mt-2 text-xs text-slate-300 text-center">
                {getLogoLabel(logo)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Watches and Jewelry Section */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">
          {isArabic ? 'الساعات والمجوهرات' : 'Watches & Jewelry'}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {watchesJewelryLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center h-32 rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors"
            >
              <img
                src={getLogoSrc(logo)}
                alt={getLogoLabel(logo)}
                className="max-w-full max-h-16 object-contain"
                style={{ maxWidth: '100%', maxHeight: '64px' }}
              />
              <p className="mt-2 text-xs text-slate-300 text-center">
                {getLogoLabel(logo)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

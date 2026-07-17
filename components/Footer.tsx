'use client';

import { FiMail, FiInstagram, FiYoutube } from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';
import { FaTelegramPlane } from 'react-icons/fa';

type FooterProps = {
  isArabic: boolean;
  text: string;
};

export default function Footer({ isArabic, text }: FooterProps) {
  const socialLinks = [
    { icon: FiMail, href: 'mailto:haithamabdalhay@gmail.com', label: 'Email', color: 'hover:text-red-400' },
    { icon: SiBehance, href: 'https://www.behance.net/haitham_abdalhay', label: 'Behance', color: 'hover:text-cyan-300' },
    { icon: FiInstagram, href: 'https://www.instagram.com/art._.vision_', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: FiYoutube, href: 'https://www.youtube.com/@art._.vision_h/playlists', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: FaTelegramPlane, href: 'https://t.me/Shakazola', label: 'Telegram', color: 'hover:text-blue-400' }
  ];

  return (
    <footer className="mt-20 rounded-[2rem] border border-white/10 bg-slate-950/55 p-8 text-slate-300 shadow-glass-lg">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80 mb-3">
              {isArabic ? 'لننمي نشاطك معًا' : "Let's Scale Your Business Together"}
            </p>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {isArabic ? 'لننمي نشاطك معًا' : "Let's Scale Your Business Together"}
            </h3>
          </div>
          <p className="text-sm leading-7 text-slate-300">
            {isArabic
              ? 'هل أنت مستعد للانتقال من الحضور الشكلي إلى نمو حقيقي في الإيرادات؟ دعنا نخطط لاستراتيجية تناسب أهدافك التجارية.'
              : "Ready to move beyond branding and start driving real revenue? Let's map out a strategy that fits your growth goals."}
          </p>

          {/* Social Links Row */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-cyan-100">{isArabic ? 'تابعنا' : 'Follow Us'}</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`group flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-100 transition ${social.color} shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]`}
                    title={social.label}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-cyan-200">
                      <Icon size={18} />
                    </span>
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="rounded-[1.8rem] border border-cyan-300/30 bg-gradient-to-br from-cyan-400/10 to-transparent p-8 flex flex-col justify-between">
          <div>
            <p className="text-white text-lg font-semibold mb-3">Art Vision</p>
            <p className="text-sm text-slate-300 mb-6">
              {isArabic
                ? 'وكالة للنمو والاستراتيجية، حيث يلتقي الإبداع بالنتائج.'
                : 'Growth & Strategy Agency - Where creativity meets results.'}
            </p>
          </div>
          <a
            href="https://wa.me/9647709753878?text=Hello%20Haitham,%20I%20want%20to%20start%20my%20project%20now."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] w-full"
          >
            {isArabic ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-white/5" />

      {/* Credit Line */}
      <div className="mt-6 text-center">
        <p className="text-xs text-slate-500">{text}</p>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, TrendingUp, Camera, CheckCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

// --- Components ---

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#051024]"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-300 font-['Montserrat']"
      >
        ART VISION
      </motion.div>
    </motion.div>
  );
};

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden border rounded-xl border-white/10 bg-white/5 backdrop-blur-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full p-5 text-left text-white transition-colors hover:bg-white/10"
      >
        <span className="font-semibold">{title}</span>
        {isOpen ? <ChevronUp size={20} className="text-blue-400" /> : <ChevronDown size={20} className="text-blue-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="px-5 pb-5 text-gray-400"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Page ---

export default function ArtVisionProposal() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#051024] text-white font-['Inter'] relative overflow-hidden selection:bg-blue-500/30">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Abstract Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gray-400/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Sticky Navbar */}
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'py-3 bg-[#051024]/80 backdrop-blur-lg border-white/10 shadow-lg' : 'py-6 bg-transparent border-transparent'}`}
      >
        <div className="container flex items-center justify-between px-6 mx-auto md:px-12">
          <div className="text-2xl font-bold tracking-wider font-['Montserrat']">
            ART<span className="text-blue-500">VISION</span>
          </div>
          <a href="#pricing" className="px-5 py-2 text-sm font-semibold text-white transition-all duration-300 border rounded-full border-white/20 bg-white/5 hover:bg-blue-500 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            Get Started
          </a>
        </div>
      </motion.nav>

      <div className="relative z-10">
        {/* Section 1: Hero */}
        <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-medium text-blue-300 border rounded-full bg-blue-500/10 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          >
            <span className="w-2 h-2 mr-2 bg-blue-500 rounded-full animate-pulse"></span>
            Exclusive & Customized Offer
          </motion.div>

          <motion.h1 
            variants={fadeUpVariant} initial="hidden" animate="visible"
            className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl font-['Montserrat']"
          >
            Elevating Your Brand to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-300">
              New Creative Heights
            </span>
          </motion.h1>

          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="max-w-2xl mb-10 text-lg text-gray-400 md:text-xl h-[80px]">
            {!loading && <TypingText text="Integrated marketing solutions, eye-catching visual production, and data-driven strategies to boost your sales." />}
          </motion.div>

          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="flex flex-col gap-4 sm:flex-row">
            <a href="#pricing" className="group relative px-8 py-4 font-semibold text-white bg-blue-600 rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
              <span className="relative z-10 flex items-center gap-2">Explore Our Packages <ArrowRight size={18} /></span>
              <div className="absolute inset-0 transition-transform duration-500 translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:-translate-x-full"></div>
            </a>
            <a href="https://www.qrcodechimp.page/page/haithamabdalhay" target="_blank" rel="noreferrer" className="px-8 py-4 font-semibold text-white transition-all duration-300 border rounded-full border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:scale-105">
              Our Portfolio
            </a>
          </motion.div>
        </section>

        {/* Section 2: Why Choose Us */}
        <section className="container px-6 py-24 mx-auto md:px-12">
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-5xl font-['Montserrat']">Why Are We The <span className="text-blue-400">Perfect Choice?</span></h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { icon: <Palette size={32} />, title: "Unforgettable Visual Identity", desc: "Designs that reflect your brand's soul." },
              { icon: <TrendingUp size={32} />, title: "Data-Driven Marketing", desc: "Ad campaigns that reduce acquisition costs and multiply profits." },
              { icon: <Camera size={32} />, title: "Professional Visual Production", desc: "Cinematic quality Reels and photography." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} variants={fadeUpVariant}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                style={{ perspective: 1000 }}
                className="p-8 transition-all duration-300 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] group"
              >
                <div className="p-4 mb-6 transition-colors duration-300 rounded-xl bg-blue-500/10 text-blue-400 inline-block group-hover:bg-blue-500 group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 3: Pricing */}
        <section id="pricing" className="container px-6 py-24 mx-auto md:px-12 relative">
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-5xl font-['Montserrat']">Financial Investment <span className="text-gray-400">& Packages</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Card 1 */}
            <motion.div 
              variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative p-8 border-2 rounded-3xl bg-white/5 backdrop-blur-md border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <div className="absolute top-0 right-8 px-4 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-b-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                BEST VALUE
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-300">Comprehensive Digital Management</h3>
              <div className="mb-8 text-5xl font-extrabold text-white font-['Montserrat']">
                $300 <span className="text-xl font-medium text-gray-500">/ Month</span>
              </div>
              <ul className="space-y-4">
                {[
                  "6 to 10 professional graphic designs monthly.",
                  "Publishing management and content scheduling at peak times.",
                  "Management and optimization of ad campaigns (Meta Ads).",
                  "Digital PR and direct community engagement."
                ].map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }} viewport={{ once: true }} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-blue-400 shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 border rounded-3xl bg-white/5 backdrop-blur-md border-white/10 hover:border-gray-400/50 transition-all duration-300"
            >
              <h3 className="mb-2 text-2xl font-bold text-gray-300">Professional Visual Production</h3>
              <div className="mb-8 text-5xl font-extrabold text-white font-['Montserrat']">
                $150 <span className="text-xl font-medium text-gray-500">/ Session</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Professional photography and videography tailored to the project.",
                  "Professional Video Editing optimized for Reels/TikTok.",
                  "Delivery of high-resolution images ready for print and ads."
                ].map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }} viewport={{ once: true }} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-gray-400 shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Process Timeline */}
        <section className="container max-w-4xl px-6 py-24 mx-auto md:px-12">
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-5xl font-['Montserrat']">How We <span className="text-blue-400">Work</span></h2>
          </motion.div>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0">
            {/* Animated Progress Line */}
            <motion.div 
              className="absolute top-0 left-[-2px] w-1 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] origin-top"
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ height: "100%" }}
            />
            
            {[
              { step: "01", title: "Analysis & Planning", desc: "Studying your account and competitors." },
              { step: "02", title: "Execution & Production", desc: "Designing and creating high-quality content." },
              { step: "03", title: "Launch & Growth", desc: "Launching campaigns and monitoring performance." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative pl-10 mb-12">
                <div className="absolute flex items-center justify-center w-10 h-10 font-bold bg-gray-900 border-2 border-blue-500 rounded-full text-blue-400 left-[-21px] top-0 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  {item.step}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5: Terms & Conditions */}
        <section className="container max-w-3xl px-6 py-24 mx-auto md:px-12">
          <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl font-['Montserrat']">Terms & <span className="text-gray-400">Workflow</span></h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <AccordionItem title="Ad Spend">
              Not included in the package, determined by direct agreement.
            </AccordionItem>
            <AccordionItem title="Payment Terms">
              Management fee is paid at the beginning of each month, and photography upon booking confirmation.
            </AccordionItem>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-white/10 bg-[#020813] relative overflow-hidden">
          <div className="container flex flex-col items-center px-6 mx-auto text-center md:px-12 z-10 relative">
            <div className="mb-6 text-3xl font-bold tracking-wider font-['Montserrat'] text-white">
              ART<span className="text-blue-500">VISION</span>
            </div>
            <p className="mb-6 text-sm text-gray-500">
              This strategic proposal was prepared by: <br/>
              <span className="font-semibold text-gray-300">Haitham Abdalhay - Marketing Manager</span>
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'LinkedIn'].map((social, i) => (
                <motion.a 
                  key={i} href="#" 
                  whileHover={{ y: -5 }}
                  className="px-4 py-2 text-xs font-semibold text-gray-400 transition-colors border rounded-full border-white/10 hover:text-white hover:border-blue-500 hover:bg-white/5"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
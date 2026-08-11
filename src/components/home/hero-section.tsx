import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Play, Rocket, ShieldCheck, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center"
      >
        <div className="hero-copy mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#cdeeff] bg-[#f2fbff] px-3 py-2 text-sm text-[#0b6fa8] shadow-sm backdrop-blur">
          <ShieldCheck size={16} />
          Trusted by founders scaling from $1M to $10M+
        </div>
        <h1 className="hero-copy max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-zinc-950 sm:text-6xl lg:text-7xl">
          Premium Web Design & Digital Marketing for Ambitious Brands.
        </h1>
        <p className="hero-copy mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
          We are a full-service digital agency specializing in high-performance websites, SEO, and targeted marketing campaigns that turn attention into revenue.
        </p>
        <div className="hero-copy mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0b6fa8] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_12px_36px_rgba(11,111,168,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#085c8b] hover:shadow-[0_20px_48px_rgba(11,111,168,0.3)]"
          >
            Book a strategy call
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#results"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#cdeeff] bg-white/90 px-8 py-4 text-[15px] font-semibold text-zinc-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0b6fa8] hover:bg-[#f2fbff] hover:shadow-[0_12px_32px_rgba(11,111,168,0.08)] hover:text-[#0b6fa8]"
          >
            <Play size={18} className="transition-transform duration-300 group-hover:scale-110 text-[#0b6fa8]" />
            View our approach
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.1, ease: "easeOut" }}
        className="relative flex w-full h-fit flex-col justify-center lg:self-center pt-8 lg:pt-0"
      >
        {/* Soft Background Glow */}
        <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full bg-[#0b6fa8]/10 blur-[80px] pointer-events-none" />

        {/* Outer Glass Container */}
        <div className="relative z-10 w-full max-w-[480px] mx-auto rounded-[32px] border border-zinc-200/60 bg-white/60 p-2 shadow-[0_32px_80px_rgba(11,111,168,0.06)] backdrop-blur-xl">
          {/* Inner Content Area */}
          <div className="rounded-[28px] border border-[#cdeeff] bg-[#f7fbff] p-5 sm:p-7">

            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b6fa8]">Impact Engine</p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-zinc-950">Scale with precision</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-[#cdeeff] text-[#0b6fa8]">
                <Rocket size={20} />
              </div>
            </div>

            {/* Bento Grid */}
            <div className="grid gap-3 sm:grid-cols-2 mb-3">
              {/* Main Highlight Card */}
              <div className="col-span-1 sm:col-span-2 rounded-[24px] bg-[#0b6fa8] p-6 text-white shadow-md relative overflow-hidden">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <p className="text-xs font-semibold text-blue-100 uppercase tracking-widest">Qualified Demand</p>
                <p className="mt-2 text-5xl font-bold tracking-tight">+146%</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-blue-100/80 border-t border-white/20 pt-4">
                  <BarChart3 size={14} /> <span>Q3 Performance Tracking</span>
                </div>
              </div>

              {/* Secondary Cards */}
              <div className="rounded-[20px] border border-[#cdeeff] bg-white p-5 shadow-sm">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Conversion</p>
                <p className="mt-1 text-3xl font-black text-zinc-900">8.4%</p>
              </div>

              <div className="rounded-[20px] border border-[#cdeeff] bg-white p-5 shadow-sm flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2fbff] text-[#0b6fa8]">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-sm font-bold leading-tight text-zinc-800">Trusted<br />Execution</span>
                </div>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#cdeeff] bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-zinc-600 shadow-sm">
                <Sparkles size={12} className="text-[#0b6fa8]" /> Refined storytelling
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#cdeeff] bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-zinc-600 shadow-sm">
                <BarChart3 size={12} className="text-[#0b6fa8]" /> Analytical rigor
              </span>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

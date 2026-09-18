"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "../animated-counter";
import type { SVGProps } from "react";

function WhatsApp(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>;
}

const particles = [
  { size: 4, left: "10%", top: "20%", duration: 12, delay: 0 },
  { size: 3, left: "25%", top: "60%", duration: 15, delay: 2 },
  { size: 5, left: "45%", top: "15%", duration: 18, delay: 4 },
  { size: 3, left: "65%", top: "70%", duration: 14, delay: 1 },
  { size: 4, left: "80%", top: "30%", duration: 16, delay: 3 },
  { size: 6, left: "90%", top: "55%", duration: 20, delay: 5 },
  { size: 3, left: "15%", top: "80%", duration: 13, delay: 6 },
  { size: 4, left: "55%", top: "45%", duration: 17, delay: 2 },
];

const textVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const lineVariant = {
  // To avoid Lighthouse LCP penalties, critical text must render visibly on first paint
  hidden: { opacity: 0.99, y: 15, filter: "blur(0px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="hero-gradient-bg absolute inset-0 pointer-events-none" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0.2,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-12 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-16 lg:pt-14">
        {/* Left — Copy */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div variants={lineVariant} className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#cdeeff] bg-white/60 px-5 py-2.5 text-[13px] font-semibold tracking-wide text-[#0b6fa8] shadow-sm backdrop-blur-md uppercase">
            <ShieldCheck size={14} />
            Growth Partners
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={lineVariant} className="max-w-2xl text-[2.75rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-zinc-950 sm:text-[3.5rem] lg:text-[4.25rem]">
            You Deserve More Clients{" "}
            <span className="text-[#0b6fa8]">Than You&apos;re Getting.</span>
          </motion.h1>

          {/* Accent line */}
          <motion.div variants={lineVariant} className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#0b6fa8] to-[#0b6fa8]/30" />

          {/* Subtext — split into two clear thoughts */}
          <motion.p variants={lineVariant} className="mt-5 max-w-xl text-[17px] leading-[1.7] text-zinc-500">
            Your work is exceptional. Your online presence isn&apos;t.
          </motion.p>
          <motion.p variants={lineVariant} className="mt-2 max-w-xl text-[17px] leading-[1.7] text-zinc-600">
            We bridge that gap with <span className="font-semibold text-zinc-900">custom strategy, design, and marketing systems</span> — built to scale your business, not just look pretty.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={lineVariant} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#apply"
              className="cta-pulse btn-interactive group inline-flex items-center justify-center gap-2 rounded-full bg-[#0b6fa8] px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-[#0b6fa8]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#085c8b] hover:shadow-xl hover:shadow-[#0b6fa8]/30"
            >
              Start Growing Today
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/919351673834"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive group inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-8 py-4 text-[15px] font-semibold text-zinc-800 backdrop-blur-sm transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]"
            >
              <WhatsApp className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110 text-[#25D366]" />
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div variants={lineVariant} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-zinc-400">
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 50+ Brands Scaled</span>
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 96% Retention Rate</span>
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Results in 21 Days</span>
          </motion.div>
        </motion.div>

        {/* Right — Dashboard + Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative flex w-full h-fit flex-col justify-center lg:self-center pt-8 lg:pt-0 gap-4"
        >
          {/* Soft Background Glow */}
          <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[360px] w-[360px] rounded-full bg-[#0b6fa8]/8 blur-[100px] pointer-events-none" />

          {/* Dashboard Card */}
          <div className="gradient-border relative z-10 w-full max-w-[500px] mx-auto rounded-[32px] bg-white/60 p-2 shadow-[0_32px_80px_rgba(11,111,168,0.08)] backdrop-blur-xl">
            <div className="rounded-[28px] border border-[#cdeeff]/60 bg-[#f7fbff] p-5 sm:p-6">

              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b6fa8]">Performance Snapshot</p>
                  <p className="mt-1 text-lg font-bold tracking-tight text-zinc-950">Last 6 Months</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                    <TrendingUp size={12} /> +146%
                  </span>
                </div>
              </div>

              {/* Animated Growth Chart (SVG) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-5"
              >
                <svg viewBox="0 0 400 140" className="w-full h-auto" fill="none">
                  {/* Grid lines */}
                  <line x1="40" y1="20" x2="380" y2="20" stroke="#e8f5ff" strokeWidth="1" />
                  <line x1="40" y1="50" x2="380" y2="50" stroke="#e8f5ff" strokeWidth="1" />
                  <line x1="40" y1="80" x2="380" y2="80" stroke="#e8f5ff" strokeWidth="1" />
                  <line x1="40" y1="110" x2="380" y2="110" stroke="#e8f5ff" strokeWidth="1" />

                  {/* Y-axis labels */}
                  <text x="8" y="24" fontSize="9" fill="#a1a1aa" fontWeight="500">40</text>
                  <text x="8" y="54" fontSize="9" fill="#a1a1aa" fontWeight="500">30</text>
                  <text x="8" y="84" fontSize="9" fill="#a1a1aa" fontWeight="500">20</text>
                  <text x="8" y="114" fontSize="9" fill="#a1a1aa" fontWeight="500">10</text>

                  {/* Gradient fill under chart */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0b6fa8" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#0b6fa8" stopOpacity="0.01" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M60,100 L120,90 L180,85 L240,60 L300,40 L360,22 L360,110 L60,110 Z"
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />

                  {/* Chart line */}
                  <motion.path
                    d="M60,100 L120,90 L180,85 L240,60 L300,40 L360,22"
                    stroke="#0b6fa8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                  />

                  {/* Data points */}
                  {[
                    { cx: 60, cy: 100, label: "12" },
                    { cx: 120, cy: 90, label: "16" },
                    { cx: 180, cy: 85, label: "18" },
                    { cx: 240, cy: 60, label: "28" },
                    { cx: 300, cy: 40, label: "35" },
                    { cx: 360, cy: 22, label: "42" },
                  ].map((point, i) => (
                    <motion.g key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.15 }}
                    >
                      <circle cx={point.cx} cy={point.cy} r="4" fill="#0b6fa8" stroke="white" strokeWidth="2" />
                      {i === 5 && (
                        <g>
                          <rect x={point.cx - 18} y={point.cy - 22} width="36" height="16" rx="4" fill="#0b6fa8" />
                          <text x={point.cx} y={point.cy - 11} fontSize="9" fill="white" textAnchor="middle" fontWeight="700">{point.label}</text>
                        </g>
                      )}
                    </motion.g>
                  ))}

                  {/* X-axis labels */}
                  <text x="60" y="128" fontSize="9" fill="#a1a1aa" textAnchor="middle" fontWeight="500">Jan</text>
                  <text x="120" y="128" fontSize="9" fill="#a1a1aa" textAnchor="middle" fontWeight="500">Feb</text>
                  <text x="180" y="128" fontSize="9" fill="#a1a1aa" textAnchor="middle" fontWeight="500">Mar</text>
                  <text x="240" y="128" fontSize="9" fill="#a1a1aa" textAnchor="middle" fontWeight="500">Apr</text>
                  <text x="300" y="128" fontSize="9" fill="#a1a1aa" textAnchor="middle" fontWeight="500">May</text>
                  <text x="360" y="128" fontSize="9" fill="#a1a1aa" textAnchor="middle" fontWeight="500">Jun</text>
                </svg>
              </motion.div>

              {/* Before / After Stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="grid grid-cols-3 gap-3"
              >
                <div className="rounded-[16px] border border-zinc-200 bg-white p-3.5">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Before</p>
                  <p className="mt-1 text-xl font-black text-zinc-400">12</p>
                  <p className="text-[10px] text-zinc-400">leads/week</p>
                </div>
                <div className="rounded-[16px] border border-[#cdeeff] bg-[#f2fbff] p-3.5">
                  <p className="text-[10px] font-bold text-[#0b6fa8] uppercase tracking-wider flex items-center gap-1">After <TrendingUp size={10} /></p>
                  <p className="mt-1 text-xl font-black text-[#0b6fa8]">
                    <AnimatedCounter end={42} duration={2} />
                  </p>
                  <p className="text-[10px] text-[#0b6fa8]/70">leads/week</p>
                </div>
                <div className="rounded-[16px] bg-gradient-to-br from-[#0b6fa8] to-[#085c8b] p-3.5 text-white flex flex-col items-center justify-center">
                  {/* Circular progress ring */}
                  <div className="relative h-10 w-10 mb-1">
                    <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full">
                      <circle cx="24" cy="24" r="18" fill="none" stroke="white" strokeWidth="3" opacity="0.15" />
                      <motion.circle
                        cx="24" cy="24" r="18"
                        fill="none" stroke="white" strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 18}`}
                        strokeDashoffset={`${2 * Math.PI * 18 * (1 - 0.084)}`}
                        transform="rotate(-90 24 24)"
                        initial={{ strokeDashoffset: 2 * Math.PI * 18 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 18 * (1 - 0.084) }}
                        transition={{ duration: 1.5, delay: 1 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <AnimatedCounter end={8.4} suffix="%" decimals={1} duration={1.5} className="text-[10px] font-extrabold text-white" />
                    </div>
                  </div>
                  <p className="text-[9px] font-semibold text-blue-100 uppercase tracking-wider">Conv. Rate</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mini Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="relative z-10 w-full max-w-[500px] mx-auto rounded-[20px] border border-[#cdeeff] bg-white/90 p-5 shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              {/* Avatar placeholder */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0b6fa8] to-[#085c8b] text-white text-sm font-bold">
                VS
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-amber-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] text-zinc-700 leading-snug">
                  &ldquo;They took us from 12 leads/week to 42. The ROI paid for the entire project in the first month.&rdquo;
                </p>
                <p className="mt-2 text-[11px] font-semibold text-zinc-500">Vikram Singh &middot; Founder, Elevate Realty</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

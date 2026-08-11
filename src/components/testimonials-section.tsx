"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Meta Toppers completely transformed our lead generation. Our new property portal receives highly qualified buyer inquiries every single day.",
    name: "Sarah Jenkins",
    role: "VP of Marketing, Elevate Real Estate",
  },
  {
    quote: "They built a stunning website that showcases our luxury listings perfectly, and their SEO strategy drove a 45% increase in local traffic.",
    name: "Marcus Chen",
    role: "Founder, Chen & Associates",
  },
  {
    quote: "The digital campaigns they engineered for our new development sold out phase one in record time. Exceptional work.",
    name: "David Ross",
    role: "Director of Sales, Paramount Developments",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const t = testimonials[index];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div 
        className="reveal rounded-[32px] border border-[#cdeeff] bg-white/85 p-8 text-center shadow-[0_24px_80px_rgba(11,111,168,0.05)] backdrop-blur sm:p-12 lg:p-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="text-sm font-medium tracking-[0.24em] text-[#0b6fa8] uppercase">Testimonials</p>
        
        <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center min-h-[220px] sm:min-h-[200px] justify-center">
          <div className="mb-4 text-[#0b6fa8]/30">
            <Quote size={40} />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <blockquote className="text-2xl font-semibold tracking-[-0.02em] text-zinc-950 sm:text-3xl leading-[1.4]">
                “{t.quote}”
              </blockquote>
              
              <div className="mt-8">
                <div className="text-base font-semibold text-zinc-900">{t.name}</div>
                <div className="text-sm text-zinc-600 mt-1">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-[#0b6fa8]" : "w-2.5 bg-zinc-200 hover:bg-zinc-300"}`}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 border-t border-[#e8f5ff] pt-8">
          {['Elevate', 'Chen & Assoc', 'Paramount'].map((logo) => (
            <div key={logo} className="flex h-12 items-center justify-center rounded-2xl bg-[#f2fbff] px-6 text-sm font-bold tracking-wider text-[#0b6fa8]/60 border border-[#cdeeff]">
              {logo.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

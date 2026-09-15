"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Meta Toppers didn&apos;t just build us a website — they built us a lead machine. We went from 5 inquiries a week to over 30. The ROI paid for the project in the first month.",
    name: "Vikram Rathore",
    role: "Founder, Elevate Luxury Realty — Jaipur",
  },
  {
    quote: "Patients now come in already trusting us because of how professional our online presence looks. We had to hire a new associate doctor within 3 months to handle the overflow.",
    name: "Dr. Neha Sharma",
    role: "Director, SmileCare Dental Clinic — Jaipur",
  },
  {
    quote: "We shifted 40% of our orders from Swiggy and Zomato to direct. That alone saved us ₹1.8 lakhs in monthly commissions. The afternoon slump is completely gone.",
    name: "Arjun Mehra",
    role: "Owner, The Daily Grind Café — Jaipur",
  },
  {
    quote: "My advisors actually enjoy coming to work now because they talk to people who asked us to call. No more cold calling. It&apos;s a completely different business.",
    name: "Rahul Joshi",
    role: "CEO, SecureLife Insurance Advisors",
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
        <p className="text-sm font-bold tracking-[0.2em] text-[#0b6fa8] uppercase">Leaders who stopped settling</p>
        
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
              <blockquote
                className="text-2xl font-semibold tracking-[-0.02em] text-zinc-950 sm:text-3xl leading-[1.4]"
                dangerouslySetInnerHTML={{ __html: `\u201C${t.quote}\u201D` }}
              />
              
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
        
      </div>
    </section>
  );
}

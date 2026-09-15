"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

import { HeroSection } from "./home/hero-section";
import { FeaturesSection } from "./home/features-section";
import { ServicesSection } from "./home/services-section";
import { ApproachSection } from "./home/approach-section";
import { ResultsSection } from "./home/results-section";
import { TestimonialsSection } from "./testimonials-section";
import { PortfolioCarousel } from "./portfolio-carousel";
import { FAQSection } from "./faq-section";
import { CTASection } from "./home/cta-section";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
    reveals.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        }
      );

      // Stagger children inside reveal containers
      const children = element.querySelectorAll(".card-hover, [class*='rounded-[24px]'], [class*='rounded-[20px]']");
      if (children.length > 0) {
        gsap.fromTo(
          children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main id="top">
      {/* 1. HOOK — grab attention */}
      <HeroSection />
      {/* 2. TRUST — why us, not them */}
      <FeaturesSection />
      {/* 3. CLARITY — what exactly we do */}
      <ServicesSection />
      {/* 4. PROCESS — how we do it (reduces fear) */}
      <ApproachSection />
      {/* 5. PROOF — hard numbers */}
      <ResultsSection />
      {/* 6. SOCIAL PROOF — real people saying it */}
      <TestimonialsSection />
      {/* 7. VISUAL PROOF — see the actual work */}
      <PortfolioCarousel />
      {/* 8. OBJECTIONS — handle final doubts */}
      <FAQSection />
      {/* 9. THE CLOSE — apply to work with us */}
      <CTASection />
    </main>
  );
}

"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

import { HeroSection } from "./home/hero-section";
import { FeaturesSection } from "./home/features-section";
import { TopicsSection } from "./home/topics-section";
import { ServicesSection } from "./home/services-section";
import { ApproachSection } from "./home/approach-section";
import { ResultsSection } from "./home/results-section";
import { TestimonialsSection } from "./testimonials-section";
import { PortfolioCarousel } from "./portfolio-carousel";
import { FAQSection } from "./faq-section";

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

    gsap.fromTo(
      ".hero-copy",
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
      },
    );

    const reveals = gsap.utils.toArray(".reveal");
    reveals.forEach((element: any) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main id="top">
      <HeroSection />
      <FeaturesSection />
      <TopicsSection />
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioCarousel />
      <ApproachSection />
      <ResultsSection />
      <FAQSection />
    </main>
  );
}

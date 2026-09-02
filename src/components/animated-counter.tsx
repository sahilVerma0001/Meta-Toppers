"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Ease-out cubic for natural deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = easedProgress * end;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

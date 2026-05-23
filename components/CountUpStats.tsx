"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

export function CountUpStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 divide-brand-border lg:grid-cols-4 lg:divide-x">
      {stats.map((stat) => (
        <CounterStat key={stat.label} {...stat} active={visible} />
      ))}
    </div>
  );
}

interface CounterStatProps {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}

function CounterStat({ value, suffix, label, active }: CounterStatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const totalFrames = 42;
    const timer = window.setInterval(() => {
      frame += 1;
      setCount(Math.round(value * (frame / totalFrames)));
      if (frame === totalFrames) window.clearInterval(timer);
    }, 26);
    return () => window.clearInterval(timer);
  }, [active, value]);

  return (
    <div className="border-b border-brand-border px-5 py-9 text-center lg:border-b-0">
      <p className="font-display text-5xl tracking-wide text-brand-red">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.25em] text-brand-muted">{label}</p>
    </div>
  );
}

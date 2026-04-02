'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300;
  scale?: boolean;
}

export default function ScrollReveal({ children, className = '', delay = 0, scale = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `delay-${delay}` : '';
  const scaleClass = scale ? 'reveal--scale' : '';

  return (
    <div ref={ref} className={`reveal ${scaleClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

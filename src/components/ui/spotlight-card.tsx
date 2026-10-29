"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

const borderMask: CSSProperties = {
  padding: 1,
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  maskComposite: "exclude",
  WebkitMaskComposite: "xor",
};

export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(16,185,129,0.13), transparent 70%)`;
  const edge = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgba(16,185,129,0.7), transparent 70%)`;

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100/70 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/50",
        className,
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: edge, ...borderMask }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

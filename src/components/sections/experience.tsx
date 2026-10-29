"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { gradientText, Rich } from "@/components/ui/rich";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useLanguage } from "@/context/language-context";

interface TimelineEntry {
  period: string;
  role: string;
  description: string;
  duration?: string;
}

function TimelineItem({ entry, education = false }: { entry: TimelineEntry; education?: boolean }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10"
    >
      <span className="absolute left-0 top-6 flex size-6 -translate-x-[calc(50%-0.5px)] items-center justify-center rounded-full border border-emerald-500/60 bg-background">
        {education ? <GraduationCap className="size-3 text-emerald-500" /> : <span className="size-2 rounded-full bg-emerald-500" />}
      </span>
      <SpotlightCard>
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-emerald-500">
            <span>{entry.period}</span>
            {entry.duration && <span className="text-muted-foreground">· {entry.duration}</span>}
          </div>
          <h3 className="mt-2 font-semibold tracking-tight">{entry.role}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
        </div>
      </SpotlightCard>
    </motion.li>
  );
}

export function Experience() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 65%", "end 70%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: 0.001 });

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} subtitle={t.experience.subtitle} />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <Reveal>
          <div id="about" className="lg:sticky lg:top-28">
            <h3 className="text-2xl font-semibold tracking-tight">
              <Rich text={t.about.title} strongClassName={gradientText} />
            </h3>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {t.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className="mt-6 divide-y divide-border rounded-xl border border-border text-sm">
              {t.about.facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 px-4 py-2.5">
                  <dt className="text-muted-foreground">{f.label}</dt>
                  <dd className="text-right font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div ref={trackRef} className="relative">
          <div aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-border" />
          <motion.div
            aria-hidden
            className="absolute bottom-0 left-0 top-0 w-px origin-top bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9)]"
            style={{ scaleY }}
          />
          <ol className="space-y-6">
            {t.experience.items.map((e) => (
              <TimelineItem key={e.role} entry={e} />
            ))}
          </ol>

          <h3 className="relative mb-6 mt-12 pl-10 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t.experience.educationTitle}
          </h3>
          <ol className="space-y-6">
            {t.experience.education.map((e) => (
              <TimelineItem key={e.role} entry={e} education />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

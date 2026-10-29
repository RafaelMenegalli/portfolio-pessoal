"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { marqueeStack } from "@/config/projects";
import { useLanguage } from "@/context/language-context";

function Marquee() {
  const items = [...marqueeStack, ...marqueeStack];
  return (
    <div
      className="group relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
      aria-hidden
    >
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {items.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="whitespace-nowrap rounded-full border border-border bg-zinc-100/70 px-4 py-2 font-mono text-sm text-muted-foreground transition-colors hover:border-emerald-500/50 hover:text-emerald-500 dark:bg-zinc-900/50"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useLanguage();
  const groups = t.skills.groups;
  const [active, setActive] = useState<string>(groups[0].id);
  const current = groups.find((g) => g.id === active) ?? groups[0];

  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} subtitle={t.skills.subtitle} />

      <Reveal>
        <Tabs value={active} onValueChange={(v) => setActive(String(v))} className="items-center">
          <TabsList className="grid h-auto group-data-horizontal/tabs:h-auto w-full grid-cols-2 sm:inline-flex sm:w-auto sm:max-w-full sm:flex-wrap sm:justify-center">
            {groups.map((g) => (
              <TabsTrigger key={g.id} value={g.id} className="h-auto whitespace-normal px-2 py-2 text-center text-xs sm:px-3 sm:py-1.5 sm:text-sm">
                {g.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div
          key={`${current.id}`}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5"
        >
          {current.items.map((item) => (
            <motion.div key={item} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
              <Badge
                variant="outline"
                className="h-auto whitespace-normal border-emerald-500/20 px-3.5 py-1.5 text-center text-sm font-normal"
              >
                {item}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </Reveal>

      <Marquee />
    </section>
  );
}

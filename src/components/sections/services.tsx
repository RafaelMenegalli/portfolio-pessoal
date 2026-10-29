"use client";

import { Blocks, Globe, MessageSquareText, Rocket, Webhook, PenTool, Code2 } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useLanguage } from "@/context/language-context";

const serviceIcons = [Blocks, Rocket, Globe, Webhook];
const stepIcons = [MessageSquareText, PenTool, Code2, Rocket];

export function Services() {
  const { t } = useLanguage();
  const { process } = t.services;

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

      <Stagger className="grid gap-4 md:grid-cols-2">
        {t.services.items.map((s, i) => {
          const Icon = serviceIcons[i];
          return (
            <StaggerItem key={s.title}>
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col gap-4 p-7">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          );
        })}
      </Stagger>

      <div className="mt-20">
        <Reveal className="mb-10 text-center">
          <h3 className="text-2xl font-semibold tracking-tight">{process.title}</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">{process.note}</p>
        </Reveal>

        <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
          <div aria-hidden className="absolute left-[12.5%] top-6 hidden h-px w-3/4 bg-gradient-to-r from-emerald-500/60 via-emerald-500/30 to-emerald-500/60 md:block" />
          <div aria-hidden className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-emerald-500/60 to-emerald-500/20 md:hidden" />
          {process.steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <li key={s.title} className="relative flex flex-row gap-4 md:flex-col md:items-center md:text-center">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/50 bg-background text-emerald-500 shadow-[0_0_24px_rgba(16,185,129,0.25)]">
                  <Icon className="size-5" />
                  <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-emerald-500 font-mono text-[10px] font-bold text-zinc-950">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <span className="font-mono text-xs text-emerald-500">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="font-medium">{s.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

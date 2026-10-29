"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, MessageCircle } from "lucide-react";
import { AnimatedValue } from "@/components/ui/counter";
import { Magnetic } from "@/components/ui/magnetic";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { gradientText, Rich } from "@/components/ui/rich";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { buttonVariants } from "@/components/ui/button";
import { whatsappUrl } from "@/config/site";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";
import { useResume } from "./resume-modal";

export function Hero() {
  const { lang, t } = useLanguage();
  const { openResume } = useResume();

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div aria-hidden className="bg-noise pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] max-w-full -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-600 dark:text-emerald-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl"
          >
            <Rich text={t.hero.headline} strongClassName={gradientText} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
          >
            <Rich text={t.hero.sub} strongClassName="text-foreground" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Magnetic className="w-full sm:w-auto">
                <a
                  href={whatsappUrl(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 w-full gap-2 bg-foreground px-5 text-background transition-shadow hover:bg-foreground hover:shadow-[0_0_32px_rgba(16,185,129,0.55)] sm:w-auto",
                  )}
                >
                  <MessageCircle />
                  {t.hero.ctaWhats}
                  <ArrowRight />
                </a>
              </Magnetic>
              <a
                href="#projects"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 w-full px-5 sm:w-auto")}
              >
                {t.hero.ctaProjects}
              </a>
            </div>
            <button
              onClick={openResume}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-emerald-500"
            >
              <FileText className="size-4" />
              <span className="underline-offset-4 group-hover:underline">{t.hero.ctaResume}</span>
            </button>
          </motion.div>
        </div>

        <Stagger className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.metrics.map((m) => (
            <StaggerItem key={m.value}>
              <SpotlightCard className="h-full">
                <div className="p-6">
                  <div className="text-2xl font-semibold tracking-tight">
                    <span className={gradientText}>
                      <AnimatedValue value={m.value} />
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

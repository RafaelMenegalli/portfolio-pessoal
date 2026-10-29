"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Maximize2 } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ProjectPreviewBrowser } from "@/components/ui/project-preview-browser";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, type ProjectCategory, type ProjectMeta } from "@/config/projects";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectCategory;

function ProjectCard({ project, index, featured }: { project: ProjectMeta; index: number; featured: boolean }) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const copy = t.projects.items[project.id];
  const number = String(index + 1).padStart(2, "0");

  const livePill = (
    <Badge className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
      <span className="relative mr-1 flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
      </span>
      {copy.badge}
    </Badge>
  );

  const highlight = (
    <p className="rounded-r-lg border-l-2 border-emerald-500 bg-emerald-500/5 px-3.5 py-2.5 text-sm backdrop-blur-sm">
      {copy.highlight}
    </p>
  );

  const stack = (
    <div className="flex flex-wrap gap-1.5">
      {project.stack.map((s) => (
        <Badge
          key={s}
          variant="outline"
          className="border-zinc-200 bg-zinc-100 font-mono text-[11px] font-normal text-zinc-600 transition-colors group-hover:border-emerald-500/40 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300"
        >
          {s}
        </Badge>
      ))}
    </div>
  );

  const preview = (
    <ProjectPreviewBrowser name={project.name} url={project.url} expanded={expanded} onExpandedChange={setExpanded} />
  );

  if (featured) {
    return (
      <SpotlightCard className="h-full">
        <div className="grid grid-cols-1 items-center gap-8 p-5 sm:p-6 lg:grid-cols-12 lg:p-8">
          <div className="relative lg:col-span-7">
            <div aria-hidden className="pointer-events-none absolute -inset-6 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative transition-transform duration-500 ease-out hover:-translate-y-1.5">{preview}</div>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-sm text-zinc-500 dark:text-zinc-600">
                {number} {"//"} {t.projects.featured}
              </span>
              {livePill}
            </div>
            <div>
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{copy.type}</p>
            </div>
            <p className="leading-relaxed text-muted-foreground">{copy.description}</p>
            {highlight}
            {stack}
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 gap-2 bg-emerald-500 px-5 text-zinc-950 shadow-[0_0_24px_rgba(16,185,129,0.3)] hover:bg-emerald-400",
                )}
              >
                <ExternalLink />
                {t.projects.visitLive}
              </a>
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 gap-2 px-5")}
              >
                <Maximize2 />
                {t.projects.interactivePreview}
              </button>
            </div>
          </div>
        </div>
      </SpotlightCard>
    );
  }

  return (
    <SpotlightCard className="h-full">
      <div className="flex h-full flex-col gap-6 p-5 sm:p-6">
        <div className="transition-transform duration-500 ease-out hover:-translate-y-1">{preview}</div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-sm text-zinc-500 dark:text-zinc-600">{number}</span>
            {livePill}
          </div>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{copy.type}</p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "shrink-0 gap-1.5 hover:border-emerald-500/50 hover:text-emerald-500")}
            >
              {t.projects.visit}
              <ExternalLink />
            </a>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{copy.description}</p>
          {highlight}
          <div className="mt-auto">{stack}</div>
        </div>
      </div>
    </SpotlightCard>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);
  // An odd count gets a full-width flagship first, so the remaining cards always pair up with no empty half-row.
  const hasFlagship = visible.length % 2 === 1;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />

      <Reveal className="mb-10 flex justify-center">
        <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)} className="w-full sm:w-auto">
          <TabsList className="grid h-auto group-data-horizontal/tabs:h-auto w-full grid-cols-3 sm:inline-flex sm:w-auto">
            {(["all", "saas", "sites"] as const).map((f) => (
              <TabsTrigger key={f} value={f} className="h-auto whitespace-normal px-2 py-2 text-center text-xs sm:px-3 sm:py-1.5 sm:text-sm">
                {t.projects.filters[f]}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </Reveal>

      <motion.div layout className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-12">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => {
            const featured = hasFlagship && i === 0;
            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={featured ? "lg:col-span-12" : "lg:col-span-6"}
              >
                <ProjectCard project={p} index={i} featured={featured} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

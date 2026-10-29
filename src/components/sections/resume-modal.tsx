"use client";

import { Check, Copy, Download, Printer } from "lucide-react";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { toast } from "sonner";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "@/config/projects";
import { siteConfig, type Lang } from "@/config/site";
import { useLanguage } from "@/context/language-context";
import { dictionaries } from "@/dictionaries";
import { cn } from "@/lib/utils";

interface ResumeContextValue {
  openResume: () => void;
}

const ResumeContext = createContext<ResumeContextValue | null>(null);

export function useResume(): ResumeContextValue {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used within ResumeProvider");
  return ctx;
}

function ResumeDocument({ lang }: { lang: Lang }) {
  const doc = dictionaries[lang].resumeDoc;
  const heading = "mb-2 mt-5 border-b border-zinc-300 pb-1 text-xs font-bold uppercase tracking-widest text-zinc-700";

  return (
    <article className="text-sm leading-relaxed text-zinc-800">
      <header>
        <h1 className="text-2xl font-bold text-zinc-950">{siteConfig.name}</h1>
        <p className="text-base font-medium text-emerald-700">{doc.role}</p>
        <p className="mt-1 text-xs text-zinc-600">
          {siteConfig.location} · {siteConfig.email} · github.com/rafaelmenegalli
        </p>
      </header>

      <h2 className={heading}>{doc.summaryTitle}</h2>
      <p>{doc.summary}</p>

      <h2 className={heading}>{doc.skillsTitle}</h2>
      <ul className="space-y-1">
        {doc.skills.map((s) => (
          <li key={s.label}>
            <strong>{s.label}:</strong> {s.value}
          </li>
        ))}
      </ul>

      <h2 className={heading}>{doc.experienceTitle}</h2>
      <ul className="space-y-3">
        {doc.experience.map((e) => (
          <li key={e.role}>
            <div className="flex flex-wrap justify-between gap-x-4">
              <strong>{e.role}</strong>
              <span className="text-xs text-zinc-600">{e.period}</span>
            </div>
            <p>{e.text}</p>
          </li>
        ))}
      </ul>

      <h2 className={heading}>{doc.projectsTitle}</h2>
      <ul className="space-y-0.5">
        {projects.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> — {p.url.replace("https://", "")}
          </li>
        ))}
      </ul>

      <h2 className={heading}>{doc.educationTitle}</h2>
      <ul className="space-y-0.5">
        {doc.education.map((e) => (
          <li key={e.title}>
            <strong>{e.title}</strong> — {e.period}
          </li>
        ))}
      </ul>

      <h2 className={heading}>{doc.languagesTitle}</h2>
      <p>{doc.languages}</p>
    </article>
  );
}

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const { lang: siteLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [resumeLang, setResumeLang] = useState<Lang>(siteLang);
  const [copied, setCopied] = useState(false);

  const openResume = useCallback(() => {
    setResumeLang(siteLang);
    setOpen(true);
  }, [siteLang]);

  const value = useMemo(() => ({ openResume }), [openResume]);
  const ui = t.resumeUi;

  async function copyContact() {
    const text = `${siteConfig.name} — ${siteConfig.email} — ${siteConfig.github}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success(ui.copied);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Clipboard unavailable");
    }
  }

  return (
    <ResumeContext.Provider value={value}>
      <div id="app-root">{children}</div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex max-h-[90vh] flex-col gap-4 overflow-hidden sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{ui.title}</DialogTitle>
            <DialogDescription>{ui.description}</DialogDescription>
          </DialogHeader>

          <div className="flex flex-wrap items-center gap-2">
            <div role="tablist" className="inline-flex rounded-lg border border-border p-0.5 text-xs">
              {(["pt", "en"] as const).map((l) => (
                <button
                  key={l}
                  role="tab"
                  aria-selected={resumeLang === l}
                  onClick={() => setResumeLang(l)}
                  className={cn(
                    "rounded-md px-3 py-1.5 font-medium transition-colors",
                    resumeLang === l ? "bg-emerald-500 text-zinc-950" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l === "pt" ? ui.langPt : ui.langEn}
                </button>
              ))}
            </div>
            <div className="ml-auto flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={copyContact}>
                {copied ? <Check className="text-emerald-500" /> : <Copy />}
                {ui.copyContact}
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.print()}>
                <Printer />
                {ui.print}
              </Button>
              <a
                href={siteConfig.cv[resumeLang]}
                download
                className={cn(buttonVariants({ size: "sm" }), "bg-emerald-500 text-zinc-950 hover:bg-emerald-400")}
              >
                <Download />
                {ui.download}
              </a>
            </div>
          </div>

          <div className="-mx-1 flex-1 overflow-y-auto rounded-lg bg-white px-6 py-5 shadow-inner">
            <ResumeDocument lang={resumeLang} />
          </div>
        </DialogContent>
      </Dialog>

      <div id="print-root" className="hidden">
        <ResumeDocument lang={resumeLang} />
      </div>
    </ResumeContext.Provider>
  );
}

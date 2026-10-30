"use client";

import { Check, Copy, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { siteConfig, whatsappUrl } from "@/config/site";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function ContactFooter() {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      toast.success(t.contact.copied);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(siteConfig.email);
    }
  }

  const secondary = cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 gap-2 px-4");

  return (
    <footer id="contact" className="mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100/70 p-8 text-center sm:p-14 dark:border-zinc-800/80 dark:bg-zinc-900/50">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />
          <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
          <div className="relative">
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-emerald-500">{t.contact.eyebrow}</span>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{t.contact.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">{t.contact.subtitle}</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 gap-2 bg-emerald-500 px-5 text-zinc-950 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:bg-emerald-400",
                )}
              >
                <MessageCircle />
                {t.contact.whatsapp}
              </a>

              <a href={`mailto:${siteConfig.email}`} className={secondary}>
                <Mail />
                {t.contact.email}
              </a>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <button type="button" onClick={copyEmail} aria-label={t.contact.copyEmail} className={cn(secondary, "px-3")} />
                  }
                >
                  {copied ? <Check className="text-emerald-500" /> : <Copy />}
                </TooltipTrigger>
                <TooltipContent>{copied ? t.contact.copied : t.contact.copyEmail}</TooltipContent>
              </Tooltip>

              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className={secondary}>
                <GithubIcon className="size-4" />
                {t.contact.github}
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={secondary}>
                <LinkedinIcon className="size-4" />
                {t.contact.linkedin}
              </a>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className={secondary}>
                <InstagramIcon className="size-4" />
                {t.contact.instagram}
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {siteConfig.name}. {t.contact.footer}
        </p>
        <p>{t.contact.built}</p>
      </div>
    </footer>
  );
}

"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { whatsappUrl, type Lang } from "@/config/site";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

const links = ["projects", "services", "stack", "experience", "about", "contact"] as const;

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-1.5 font-semibold tracking-tight">
          Rafael Menegalli
          <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav[l]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div role="group" aria-label="Language" className="inline-flex rounded-full border border-border p-0.5 text-xs">
            {(["pt", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={cn(
                  "rounded-full px-2.5 py-1 font-medium uppercase transition-colors",
                  lang === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={t.nav.toggleTheme}
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                />
              }
            >
              <Sun className="hidden size-4 dark:block" />
              <Moon className="size-4 dark:hidden" />
            </TooltipTrigger>
            <TooltipContent>{t.nav.toggleTheme}</TooltipContent>
          </Tooltip>

          <a
            href={whatsappUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "default" }),
              "hidden bg-emerald-500 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:bg-emerald-400 sm:inline-flex",
            )}
          >
            {t.nav.hire}
          </a>

          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={t.nav.menu} onClick={() => setOpen(true)}>
            <Menu />
          </Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>{t.nav.menu}</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {t.nav[l]}
              </a>
            ))}
            <a
              href={whatsappUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "mt-4 bg-emerald-500 text-zinc-950 hover:bg-emerald-400")}
            >
              {t.nav.hire}
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

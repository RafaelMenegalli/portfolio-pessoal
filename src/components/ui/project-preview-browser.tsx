"use client";

import { ExternalLink, ImageOff, Lock, Maximize2, MousePointerClick, Eye } from "lucide-react";
import { useEffect, useRef, useState, type ReactElement, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

const DESKTOP_WIDTH = 1440;
const DESKTOP_HEIGHT = 900;

const screenshotSrc = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=${DESKTOP_WIDTH}&viewport.height=${DESKTOP_HEIGHT}`;

function BarButton({ label, render, children }: { label: string; render: ReactElement; children: ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={render}
        aria-label={label}
        className="flex size-6 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-emerald-600 dark:hover:bg-zinc-800 dark:hover:text-emerald-400"
      >
        {children}
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

/** Desktop-resolution iframe scaled down to fit its container's width. */
function ScaledIframe({ url, title }: { url: string; title: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / DESKTOP_WIDTH));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={boxRef} className="absolute inset-0 overflow-hidden bg-white">
      <iframe
        src={url}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute left-0 top-0 border-0"
        style={{ width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT, transform: `scale(${scale})`, transformOrigin: "top left" }}
      />
    </div>
  );
}

function Screenshot({ url, name }: { url: string; name: string }) {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-zinc-100 text-xs text-muted-foreground dark:bg-zinc-900">
        <ImageOff className="size-6" />
        {t.projects.preview.unavailable}
      </div>
    );
  }

  return (
    <>
      {!loaded && <Skeleton className="absolute inset-0 rounded-none" />}
      {/* eslint-disable-next-line @next/next/no-img-element -- dynamic third-party screenshot API */}
      <img
        src={screenshotSrc(url)}
        alt={name}
        loading="lazy"
        ref={(el) => {
          if (el?.complete && el.naturalWidth > 0) setLoaded(true);
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={cn(
          "absolute inset-0 size-full object-cover object-top transition-[transform,opacity] duration-500 group-hover:scale-105",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </>
  );
}

interface ProjectPreviewBrowserProps {
  name: string;
  url: string;
  /** Optional controlled state for the fullscreen modal, so outside buttons can open it. */
  expanded?: boolean;
  onExpandedChange?: (open: boolean) => void;
}

export function ProjectPreviewBrowser({ name, url, expanded: expandedProp, onExpandedChange }: ProjectPreviewBrowserProps) {
  const { t } = useLanguage();
  const [live, setLive] = useState(false);
  const [expandedState, setExpandedState] = useState(false);
  const expanded = expandedProp ?? expandedState;
  const setExpanded = onExpandedChange ?? setExpandedState;
  const host = url.replace("https://", "");
  const p = t.projects.preview;

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-lg transition-transform duration-500 ease-out hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-100 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-yellow-500/80" />
          <span className="size-2.5 rounded-full bg-emerald-500/80" />
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-center">
          <div className="flex min-w-0 max-w-full items-center gap-1.5 rounded-md bg-white px-2.5 py-1 font-mono text-[11px] text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
            <Lock className="size-3 shrink-0 text-emerald-500" />
            <span className="truncate">{host}</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-0.5">
          <BarButton
            label={live ? p.screenshot : p.interact}
            render={<button type="button" aria-pressed={live} onClick={() => setLive((v) => !v)} />}
          >
            {live ? <Eye className="size-3.5" /> : <MousePointerClick className="size-3.5" />}
          </BarButton>
          <BarButton label={p.expand} render={<button type="button" onClick={() => setExpanded(true)} />}>
            <Maximize2 className="size-3.5" />
          </BarButton>
          <BarButton label={p.external} render={<a href={url} target="_blank" rel="noopener noreferrer" />}>
            <ExternalLink className="size-3.5" />
          </BarButton>
        </div>
      </div>

      <div className="group relative bg-zinc-100 dark:bg-zinc-900" style={{ aspectRatio: `${DESKTOP_WIDTH} / ${DESKTOP_HEIGHT}` }}>
        {live ? <ScaledIframe url={url} title={name} /> : <Screenshot url={url} name={name} />}
        {!live && (
          <>
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-zinc-950/70 to-transparent shadow-[inset_0_-24px_40px_-20px_rgba(0,0,0,0.5)]" />
            <button
              type="button"
              aria-label={`${name} — ${p.expand}`}
              onClick={() => setExpanded(true)}
              className="group/overlay absolute inset-0 cursor-pointer outline-none"
            >
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-zinc-950/80 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible/overlay:opacity-100">
                <Maximize2 className="size-3.5 text-emerald-400" />
                {p.expand}
              </span>
            </button>
          </>
        )}
      </div>

      <Dialog open={expanded} onOpenChange={setExpanded}>
        <DialogContent className="flex h-[90vh] flex-col gap-3 sm:max-w-6xl">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>
              {host} · {p.blockedHint}
            </DialogDescription>
          </DialogHeader>
          {expanded && (
            <iframe
              src={url}
              title={name}
              referrerPolicy="no-referrer"
              className="min-h-0 w-full flex-1 rounded-lg border border-border bg-white"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

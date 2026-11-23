"use client";

/**
 * Shared template for project case-study pages (app/projects/*).
 * CaseStudyLayout renders the page shell (header, facts strip, media, headline stats,
 * sticky contents nav, image lightbox); the other exports are content building blocks.
 */

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft, Check, ChevronDown, Maximize2, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Shared styles                                                       */
/* ------------------------------------------------------------------ */

export const H3 = "mt-12 mb-4 text-xl sm:text-2xl font-semibold text-foreground";
export const H4 = "mb-3 text-lg font-semibold text-foreground";
export const UL = "list-disc pl-5 space-y-2 marker:text-highlight";
export const CARD = "rounded-xl border border-blue-100 dark:border-blue-900 bg-white/60 dark:bg-white/[0.03]";

/* Tabs keep every panel in the DOM (forceMount) so all content stays in the static HTML. */
export const TAB_PANEL = "mt-6 data-[state=inactive]:hidden";
export const TAB_LIST = "grid h-auto w-full gap-1 bg-blue-50/70 p-1 dark:bg-blue-950/40";
export const TAB_TRIGGER =
  "py-2 text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow";

/* ------------------------------------------------------------------ */
/* Text blocks                                                         */
/* ------------------------------------------------------------------ */

/** Body copy: comfortable line length, higher contrast than muted text. */
export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("max-w-3xl space-y-5 leading-relaxed text-foreground/80 sm:text-[1.0625rem]", className)}>
      {children}
    </div>
  );
}

export function Callout({
  icon: Icon,
  title,
  children,
  className,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside className={cn("rounded-xl border border-highlight/30 bg-highlight/[0.06] p-4 sm:p-5", className)}>
      <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-foreground">
        <Icon className="h-4 w-4 text-highlight" aria-hidden="true" />
        {title}
      </h3>
      <div className="leading-relaxed text-foreground/80">{children}</div>
    </aside>
  );
}

export function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-toc
      className="scroll-mt-32 border-t border-border pt-12 first-of-type:border-t-0 first-of-type:pt-0 sm:pt-16 lg:scroll-mt-24"
    >
      <SectionHeading index={index} label={label} title={title} className="!mb-6 sm:!mb-8" />
      {children}
    </section>
  );
}

/** Expandable panel for long technical write-ups. Native <details> keeps the text in the page and searchable. */
export function Panel({
  n,
  title,
  defaultOpen,
  children,
}: {
  n: string;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details open={defaultOpen} className={cn(CARD, "group overflow-hidden [&_summary::-webkit-details-marker]:hidden")}>
      <summary className="flex cursor-pointer list-none items-center gap-4 px-4 py-4 transition-colors hover:bg-blue-50/60 sm:px-6 dark:hover:bg-blue-950/30">
        <span className="font-mono text-xs text-highlight">{n}</span>
        <h3 className="flex-1 text-lg font-semibold text-foreground sm:text-xl">{title}</h3>
        <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="border-t border-blue-100 px-4 pb-6 pt-5 sm:px-6 dark:border-blue-900">{children}</div>
    </details>
  );
}

/** Grid of short items (features, outcomes) with check marks. */
export function FeatureGrid({ items, className }: { items: React.ReactNode[]; className?: string }) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {items.map((item, i) => (
        <li key={i} className={cn(CARD, "flex items-start gap-3 p-4 text-sm leading-relaxed text-foreground/80 sm:text-base")}>
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-highlight/15 text-highlight">
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Numbered process steps joined by a vertical line. */
export function Steps({ steps }: { steps: { title: string; body: React.ReactNode }[] }) {
  return (
    <ol className="relative max-w-3xl space-y-6 before:absolute before:bottom-4 before:left-[15px] before:top-4 before:w-px before:bg-border">
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4 sm:gap-5">
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-highlight text-sm font-semibold text-highlight-foreground ring-4 ring-background">
            {i + 1}
          </span>
          <div className={cn(CARD, "flex-1 p-4 sm:p-5")}>
            <h3 className="mb-1.5 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="leading-relaxed text-foreground/80">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Figures with click-to-enlarge                                       */
/* ------------------------------------------------------------------ */

type ZoomImage = { src: string; alt: string; caption?: React.ReactNode };
const ZoomContext = createContext<(img: ZoomImage) => void>(() => {});

export function Figure({
  src,
  alt,
  caption,
  className,
  imgClassName,
}: ZoomImage & { className?: string; imgClassName?: string }) {
  const zoom = useContext(ZoomContext);
  return (
    <figure className={cn("group/fig", className)}>
      <button
        type="button"
        onClick={() => zoom({ src, alt, caption })}
        aria-label={`Enlarge image: ${alt}`}
        className="relative block w-full cursor-zoom-in overflow-hidden rounded-lg border border-blue-100 bg-blue-50/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-blue-900 dark:bg-blue-950/20"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "mx-auto block h-auto w-full object-contain transition-transform duration-300 group-hover/fig:scale-[1.02]",
            imgClassName
          )}
        />
        <span className="absolute right-2 top-2 rounded-full bg-black/55 p-1.5 text-white opacity-0 transition-opacity group-hover/fig:opacity-100 group-focus-visible/fig:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </button>
      {caption && <figcaption className="mt-2 text-center text-xs text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

/** Wide cover image for the page header (cropped to 16:9, click to see it whole). */
/** `position` picks which part of the image survives the crop, e.g. "object-top". */
export function HeroImage({ src, alt, position }: { src: string; alt: string; position?: string }) {
  const zoom = useContext(ZoomContext);
  return (
    <button
      type="button"
      onClick={() => zoom({ src, alt })}
      aria-label={`Enlarge image: ${alt}`}
      className="group/hero relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-xl border border-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-blue-900"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={cn("h-full w-full object-cover transition-transform duration-500 group-hover/hero:scale-[1.02]", position)} />
      <span className="absolute right-3 top-3 rounded-full bg-black/55 p-2 text-white opacity-0 transition-opacity group-hover/hero:opacity-100 group-focus-visible/hero:opacity-100">
        <Maximize2 className="h-4 w-4" aria-hidden="true" />
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Headline stats                                                      */
/* ------------------------------------------------------------------ */

function CountUp({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, { duration: 1.2, ease: "easeOut", onUpdate: setValue });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export type Stat = { to: number; decimals?: number; prefix?: string; suffix?: string; label: string };

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */

export type TocItem = { id: string; label: string; short: string; n: string };

function useActiveSection(toc: TocItem[]) {
  const [active, setActive] = useState(toc[0]?.id);
  useEffect(() => {
    let frame = 0;
    // Active = the last section whose top has scrolled past 30% of the viewport.
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let current = toc[0]?.id;
      for (const { id } of toc) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [toc]);
  return active;
}

function MobileToc({ toc, active }: { toc: TocItem[]; active?: string }) {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bar = barRef.current;
    const chip = bar?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (bar && chip) bar.scrollTo({ left: chip.offsetLeft - bar.clientWidth / 2 + chip.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="Contents" className="sticky top-16 z-30 -mx-4 mb-8 border-b border-border bg-background/90 px-4 py-2.5 backdrop-blur lg:hidden">
      <div ref={barRef} className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {toc.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            data-id={t.id}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1 text-sm transition-colors",
              active === t.id
                ? "border-highlight bg-highlight/10 text-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="mr-1.5 font-mono text-xs text-highlight">{t.n}</span>
            {t.short}
          </a>
        ))}
      </div>
    </nav>
  );
}

function DesktopToc({ toc, active }: { toc: TocItem[]; active?: string }) {
  return (
    <nav aria-label="Contents" className="sticky top-24 hidden lg:block">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Contents</p>
      <ul className="space-y-1 border-l border-border">
        {toc.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              className={cn(
                "-ml-px flex items-baseline gap-3 border-l-2 py-1.5 pl-4 text-sm transition-colors",
                active === t.id
                  ? "border-highlight font-medium text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="font-mono text-xs text-highlight">{t.n}</span>
              {t.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Page shell                                                          */
/* ------------------------------------------------------------------ */

export type Fact = { label: string; value: React.ReactNode; wide?: boolean };

const GRID_COLS: Record<number, string> = { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4" };
const STAT_COLS: Record<number, string> = { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" };

/** Chips for the "Technologies Used" fact. */
export function TechList({ items }: { items: string[] }) {
  return (
    <span className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span key={t} className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
          {t}
        </span>
      ))}
    </span>
  );
}

export function CaseStudyLayout({
  eyebrow = "Case study",
  title,
  subtitle,
  facts,
  media,
  stats,
  toc,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  facts: Fact[];
  media?: React.ReactNode;
  stats?: Stat[];
  toc: TocItem[];
  children: React.ReactNode;
}) {
  const [zoomed, setZoomed] = useState<ZoomImage | null>(null);
  const active = useActiveSection(toc);

  return (
    <ZoomContext.Provider value={setZoomed}>
      <div className="min-h-screen bg-background py-10 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <Link href="/" className="mb-8 inline-block">
            <Button variant="outline" size="sm" className="group border-blue-500/20 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </Link>

          {/* Header: aligned with the article column on desktop */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:pl-[248px]"
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-highlight">{eyebrow}</p>
            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
              {subtitle && (
                <>
                  <span className="sr-only"> - </span>
                  <span className="mt-2 block text-xl font-semibold text-muted-foreground sm:text-2xl">{subtitle}</span>
                </>
              )}
            </h1>

            {/* Project facts: 1px gaps over a border-coloured background draw the dividers in any layout */}
            <dl
              className={cn(
                "mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-blue-100 bg-blue-100 text-sm dark:border-blue-900 dark:bg-blue-900",
                GRID_COLS[facts.length]
              )}
            >
              {facts.map((f) => (
                <div key={f.label} className={cn("bg-background p-4", f.wide && "col-span-2 sm:col-span-1")}>
                  <dt className="mb-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">{f.label}</dt>
                  <dd className="font-medium text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>

            {media && <div className="mt-6">{media}</div>}

            {stats && stats.length > 0 && (
              <div className={cn("mt-6 grid grid-cols-2 gap-3 sm:gap-4", STAT_COLS[Math.min(stats.length, 4)])}>
                {stats.map((s) => (
                  <div key={s.label} className={cn(CARD, "p-4 sm:p-5")}>
                    <p className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {s.prefix}
                      <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.header>

          {/* Body: sticky contents + article */}
          <div className="mt-12 sm:mt-16 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
            <aside>
              <DesktopToc toc={toc} active={active} />
            </aside>
            <article className="min-w-0 break-words [&_code]:rounded [&_code]:bg-blue-50 [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-blue-700 dark:[&_code]:bg-blue-950/60 dark:[&_code]:text-blue-300">
              <MobileToc toc={toc} active={active} />
              {children}
            </article>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!zoomed} onOpenChange={(open) => !open && setZoomed(null)}>
        <DialogContent className="w-[95vw] max-w-5xl p-3 sm:p-4">
          <DialogTitle className="sr-only">{zoomed?.alt ?? "Image"}</DialogTitle>
          {zoomed && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={zoomed.src} alt={zoomed.alt} className="max-h-[80vh] w-full rounded object-contain" />
              {zoomed.caption && <p className="text-center text-sm text-muted-foreground">{zoomed.caption}</p>}
            </>
          )}
        </DialogContent>
      </Dialog>
    </ZoomContext.Provider>
  );
}

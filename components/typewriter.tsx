"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A phrase is `base` followed by one of its `endings`. Every ending except the last is a
 * false start: it is typed, held briefly, then deleted back to `base` before the next ending
 * is typed. The last ending is held for the full duration and then the whole phrase is deleted.
 * A plain string is a phrase with a single ending.
 */
export type Phrase = string | { base?: string; endings: string[]; className?: string };

type Normalised = { base: string; endings: string[]; className?: string };

const normalise = (p: Phrase): Normalised =>
  typeof p === "string" ? { base: "", endings: [p] } : { base: p.base ?? "", endings: p.endings, className: p.className };

type TypewriterProps = {
  phrases: Phrase[];
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
  /** How long a false-start ending stays on screen before it is deleted. */
  falseStartMs?: number;
  /** Speed of deleting a false-start ending (quicker than a normal delete). */
  correctionMs?: number;
  /** Extra pause after `base` has been typed, e.g. for dramatic "..." */
  basePauseMs?: number;
  className?: string;
};

type Mode = "typing" | "holding" | "deleting";

/**
 * Types each phrase out, pauses, deletes it, then moves to the next.
 * Users with reduced motion enabled get a simple phrase swap instead.
 */
export function Typewriter({
  phrases,
  typeMs = 70,
  deleteMs = 40,
  holdMs = 1800,
  falseStartMs = 380,
  correctionMs = 28,
  basePauseMs = 450,
  className,
}: TypewriterProps) {
  const items = phrases.map(normalise);
  const first = items[0];

  const [phraseIndex, setPhraseIndex] = useState(0);
  // Start with the first phrase fully shown (matches the server-rendered HTML), then hold and delete it.
  const [endingIndex, setEndingIndex] = useState(first.endings.length - 1);
  const [text, setText] = useState(first.base + first.endings[first.endings.length - 1]);
  const [mode, setMode] = useState<Mode>("holding");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const phrase = items[phraseIndex];
  const isLastEnding = endingIndex === phrase.endings.length - 1;
  const target = phrase.base + phrase.endings[endingIndex];

  useEffect(() => {
    // Reduced motion: show each phrase in its final form and swap periodically.
    if (reduceMotion) {
      setText(phrase.base + phrase.endings[phrase.endings.length - 1]);
      const t = setTimeout(() => setPhraseIndex((i) => (i + 1) % items.length), holdMs + 1000);
      return () => clearTimeout(t);
    }

    if (mode === "typing") {
      if (text === target) {
        setMode("holding");
        return;
      }
      const delay = phrase.base && text === phrase.base.trimEnd() ? basePauseMs : typeMs;
      const t = setTimeout(() => setText(target.slice(0, text.length + 1)), delay);
      return () => clearTimeout(t);
    }

    if (mode === "holding") {
      const t = setTimeout(() => setMode("deleting"), isLastEnding ? holdMs : falseStartMs);
      return () => clearTimeout(t);
    }

    // deleting
    const stopAt = isLastEnding ? "" : phrase.base;
    if (text.length > stopAt.length) {
      const t = setTimeout(() => setText(text.slice(0, -1)), isLastEnding ? deleteMs : correctionMs);
      return () => clearTimeout(t);
    }
    if (isLastEnding) {
      setPhraseIndex((i) => (i + 1) % items.length);
      setEndingIndex(0);
    } else {
      setEndingIndex((i) => i + 1);
    }
    setMode("typing");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, mode, phraseIndex, endingIndex, reduceMotion]);

  return (
    <span className={className}>
      {/* Screen readers get every phrase once instead of character-by-character updates */}
      <span className="sr-only">{items.map((p) => p.base + p.endings[p.endings.length - 1]).join(", ")}</span>
      <span aria-hidden="true" className={cn(phrase.className)}>
        {text}
        <span className="inline-block w-[3px] h-[1em] -mb-[0.15em] ml-1 bg-current animate-pulse motion-reduce:animate-none" />
      </span>
    </span>
  );
}

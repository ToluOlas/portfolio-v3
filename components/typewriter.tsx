"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
  className?: string;
};

/**
 * Types each word out, pauses, deletes it, then moves to the next.
 * Users with reduced motion enabled get a simple word swap instead.
 */
export function Typewriter({
  words,
  typeMs = 70,
  deleteMs = 40,
  holdMs = 1800,
  className,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const word = words[wordIndex];

    if (reduceMotion) {
      setText(word);
      const t = setTimeout(() => setWordIndex((i) => (i + 1) % words.length), holdMs + 1000);
      return () => clearTimeout(t);
    }

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? deleteMs : typeMs
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, reduceMotion, typeMs, deleteMs, holdMs]);

  return (
    <span className={className}>
      {/* Screen readers get the full list once instead of character-by-character updates */}
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="inline-block w-[3px] h-[1em] -mb-[0.15em] ml-1 bg-current animate-pulse motion-reduce:animate-none" />
      </span>
    </span>
  );
}

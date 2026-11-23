import type { MouseEvent } from "react";

/**
 * Writes the cursor position (relative to the element) into --x / --y so a
 * CSS radial-gradient overlay can follow the pointer without re-rendering.
 */
export function trackPointer(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--x", `${e.clientX - r.left}px`);
  el.style.setProperty("--y", `${e.clientY - r.top}px`);
}

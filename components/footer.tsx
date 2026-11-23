"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "tolueolasupo@gmail.com";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/timeline", label: "Timeline" },
];

const socialLinks = [
  { href: "https://github.com/ToluOlas", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/tolu-olasupo-7a6037223/", label: "LinkedIn", Icon: Linkedin },
];

export function Footer() {
  // Static export: the year is fixed at build time, which is fine for a site rebuilt on each deploy.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="font-display text-xl font-bold tracking-tight text-foreground">
              Tolu Olasupo<span className="text-highlight">.</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Software engineer building full-stack web apps, machine learning models and games.
            </p>
          </div>

          <div className="flex gap-12 sm:gap-16">
            <nav aria-label="Footer">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Pages</p>
              <ul className="space-y-2 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-foreground/80 transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</p>
              <ul className="space-y-2 text-sm">
                {socialLinks.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Tolu Olasupo · Built with Next.js, Tailwind CSS &amp; Framer Motion
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-1.5 self-start rounded-full border border-border px-3 py-1.5 transition-colors hover:border-highlight hover:text-foreground sm:self-auto"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

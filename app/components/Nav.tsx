"use client";

import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-accent text-sm font-bold text-background transition-transform duration-200 group-hover:scale-110">
            JA
          </span>
          <span className="font-semibold text-foreground">Jeevan Aryal</span>
        </a>

        <ul className="hidden items-center gap-6 sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 text-sm font-medium text-muted transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-200 hover:text-accent hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-m-2.5 flex flex-col gap-1.5 p-2.5 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="h-0.5 w-6 bg-foreground" />
          <span className="h-0.5 w-6 bg-foreground" />
          <span className="h-0.5 w-6 bg-foreground" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-4 py-3 sm:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-sm font-medium text-muted transition-colors hover:bg-accent-soft hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

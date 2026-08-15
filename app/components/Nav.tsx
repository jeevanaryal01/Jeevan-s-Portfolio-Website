"use client";

import { useState } from "react";
import StatusBar from "./StatusBar";

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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur">
      <StatusBar />
      <nav className="mx-auto flex max-w-3xl items-center justify-between border-b border-border px-4 py-3 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center border border-signal font-mono text-xs font-semibold text-signal transition-colors duration-200 group-hover:bg-signal-soft">
            JA
          </span>
          <span className="font-semibold tracking-tight text-foreground">
            Jeevan Aryal
          </span>
        </a>

        <ul className="hidden items-center gap-6 sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 font-mono text-xs uppercase tracking-wider text-muted transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-signal after:transition-all after:duration-200 hover:text-signal hover:after:w-full"
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
        <ul className="flex flex-col gap-1 border-b border-border px-4 py-3 sm:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-3 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:bg-signal-soft hover:text-signal"
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

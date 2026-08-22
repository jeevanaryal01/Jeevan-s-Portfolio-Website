"use client";

import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#connect", label: "Connect" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="display text-2xl tracking-[-0.06em] text-ink"
          onClick={() => setOpen(false)}
        >
          jeevan<span className="text-yellow-deep">.</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navlink text-ink transition-colors hover:text-yellow-deep"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#connect" className="btn btn-solid hidden md:inline-flex">
            Let&rsquo;s connect
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="-m-2.5 flex flex-col gap-[5px] p-2.5 md:hidden"
          >
            <span className="h-[3px] w-7 rounded-full bg-ink" />
            <span className="h-[3px] w-7 rounded-full bg-ink" />
            <span className="h-[3px] w-7 rounded-full bg-ink" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-rule bg-paper px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="navlink block border-b border-rule py-4 text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#connect"
            onClick={() => setOpen(false)}
            className="btn btn-solid mt-5 w-full justify-center"
          >
            Let&rsquo;s connect
          </a>
        </div>
      )}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import {
  EMAIL,
  GITHUB,
  GITHUB_HANDLE,
  LINKEDIN,
  LINKEDIN_HANDLE,
} from "../lib/contact";
import { useHighlights } from "./HighlightStore";
import {
  ArrowIcon,
  CheckIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./Icons";

const RESPONSES = [
  "Good pick. The message below is already written.",
  "Noted — that’s the part I’d want to talk about too.",
  "Nice shortlist. Send it over and I’ll pick up the thread.",
  "That’s enough to start a real conversation.",
];

function buildMailto(items: { label: string; kind: string }[]) {
  if (items.length === 0) {
    return `mailto:${EMAIL}?subject=${encodeURIComponent("Let’s connect")}`;
  }
  const subject = `Let’s connect — ${items.length} thing${
    items.length === 1 ? "" : "s"
  } from your site`;
  const body = [
    "Hi Jeevan,",
    "",
    "I was reading through your site and highlighted:",
    "",
    ...items.map((item) => `- ${item.label} (${item.kind})`),
    "",
    "What I wanted to ask about:",
    "",
    "",
  ].join("\n");
  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export default function Connect() {
  const { items, clear, ready, returning } = useHighlights();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(id);
  }, [copied]);

  const count = items.length;
  const response = RESPONSES[Math.min(count, RESPONSES.length) - 1] ?? "";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section
      id="connect"
      className="scroll-mt-24 bg-ink px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-yellow">
          Contact
        </p>
        <h2 className="display mt-4 text-[3.4rem] text-paper sm:text-7xl lg:text-8xl">
          let&rsquo;s
          <br />
          <span className="mark mark-thick is-marked text-ink">connect.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
          I&rsquo;m open to roles and conversations in cyber security and AI — in
          Sydney or remote. LinkedIn is the fastest way in; email works just as
          well.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 border border-paper/20 p-5 transition-colors hover:border-yellow"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition-colors group-hover:bg-yellow">
                  <LinkedInIcon className="h-[1.05rem] w-[1.05rem]" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-bold uppercase tracking-wider text-paper">
                    LinkedIn
                  </span>
                  <span className="block truncate font-mono text-xs text-paper/50">
                    {LINKEDIN_HANDLE}
                  </span>
                </span>
              </span>
              <ArrowIcon className="h-4 w-4 shrink-0 text-paper/40 transition-colors group-hover:text-yellow" />
            </a>

            <a
              href={buildMailto(items)}
              className="group flex items-center justify-between gap-4 border border-paper/20 p-5 transition-colors hover:border-yellow"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition-colors group-hover:bg-yellow">
                  <MailIcon className="h-[1.05rem] w-[1.05rem]" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-bold uppercase tracking-wider text-paper">
                    Email
                  </span>
                  <span className="block truncate font-mono text-xs text-paper/50">
                    {EMAIL}
                  </span>
                </span>
              </span>
              <ArrowIcon className="h-4 w-4 shrink-0 text-paper/40 transition-colors group-hover:text-yellow" />
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 border border-paper/20 p-5 transition-colors hover:border-yellow"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition-colors group-hover:bg-yellow">
                  <GitHubIcon className="h-[1.05rem] w-[1.05rem]" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-bold uppercase tracking-wider text-paper">
                    GitHub
                  </span>
                  <span className="block truncate font-mono text-xs text-paper/50">
                    {GITHUB_HANDLE}
                  </span>
                </span>
              </span>
              <ArrowIcon className="h-4 w-4 shrink-0 text-paper/40 transition-colors group-hover:text-yellow" />
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 self-start pt-1 font-mono text-xs uppercase tracking-[0.15em] text-paper/50 transition-colors hover:text-yellow"
            >
              {copied ? (
                <>
                  <CheckIcon className="h-3.5 w-3.5" /> Address copied
                </>
              ) : (
                "Copy the address instead"
              )}
            </button>
          </div>

          <div className="border border-paper/20 p-6">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-paper/50">
              Your highlights
              {ready && count > 0 ? ` · ${count}` : ""}
            </p>

            {!ready || count === 0 ? (
              <>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-paper/70">
                  Nothing highlighted yet. Scroll back up and tap the marker
                  beside anything worth a conversation — a role, a skill, a
                  project. Whatever you pick lands in the email below, so you
                  don&rsquo;t have to write the first paragraph.
                </p>
                <a
                  href="#work"
                  className="mt-5 inline-flex items-center gap-1.5 border-b-2 border-yellow pb-0.5 text-sm font-bold text-paper"
                >
                  Start with the work
                  <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              </>
            ) : (
              <>
                <p className="mt-3 text-[0.9375rem] text-yellow">{response}</p>
                <ul className="mt-5 flex flex-col divide-y divide-paper/10">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-baseline justify-between gap-4 py-2.5"
                    >
                      <span className="text-sm text-paper">{item.label}</span>
                      <span className="shrink-0 font-mono text-[0.625rem] uppercase tracking-wider text-paper/40">
                        {item.kind}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={buildMailto(items)}
                    className="btn bg-yellow text-ink hover:bg-paper"
                  >
                    Send these to Jeevan
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={clear}
                    className="font-mono text-xs uppercase tracking-[0.15em] text-paper/40 transition-colors hover:text-paper"
                  >
                    Clear
                  </button>
                </div>
              </>
            )}

            {ready && returning && (
              <p className="mt-6 border-t border-paper/10 pt-4 font-mono text-[0.625rem] uppercase tracking-[0.15em] text-paper/35">
                Welcome back — highlights live in your browser only.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import Section from "./Section";
import { MarkerIcon } from "./Icons";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="the short version">
      <p className="text-lg leading-relaxed text-ink sm:text-xl">
        I&rsquo;m an IT professional with a strong focus on cyber security,
        backed by hands-on experience across support, systems and data. Day to
        day that means hardening the environment, reading threat intel, and
        building the internal tools and AI agents that take the repetitive work
        off people&rsquo;s desks.
      </p>
      <p className="mt-5 leading-relaxed text-ash">
        I came into IT through frontline roles — retail floors, service desks,
        admin — so I judge a control by whether the people it protects can
        actually live with it. That&rsquo;s the thread through everything below.
      </p>

      <div className="mt-10 flex items-start gap-4 border-l-4 border-yellow bg-paper-deep p-6">
        <span className="marker" aria-hidden>
          <MarkerIcon className="h-3.5 w-3.5" />
        </span>
        <div>
          <p className="font-display text-base font-bold text-ink">
            Highlight anything you want to talk about
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ash">
            Tap the marker beside any role, skill, certification or project. It
            turns yellow, it stays highlighted when you come back, and the
            connect section at the end turns your picks into a message
            that&rsquo;s already written.
          </p>
        </div>
      </div>
    </Section>
  );
}

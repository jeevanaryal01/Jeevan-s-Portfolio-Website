import { LOCATION } from "../lib/contact";

const FACTS = [
  { label: "Currently", value: "IT Analyst at NEXA Group" },
  { label: "Working on", value: "Essential Eight, CTI, internal AI agents" },
  { label: "Based in", value: LOCATION },
];

export default function NowBand() {
  return (
    <section className="bg-ink px-6 py-14 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
        {FACTS.map((fact) => (
          <div key={fact.label}>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-yellow">
              {fact.label}
            </p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-paper">
              {fact.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

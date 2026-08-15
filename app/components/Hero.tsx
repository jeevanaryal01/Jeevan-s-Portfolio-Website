import Image from "next/image";

const FIELDS = [
  { label: "Role", value: "IT Analyst" },
  { label: "Base", value: "Sydney, NSW, Australia" },
  { label: "Org", value: "NEXA Group" },
  { label: "Focus", value: "Cybersecurity · CTI · AI Systems" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-20 px-4 pt-14 pb-10 sm:pt-20"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 sm:flex-row sm:items-start">
        <div className="relative shrink-0">
          <span className="pointer-events-none absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-signal/70" />
          <span className="pointer-events-none absolute -right-2 -top-2 h-4 w-4 border-r-2 border-t-2 border-signal/70" />
          <span className="pointer-events-none absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-signal/70" />
          <span className="pointer-events-none absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-signal/70" />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-border-strong bg-panel sm:h-36 sm:w-36">
            <Image
              src="/profile-photo.png"
              alt="Jeevan Aryal"
              width={144}
              height={144}
              className="h-full w-full rounded-full object-cover [filter:grayscale(12%)_contrast(1.06)_brightness(0.9)]"
              priority
            />
            <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_22px_10px_rgba(6,7,9,0.65)]" />
            <span className="scan-sweep pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-signal/15 to-transparent" />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center text-center sm:items-start sm:text-left">
          <p className="eyebrow">
            Portfolio · Subject Record
            <span className="cursor-blink text-signal">_</span>
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Jeevan Aryal
          </h1>

          <dl className="mt-5 grid w-full max-w-md grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 border-t border-border pt-4 text-left font-mono text-xs">
            {FIELDS.map((f) => (
              <div key={f.label} className="contents">
                <dt className="text-muted-dim uppercase tracking-wider">
                  {f.label}
                </dt>
                <dd className="text-muted">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <span className="inline-flex items-center gap-1.5 border border-signal/60 bg-signal-soft px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-wider text-signal">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-signal" />
              Open to work
            </span>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a
              href="#map"
              className="border border-signal bg-signal px-6 py-2.5 text-sm font-semibold text-[#16110a] transition-all duration-150 hover:-translate-y-0.5 hover:bg-signal-hover active:translate-y-0"
            >
              View the graph
            </a>
            <a
              href="#contact"
              className="border border-border-strong px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-150 hover:-translate-y-0.5 hover:border-signal hover:text-signal active:translate-y-0"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

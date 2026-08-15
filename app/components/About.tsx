import { SectionCard } from "./Section";

export default function About() {
  return (
    <SectionCard id="about" title="About">
      <p className="text-sm leading-relaxed text-foreground">
        I&apos;m an IT professional with a strong focus on cybersecurity,
        backed by hands-on experience across support, systems, and data.
      </p>

      <div className="mt-4 border-l-2 border-signal/60 bg-background-deep/60 px-4 py-3">
        <p className="eyebrow">Top Skills</p>
        <p className="mt-1.5 text-sm text-foreground/90">
          Cybersecurity &middot; Cyber Threat Intelligence (CTI)
        </p>
      </div>
    </SectionCard>
  );
}

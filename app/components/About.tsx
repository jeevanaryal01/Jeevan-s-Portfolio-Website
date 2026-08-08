import { SectionCard } from "./Section";

export default function About() {
  return (
    <SectionCard id="about" title="About">
      <p className="text-sm leading-relaxed text-foreground">
        I&apos;m an IT professional with a strong focus on cybersecurity,
        backed by hands-on experience across support, systems, and data.
      </p>

      <div className="mt-4 rounded-lg border border-border bg-background px-4 py-3">
        <p className="text-sm font-semibold text-foreground">Top skills</p>
        <p className="mt-1 text-sm text-muted">
          Cybersecurity &middot; Cyber Threat Intelligence (CTI)
        </p>
      </div>
    </SectionCard>
  );
}

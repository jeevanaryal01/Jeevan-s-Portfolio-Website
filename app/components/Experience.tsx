import Section from "./Section";
import Entry, { type EntryData } from "./Entry";

const EXPERIENCE: EntryData[] = [
  {
    id: "exp-nexa",
    kind: "Experience",
    title: "Information Technology Analyst",
    subtitle: "NEXA Group · Full-time",
    meta: "Jun 2024 – Present · Sydney, NSW",
  },
  {
    id: "exp-telstra",
    kind: "Experience",
    title: "Sales and Service Consultant",
    subtitle: "Telstra · Part-time",
    meta: "Jul 2022 – Jul 2026 · 4 yrs 1 mo",
    tags: ["Team Leadership", "Sales"],
  },
  {
    id: "exp-sanctuary",
    kind: "Experience",
    title: "Office Administrator",
    subtitle: "Sanctuary Housing · Part-time",
    meta: "2020 – 2022 · Sydney, NSW",
    tags: ["Communication", "Data Entry"],
  },
  {
    id: "exp-hampshire",
    kind: "Experience",
    title: "Customer Service Representative",
    subtitle: "The Lady Hampshire · Part-time",
    meta: "2019 – 2020 · Sydney, NSW · On-site",
    tags: ["Communication", "Customer Service"],
  },
];

export default function Experience() {
  return (
    <Section
      id="work"
      eyebrow="Experience"
      title="track record"
      intro="Seven years from the shop floor to the security desk."
    >
      {EXPERIENCE.map((entry) => (
        <Entry key={entry.id} data={entry} />
      ))}
    </Section>
  );
}

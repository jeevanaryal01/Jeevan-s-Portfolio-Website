import { SectionCard, EntryItem } from "./Section";

const EXPERIENCE = [
  {
    title: "Information Technology Analyst",
    subtitle: "NEXA Group · Full-time",
    meta: "Jun 2024 – Present · 2 yrs 3 mos · Sydney, New South Wales, Australia",
  },
  {
    title: "Sales And Service Consultant",
    subtitle: "Telstra · Part-time",
    meta: "Jul 2022 – Jul 2026 · 4 yrs 1 mo",
    tags: ["Team Leadership", "Sales"],
  },
  {
    title: "Office Administrator",
    subtitle: "Sanctuary Housing · Part-time",
    meta: "2020 – 2022 · Sydney, New South Wales, Australia",
    tags: ["Communication", "Data Entry"],
  },
  {
    title: "Customer Service Representative",
    subtitle: "The Lady Hampshire · Part-time",
    meta: "2019 – 2020 · Sydney, New South Wales, Australia · On-site",
    tags: ["Communication", "Customer Service"],
  },
];

export default function Experience() {
  return (
    <SectionCard id="experience" title="Experience" dotColor="#e0a95c">
      {EXPERIENCE.map((entry, i) => (
        <EntryItem
          key={entry.title + entry.subtitle}
          title={entry.title}
          subtitle={entry.subtitle}
          meta={entry.meta}
          tags={entry.tags}
          last={i === EXPERIENCE.length - 1}
        />
      ))}
    </SectionCard>
  );
}

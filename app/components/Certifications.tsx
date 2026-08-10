import { SectionCard, EntryItem } from "./Section";

const CERTIFICATIONS = [
  {
    title: "Security Concepts and Practices",
    subtitle: "ISC2",
    meta: "Issued Mar 2026",
  },
  {
    title: "PL-300: Power BI for Data Analysis",
    subtitle: "Skillsoft",
    meta: "Issued Jun 2024",
  },
  {
    title: "Big Data Fundamentals",
    subtitle: "Skillsoft",
    meta: "Issued Jun 2024",
  },
  {
    title: "Business Analysis Overview",
    subtitle: "Skillsoft",
    meta: "Issued Jun 2024",
  },
  {
    title: "Developing an AI/ML Data Strategy (3-part series)",
    subtitle: "Skillsoft",
    meta: "Issued Jun 2024",
  },
  {
    title: "Data Analyst – SQL Fundamentals BootCamp",
    subtitle: "TechSkills Institute",
    meta: "Issued May 2024",
  },
  {
    title: "Apple Champion For Telstra",
    subtitle: "Apple",
    meta: "Issued Jan 2023",
  },
];

export default function Certifications() {
  return (
    <SectionCard
      id="certifications"
      title="Licenses & Certifications"
      dotColor="#c99a5b"
    >
      {CERTIFICATIONS.map((entry, i) => (
        <EntryItem
          key={entry.title}
          title={entry.title}
          subtitle={entry.subtitle}
          meta={entry.meta}
          last={i === CERTIFICATIONS.length - 1}
        />
      ))}
    </SectionCard>
  );
}

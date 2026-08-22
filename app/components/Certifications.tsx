import Section from "./Section";
import Entry, { type EntryData } from "./Entry";

const CERTIFICATIONS: EntryData[] = [
  {
    id: "cert-isc2",
    kind: "Certification",
    title: "Security Concepts and Practices",
    subtitle: "ISC2",
    meta: "Issued Mar 2026",
  },
  {
    id: "cert-pl300",
    kind: "Certification",
    title: "PL-300: Power BI for Data Analysis",
    subtitle: "Skillsoft",
    meta: "Issued Jun 2024",
  },
  {
    id: "cert-bigdata",
    kind: "Certification",
    title: "Big Data Fundamentals",
    subtitle: "Skillsoft",
    meta: "Issued Jun 2024",
  },
  {
    id: "cert-ba",
    kind: "Certification",
    title: "Business Analysis Overview",
    subtitle: "Skillsoft",
    meta: "Issued Jun 2024",
  },
  {
    id: "cert-aiml",
    kind: "Certification",
    title: "Developing an AI/ML Data Strategy",
    subtitle: "Skillsoft · 3-part series",
    meta: "Issued Jun 2024",
  },
  {
    id: "cert-sql",
    kind: "Certification",
    title: "Data Analyst — SQL Fundamentals BootCamp",
    subtitle: "TechSkills Institute",
    meta: "Issued May 2024",
  },
  {
    id: "cert-apple",
    kind: "Certification",
    title: "Apple Champion for Telstra",
    subtitle: "Apple",
    meta: "Issued Jan 2023",
  },
];

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="paper trail"
      intro="Seven certifications, most of them earned alongside full-time work."
    >
      {CERTIFICATIONS.map((entry) => (
        <Entry key={entry.id} data={entry} />
      ))}
    </Section>
  );
}

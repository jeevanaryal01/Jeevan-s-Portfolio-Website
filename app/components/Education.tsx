import Section from "./Section";
import Entry, { type EntryData } from "./Entry";

const EDUCATION: EntryData[] = [
  {
    id: "edu-aihe",
    kind: "Education",
    title: "Australian Institute of Higher Education",
    subtitle: "Bachelor of Business Information Systems, Information Technology",
    meta: "2021 – 2024 · 5.94 GPA · Student Representative 2022",
    tags: ["Database Management (DBMS)", "Web Development"],
  },
  {
    id: "edu-performance",
    kind: "Education",
    title: "Performance Education",
    subtitle: "IT Professional Year, Information Technology",
    meta: "Mar 2024 – Mar 2025",
    tags: ["Agile Methodologies"],
  },
  {
    id: "edu-sabt-adv",
    kind: "Education",
    title: "Southern Academy of Business and Technology",
    subtitle: "Advanced Diploma in Network Security",
    meta: "2020",
    tags: ["Cisco Networking", "Packet Tracer"],
  },
  {
    id: "edu-sabt-dip",
    kind: "Education",
    title: "Southern Academy of Business and Technology",
    subtitle: "Diploma in Information Technology",
    tags: ["Information Technology", "Business Intelligence (BI)"],
  },
  {
    id: "edu-uniglobe",
    kind: "Education",
    title: "Uniglobe SS/College",
    subtitle: "Year 12, Science",
    meta: "Mar 2016 – 2018",
    tags: ["Chemistry", "Mathematics"],
  },
];

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="where it came from"
      tone="deep"
    >
      {EDUCATION.map((entry) => (
        <Entry key={entry.id} data={entry} />
      ))}
    </Section>
  );
}

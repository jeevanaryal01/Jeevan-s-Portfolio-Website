import { SectionCard, EntryItem } from "./Section";

const EDUCATION = [
  {
    title: "Australian Institute of Higher Education",
    subtitle: "Bachelors in Business Information Systems, Information Technology",
    meta: "2021 – 2024 · Grade: 5.94 GPA · Activities: Student Representative 2022",
    tags: ["Database Management System (DBMS)", "Web Development"],
  },
  {
    title: "Performance Education",
    subtitle: "IT Professional Year, Information Technology",
    meta: "Mar 2024 – Mar 2025",
    tags: ["Agile Methodologies"],
  },
  {
    title: "Southern Academy of Business and Technology (SABT)",
    subtitle: "Advanced Diploma in Network Security, Information Technology",
    meta: "2020",
    tags: ["Cisco Networking", "Packet Tracer"],
  },
  {
    title: "Southern Academy of Business and Technology (SABT)",
    subtitle: "Diploma in Information Technology",
    tags: ["Information Technology", "Business Intelligence (BI)"],
  },
  {
    title: "Uniglobe SS/College",
    subtitle: "Year 12, Science",
    meta: "Mar 2016 – 2018",
    tags: ["Chemistry", "Mathematics"],
  },
];

export default function Education() {
  return (
    <SectionCard id="education" title="Education" dotColor="#c1440e">
      {EDUCATION.map((entry, i) => (
        <EntryItem
          key={entry.title + entry.subtitle}
          title={entry.title}
          subtitle={entry.subtitle}
          meta={entry.meta}
          tags={entry.tags}
          last={i === EDUCATION.length - 1}
        />
      ))}
    </SectionCard>
  );
}

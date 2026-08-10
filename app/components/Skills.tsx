import { SectionCard } from "./Section";

const SKILLS = [
  { name: "Cybersecurity", endorsements: undefined },
  { name: "Cyber Threat Intelligence (CTI)", endorsements: undefined },
  { name: "Business Requirements", endorsements: undefined },
  { name: "Business Analysis", endorsements: undefined },
  { name: "Leadership", endorsements: 2 },
  { name: "Data Visualization", endorsements: 2 },
  { name: "Agile Methodologies", endorsements: 1 },
  { name: "Microsoft Power BI", endorsements: 1 },
  { name: "Big Data", endorsements: 1 },
  { name: "HTML", endorsements: 1 },
];

export default function Skills() {
  return (
    <SectionCard id="skills" title="Skills" dotColor="#2c6bcf">
      <ul className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <li
            key={skill.name}
            className="pill flex items-center gap-2 rounded-full bg-pill-bg px-4 py-2 text-sm font-medium text-pill-text"
          >
            {skill.name}
            {skill.endorsements && (
              <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-xs font-semibold text-accent">
                {skill.endorsements}
              </span>
            )}
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

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
    <SectionCard id="skills" title="Skills">
      <ul className="flex flex-wrap gap-2.5">
        {SKILLS.map((skill) => (
          <li
            key={skill.name}
            className="tag flex items-center gap-2 px-3 py-1.5 text-foreground/80"
          >
            {skill.name}
            {skill.endorsements && (
              <span className="bg-signal-soft px-1.5 py-0.5 text-[0.625rem] font-semibold text-signal">
                {skill.endorsements}
              </span>
            )}
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

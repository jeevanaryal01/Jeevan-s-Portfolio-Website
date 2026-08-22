"use client";

import Section from "./Section";
import { useHighlights } from "./HighlightStore";

const SKILLS = [
  "Cybersecurity",
  "Cyber Threat Intelligence (CTI)",
  "Essential Eight",
  "Business Analysis",
  "Business Requirements",
  "Leadership",
  "Data Visualization",
  "Agile Methodologies",
  "Microsoft Power BI",
  "Big Data",
  "AI Agents",
  "HTML",
];

function slug(name: string) {
  return `skill-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`;
}

export default function Skills() {
  const { has, toggle } = useHighlights();

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="what I bring"
      intro="Tap the ones you care about — they carry through to the message at the end."
      tone="deep"
    >
      <ul className="flex flex-wrap gap-2.5">
        {SKILLS.map((skill) => {
          const id = slug(skill);
          const marked = has(id);
          return (
            <li key={skill}>
              <button
                type="button"
                aria-pressed={marked}
                onClick={() => toggle({ id, label: skill, kind: "Skill" })}
                className="chip"
              >
                {skill}
                <span
                  aria-hidden
                  className={`text-xs font-bold ${
                    marked ? "text-ink" : "text-ash-dim"
                  }`}
                >
                  {marked ? "×" : "+"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

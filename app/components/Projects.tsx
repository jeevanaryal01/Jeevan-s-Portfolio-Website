import { SectionCard } from "./Section";

type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    name: "Essential Eight Implementation",
    category: "Professional · Cyber Security",
    description:
      "Contributed to implementing the Australian Cyber Security Centre's Essential Eight maturity framework across the organization, covering areas like application control, patching, MFA, and restricting admin privileges to lift overall security posture.",
    tags: ["Essential Eight", "Risk Assessment", "MFA", "Patch Management"],
  },
  {
    name: "Copilot & Claude Rollout at NEXA",
    category: "Professional · AI Adoption",
    description:
      "Led the introduction of GitHub Copilot and Claude at NEXA, helping teams adopt AI assistants into their day-to-day workflows to boost productivity and support change management around new tooling.",
    tags: ["GitHub Copilot", "Claude", "AI Adoption", "Change Management"],
  },
  {
    name: "Internal Apps & Agents",
    category: "Professional · AI Engineering",
    description:
      "Designing and building internal applications and AI agents to automate workflows and streamline day-to-day operations, bridging systems analysis with hands-on AI engineering.",
    tags: ["AI Agents", "Automation", "Internal Tooling"],
  },
  {
    name: "Personal Projects",
    category: "Personal · Self-Directed Learning",
    description:
      "An ongoing set of self-directed projects for learning AI and cyber security hands-on — a personal lab for experimenting outside of work constraints and building skills project by project.",
    tags: ["AI", "Security", "Self-Directed Learning"],
  },
];

export default function Projects() {
  return (
    <SectionCard id="projects" title="Projects">
      {PROJECTS.map((project, i) => (
        <div
          key={project.name}
          className={`py-4 ${i === PROJECTS.length - 1 ? "" : "border-b border-border"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            {project.category}
          </p>
          <h3 className="mt-1 font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-pill-bg px-3 py-1 text-xs font-medium text-pill-text"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </SectionCard>
  );
}

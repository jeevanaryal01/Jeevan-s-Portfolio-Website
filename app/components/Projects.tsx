import Section from "./Section";
import Entry, { type EntryData } from "./Entry";

const PROJECTS: EntryData[] = [
  {
    id: "proj-e8",
    kind: "Project",
    title: "Essential Eight implementation",
    subtitle: "NEXA Group · Cyber security",
    description:
      "Contributed to rolling out the ACSC Essential Eight maturity framework across the organisation — application control, patching, MFA and restricting admin privileges — and lifted the overall security posture without grinding day-to-day work to a halt.",
    tags: ["Essential Eight", "Risk Assessment", "MFA", "Patch Management"],
  },
  {
    id: "proj-ai-rollout",
    kind: "Project",
    title: "Copilot and Claude rollout",
    subtitle: "NEXA Group · AI adoption",
    description:
      "Led the introduction of GitHub Copilot and Claude at NEXA: picked the tooling, ran the change management, and helped teams fold AI assistants into the work they already do.",
    tags: ["GitHub Copilot", "Claude", "AI Adoption", "Change Management"],
  },
  {
    id: "proj-internal-agents",
    kind: "Project",
    title: "Internal apps and agents",
    subtitle: "NEXA Group · AI engineering",
    description:
      "Designing and building internal applications and AI agents that automate the repetitive parts of operations — systems analysis on one side, hands-on engineering on the other.",
    tags: ["AI Agents", "Automation", "Internal Tooling"],
  },
  {
    id: "proj-lab",
    kind: "Project",
    title: "Personal security and AI lab",
    subtitle: "Self-directed",
    description:
      "An ongoing set of self-directed builds for learning AI and cyber security hands-on — a lab for experimenting outside work constraints, one project at a time.",
    tags: ["AI", "Security", "Self-Directed Learning"],
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="things I've built"
      intro="Work I owned or drove, at NEXA and on my own time."
    >
      {PROJECTS.map((project) => (
        <Entry key={project.id} data={project} />
      ))}
    </Section>
  );
}

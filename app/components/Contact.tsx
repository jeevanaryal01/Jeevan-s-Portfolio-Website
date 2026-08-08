import { SectionCard } from "./Section";

const CONTACTS = [
  {
    label: "Email",
    value: "jeevan.aryal@example.com",
    href: "mailto:jeevan.aryal@example.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jeevan-aryal-8717522ba",
    href: "https://www.linkedin.com/in/jeevan-aryal-8717522ba/",
  },
  {
    label: "GitHub",
    value: "github.com/jeevanaryal",
    href: "https://github.com/jeevanaryal",
  },
];

export default function Contact() {
  return (
    <SectionCard id="contact" title="Contact">
      <p className="text-sm text-muted">
        Open to opportunities in AI and cyber security.
      </p>

      <ul className="mt-4 divide-y divide-border">
        {CONTACTS.map((contact) => (
          <li key={contact.label} className="flex items-center justify-between py-3">
            <span className="text-sm font-medium text-foreground">
              {contact.label}
            </span>
            <a
              href={contact.href}
              className="text-sm font-medium text-accent hover:underline"
            >
              {contact.value}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-muted">
        (email and GitHub are placeholders — swap in your real ones)
      </p>
    </SectionCard>
  );
}

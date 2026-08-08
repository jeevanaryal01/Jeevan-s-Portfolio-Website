import type { ReactNode } from "react";

export function SectionCard({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="card p-6">
          <h2 className="section-heading">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export function EntryItem({
  title,
  subtitle,
  meta,
  description,
  tags,
  last = false,
}: {
  title: string;
  subtitle?: string;
  meta?: string;
  description?: string;
  tags?: string[];
  last?: boolean;
}) {
  return (
    <div className={`py-4 ${last ? "" : "border-b border-border"}`}>
      <h3 className="font-semibold text-foreground">{title}</h3>
      {subtitle && <p className="text-sm text-foreground">{subtitle}</p>}
      {meta && <p className="mt-0.5 text-xs text-muted">{meta}</p>}
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {description}
        </p>
      )}
      {tags && tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-pill-bg px-3 py-1 text-xs font-medium text-pill-text"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

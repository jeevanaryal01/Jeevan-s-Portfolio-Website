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
    <section id={id} className="scroll-mt-20 px-4 py-3 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="panel p-4 sm:p-6">
          <h2 className="section-heading">
            <span className="field-mark" />
            {title}
          </h2>
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
    <div className={`${last ? "" : "border-b border-border"}`}>
      <div className="row-hover py-4">
        <h3 className="font-semibold text-foreground">{title}</h3>
        {subtitle && <p className="text-sm text-foreground/90">{subtitle}</p>}
        {meta && (
          <p className="mt-0.5 font-mono text-xs text-muted-dim">{meta}</p>
        )}
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {description}
          </p>
        )}
        {tags && tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag} className="tag px-2.5 py-1 text-foreground/80">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

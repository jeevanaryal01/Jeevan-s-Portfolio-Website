"use client";

import { useHighlights } from "./HighlightStore";
import MarkerButton from "./MarkerButton";

export type EntryData = {
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  description?: string;
  tags?: string[];
  kind: string;
};

export default function Entry({ data }: { data: EntryData }) {
  const { has } = useHighlights();
  const marked = has(data.id);

  return (
    <article className={`entry py-6 ${marked ? "is-marked" : ""}`}>
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          <h3 className="headline text-xl sm:text-2xl">
            <span className="mark">{data.title}</span>
          </h3>
          {data.subtitle && (
            <p className="mt-1.5 text-sm font-medium text-ink">{data.subtitle}</p>
          )}
          {data.meta && (
            <p className="mt-1 font-mono text-[0.6875rem] tracking-wide text-ash-dim">
              {data.meta}
            </p>
          )}
          {data.description && (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ash">
              {data.description}
            </p>
          )}
          {data.tags && data.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {data.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-rule px-2.5 py-1 font-mono text-[0.6875rem] text-ash"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <MarkerButton
          item={{ id: data.id, label: data.title, kind: data.kind }}
        />
      </div>
    </article>
  );
}

import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "paper",
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
  tone?: "paper" | "deep";
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 ${
        tone === "deep" ? "bg-paper-deep" : "bg-paper"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-12">
          <div className="md:sticky md:top-24 md:self-start">
            <p className="label">{eyebrow}</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">{title}</h2>
            {intro && (
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
                {intro}
              </p>
            )}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

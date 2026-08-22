"use client";

import { useEffect, useState } from "react";
import { useHighlights } from "./HighlightStore";
import { ArrowIcon } from "./Icons";

export default function ConnectPill() {
  const { items } = useHighlights();
  const [atConnect, setAtConnect] = useState(false);
  const count = items.length;

  // Stay out of the way once the reader has reached the connect section.
  useEffect(() => {
    const target = document.getElementById("connect");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAtConnect(entry.isIntersecting),
      { rootMargin: "-20% 0px -20% 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (count === 0 || atConnect) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-6">
      <a
        href="#connect"
        className="pill-in btn btn-solid pointer-events-auto shadow-[0_8px_30px_rgba(23,23,26,0.25)]"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow text-[0.6875rem] font-bold text-ink">
          {count}
        </span>
        {count === 1 ? "highlight — send it" : "highlights — send them"}
        <ArrowIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

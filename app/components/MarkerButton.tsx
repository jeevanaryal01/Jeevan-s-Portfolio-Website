"use client";

import { useEffect, useState } from "react";
import { useHighlights, type Highlight } from "./HighlightStore";
import { MarkerIcon } from "./Icons";

export default function MarkerButton({ item }: { item: Highlight }) {
  const { has, toggle } = useHighlights();
  const [popping, setPopping] = useState(false);
  const marked = has(item.id);

  useEffect(() => {
    if (!popping) return;
    const id = window.setTimeout(() => setPopping(false), 340);
    return () => window.clearTimeout(id);
  }, [popping]);

  return (
    <button
      type="button"
      aria-pressed={marked}
      aria-label={
        marked ? `Remove highlight on ${item.label}` : `Highlight ${item.label}`
      }
      title={marked ? "Remove highlight" : "Highlight this"}
      onClick={() => {
        toggle(item);
        setPopping(true);
      }}
      className={`marker ${popping ? "marker-pop" : ""}`}
    >
      <MarkerIcon className="h-3.5 w-3.5" />
    </button>
  );
}

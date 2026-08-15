type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
};

const CX = 300;
const CY = 210;

const NODES: Node[] = [
  { id: "about", label: "About", x: 108, y: 128, size: 12 },
  { id: "experience", label: "Experience", x: 92, y: 300, size: 13 },
  { id: "education", label: "Education", x: 232, y: 372, size: 12 },
  { id: "skills", label: "Skills", x: 420, y: 356, size: 14 },
  { id: "certifications", label: "Certifications", x: 502, y: 226, size: 12 },
  { id: "projects", label: "Projects", x: 458, y: 88, size: 13 },
  { id: "contact", label: "Contact", x: 268, y: 56, size: 12 },
];

const MESH: [string, string][] = [
  ["experience", "education"],
  ["education", "skills"],
  ["skills", "certifications"],
  ["projects", "contact"],
  ["about", "contact"],
];

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export default function NetworkGraph() {
  return (
    <section
      id="map"
      aria-label="Interactive site map"
      className="scroll-mt-20 px-4 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow">Link Analysis</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Every section is a connected node
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
          Select a node to jump there — this record maps the same way a
          threat-intel case file does.
        </p>
      </div>

      <div className="relative mx-auto mt-10 w-full max-w-2xl">
        <svg
          viewBox="0 0 600 420"
          className="h-auto w-full overflow-visible [&_.edge-line]:transition-opacity [&_.edge-line]:duration-200 has-[a:hover]:[&_.edge-line]:opacity-20 has-[a:focus]:[&_.edge-line]:opacity-20"
        >
          {/* faint secondary mesh — texture of a real link-analysis graph */}
          {MESH.map(([a, b]) => {
            const na = nodeById(a);
            const nb = nodeById(b);
            return (
              <line
                key={`${a}-${b}`}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="var(--border-strong)"
                strokeWidth="1"
                strokeDasharray="1 5"
                opacity="0.6"
              />
            );
          })}

          {/* primary edges from subject to each node */}
          {NODES.map((n) => (
            <line
              key={`edge-${n.id}`}
              className="edge-line"
              x1={CX}
              y1={CY}
              x2={n.x}
              y2={n.y}
              stroke="var(--border-strong)"
              strokeWidth="1.2"
            />
          ))}

          <a href="#top" aria-label="Back to top">
            <g className="node-visual cursor-pointer">
              <rect
                x={CX - 20}
                y={CY - 20}
                width="40"
                height="40"
                rx="4"
                fill="var(--panel-raised)"
                stroke="var(--signal)"
                strokeWidth="1.4"
              />
              <text
                x={CX}
                y={CY + 5}
                textAnchor="middle"
                className="pointer-events-none select-none fill-signal font-mono text-[13px] font-semibold"
              >
                JA
              </text>
            </g>
          </a>

          {NODES.map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-label={n.label} className="group">
              <line
                className="edge-hit edge-pulse transition-colors duration-200 group-hover:stroke-signal group-focus:stroke-signal"
                x1={CX}
                y1={CY}
                x2={n.x}
                y2={n.y}
                stroke="transparent"
                strokeWidth="10"
                strokeDasharray="4 8"
                fill="none"
              />
              <g className="node-visual cursor-pointer">
                <rect
                  x={n.x - n.size / 2}
                  y={n.y - n.size / 2}
                  width={n.size}
                  height={n.size}
                  rx="2"
                  fill="var(--panel)"
                  stroke="var(--border-strong)"
                  strokeWidth="1.2"
                  className="transition-colors duration-200 group-hover:stroke-signal group-focus:stroke-signal"
                />
                <rect
                  x={n.x - 1.5}
                  y={n.y - 1.5}
                  width="3"
                  height="3"
                  fill="var(--signal)"
                />
                <text
                  x={n.x}
                  y={n.y - n.size / 2 - 9}
                  textAnchor="middle"
                  paintOrder="stroke"
                  stroke="var(--background)"
                  strokeWidth="4"
                  className="node-label pointer-events-none select-none fill-muted font-mono text-[10px] font-medium uppercase tracking-wide"
                >
                  {n.label}
                </text>
              </g>
            </a>
          ))}
        </svg>
      </div>
    </section>
  );
}

type Planet = {
  id: string;
  name: string;
  section: string;
  rx: number;
  duration: number;
  beginOffset: number;
  size: number;
  colors: [string, string, string];
  ring?: boolean;
};

const CX = 300;
const CY = 300;
const RY_RATIO = 0.42;

const PLANETS: Planet[] = [
  {
    id: "about",
    name: "Mercury",
    section: "About",
    rx: 70,
    duration: 14,
    beginOffset: 2,
    size: 6,
    colors: ["#d8d3c9", "#a29c8f", "#4a463f"],
  },
  {
    id: "experience",
    name: "Venus",
    section: "Experience",
    rx: 105,
    duration: 19,
    beginOffset: 9,
    size: 9,
    colors: ["#ffe8b8", "#e0a95c", "#7a4d1c"],
  },
  {
    id: "education",
    name: "Mars",
    section: "Education",
    rx: 140,
    duration: 24,
    beginOffset: 4,
    size: 7.5,
    colors: ["#ff9d6b", "#c1440e", "#5c1c04"],
  },
  {
    id: "skills",
    name: "Earth",
    section: "Skills",
    rx: 175,
    duration: 29,
    beginOffset: 15,
    size: 10.5,
    colors: ["#7fd4ff", "#2c6bcf", "#0b1f4a"],
  },
  {
    id: "certifications",
    name: "Jupiter",
    section: "Certifications",
    rx: 210,
    duration: 34,
    beginOffset: 6,
    size: 14,
    colors: ["#f0d9b0", "#c99a5b", "#5c3d17"],
  },
  {
    id: "projects",
    name: "Saturn",
    section: "Projects",
    rx: 245,
    duration: 40,
    beginOffset: 20,
    size: 13,
    colors: ["#fff0c8", "#e3c16f", "#6b4f16"],
    ring: true,
  },
  {
    id: "contact",
    name: "Uranus",
    section: "Contact",
    rx: 280,
    duration: 46,
    beginOffset: 11,
    size: 10,
    colors: ["#d6faff", "#7fd9d9", "#265a5a"],
  },
];

function ellipsePath(cx: number, cy: number, rx: number, ry: number) {
  return `M ${cx + rx},${cy} A ${rx},${ry} 0 1,1 ${cx - rx},${cy} A ${rx},${ry} 0 1,1 ${cx + rx},${cy}`;
}

export default function SolarSystem() {
  return (
    <section aria-label="Interactive site map" className="px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          The Orbit
        </p>
        <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
          Every section has its own orbit
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
          Click a planet to travel there — Mercury for the quick intro, all the
          way out to Uranus to say hello.
        </p>
      </div>

      <div className="relative mx-auto mt-10 w-full max-w-[560px]">
        <svg viewBox="0 0 600 600" className="h-auto w-full overflow-visible">
          <defs>
            {PLANETS.map((p) => (
              <radialGradient
                key={p.id}
                id={`grad-${p.id}`}
                cx="35%"
                cy="30%"
                r="70%"
              >
                <stop offset="0%" stopColor={p.colors[0]} />
                <stop offset="55%" stopColor={p.colors[1]} />
                <stop offset="100%" stopColor={p.colors[2]} />
              </radialGradient>
            ))}
            <radialGradient id="grad-sun" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#fff3d6" />
              <stop offset="45%" stopColor="#ffb454" />
              <stop offset="100%" stopColor="#c9581a" />
            </radialGradient>
          </defs>

          <circle
            cx={CX}
            cy={CY}
            r={295}
            fill="none"
            stroke="rgba(94,224,255,0.08)"
            strokeWidth="1"
            strokeDasharray="2 10"
            className="slow-spin"
          />

          {PLANETS.map((p) => (
            <ellipse
              key={p.id}
              cx={CX}
              cy={CY}
              rx={p.rx}
              ry={p.rx * RY_RATIO}
              fill="none"
              stroke="rgba(148,197,255,0.16)"
              strokeWidth="1"
            />
          ))}

          <a href="#top" aria-label="Back to top">
            <circle cx={CX} cy={CY} r={22} fill="url(#grad-sun)" className="cursor-pointer">
              <animate
                attributeName="r"
                values="22;24;22"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
          </a>

          {PLANETS.map((p) => {
            const path = ellipsePath(CX, CY, p.rx, p.rx * RY_RATIO);
            return (
              <a key={p.id} href={`#${p.id}`} aria-label={`${p.section} (${p.name})`}>
                <g>
                  <animateMotion
                    dur={`${p.duration}s`}
                    repeatCount="indefinite"
                    path={path}
                    rotate="0"
                    begin={`-${p.beginOffset}s`}
                  />
                  <g className="planet-visual cursor-pointer">
                    {p.ring && (
                      <ellipse
                        rx={p.size * 1.9}
                        ry={p.size * 0.55}
                        fill="none"
                        stroke={p.colors[1]}
                        strokeWidth="1.4"
                        opacity="0.75"
                      />
                    )}
                    <circle
                      r={p.size}
                      fill={`url(#grad-${p.id})`}
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="0.5"
                    />
                    <text
                      y={-(p.size + 9)}
                      textAnchor="middle"
                      className="planet-label pointer-events-none select-none fill-accent text-[10px] font-semibold tracking-wide"
                    >
                      {p.section}
                    </text>
                  </g>
                </g>
              </a>
            );
          })}
        </svg>
      </div>
    </section>
  );
}

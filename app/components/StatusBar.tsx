"use client";

import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-AU", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Australia/Sydney",
        }).format(new Date())
      );
    update();
    const id = setInterval(update, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="border-b border-border bg-background-deep">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-1.5 text-[0.6875rem] font-mono tracking-wide text-muted-dim sm:px-6">
        <span
          className="inline-flex items-center gap-1.5 border border-border-strong px-1.5 py-0.5 text-muted"
          title="Traffic Light Protocol: this page may be shared without restriction"
        >
          TLP:CLEAR
        </span>
        <span className="hidden sm:inline">
          Sydney, AU {time ?? "--:--"} AEST
        </span>
        <span className="inline-flex items-center gap-1.5 text-muted">
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#5ad68c]" />
          OPEN TO WORK
        </span>
      </div>
    </div>
  );
}

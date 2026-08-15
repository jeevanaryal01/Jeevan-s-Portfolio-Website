export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted-dim sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Jeevan Aryal. Record ends.</p>
        <p>
          built with <span className="text-signal">Next.js</span> &amp;{" "}
          <span className="text-signal">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}

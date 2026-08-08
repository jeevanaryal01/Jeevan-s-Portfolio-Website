export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Jeevan Aryal. All rights reserved.</p>
        <p>
          built with <span className="text-accent">Next.js</span> &amp;{" "}
          <span className="text-accent">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}

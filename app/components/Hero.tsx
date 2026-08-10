import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-20 flex flex-col items-center px-4 pt-20 pb-10 text-center sm:pt-28"
    >
      <div className="relative">
        <div className="sun-halo absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-sun via-sun-glow to-transparent blur-xl" />
        <div className="drift h-32 w-32 overflow-hidden rounded-full border-[3px] border-sun/70 bg-surface-solid p-0.5 sm:h-36 sm:w-36">
          <Image
            src="/profile-photo.png"
            alt="Jeevan Aryal"
            width={144}
            height={144}
            className="h-full w-full rounded-full object-cover"
            priority
          />
        </div>
      </div>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Jeevan Aryal
      </h1>
      <p className="mt-2 text-base text-accent sm:text-lg">IT Analyst</p>
      <p className="mt-1 text-sm text-muted">Sydney, New South Wales, Australia</p>
      <p className="mt-1 text-sm font-medium text-sun">NEXA Group</p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <span className="pulse-badge rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
          Open to work
        </span>
        <span className="text-sm text-muted">222 connections</span>
      </div>

      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <a
          href="#about"
          className="rounded-full bg-gradient-to-r from-sun-glow to-sun px-6 py-2.5 text-sm font-semibold text-background shadow-[0_0_20px_rgba(255,138,61,0.35)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,138,61,0.5)] active:translate-y-0"
        >
          Explore the orbit
        </a>
        <a
          href="#contact"
          className="rounded-full border border-accent/60 px-6 py-2.5 text-sm font-semibold text-accent transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-[0_0_20px_rgba(94,224,255,0.25)] active:translate-y-0"
        >
          Contact
        </a>
      </div>
    </section>
  );
}

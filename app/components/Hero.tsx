import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="px-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="card overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-accent to-sky-400 sm:h-40" />

          <div className="px-6 pb-6">
            <div className="-mt-16 h-32 w-32 overflow-hidden rounded-full border-4 border-surface bg-surface sm:h-36 sm:w-36">
              <Image
                src="/profile-photo.png"
                alt="Jeevan Aryal"
                width={144}
                height={144}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="mt-4">
              <h1 className="text-2xl font-semibold text-foreground">
                Jeevan Aryal
              </h1>
              <p className="mt-1 text-base text-foreground">IT Analyst</p>
              <p className="mt-1 text-sm text-muted">
                Sydney, New South Wales, Australia
              </p>
              <p className="mt-1 text-sm font-medium text-accent">
                NEXA Group
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                  Open to work
                </span>
                <span className="text-sm text-muted">222 connections</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  View experience
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-accent px-5 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { EMAIL, GITHUB, LINKEDIN, LOCATION } from "../lib/contact";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="px-6 pb-12 pt-4 sm:px-10 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-0">
          <div className="order-3 md:order-none md:col-start-1 md:col-end-4 md:row-start-1 md:self-center">
            <p className="max-w-xs text-[0.9375rem] leading-relaxed text-ash">
              I work where cyber security, threat intelligence and AI systems
              meet — turning noisy alerts and messy systems into decisions
              people can act on.
            </p>
            <a
              href="#about"
              className="mt-4 inline-flex items-center gap-1.5 border-b-2 border-ink pb-0.5 text-sm font-bold text-ink transition-colors hover:border-yellow-deep hover:text-yellow-deep"
            >
              Read more
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="order-1 md:order-none md:col-start-4 md:col-end-9 md:row-start-1">
            <div className="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[22rem]">
              <div className="absolute inset-0 rounded-full bg-yellow" />
              <div className="absolute bottom-0 left-0 h-[84%] w-[84%] overflow-hidden rounded-full">
                <Image
                  src="/profile-photo.png"
                  alt="Jeevan Aryal"
                  width={272}
                  height={222}
                  priority
                  className="h-full w-full scale-[1.09] object-cover grayscale contrast-[1.08]"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 order-2 md:order-none md:col-start-8 md:col-end-13 md:row-start-1 md:self-center">
            <h1 className="display text-[3.4rem] leading-[0.84] text-ink sm:text-7xl lg:text-[6.5rem]">
              signal
              <br />
              over
              <br />
              <span className="mark mark-thick mark-auto">noise</span>.
            </h1>
            <p className="label mt-6">Jeevan Aryal — IT Analyst</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label="Jeevan Aryal on LinkedIn"
            >
              <LinkedInIcon className="h-[1.05rem] w-[1.05rem]" />
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label="Jeevan Aryal on GitHub"
            >
              <GitHubIcon className="h-[1.05rem] w-[1.05rem]" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="icon-btn"
              aria-label={`Email ${EMAIL}`}
            >
              <MailIcon className="h-[1.05rem] w-[1.05rem]" />
            </a>
            <a
              href="#connect"
              className="ml-1 text-sm font-bold text-ink transition-colors hover:text-yellow-deep"
            >
              Let&rsquo;s connect
            </a>
          </div>
          <p className="label">{LOCATION}</p>
        </div>
      </div>
    </section>
  );
}

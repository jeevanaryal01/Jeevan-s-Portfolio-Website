import { EMAIL, GITHUB, LINKEDIN, LOCATION } from "../lib/contact";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-paper px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="display text-xl text-ink">
          jeevan<span className="text-yellow-deep">.</span>
        </p>

        <div className="flex items-center gap-3">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="icon-btn h-10 w-10"
            aria-label="Jeevan Aryal on LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="icon-btn h-10 w-10"
            aria-label="Jeevan Aryal on GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="icon-btn h-10 w-10"
            aria-label={`Email ${EMAIL}`}
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>

        <p className="label">{LOCATION}</p>
      </div>
    </footer>
  );
}

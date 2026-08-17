import { socials } from "../data/socials.js";
import { SocialLink } from "./SocialIcon.jsx";

const emailHref = socials.find((s) => s.id === "email")?.href;

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-(--nav-h)">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <h2 className="font-mono text-2xl font-semibold text-text mb-6">Contact</h2>
        <div className="flex flex-col items-center gap-6">
          <a
            href={emailHref}
            className="inline-flex items-center rounded-md border border-surface1 bg-base px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-surface2 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Say Hello
          </a>
          <div data-socials className="flex items-center gap-4">
            {socials.map((s) => (
              <SocialLink key={s.id} social={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

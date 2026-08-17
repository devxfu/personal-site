import { socials } from "../data/socials.js";
import { SocialLink } from "./SocialIcon.jsx";
import useSocialsVisible from "../hooks/useSocialsVisible.js";

export default function SocialRail() {
  const socialsVisible = useSocialsVisible();

  return (
    <div
      className={`hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 transition-all duration-300 ${
        socialsVisible
          ? "pointer-events-none translate-x-[calc(100%+1.5rem)] opacity-0"
          : "translate-x-0 opacity-100"
      }`}
    >
      {socials.map((s) => (
        <SocialLink key={s.id} social={s} className="w-5 h-5" />
      ))}
    </div>
  );
}

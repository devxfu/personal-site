import { socials } from "../data/socials.js";
import { SocialLink } from "./SocialIcon.jsx"

export default function SocialRail() {
  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4">
      {socials.map((s) => (
          <SocialLink key={s.id} social={s} className="w-5 h-5" /> 
      ))}
    </div>
  );
}

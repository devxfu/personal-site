import { socials } from "../data/socials.js";
import React from "react";
import { SocialLink } from "./SocialIcon.jsx";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center pt-(--nav-h) px-4"
    >
      <h1 className="font-mono text-5xl font-bold text-accent mb-4">
        Alex Fu
      </h1>
      <p className="text-subtext0 text-lg mb-2">
        Math & Phys @ Yale | CO 2030
      </p>
      <p className="text-subtext0 text-sm mb-6 flex items-center gap-1.5">
       <svg 
          viewBox="0 0 24 24" 
          width="16" 
          height="16" 
          fill="currentColor"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        New Haven, CT 
      </p>
      <div className="flex items-center gap-1 mb-8">
        {socials.map((s, i) => (
          <React.Fragment key={s.id}> 
              <SocialLink key={s.id} social={s} className="w-4 h-4" />
            {i < socials.length - 1 && (
              <span className="text-overlay1 mx-0.5 select-none">·</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <span className="animate-bounce motion-reduce:animate-none text-overlay1 text-2xl">
        ↓
      </span>
    </section>
  );
}

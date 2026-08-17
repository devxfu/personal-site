import { skills } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-(--nav-h)">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <h2 className="font-mono text-2xl font-semibold text-text">Skills</h2>
        <div className="mt-6 space-y-6">
          {Object.entries(skills).map(([key, group]) => (
            <div key={key} className="flex flex-col items-center gap-2 sm:mx-auto sm:flex-row sm:max-w-3xl sm:items-start sm:gap-4 md:translate-x-35">
              <h3 className="font-mono text-sm text-subtext1 sm:w-24 sm:shrink-0">{group.name}</h3>
              <ul className="flex flex-wrap gap-2 sm:flex-1">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-surface1 px-3 py-1 text-sm text-subtext0 transition-colors hover:border-surface2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

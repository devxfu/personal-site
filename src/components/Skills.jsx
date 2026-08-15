import { skills } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-(--nav-h)">
      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <h2 className="font-mono text-2xl font-semibold text-text">Skills</h2>
        <div className="mt-6 space-y-6">
          {Object.entries(skills).map(([key, group]) => (
            <div key={key}>
              <h3 className="font-mono text-sm text-subtext1">{group.name}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
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

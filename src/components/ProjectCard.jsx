import { Tag } from "lucide-react";

const tagColors = [
  "text-mauve",
  "text-blue",
  "text-green",
  "text-red",
  "text-yellow",
  "text-peach",
];

export default function ProjectCard({ project }) {
  return (
    <article className="flex w-full flex-col gap-3 rounded-xl border border-surface1 bg-base p-5 transition-colors hover:border-surface2 md:w-[calc(50%-0.75rem)] lg:w-[calc(33.3333%-1rem)]">
      <h3 className="font-mono text-lg font-semibold text-accent">{project.title}</h3>
      <p className="text-sm leading-relaxed text-subtext0">{project.description}</p>
      <ul className="flex flex-wrap gap-x-3 gap-y-1">
        {project.tags.map((tag, i) => (
          <li
            key={tag}
            className={`flex items-center gap-1 font-mono text-xs ${tagColors[i % tagColors.length]}`}
          >
            <Tag className="h-3 w-3" />
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex gap-3 pt-1">
        <a
          href={project.links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-surface1 px-3 py-1 font-mono text-xs text-subtext0 transition-colors hover:border-surface2 hover:text-text focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
        >
          Repo
        </a>
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-surface1 px-3 py-1 font-mono text-xs text-subtext0 transition-colors hover:border-surface2 hover:text-text  focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
          >
            Live
          </a>
        )}
      </div>
    </article>
  );
}

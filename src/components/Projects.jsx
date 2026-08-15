import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-(--nav-h)">
      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <h2 className="font-mono text-2xl font-semibold text-text">Projects</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

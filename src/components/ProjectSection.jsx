
const projects = [
  {
    name: "FaceHook",
    category: "Social Media Web Application",
    description:
      "Implemented authentication, profile management, avatar uploads, and a social feed with likes and comments.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/BIJOY-HASAN/Facehook",
  },
  {
    name: "EcoVista",
    category: "Weather Forecast Web Application",
    description:
      "Built a city-based weather lookup using location coordinates and a weather API.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Weather API",
    ],
    github: "https://github.com/BIJOY-HASAN/Ecovista",
  },
  {
    name: "Docucraft",
    category: "Documentation Website",
    description:
      "Created documentation pages with sidebar navigation, search, and a responsive browsing interface.",
    technologies: ["Next.js", "React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/BIJOY-HASAN/docucraft",
    live: "https://docucraft-jet.vercel.app",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        My Work
      </p>

      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        Featured Projects
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-slate-300">
        A selection of web applications I have built using modern
        frontend technologies.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
          >
            <h3 className="text-xl font-bold">{project.name}</h3>

            <p className="mt-2 text-sm text-cyan-400">
              {project.category}
            </p>

            <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                GitHub ↗
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

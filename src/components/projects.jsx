const projects = [
  {
    name: "FaceHook",
    subtitle: "Social Media Web Application",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    features: [
      "Implemented login and sign-up flows, profile management and editing, and avatar uploads.",
      "Built post creation and feed features with likes and comments.",
    ],
    github: "https://github.com/BIJOY-HASAN/Facehook",
  },
  {
    name: "Docucraft",
    subtitle: "Documentation Website",
    technologies: ["Next.js", "React.js", "JavaScript", "Tailwind CSS"],
    features: [
      "Created documentation pages with sidebar navigation and search functionality.",
      "Built a responsive interface for browsing documentation.",
    ],
    github: "https://github.com/BIJOY-HASAN/docucraft",
    live: "https://docucraft-jet.vercel.app",
  },
  {
    name: "Ecovista",
    subtitle: "Weather Forecast Web Application",
    technologies: [
      "Next.js",
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Weather API",
    ],
    features: [
      "Built a city-based weather lookup using location coordinates and a weather API.",
    ],
    github: "https://github.com/BIJOY-HASAN/Ecovista",
  },
];

export default function Projects() {
  return (
    <section className="mt-6">
      <h2 className="border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wide text-slate-900">
        Projects
      </h2>

      <div className="mt-4 space-y-5">
        {projects.map((project) => (
          <article key={project.name}>
            <h3 className="text-base font-bold text-slate-900">
              {project.name}
              <span className="font-normal text-slate-900">
                {" "}— {project.subtitle}
              </span>
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-900">
              <span className="font-semibold">Technologies:</span>{" "}
              {project.technologies.join(" • ")}
            </p>

            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-900">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-900 underline"
              >
                GitHub Repository
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-900 underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
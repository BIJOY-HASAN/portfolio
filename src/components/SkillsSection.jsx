
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Axios",
  "Git",
  "GitHub",
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        My Expertise
      </p>

      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        Technical Skills
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-slate-300">
        Technologies and tools I use to build modern web applications.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

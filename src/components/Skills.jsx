
const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "API & Database",
    skills: [
      "REST API",
      "Axios",
      "JSON",
      "MongoDB",
    ],
  },
  {
    title: "State Management",
    skills: [
      "Context API",
      "Redux",
    ],
  },
  {
    title: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section className="mt-6">
      <h2 className="border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wide text-slate-800">
        Technical Skills
      </h2>

      <div className="mt-4 space-y-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold text-slate-800">
              {group.title}
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-900">
              {group.skills.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

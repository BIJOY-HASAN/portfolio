
const educationList = [
  {
    degree: "MSc in Computer Science & Engineering (CSE)",
    institution: "Jahangirnagar University",
    result: "CGPA: 3.38/4.00",
    year: "2026",
  },
  {
    degree: "BSc in Computer Science & Engineering (CSE)",
    institution: "Dhaka City College",
    result: "CGPA: 3.09/4.00",
    year: "2021",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Ghatail Cantonment Public School and College",
    result: "GPA: 5.00/5.00",
    year: "2017",
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Suti VM Pilot Model High School",
    result: "GPA: 5.00/5.00",
    year: "2015",
  },
];

export default function Education() {
  return (
    <section className="mt-6">
      <h2 className="border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wide text-slate-900">
        Education
      </h2>

      <div className="mt-4 space-y-4">
        {educationList.map((education) => (
          <div key={education.degree}>
            <h3 className="text-sm font-semibold text-slate-900">
              {education.degree}
            </h3>

            <p className="mt-1 text-sm text-slate-900">
              {education.institution}
            </p>

            <p className="mt-1 text-sm text-slate-900">
              {education.result} <span>•</span> {education.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

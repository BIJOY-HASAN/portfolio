import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />


      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Frontend Developer
        </p>

        
<h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
  Hi, I'm{" "}
  <span className="animated-name">MD BIJOY</span>
</h1>


        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I build responsive and user-friendly web applications
          using React.js, Next.js, and Tailwind CSS.
        </p>

      
<div className="mt-8 flex flex-wrap gap-4">
  <a
    href="#projects"
    className="w-fit rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
  >
    View Projects ↗
  </a>

  <a
    href="#contact"
    className="w-fit rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
  >
    Contact Me
  </a>
</div>

      </section>

     <ProjectSection />
     <SkillsSection />
     <ContactSection />

     <Footer />
    </main>
  );
}


export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        Get In Touch
      </p>

      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        Let's Connect
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-slate-300">
        Have a project idea or an opportunity to discuss?
        Feel free to connect with me.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://github.com/BIJOY-HASAN"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-700 px-5 py-3 font-medium transition hover:border-cyan-400 hover:text-cyan-400"
        >
          GitHub ↗
        </a>

        <a
          href="mailto:your-email@example.com"
          className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          bijoyhasan.dev@gmail.com
        </a>
      </div>
    </section>
  );
}

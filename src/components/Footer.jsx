
export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} MD BIJOY. All rights reserved.
        </p>

        <a
          href="#home"
          className="w-fit transition hover:text-cyan-400"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}


export default function Header() {
  return (
    <header className="border-b-2 border-slate-800 pb-5">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        MD BIJOY
      </h1>

      <p className="mt-2 text-lg font-semibold text-blue-700">
        Frontend Developer
      </p>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-900">
        <span>bijoyhasan.dev@gmail.com</span>
        <span>01753845567</span>
        <span>Bangladesh</span>
      </div>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <a
          href="https://github.com/"
          className="text-blue-700 underline"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/"
          className="text-blue-700 underline"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}

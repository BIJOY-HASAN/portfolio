
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
      <a
        href="#home"
        className="w-fit text-xl font-bold text-cyan-400"
      >
        Portfolio
      </a>

      <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition hover:text-cyan-400"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

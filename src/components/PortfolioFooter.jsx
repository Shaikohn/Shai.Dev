import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/useLanguage";

export default function PortfolioFooter() {
  const { language } = useLanguage();
  const es = language === "es";
  return (
    <footer className="border-t border-white/10 bg-[#080d18] px-6 py-9 text-sm text-zinc-500">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="font-medium text-zinc-300">Shai.Dev</p><p className="mt-1">© 2026 Shai Kohn</p></div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label={es ? "Enlaces del pie" : "Footer links"}>
          <Link to="/#projects" className="hover:text-white">{es ? "Proyectos" : "Projects"}</Link>
          <Link to="/games" className="hover:text-white">Games</Link>
          <a href="mailto:shai.kohn.dev@gmail.com" className="hover:text-white">Email</a>
          <a href="https://github.com/Shaikohn" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/shai-kohn/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}

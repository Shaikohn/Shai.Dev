import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLanguage } from "../i18n/useLanguage";

export default function GamesHeader() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        <div className="flex items-center justify-between rounded-full border border-amber-200/20 bg-[#1a0e18]/78 px-4 py-2.5 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-xl sm:px-5">
          <Link to="/games" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-1.5">
              <img src={logo} alt="Shai.Dev Games" className="h-full w-full object-contain" />
            </div>
            <span className="font-semibold tracking-[0.01em] text-amber-50">Shai.Dev <span className="text-amber-300">Games</span></span>
          </Link>
          <div className="hidden items-center gap-3 md:flex">
            <Link to="/" className="text-sm text-zinc-400 transition-colors hover:text-white">{t.nav.portfolio}</Link>
            <div className="flex rounded-full border border-white/10 bg-black/20 p-0.5" aria-label="Language">
              {["es", "en"].map((code) => <button key={code} type="button" onClick={() => setLanguage(code)} aria-pressed={language === code} className={`rounded-full px-2.5 py-1 text-[11px] uppercase ${language === code ? "bg-amber-100 text-[#100b13]" : "text-zinc-400"}`}>{code}</button>)}
            </div>
          </div>
          <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Menu">{open ? "×" : "☰"}</button>
        </div>
        {open && <nav className="mt-2 flex items-center justify-between rounded-2xl border border-white/10 bg-[#1a0e18]/95 p-4 text-sm backdrop-blur-md md:hidden">
          <Link to="/" className="text-zinc-300">{t.nav.portfolio}</Link>
          <div className="flex gap-2">{["es", "en"].map((code) => <button key={code} type="button" onClick={() => setLanguage(code)} className={`rounded-full px-3 py-1 uppercase ${language === code ? "bg-amber-100 text-[#100b13]" : "border border-white/10 text-zinc-400"}`}>{code}</button>)}</div>
        </nav>}
      </div>
    </header>
  );
}

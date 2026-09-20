import { Link } from "react-router-dom";
import PortfolioFooter from "../components/PortfolioFooter";
import { games } from "../data/games";
import { useLanguage } from "../i18n/useLanguage";
import { usePageMetadata } from "../hooks/usePageMetadata";

export default function Legal() {
  const { language, setLanguage } = useLanguage();
  const es = language === "es";
  usePageMetadata(es ? "Legal y privacidad — Shai.Dev" : "Legal and privacy — Shai.Dev", es ? "Políticas de privacidad de los juegos de Shai.Dev." : "Privacy policies for Shai.Dev games.");
  return <main className="min-h-screen bg-[#0a0f1c] text-zinc-100">
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <div className="flex items-center justify-between"><Link to="/" className="text-sm text-zinc-400 hover:text-white">← {es ? "Volver al portfolio" : "Back to portfolio"}</Link><div className="flex rounded-full border border-white/10 p-0.5">{["es", "en"].map((code) => <button key={code} onClick={() => setLanguage(code)} className={`cursor-pointer rounded-full px-3 py-1 text-xs uppercase ${language === code ? "bg-white text-[#0a0f1c]" : "text-zinc-500"}`}>{code}</button>)}</div></div>
      <p className="mt-20 text-xs uppercase tracking-[.28em] text-sky-400">Shai.Dev</p><h1 className="mt-4 text-4xl font-semibold md:text-6xl">{es ? "Legal y privacidad" : "Legal and privacy"}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">{es ? "Consultá cómo cada juego procesa y protege la información necesaria para ofrecer sus funciones multijugador." : "See how each game processes and protects the information required to provide its multiplayer features."}</p>
      <div className="mt-14 divide-y divide-white/10 border-y border-white/10">{games.map((game) => <Link key={game.id} to={game.links.privacy} className="group flex items-center justify-between gap-5 py-7"><div><h2 className="text-xl font-medium text-white">{game.title}</h2><p className="mt-2 text-sm text-zinc-500">{es ? "Política de privacidad en español e inglés" : "Privacy policy in English and Spanish"}</p></div><span className="text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:text-white">→</span></Link>)}</div>
    </section><PortfolioFooter />
  </main>;
}

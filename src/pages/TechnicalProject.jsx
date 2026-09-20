import { Link, Navigate, useParams } from "react-router-dom";
import { getGameById, getGameImages } from "../data/games";
import { useLanguage } from "../i18n/useLanguage";
import { usePageMetadata } from "../hooks/usePageMetadata";
import PortfolioFooter from "../components/PortfolioFooter";

export default function TechnicalProject() {
  const { gameId } = useParams();
  const game = getGameById(gameId);
  const { language, setLanguage, t } = useLanguage();
  usePageMetadata(game ? `${game.title} — ${t.technical.eyebrow}` : "Project not found", game?.professional.summary[language] ?? "Shai.Dev portfolio");
  if (!game) return <Navigate to="/" replace />;

  const technical = game.professional.caseStudy;
  const images = getGameImages(game, language);
  const screenshot = images[1] ?? game.cover;

  return (
    <main className="min-h-screen overflow-hidden bg-[#080d18] text-zinc-100">
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-16">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"><span aria-hidden="true">←</span>{t.technical.back}</Link>
        <div className="flex rounded-full border border-white/10 bg-white/[.03] p-0.5" aria-label="Language">
          {["es", "en"].map((code) => <button key={code} type="button" onClick={() => setLanguage(code)} aria-pressed={language === code} className={`cursor-pointer rounded-full px-3 py-1 text-[11px] uppercase transition-colors ${language === code ? "bg-white text-[#080d18]" : "text-zinc-500 hover:text-white"}`}>{code}</button>)}
        </div>
      </header>

      <article>
        <section className="relative border-b border-white/10 px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20 lg:px-16">
          <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle at 78% 32%, ${game.theme.glow}, transparent 32%)` }} />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
            <div>
              <p className="text-xs uppercase tracking-[.3em]" style={{ color: game.theme.accent }}>{t.technical.eyebrow}</p>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-7xl">{game.title}</h1>
              <p className="mt-6 text-sm text-zinc-500">{game.professional.meta[language]}</p>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-300">{game.professional.summary[language]}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to={`/games/${game.id}`} className="rounded-full px-6 py-3 text-sm font-semibold text-[#080d18] transition-transform hover:scale-[1.03]" style={{ backgroundColor: game.theme.accent }}>{t.technical.playerPage} →</Link>
                {game.links.store && <a href={game.links.store} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/10">Google Play ↗</a>}
              </div>
            </div>
            <div className="relative mx-auto flex w-full max-w-[390px] justify-center">
              <div className="absolute inset-10 blur-3xl" style={{ backgroundColor: game.theme.glow }} />
              <img src={screenshot} alt={`${game.title} screenshot`} className="relative max-h-[610px] rounded-[32px] border border-white/10 object-contain shadow-[0_35px_100px_rgba(0,0,0,.55)]" />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[.72fr_1.28fr] lg:px-16 lg:py-28">
          <div><p className="text-xs uppercase tracking-[.25em] text-zinc-500">{t.technical.overview}</p><h2 className="mt-4 text-3xl font-semibold text-white">{t.technical.responsibility}</h2></div>
          <div className="max-w-3xl"><p className="text-xl leading-9 text-zinc-300">{game.professional.contribution[language]}</p><div className="mt-8 border-l-2 pl-5" style={{ borderColor: game.theme.accent }}><p className="text-xs uppercase tracking-[.2em] text-zinc-500">{t.technical.scope}</p><p className="mt-2 leading-7 text-zinc-400">{game.professional.ownership[language]}</p></div></div>
        </section>

        <section className="border-y border-white/10 bg-white/[.025] px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div><p className="text-xs uppercase tracking-[.25em] text-zinc-500">01</p><h2 className="mt-4 text-3xl font-semibold text-white">{t.technical.challenge}</h2><p className="mt-6 text-lg leading-8 text-zinc-300">{technical.challenge[language]}</p></div>
            <div><p className="text-xs uppercase tracking-[.25em] text-zinc-500">02</p><h2 className="mt-4 text-3xl font-semibold text-white">{t.technical.architecture}</h2><ul className="mt-6 space-y-4">{technical.architecture[language].map((item) => <li key={item} className="flex gap-4 border-b border-white/10 pb-4 leading-7 text-zinc-300"><span style={{ color: game.theme.accent }}>→</span>{item}</li>)}</ul></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <div><p className="text-xs uppercase tracking-[.25em] text-zinc-500">03</p><h2 className="mt-4 text-3xl font-semibold text-white">{t.technical.decisions}</h2></div>
            <ol className="space-y-8">{technical.decisions[language].map((decision, index) => <li key={decision} className="grid grid-cols-[42px_1fr] gap-5 border-b border-white/10 pb-8"><span className="text-sm font-semibold" style={{ color: game.theme.accent }}>0{index + 1}</span><p className="text-lg leading-8 text-zinc-300">{decision}</p></li>)}</ol>
          </div>
        </section>

        <section className="border-y border-white/10 px-6 py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs uppercase tracking-[.25em] text-zinc-500">04</p><h2 className="mt-4 text-3xl font-semibold text-white">{t.technical.outcomes}</h2></div><ul className="flex flex-wrap gap-2" aria-label={t.technical.stack}>{game.professional.technologies.map((technology) => <li key={technology} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-zinc-400">{technology}</li>)}</ul></div><div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">{technical.outcomes[language].map((outcome, index) => <div key={outcome} className="bg-[#080d18] p-7"><span className="text-xs" style={{ color: game.theme.accent }}>0{index + 1}</span><p className="mt-4 leading-7 text-zinc-300">{outcome}</p></div>)}</div></div>
        </section>

        <section className="px-6 py-20 text-center md:px-10 lg:px-16 lg:py-28"><p className="text-xs uppercase tracking-[.25em] text-zinc-500">{game.title}</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl">{game.professional.ownership[language]}</h2><Link to="/#projects" className="mt-8 inline-flex text-sm font-medium hover:text-white" style={{ color: game.theme.accent }}>← {t.technical.back}</Link></section>
      </article>
      <PortfolioFooter />
    </main>
  );
}

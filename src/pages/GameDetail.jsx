import { Link, Navigate, useParams } from "react-router-dom";
import GamesHeader from "../components/GamesHeader";
import GameGallery from "../components/games/GameGallery";
import GamesFooter from "../components/games/GamesFooter";
import { games, getGameById, getGameImages } from "../data/games";
import { useLanguage } from "../i18n/useLanguage";
import { usePageMetadata } from "../hooks/usePageMetadata";

export default function GameDetail() {
  const { gameId } = useParams();
  const game = getGameById(gameId);
  const { language, t } = useLanguage();
  usePageMetadata(game ? `${game.title} — Shai.Dev Games` : "Game not found", game?.player.description[language] ?? "Shai.Dev Games");
  if (!game) return <Navigate to="/games" replace />;

  const relatedGames = games.filter((candidate) => candidate.id !== game.id);
  const intro = game.player.intro?.[language] ?? [];
  const steps = game.player.howItWorks?.[language] ?? [];
  const modes = game.player.modes?.[language] ?? [];
  const facts = [...(game.player.featureList?.[language] ?? []), ...(game.player.extraInfo?.[language] ?? [])];
  const disclaimer = game.player.disclaimer?.[language];
  const closing = game.player.closing?.[language];
  const gameImages = getGameImages(game, language);
  const heroScreenshot = gameImages[1];
  const themeStyle = { "--accent": game.theme.accent, "--accent-alt": game.theme.accentAlt, "--surface": game.theme.surface };

  return (
    <main className="min-h-screen overflow-hidden bg-[#100b13] text-zinc-100" style={themeStyle}>
      <GamesHeader />

      <section className="relative px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 78% 25%, ${game.theme.glow}, transparent 34%), radial-gradient(circle at 15% 70%, ${game.theme.accentAlt}18, transparent 30%)` }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:px-10 lg:grid-cols-[1.08fr_.92fr] lg:px-16">
          <div>
            <Link to="/games" className="mb-9 inline-flex text-sm text-zinc-400 hover:text-white">← {t.games.back}</Link>
            <div className="mb-5 flex flex-wrap items-center gap-3"><span className="text-xs uppercase tracking-[.24em]" style={{ color: game.theme.accent }}>{game.genre[language]}</span><span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-zinc-300">{game.status[language]}</span></div>
            <img src={game.cover} alt="" className="mb-7 max-h-40 max-w-[300px] object-contain object-left drop-shadow-[0_18px_28px_rgba(0,0,0,.45)] md:max-h-48" />
            <h1 className="sr-only">{game.title}</h1>
            <p className="max-w-2xl text-2xl font-medium leading-9 text-white md:text-3xl md:leading-10">{game.player.tagline[language]}</p>
            <p className="mt-5 max-w-2xl leading-8 text-zinc-400">{game.player.description[language]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {game.links.store && <a href={game.links.store} target="_blank" rel="noopener noreferrer" className="rounded-full px-6 py-3 text-sm font-semibold text-[#090909] transition-transform hover:scale-[1.03]" style={{ backgroundColor: game.theme.accent }}>{t.games.store}</a>}
              {game.availability === "testing" && <span className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-300">{t.games.testing}</span>}
              <Link to={`/games/${game.id}/support`} className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-300 hover:bg-white/10">{t.games.support}</Link>
            </div>
          </div>

          {heroScreenshot && <div className="relative mx-auto w-full max-w-[360px]"><div className="absolute inset-6 blur-3xl" style={{ backgroundColor: game.theme.glow }} /><img src={heroScreenshot} alt={`${game.title} — 1`} className="relative max-h-[650px] w-full rounded-[32px] border border-white/10 object-cover shadow-[0_35px_100px_rgba(0,0,0,.5)]" /></div>}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/15 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-5 md:px-10 lg:px-16">
          {[game.status[language], game.genre[language], t.games.mobileLabel].map((fact) => <div key={fact} className="flex items-center gap-3 text-sm text-zinc-300"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: game.theme.accent }} />{fact}</div>)}
        </div>
      </section>

      <GameGallery key={`${game.id}-${language}`} game={game} images={gameImages} language={language} labels={t.games} />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-14 border-t border-white/10 pt-14 lg:grid-cols-[1.05fr_.95fr]">
          <div><p className="text-xs uppercase tracking-[.26em] text-zinc-500">{t.games.overviewEyebrow}</p><h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{t.games.overviewTitle}</h2><div className="mt-6 max-w-2xl space-y-5 text-lg leading-8 text-zinc-300">{intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
          <div><p className="text-xs uppercase tracking-[.26em] text-zinc-500">{t.games.howItWorksEyebrow}</p><h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{t.games.howItWorksTitle}</h2><ol className="mt-7 space-y-5">{steps.map((step, index) => <li key={step} className="grid grid-cols-[42px_1fr] gap-4 border-b border-white/10 pb-5"><span className="text-sm font-semibold" style={{ color: game.theme.accent }}>0{index + 1}</span><p className="leading-7 text-zinc-300">{step}</p></li>)}</ol></div>
        </div>
      </section>

      {modes.length > 0 && <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16"><div className="border-y border-white/10 py-12"><p className="text-xs uppercase tracking-[.26em] text-zinc-500">{t.games.modesEyebrow}</p><h2 className="mt-3 text-3xl font-semibold text-white">{t.games.modesTitle}</h2><div className="mt-8 grid gap-8 md:grid-cols-2">{modes.map((mode, index) => <div key={mode.title} className={index > 0 ? "border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0" : ""}><h3 className="text-2xl font-semibold" style={{ color: game.theme.accent }}>{mode.title}</h3><p className="mt-3 leading-7 text-zinc-400">{mode.description}</p></div>)}</div></div></section>}

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs uppercase tracking-[.26em] text-zinc-500">{t.games.featuresEyebrow}</p><h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{t.games.featuresTitle}</h2></div><div><ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{[...new Set(facts)].map((fact) => <li key={fact} className="flex gap-3 border-b border-white/10 pb-4 leading-7 text-zinc-300"><span style={{ color: game.theme.accent }}>✓</span>{fact}</li>)}</ul>{disclaimer && <p className="mt-7 text-sm leading-7 text-zinc-500">{disclaimer}</p>}</div></div>
      </section>

      {closing && <section className="px-6 py-16 md:px-10 lg:px-16"><div className="mx-auto max-w-5xl border-y border-white/10 py-14 text-center"><p className="mx-auto max-w-3xl text-2xl font-medium leading-10 text-white md:text-3xl">“{closing}”</p><div className="mt-8 flex flex-wrap justify-center gap-4">{game.links.store && <a href={game.links.store} target="_blank" rel="noopener noreferrer" className="rounded-full px-6 py-3 text-sm font-semibold text-black" style={{ backgroundColor: game.theme.accent }}>{t.games.store}</a>}<Link to={`/games/${game.id}/support`} className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-300">{t.games.support}</Link><Link to={game.links.privacy} className="px-3 py-3 text-sm text-zinc-500 underline underline-offset-4 hover:text-white">{t.games.privacy}</Link></div></div></section>}

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 lg:px-16"><div className="mb-8 flex items-end justify-between"><div><p className="text-xs uppercase tracking-[.26em] text-zinc-500">{t.games.moreEyebrow}</p><h2 className="mt-3 text-3xl font-semibold text-white">{t.games.moreTitle}</h2></div><Link to="/games" className="hidden text-sm text-zinc-500 hover:text-white sm:block">{t.games.back} →</Link></div><div className="grid gap-5 md:grid-cols-2">{relatedGames.map((related) => <Link key={related.id} to={`/games/${related.id}`} className="group flex items-center gap-5 rounded-[24px] border border-white/10 bg-white/[.03] p-5 transition hover:border-white/20"><div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-black/20 p-3"><img src={related.cover} alt="" className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105" /></div><div className="min-w-0"><p className="text-[10px] uppercase tracking-[.2em] text-zinc-500">{related.status[language]}</p><h3 className="mt-2 truncate text-xl font-semibold text-white">{related.shortTitle ?? related.title}</h3><p className="mt-2 text-sm text-zinc-400">{related.player.tagline[language]}</p></div><span className="ml-auto text-zinc-500">→</span></Link>)}</div></section>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-8 text-sm text-zinc-500 md:px-10 lg:px-16"><span>{t.games.supportText}</span><div className="flex gap-5"><Link to={`/games/${game.id}/support`} className="hover:text-white">{t.games.support}</Link><Link to={game.links.privacy} className="hover:text-white">{t.games.privacy}</Link><Link to={`/portfolio/${game.id}`} className="hover:text-white">{t.games.professional}</Link></div></div>
      <GamesFooter />
    </main>
  );
}

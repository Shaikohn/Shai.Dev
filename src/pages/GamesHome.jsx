import { Link } from "react-router-dom";
import GamesHeader from "../components/GamesHeader";
import GameCatalogCard from "../components/games/GameCatalogCard";
import GamesFooter from "../components/games/GamesFooter";
import { games } from "../data/games";
import { useLanguage } from "../i18n/useLanguage";
import { usePageMetadata } from "../hooks/usePageMetadata";

export default function GamesHome() {
  const { language, t } = useLanguage();
  usePageMetadata(language === "es" ? "Juegos de Shai.Dev" : "Shai.Dev Games", t.games.description);

  return (
    <main className="min-h-screen overflow-hidden bg-[#100b13] text-zinc-100">
      <GamesHeader />
      <section className="relative px-6 pb-20 pt-36 md:pb-24 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(163,230,53,.11),transparent_27%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,.16),transparent_30%),radial-gradient(circle_at_52%_80%,rgba(244,63,94,.10),transparent_26%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[.32em] text-amber-300">{t.games.eyebrow}</p>
            <h1 className="text-5xl font-semibold leading-[.98] text-white md:text-7xl">{t.games.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">{t.games.description}</p>
            <a href="#games-catalog" className="mt-9 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#100b13] transition-transform hover:scale-[1.03]">{t.games.heroSecondary} ↓</a>
          </div>

          <div className="relative hidden min-h-[400px] lg:block" aria-hidden="true">
            <div className="absolute inset-10 rounded-full bg-purple-500/10 blur-3xl" />
            {games.map((game, index) => (
              <img
                key={game.id}
                src={game.cover}
                alt=""
                className={`absolute object-contain drop-shadow-[0_28px_36px_rgba(0,0,0,.5)] ${index === 0 ? "left-0 top-12 h-44 -rotate-6" : index === 1 ? "bottom-4 left-1/2 h-36 -translate-x-1/2 rotate-3" : "right-0 top-0 h-60 rotate-6"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="games-catalog" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-24 md:px-10 lg:px-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[.28em] text-zinc-500">{t.games.catalogEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{t.games.catalogTitle}</h2>
          <p className="mt-4 leading-7 text-zinc-400">{t.games.catalogDescription}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => <GameCatalogCard key={game.id} game={game} language={language} labels={t.games} />)}
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 md:flex-row md:items-end">
          <div className="max-w-2xl"><p className="text-xs uppercase tracking-[.28em] text-amber-300">{t.games.loopEyebrow}</p><h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{t.games.loopTitle}</h2></div>
          <Link to="/" className="shrink-0 text-sm text-zinc-400 underline underline-offset-4 hover:text-white">{t.nav.portfolio} →</Link>
        </div>
      </section>
      <GamesFooter />
    </main>
  );
}

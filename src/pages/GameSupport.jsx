import { Link, Navigate, useParams } from "react-router-dom";
import GamesHeader from "../components/GamesHeader";
import GamesFooter from "../components/games/GamesFooter";
import { getGameById } from "../data/games";
import { useLanguage } from "../i18n/useLanguage";
import { usePageMetadata } from "../hooks/usePageMetadata";

export default function GameSupport() {
  const { gameId } = useParams();
  const game = getGameById(gameId);
  const { t } = useLanguage();
  usePageMetadata(game ? `${game.title} — ${t.games.support}` : "Support", t.games.supportText);
  if (!game) return <Navigate to="/games" replace />;
  const subject = encodeURIComponent(`${game.title} — Support`);

  return (
    <main className="min-h-screen bg-[#100b13] text-zinc-100">
      <GamesHeader />
      <article className="relative mx-auto min-h-[calc(100vh-88px)] max-w-5xl px-6 pb-24 pt-36 md:px-10 md:pt-44">
        <div className="absolute right-0 top-28 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: game.theme.glow }} />
        <div className="relative grid items-start gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div><Link to={`/games/${game.id}`} className="text-sm text-zinc-400 hover:text-white">← {game.title}</Link><img src={game.cover} alt="" className="mt-10 max-h-44 max-w-[240px] object-contain object-left" /></div>
          <div><p className="text-xs uppercase tracking-[.28em]" style={{ color: game.theme.accent }}>Shai.Dev Games</p><h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">{t.games.support}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">{t.games.supportLead}</p><div className="mt-10 border-y border-white/10 py-8"><a href={`mailto:shai.kohn.dev@gmail.com?subject=${subject}`} className="inline-flex rounded-full px-6 py-3 text-sm font-semibold text-black" style={{ backgroundColor: game.theme.accent }}>{t.games.emailSupport}</a><p className="mt-5 text-sm text-zinc-500">shai.kohn.dev@gmail.com</p></div><div className="mt-7 flex flex-wrap gap-5 text-sm"><Link to={game.links.privacy} className="text-zinc-400 underline underline-offset-4 hover:text-white">{t.games.privacy}</Link><Link to="/games" className="text-zinc-400 hover:text-white">{t.games.back} →</Link></div></div>
        </div>
      </article>
      <GamesFooter />
    </main>
  );
}

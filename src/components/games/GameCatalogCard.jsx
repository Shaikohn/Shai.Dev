import { Link } from "react-router-dom";

export default function GameCatalogCard({ game, language, labels }) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-white/20"
      style={{ "--accent": game.theme.accent, "--glow": game.theme.glow }}
    >
      <Link to={`/games/${game.id}`} className="relative flex aspect-[4/3] items-center justify-center overflow-hidden p-7" aria-label={`${labels.explore}: ${game.title}`}>
        <div className="absolute inset-0 opacity-80" style={{ background: `radial-gradient(circle at 50% 45%, ${game.theme.glow}, transparent 62%)` }} />
        <img src={game.cover} alt="" loading="lazy" decoding="async" className="relative max-h-[78%] max-w-[82%] object-contain drop-shadow-[0_24px_35px_rgba(0,0,0,.5)] transition-transform duration-500 group-hover:scale-[1.04]" />
      </Link>
      <div className="flex flex-1 flex-col border-t border-white/8 px-6 pb-6 pt-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[.22em] text-zinc-500">{game.genre[language]}</p>
          <span className="shrink-0 rounded-full border px-2.5 py-1 text-[10px]" style={{ borderColor: `${game.theme.accent}38`, color: game.theme.accent, backgroundColor: `${game.theme.accent}12` }}>{game.status[language]}</span>
        </div>
        <h3 className="text-2xl font-semibold text-white">{game.shortTitle ?? game.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-zinc-400">{game.player.tagline[language]}</p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <Link to={`/games/${game.id}`} className="text-sm font-semibold transition-colors" style={{ color: game.theme.accent }}>{labels.explore} →</Link>
          {game.links.store && <a href={game.links.store} target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 transition-colors hover:text-white">Play Store ↗</a>}
        </div>
      </div>
    </article>
  );
}

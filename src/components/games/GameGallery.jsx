import { useRef, useState } from "react";
import ProjectModal from "../ProjectModal";

export default function GameGallery({ game, images, language, labels }) {
  const trackRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
  const isSpanish = language === "es";

  if (images.length === 0) return null;

  const updatePosition = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = [...track.children];
    const closest = cards.reduce((best, card, index) => (
      Math.abs(card.offsetLeft - track.scrollLeft) < best.distance
        ? { index, distance: Math.abs(card.offsetLeft - track.scrollLeft) }
        : best
    ), { index: 0, distance: Number.POSITIVE_INFINITY });
    setPosition(closest.index);
  };

  const move = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.82, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[.25em] text-zinc-500">{labels.galleryEyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{labels.gallery}</h2>
          <p className="mt-4 leading-7 text-zinc-400">{labels.galleryDescription}</p>
        </div>

        {images.length > 1 && (
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button type="button" onClick={() => move(-1)} aria-label={isSpanish ? "Ver capturas anteriores" : "View previous screenshots"} className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/[.04] text-white transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="m15 18-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <button type="button" onClick={() => move(1)} aria-label={isSpanish ? "Ver capturas siguientes" : "View next screenshots"} className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/[.04] text-white transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          </div>
        )}
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          onScroll={updatePosition}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 [scrollbar-color:rgba(255,255,255,.22)_transparent] [scrollbar-width:thin]"
          role="region"
          aria-roledescription="carousel"
          aria-label={`${labels.gallery}: ${game.title}`}
        >
          {images.map((image, index) => (
            <figure
              key={image}
              className="group relative flex min-w-[78%] snap-start items-center justify-center overflow-hidden rounded-[26px] border border-white/10 bg-black/25 px-5 py-7 shadow-[0_20px_55px_rgba(0,0,0,.3)] sm:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(33.333%-0.667rem)]"
            >
              <div className="absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" style={{ background: `radial-gradient(circle at center, ${game.theme.accent}, transparent 65%)` }} />
              <button type="button" onClick={() => setExpandedImage(index)} aria-label={`${isSpanish ? "Ampliar captura" : "Enlarge screenshot"} ${index + 1}`} className="relative w-full cursor-pointer rounded-[18px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <img
                  src={image}
                  alt={`${game.title} — ${isSpanish ? "captura" : "screenshot"} ${index + 1}`}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-[430px] w-full rounded-[18px] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,.45)] transition-transform duration-500 group-hover:scale-[1.015] sm:h-[500px] lg:h-[540px]"
                />
              </button>
              <span className="absolute bottom-4 right-5 text-xs tabular-nums text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
            </figure>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between sm:hidden">
          <p className="text-xs text-zinc-500">{isSpanish ? "Deslizá para ver más" : "Swipe to see more"}</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => move(-1)} aria-label={isSpanish ? "Ver capturas anteriores" : "View previous screenshots"} className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/[.04] text-white"><svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="m15 18-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <button type="button" onClick={() => move(1)} aria-label={isSpanish ? "Ver capturas siguientes" : "View next screenshots"} className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/[.04] text-white"><svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-1.5" aria-hidden="true">
          {images.map((image, index) => <span key={image} className={`h-1 rounded-full transition-all ${index === position ? "w-7" : "w-1.5 bg-white/20"}`} style={index === position ? { backgroundColor: game.theme.accent } : undefined} />)}
        </div>
      </div>

      <ProjectModal
        key={`${game.id}-${language}-${expandedImage ?? "closed"}`}
        isOpen={expandedImage !== null}
        onClose={() => setExpandedImage(null)}
        images={images}
        title={game.title}
        type="mobile"
        initialIndex={expandedImage ?? 0}
      />
    </section>
  );
}

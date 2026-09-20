import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";

export default function ProjectModal({ isOpen, onClose, images = [], title, type = "mobile", initialIndex = 0 }) {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(initialIndex);
  const dialogRef = useRef(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setCurrent((value) => (value + 1) % images.length);
      if (event.key === "ArrowLeft") setCurrent((value) => (value - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [images.length, isOpen, onClose]);

  if (!isOpen || images.length === 0) return null;
  const next = () => setCurrent((value) => (value + 1) % images.length);
  const previous = () => setCurrent((value) => (value - 1 + images.length) % images.length);
  const handleTouchEnd = (event) => {
    const difference = touchStartX.current - event.changedTouches[0].clientX;
    if (difference > 50) next();
    if (difference < -50) previous();
  };
  const isMobileProject = type === "mobile";

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <button type="button" className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-xl" onClick={onClose} aria-label={t.modal.close} />
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="project-gallery-title" tabIndex={-1} className="relative flex h-full w-full flex-col items-center justify-center px-4 pb-10 outline-none md:px-6 md:pb-0" onTouchStart={(event) => { touchStartX.current = event.changedTouches[0].clientX; }} onTouchEnd={isMobileProject ? handleTouchEnd : undefined}>
        <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between gap-3 md:left-6 md:right-6 md:top-6">
          <h2 id="project-gallery-title" className="min-w-0 truncate text-base font-medium text-white md:text-lg">{title}</h2>
          <div className="flex shrink-0 items-center gap-2">
            {images.length > 1 && <>
              <button type="button" onClick={previous} aria-label={t.modal.previous} className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/15 bg-black/50 text-white hover:bg-white/10"><svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="m15 18-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
              <button type="button" onClick={next} aria-label={t.modal.next} className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/15 bg-black/50 text-white hover:bg-white/10"><svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            </>}
            <button type="button" onClick={onClose} aria-label={t.modal.close} className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/15 bg-black/50 text-white hover:bg-white/10"><svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button>
          </div>
        </div>
        <div className={`relative flex w-full justify-center ${isMobileProject ? "max-w-[85vw] md:max-w-[420px]" : "max-w-[95vw] md:max-w-[1100px]"}`}>
          <div className="relative rounded-[24px] border border-white/10 bg-black/30 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
            <img src={images[current]} alt={`${title} — ${current + 1}`} className={isMobileProject ? "max-h-[70vh] max-w-[85vw] rounded-[20px] object-contain md:max-w-[320px]" : "max-h-[75vh] w-full rounded-[16px] object-contain"} />
          </div>
        </div>
        {images.length > 1 && <div className="mt-5 flex items-center gap-2">
          {images.map((_, index) => <button type="button" key={index} onClick={() => setCurrent(index)} aria-label={`${t.modal.goTo} ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === current ? "w-8 bg-white" : "w-3 bg-white/40"}`} />)}
        </div>}
      </div>
    </div>
  );
}

import { useEffect, useState, useRef } from "react";

export default function ProjectModal({
  isOpen,
  onClose,
  images = [],
  title,
  type = "mobile",
}) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setCurrent(0);
  }, [isOpen, images]);

  if (!isOpen) return null;

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  const isMobileProject = type === "mobile";

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />

      {/* CONTENT */}
      <div
        className="relative w-full h-full flex flex-col items-center justify-center px-4 md:px-6 pb-10 md:pb-0"
        onTouchStart={isMobileProject ? handleTouchStart : undefined}
        onTouchEnd={isMobileProject ? handleTouchEnd : undefined}
      >
        {/* MOBILE TOP BAR */}
        <div className="md:hidden absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-3">
          <div className="min-w-0 text-white text-base font-medium truncate">
            {title}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-lg text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10"
                >
                  ‹
                </button>

                <button
                  onClick={next}
                  aria-label="Next image"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-lg text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10"
                >
                  ›
                </button>
              </>
            )}

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-lg text-white/80 backdrop-blur-md transition-all duration-200 hover:text-white hover:bg-white/10"
            >
              ✕
            </button>
          </div>
        </div>

        {/* DESKTOP HEADER */}
        <div className="hidden md:block absolute top-6 left-6 text-white text-lg font-medium">
          {title}
        </div>

        {/* DESKTOP CLOSE */}
        <button
          onClick={onClose}
          className="hidden md:block absolute top-6 right-6 text-white/70 hover:text-white text-2xl transition cursor-pointer"
        >
          ✕
        </button>

        {/* IMAGE CONTAINER */}
        <div
          className={`relative w-full flex justify-center ${
            isMobileProject
              ? "max-w-[85vw] md:max-w-[420px]"
              : "max-w-[95vw] md:max-w-[1100px]"
          }`}
        >
          {/* Glow */}
          <div
            className={`absolute inset-0 ${
              isMobileProject
                ? "scale-110 bg-blue-500/20 blur-3xl rounded-[40px]"
                : "scale-105 bg-blue-500/10 blur-2xl rounded-[30px]"
            }`}
          />

          {/* MOBILE PROJECT */}
          {isMobileProject ? (
            <div className="relative border border-white/10 bg-black/30 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.6)] rounded-[28px] p-2">
              <img
                src={images[current]}
                alt=""
                className="object-contain w-full max-w-[85vw] md:max-w-[320px] max-h-[70vh] rounded-[24px]"
              />
            </div>
          ) : (
            /* WEB PROJECT */
            <div className="relative w-full border border-white/10 bg-black/30 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.6)] rounded-[20px] p-2 overflow-hidden">
              {/* Desktop */}
              <div className="hidden md:block">
                <img
                  src={images[current]}
                  alt=""
                  className="w-full max-h-[75vh] object-contain rounded-[16px]"
                />
              </div>

              {/* Mobile: horizontal scroll for web screenshots */}
              <div className="md:hidden overflow-x-auto overflow-y-hidden rounded-[16px] scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                <div className="min-w-[900px]">
                  <img
                    src={images[current]}
                    alt=""
                    className="w-full h-auto object-contain rounded-[16px]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* MOBILE HINT FOR WEB */}
        {!isMobileProject && (
          <p className="md:hidden mt-3 text-xs text-zinc-400 text-center">
            Swipe sideways to explore the screenshot
          </p>
        )}

        {/* DESKTOP CONTROLS */}
        {images.length > 1 && (
          <div className="hidden md:flex mt-6 items-center justify-center gap-5">
            <button
              onClick={prev}
              aria-label="Previous image"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-xl text-white backdrop-blur-md transition-all duration-200 hover:scale-[1.06] hover:bg-white/10 hover:border-white/30 cursor-pointer"
            >
              <span className="-translate-y-[1px]">‹</span>
            </button>

            <div className="flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === current ? "w-8 bg-white" : "w-3 bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next image"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-xl text-white backdrop-blur-md transition-all duration-200 hover:scale-[1.06] hover:bg-white/10 hover:border-white/30 cursor-pointer"
            >
              <span className="-translate-y-[1px]">›</span>
            </button>
          </div>
        )}

        {/* MOBILE DOTS ONLY */}
        {images.length > 1 && (
          <div className="md:hidden flex gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === current ? "w-8 bg-white" : "w-3 bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
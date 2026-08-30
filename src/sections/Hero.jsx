import heroImage from "../assets/hero.png";
import { useLanguage } from "../i18n/useLanguage";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="scroll-mt-24 relative overflow-hidden bg-[#0a0f1c] text-zinc-100 pt-28 md:pt-32 pb-8 md:pb-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_82%_48%,rgba(14,165,233,0.12),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-[1.05fr_0.95fr] items-center gap-12 md:gap-10 lg:gap-14">
          
          {/* LEFT */}
          <div className="max-w-2xl mx-auto text-center md:text-left">
            <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 mb-6 mx-auto md:mx-0">
              {t.hero.eyebrow}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.04] tracking-tight mb-8 max-w-[14ch] mx-auto md:mx-0">
              {t.hero.title}
            </h1>

            <p className="text-zinc-400 text-base md:text-lg leading-8 max-w-[36rem] mx-auto md:mx-0 mb-10">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white text-[#0a0f1c] px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_10px_30px_rgba(255,255,255,0.14)]"
              >
                {t.hero.projects}
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:bg-white/10 hover:border-white/25 hover:scale-[1.02]"
              >
                {t.hero.contact}
              </a>
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              {t.hero.availability}
            </p>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex justify-center md:justify-end">
            <div className="relative transition-transform duration-300 hover:scale-[1.015]">
              <div className="absolute inset-0 scale-110 rounded-[48px] bg-blue-500/12 blur-3xl" />
              <div className="absolute inset-0 scale-[1.02] rounded-[42px] border border-white/6" />

              <div className="relative rounded-[36px] border border-white/10 bg-black/25 p-2 shadow-[0_28px_70px_rgba(0,0,0,0.42)] backdrop-blur-sm">
                <img
                  src={heroImage}
                  alt={t.hero.imageAlt}
                  decoding="async"
                  className="w-full max-w-[320px] rounded-[28px] object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

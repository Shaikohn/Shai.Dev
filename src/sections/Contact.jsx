import { useLanguage } from "../i18n/useLanguage";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#0a0f1c] text-zinc-100 pt-12 md:pt-16 pb-24 md:pb-28"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <p className="text-sm text-zinc-500 mb-6 tracking-wide">
          {t.contact.label}
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-8">
          {t.contact.title}
        </h2>

        <p className="text-zinc-400 text-lg leading-8 mb-12 max-w-2xl mx-auto">
          {t.contact.description}
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <a
            href="mailto:shai.kohn.dev@gmail.com"
            className="rounded-full bg-white text-[#0a0f1c] px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
          >
            {t.contact.email}
          </a>

          <a
            href="https://www.linkedin.com/in/shai-kohn/?locale=es"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:text-white hover:bg-white/10 hover:border-white/25"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Shaikohn"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:text-white hover:bg-white/10 hover:border-white/25"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

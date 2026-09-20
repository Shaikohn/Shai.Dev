import { Link } from "react-router-dom";
import PortfolioFooter from "../components/PortfolioFooter";
import { useLanguage } from "../i18n/useLanguage";
import { usePageMetadata } from "../hooks/usePageMetadata";

export default function AdditionalTechnicalProject({ project }) {
  const { language, setLanguage, t } = useLanguage();
  const technical = project.caseStudy;
  usePageMetadata(`${project.title} — ${t.technical.eyebrow}`, project.description[language]);
  return <main className="min-h-screen bg-[#080d18] text-zinc-100">
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-16"><Link to="/#projects" className="text-sm text-zinc-400 hover:text-white">← {t.technical.back}</Link><div className="flex rounded-full border border-white/10 p-0.5">{["es", "en"].map((code) => <button key={code} type="button" onClick={() => setLanguage(code)} className={`cursor-pointer rounded-full px-3 py-1 text-xs uppercase ${language === code ? "bg-white text-[#080d18]" : "text-zinc-500"}`}>{code}</button>)}</div></header>
    <article>
      <section className="border-b border-white/10 px-6 pb-20 pt-12 md:px-10 lg:px-16"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.9fr]"><div><p className="text-xs uppercase tracking-[.28em] text-sky-400">{t.technical.eyebrow}</p><h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">{project.title}</h1><p className="mt-5 text-sm text-zinc-500">{project.meta[language]}</p><p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-300">{project.description[language]}</p>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#080d18]">{project.linkType === "github" ? "GitHub ↗" : `${language === "es" ? "Ver sitio" : "View website"} ↗`}</a>}</div><img src={project.cover} alt={project.title} className="w-full rounded-3xl border border-white/10 object-cover shadow-[0_30px_80px_rgba(0,0,0,.45)]" /></div></section>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[.7fr_1.3fr] lg:px-16"><div><p className="text-xs uppercase tracking-[.25em] text-zinc-500">{t.technical.overview}</p><h2 className="mt-4 text-3xl font-semibold">{t.technical.responsibility}</h2></div><div><p className="text-xl leading-9 text-zinc-300">{project.contribution[language]}</p><p className="mt-7 border-l-2 border-sky-400 pl-5 leading-7 text-zinc-400">{project.ownership[language]}</p></div></section>
      <section className="border-y border-white/10 bg-white/[.025] px-6 py-20 md:px-10 lg:px-16"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2"><CaseBlock number="01" title={t.technical.challenge}><p className="mt-6 text-lg leading-8 text-zinc-300">{technical.challenge[language]}</p></CaseBlock><CaseBlock number="02" title={t.technical.architecture}><ul className="mt-6 divide-y divide-white/10">{technical.architecture[language].map((item) => <li key={item} className="flex gap-4 py-4 text-zinc-300"><span className="text-sky-400">→</span>{item}</li>)}</ul></CaseBlock></div></section>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[.7fr_1.3fr] lg:px-16"><CaseBlock number="03" title={t.technical.decisions} /><ol className="space-y-7">{technical.decisions[language].map((item, index) => <li key={item} className="grid grid-cols-[40px_1fr] gap-4 border-b border-white/10 pb-7"><span className="text-sm text-sky-400">0{index + 1}</span><p className="text-lg leading-8 text-zinc-300">{item}</p></li>)}</ol></section>
      <section className="border-y border-white/10 px-6 py-20 md:px-10 lg:px-16"><div className="mx-auto max-w-7xl"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><CaseBlock number="04" title={t.technical.outcomes} /><ul className="flex flex-wrap gap-2">{project.technologies.map((item) => <li key={item} className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">{item}</li>)}</ul></div><div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">{technical.outcomes[language].map((item, index) => <div key={item} className="bg-[#080d18] p-7"><span className="text-xs text-sky-400">0{index + 1}</span><p className="mt-4 leading-7 text-zinc-300">{item}</p></div>)}</div></div></section>
      <section className="px-6 py-20 text-center"><Link to="/#projects" className="text-sm font-medium text-sky-400 hover:text-sky-300">← {t.technical.back}</Link></section>
    </article><PortfolioFooter />
  </main>;
}

function CaseBlock({ number, title, children }) {
  return <div><p className="text-xs text-zinc-500">{number}</p><h2 className="mt-4 text-3xl font-semibold">{title}</h2>{children}</div>;
}

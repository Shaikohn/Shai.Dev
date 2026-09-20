import { Link } from "react-router-dom";

export default function ProjectCard({ project, language, labels }) {
  return (
    <article className="group relative h-full cursor-pointer rounded-xl border border-white/10 bg-black/20 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[.025]">
      <Link to={`/portfolio/${project.id}`} className="absolute inset-0 z-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"><span className="sr-only">{labels.caseStudy}: {project.title}</span></Link>
      <img src={project.cover} alt="" loading="lazy" decoding="async" className="pointer-events-none mb-3 rounded-lg md:h-[150px] md:w-full md:object-cover" />
      <div className="relative z-10 mb-2 flex items-center justify-between gap-3 pointer-events-none"><h4 className="text-sm text-zinc-200">{project.title}</h4>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="pointer-events-auto shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300 transition-all hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">{project.linkType === "github" ? labels.github : labels.liveSite}</a>}</div>
      <p className="pointer-events-none relative z-0 text-xs leading-5 text-zinc-500">{project.description[language]}</p>
      <span className="pointer-events-none relative z-0 mt-4 inline-flex items-center gap-2 text-xs font-medium text-sky-400">{labels.caseStudy}<span className="transition-transform group-hover:translate-x-1">→</span></span>
    </article>
  );
}

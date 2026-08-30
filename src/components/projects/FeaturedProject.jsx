import { Link } from "react-router-dom";

export default function FeaturedProject({ project, index, language, labels, onOpenGallery }) {
  const reverse = index % 2 === 0;
  return (
    <article className="group grid items-center gap-8 opacity-90 transition-all duration-300 hover:opacity-100 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
      <div className={`${reverse ? "md:order-2" : ""} order-1 max-w-xl text-center transition-all duration-300 group-hover:-translate-y-1 md:text-left`}>
        <div className="mb-3 flex flex-wrap items-center justify-center gap-2 md:justify-start">
          <h3 className="text-2xl font-semibold md:text-3xl">{project.title}</h3>
          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-[10px] text-green-400">{project.status[language]}</span>
        </div>
        <p className="mb-4 text-xs tracking-wide text-zinc-500">{project.meta[language]}</p>
        <p className="mb-4 leading-8 text-zinc-300">{project.summary[language]}</p>
        <p className="mb-4 leading-8 text-zinc-400">{project.contribution[language]}</p>
        {project.type === "mobile" && <p className="mb-4 text-sm text-zinc-300">{labels.solo}</p>}
        <ul className="mb-8 flex flex-wrap justify-center gap-2 md:justify-start" aria-label="Technologies">
          {project.technologies.map((technology) => <li key={technology} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">{technology}</li>)}
        </ul>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0f1c] transition-all duration-200 hover:scale-[1.05] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400">{project.type === "mobile" ? labels.playStore : labels.liveSite}</a>}
          <button type="button" onClick={() => onOpenGallery(project)} className="cursor-pointer rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-400 transition-all hover:border-white/25 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400">{labels.screenshots}</button>
        </div>
        {project.links.privacy && <div className="mt-4 flex justify-center md:justify-start"><Link to={project.links.privacy} className="text-sm font-medium text-zinc-500 underline underline-offset-4 transition-colors hover:text-white">{labels.privacy}</Link></div>}
      </div>
      <div className={`${reverse ? "md:order-1" : "md:justify-end"} order-2 flex justify-center`}>
        <div className={`${project.type === "mobile" ? "rounded-[32px]" : "rounded-2xl"} relative border border-white/10 bg-black/20 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:scale-[1.02]`}>
          <div className="absolute inset-0 -z-10 scale-110 rounded-[40px] bg-blue-500/10 blur-3xl" />
          <button type="button" onClick={() => onOpenGallery(project)} className="cursor-pointer border-0 bg-transparent p-0" aria-label={`${labels.screenshots}: ${project.title}`}>
            <img src={project.cover} alt={project.title} loading={index === 0 ? "eager" : "lazy"} decoding="async" className={project.type === "mobile" ? "h-[375px] rounded-[24px] object-contain md:h-[420px]" : "rounded-xl"} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProjectCard({ project, language, labels }) {
  return (
    <article className="group h-full rounded-xl border border-white/10 bg-black/20 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
      <img src={project.cover} alt={project.title} loading="lazy" decoding="async" className="mb-3 rounded-lg md:h-[150px] md:w-full md:object-cover" />
      <div className="mb-2 flex items-center justify-between gap-3">
        <h4 className="text-sm text-zinc-300">{project.title}</h4>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300 transition-all hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">{project.linkType === "github" ? labels.github : labels.liveSite}</a>
      </div>
      <p className="text-xs leading-5 text-zinc-500">{project.description[language]}</p>
    </article>
  );
}

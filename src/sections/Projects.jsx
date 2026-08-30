import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import FeaturedProject from "../components/projects/FeaturedProject";
import ProjectCard from "../components/projects/ProjectCard";
import { additionalProjects, featuredProjects } from "../data/projects";
import { useLanguage } from "../i18n/useLanguage";

export default function Projects() {
  const { language, t } = useLanguage();
  const [modalProject, setModalProject] = useState(null);

  return (
    <section id="projects" className="scroll-mt-24 bg-[#0a0f1c] pb-16 pt-8 text-zinc-100 md:pb-20 md:pt-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-12 max-w-2xl md:mb-14">
          <h2 className="mb-5 text-4xl font-semibold tracking-tight md:text-5xl">{t.projects.title}</h2>
          <p className="text-lg leading-relaxed text-zinc-400">{t.projects.description}</p>
        </div>
        <div className="space-y-24 md:space-y-28">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} language={language} labels={t.projects} onOpenGallery={setModalProject} />
          ))}
        </div>
        <div className="mt-20 md:mt-24">
          <h3 className="mb-8 text-xl text-zinc-400 md:text-2xl">{t.projects.more}</h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {additionalProjects.map((project) => <ProjectCard key={project.id} project={project} language={language} labels={t.projects} />)}
          </div>
        </div>
      </div>
      <ProjectModal key={modalProject?.id ?? "closed"} isOpen={Boolean(modalProject)} onClose={() => setModalProject(null)} images={modalProject?.images ?? []} title={modalProject?.title ?? ""} type={modalProject?.type} />
    </section>
  );
}

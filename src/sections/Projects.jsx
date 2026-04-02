import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectModal from "../components/ProjectModal";
import impostorCover from "../assets/projects/impostor/cover.png";
import ztreamCover from "../assets/projects/ztreamgames/cover.png";
import cuevanixCover from "../assets/projects/cuevanix/cover.png";
import imp1 from "../assets/projects/impostor/imp1.png";
import imp2 from "../assets/projects/impostor/imp2.png";
import zt1 from "../assets/projects/ztreamgames/zt1.png";
import zt2 from "../assets/projects/ztreamgames/zt2.png";
import cu1 from "../assets/projects/cuevanix/cu1.png";
import cu2 from "../assets/projects/cuevanix/cu2.png";

export default function Projects() {
  const impostorImages = [imp1, imp2];
  const ztreamImages = [zt1, zt2];
  const cuevanixImages = [cu1, cu2];

  const [modal, setModal] = useState({
    open: false,
    images: [],
    title: "",
    type: "web",
  });

  const openModal = (images, title, type) => {
    setModal({ open: true, images, title, type });
  };

  const closeModal = () => {
    setModal({ open: false, images: [], title: "", type: "web" });
  };

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-[#0a0f1c] text-zinc-100 pt-8 md:pt-10 pb-16 md:pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <div className="max-w-2xl mb-12 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
            Things I’ve Built
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            A selection of projects focused on building real products with clean
            structure and modern interfaces.
          </p>
        </div>

        <div className="space-y-24 md:space-y-28">

          {/* ================== IMPOSTOR ================== */}
          <article className="group grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-center opacity-90 hover:opacity-100 transition-all duration-300">
            
            {/* TEXT */}
            <div className="order-1 md:order-2 max-w-xl text-center md:text-left transition-all duration-300 group-hover:-translate-y-1">
              
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 flex items-center gap-2 justify-center md:justify-start">
                Impostor Futbolero
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                  Live
                </span>
              </h3>

              <p className="text-xs text-zinc-500 mb-4 tracking-wide">
                Mobile product · Real-time multiplayer
              </p>

              <p className="text-zinc-400 leading-8 mb-6">
                A real-time multiplayer mobile game designed for fast social
                gameplay, featuring dynamic rooms, voting systems and turn-based
                interactions.
              </p>

              <p className="text-sm text-zinc-500 mb-8">
                React Native · Firebase · Real-time multiplayer
              </p>

              <div className="flex justify-center md:justify-start flex-wrap gap-4">
                <button className="text-sm font-semibold px-6 py-3 rounded-full bg-white text-[#0a0f1c] hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-200">
                  View on Play Store
                </button>

                <button
                  onClick={() =>
                    openModal(impostorImages, "Impostor Futbolero", "mobile")
                  }
                  className="text-sm font-semibold px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] transition-all duration-200"
                >
                  Screenshots
                </button>
              </div>

              <div className="mt-4 flex justify-center md:justify-start">
                <Link
                  to="/privacy-policy"
                  className="text-sm font-medium text-zinc-500 underline underline-offset-4 hover:text-white transition-colors duration-200"
                >
                  Read Privacy Policy
                </Link>
              </div>
            </div>

            {/* IMAGE */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative transition-all duration-300 group-hover:scale-[1.02]">
                <div className="absolute inset-0 scale-110 rounded-[40px] bg-blue-500/10 blur-3xl" />

                <div className="relative rounded-[32px] border border-white/10 bg-black/20 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                  <img
                    src={impostorCover}
                    alt="Impostor Futbolero"
                    className="h-[340px] md:h-[380px] object-contain rounded-[24px]"
                  />
                </div>
              </div>
            </div>
          </article>

          {/* ================== ZTREAM ================== */}
          <article className="group grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-center opacity-90 hover:opacity-100 transition-all duration-300">

            {/* TEXT */}
            <div className="order-1 max-w-xl text-center md:text-left transition-all duration-300 group-hover:-translate-y-1">
              
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                ZtreamGames
              </h3>

              <p className="text-xs text-zinc-500 mb-4 tracking-wide">
                Team project · SCRUM environment
              </p>

              <p className="text-zinc-400 leading-8 mb-6">
                A collaborative gaming platform focused on content exploration
                and user interaction, built with scalability and structured data
                handling in mind.
              </p>

              <p className="text-sm text-zinc-500 mb-8">
                React · Node.js · MongoDB
              </p>

              <div className="flex justify-center md:justify-start flex-wrap gap-5 items-center">
                
                <a
                  href="https://github.com/Shaikohn/Ztreamgames"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center py-2 text-sm font-semibold underline underline-offset-4 text-zinc-300 hover:text-white transition-all duration-200"
                >
                  GitHub
                </a>

                <button
                  onClick={() => openModal(ztreamImages, "ZtreamGames", "web")}
                  className="text-sm font-semibold px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] transition-all duration-200"
                >
                  Screenshots
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="order-2 flex justify-center md:justify-end">
              <div className="rounded-2xl border border-white/8 bg-black/15 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-[1.02]">
                <img src={ztreamCover} alt="ZtreamGames" />
              </div>
            </div>
          </article>

          {/* ================== CUEVANIX ================== */}
          <article className="group grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-center opacity-90 hover:opacity-100 transition-all duration-300">

            {/* TEXT */}
            <div className="order-1 md:order-2 max-w-xl text-center md:text-left transition-all duration-300 group-hover:-translate-y-1">
              
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                Cuevanix
              </h3>

              <p className="text-xs text-zinc-500 mb-4 tracking-wide">
                Full-stack product · Individual project
              </p>

              <p className="text-zinc-400 leading-8 mb-6">
                A complete movie platform combining e-commerce, content browsing
                and user interaction, designed with a focus on structure,
                usability and scalability.
              </p>

              <p className="text-sm text-zinc-500 mb-8">
                React · Node · Mongo · Stripe
              </p>

              <div className="flex justify-center md:justify-start flex-wrap gap-5 items-center">
                
                <a
                  href="https://github.com/Shaikohn/Cuevanix"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center py-2 text-sm font-semibold underline underline-offset-4 text-zinc-300 hover:text-white transition-all duration-200"
                >
                  GitHub
                </a>

                <button
                  onClick={() => openModal(cuevanixImages, "Cuevanix", "web")}
                  className="text-sm font-semibold px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] transition-all duration-200"
                >
                  Screenshots
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="rounded-2xl border border-white/8 bg-black/15 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-[1.02]">
                <img src={cuevanixCover} alt="Cuevanix" />
              </div>
            </div>
          </article>
        </div>
      </div>

      <ProjectModal
        isOpen={modal.open}
        onClose={closeModal}
        images={modal.images}
        title={modal.title}
        type={modal.type}
      />
    </section>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectModal from "../components/ProjectModal";
import impostorCover from "../assets/projects/impostor/cover.png";
import ztreamCover from "../assets/projects/ztreamgames/cover.png";
import cuevanixCover from "../assets/projects/cuevanix/cover.png";
import imp1 from "../assets/projects/impostor/imp1.png";
import imp2 from "../assets/projects/impostor/imp2.png";
import imp3 from "../assets/projects/impostor/imp3.png";
import imp4 from "../assets/projects/impostor/imp4.png";
/* import ztCover from "../assets/projects/ztreamgames/cover.png";
import zt1 from "../assets/projects/ztreamgames/zt1.png";
import zt2 from "../assets/projects/ztreamgames/zt2.png";
import cuCover from "../assets/projects/cuevanix/cover.png";
import cu1 from "../assets/projects/cuevanix/cu1.png";
import cu2 from "../assets/projects/cuevanix/cu2.png"; */
import casCover from "../assets/projects/casino/cover.png";
import fulboCover from "../assets/projects/fulbo/cover.png";
import cas1 from "../assets/projects/casino/cas1.png";
import cas2 from "../assets/projects/casino/cas2.png";
import cas3 from "../assets/projects/casino/cas3.png";
import cas4 from "../assets/projects/casino/cas4.png";
import ful1 from "../assets/projects/fulbo/ful1.png";
import ful2 from "../assets/projects/fulbo/ful2.png";
import ful3 from "../assets/projects/fulbo/ful3.png";

export default function Projects() {
  const impostorImages = [imp1, imp2, imp3, imp4];
  /* const ztreamImages = [ztCover,zt1, zt2];
  const cuevanixImages = [cuCover, cu1, cu2]; */
  const casinoImages = [cas1, cas2, cas3, cas4];
  const fulboImages = [fulboCover, ful1, ful2, ful3];

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
            Selected Work
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Selected projects, including a published mobile app on the Play Store.
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
                  Live on Play Store
                </span>
              </h3>

              <p className="text-xs text-zinc-500 mb-4 tracking-wide">
                2026 · Mobile product · Real-time multiplayer
              </p>

              <p className="text-zinc-400 leading-8 mb-4">
                Real-time mobile party game built around private rooms, voting rounds, and turn-based match flow.
              </p>

              <p className="text-zinc-400 leading-8 mb-4">
                Built the app end to end, implementing room logic, player state sync, voting resolution, and round progression across connected clients.
              </p>

              <p className="text-sm text-zinc-300 mb-3">
                Built and shipped end to end as a solo project.
              </p>

              <p className="text-sm text-zinc-500 mb-8">
                React Native · Firebase · Real-time synchronization
              </p>

              <div className="flex justify-center md:justify-start flex-wrap gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.shaidev.impostorfutbolero&hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold px-6 py-3 rounded-full bg-white text-[#0a0f1c] hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-200"
                >
                  View on Play Store
                </a>

                <button
                  onClick={() =>
                    openModal(impostorImages, "Impostor Futbolero", "mobile")
                  }
                  className="cursor-pointer text-sm font-semibold px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] transition-all duration-200"
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
                  <button
                    type="button"
                    onClick={() =>
                      openModal(impostorImages, "Impostor Futbolero", "mobile")
                    }
                    className="p-0 bg-transparent border-0 cursor-pointer"
                    aria-label="Open Impostor screenshots"
                  >
                    <img
                      src={impostorCover}
                      alt="Impostor Futbolero"
                      className="h-[340px] md:h-[380px] object-contain rounded-[24px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* ================== DELTABET ================== */}
          <article className="group grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-center opacity-90 hover:opacity-100 transition-all duration-300">

            {/* TEXT */}
            <div className="order-1 max-w-xl text-center md:text-left transition-all duration-300 group-hover:-translate-y-1">
              
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 flex items-center gap-2 justify-center md:justify-start">
                DeltaBet Casino Games
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                  Live
                </span>
              </h3>

              <p className="text-xs text-zinc-500 mb-4 tracking-wide">
                2025–2026 · Freelance work · Multiplayer games
              </p>

              <p className="text-zinc-400 leading-8 mb-4">
                Multiplayer casino games built around round-based flows, random events, and localized game states across different modes.
              </p>

              <p className="text-zinc-400 leading-8 mb-4">
                Built the frontend from scratch, implementing game rules, round transitions, random challenge logic, and multilingual flows for live releases.
              </p>

              <p className="text-sm text-zinc-300 mb-3">
                Built the full frontend for multiple live game flows.
              </p>

              <p className="text-sm text-zinc-500 mb-8">
                React · JavaScript · CSS
              </p>

              <div className="flex justify-center md:justify-start flex-wrap gap-5 items-center">
                
                <a
                  href="https://vschat.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold px-6 py-3 rounded-full bg-white text-[#0a0f1c] hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-200"
                >
                  View VSChat
                </a>

                <a
                  href="https://godsroulette.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold px-6 py-3 rounded-full bg-white text-[#0a0f1c] hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-200"
                >
                  View God's Roulette
                </a>

                <button
                  onClick={() => openModal(casinoImages, "DeltaBet", "web")}
                  className="cursor-pointer text-sm font-semibold px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] transition-all duration-200"
                >
                  Screenshots
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="order-2 flex justify-center md:justify-end">
              <div className="rounded-2xl border border-white/8 bg-black/15 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-[1.02]">
                <button
                  type="button"
                  onClick={() => openModal(casinoImages, "DeltaBet", "web")}
                  className="p-0 bg-transparent border-0 cursor-pointer"
                  aria-label="Open DeltaBet screenshots"
                >
                  <img src={casCover} alt="DeltaBet" />
                </button>
              </div>
            </div>
          </article>

          {/* ================== FULBO ================== */}
          <article className="group grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-center opacity-90 hover:opacity-100 transition-all duration-300">

            {/* TEXT */}
            <div className="order-1 md:order-2 max-w-xl text-center md:text-left transition-all duration-300 group-hover:-translate-y-1">
              
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 flex items-center gap-2 justify-center md:justify-start">
                Fulbo Platform
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                  Live
                </span>
              </h3>

              <p className="text-xs text-zinc-500 mb-4 tracking-wide">
                2026 · Freelance work · Product launch platform
              </p>

              <p className="text-zinc-400 leading-8 mb-4">
                Web platform built to support the launch and presale of an upcoming football game.
              </p>

              <p className="text-zinc-400 leading-8 mb-4">
                Built the site from scratch, structuring the presale flow, responsive pages, and navigation around a clear launch path before release.
              </p>

              <p className="text-sm text-zinc-300 mb-3">
                Built the full frontend and presale experience from the ground up.
              </p>

              <p className="text-sm text-zinc-500 mb-8">
                Next.js · JavaScript · CSS
              </p>

              <div className="flex justify-center md:justify-start flex-wrap gap-5 items-center">
                
                <a
                  href="https://fulbo.fun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold px-6 py-3 rounded-full bg-white text-[#0a0f1c] hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-200"
                >
                  View Fulbo.fun
                </a>

                <button
                  onClick={() => openModal(fulboImages, "Fulbo", "web")}
                  className="cursor-pointer text-sm font-semibold px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] transition-all duration-200"
                >
                  Screenshots
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="rounded-2xl border border-white/8 bg-black/15 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-[1.02]">
                <button
                  type="button"
                  onClick={() => openModal(fulboImages, "Fulbo", "web")}
                  className="p-0 bg-transparent border-0 cursor-pointer"
                  aria-label="Open Fulbo screenshots"
                >
                  <img src={fulboCover} alt="Fulbo" />
                </button>
              </div>
            </div>
          </article>
        </div>
        {/* ================== MORE WORK ================== */}
<div className="mt-20 md:mt-24">

  <h3 className="text-xl md:text-2xl text-zinc-400 mb-8">
    More Work
  </h3>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

{/* CARD */}
<div className="group">
  <div className="rounded-xl border border-white/10 bg-black/20 p-3 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-white/20">
    
    <img
      src={ztreamCover}
      alt="ZtreamGames"
      className="rounded-lg mb-3"
    />

    {/* HEADER */}
    <div className="flex items-center justify-between mb-2">
      <p className="text-sm text-zinc-300">
        ZtreamGames
      </p>

      <a
        href="https://github.com/Shaikohn/ZtreamGames"
        target="_blank"
        rel="noreferrer"
        className="text-xs border border-white/10 px-2.5 py-1 rounded-full text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
      >
        GitHub
      </a>
    </div>

    <p className="text-xs text-zinc-500">
      Handled filtering logic and data flow between frontend and backend.
    </p>

  </div>
</div>

{/* CARD */}
<div className="group">
  <div className="rounded-xl border border-white/10 bg-black/20 p-3 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-white/20">
    
    <img
      src={cuevanixCover}
      alt="Cuevanix"
      className="rounded-lg mb-3"
    />

    {/* HEADER */}
    <div className="flex items-center justify-between mb-2">
      <p className="text-sm text-zinc-300">
        Cuevanix
      </p>

      <a
        href="https://github.com/Shaikohn/Cuevanix"
        target="_blank"
        rel="noreferrer"
        className="text-xs border border-white/10 px-2.5 py-1 rounded-full text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
      >
        GitHub
      </a>
    </div>

    <p className="text-xs text-zinc-500">
      Built cart logic and handled checkout flow with Stripe integration.
    </p>

  </div>
</div>

  </div>
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
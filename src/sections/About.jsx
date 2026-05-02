import logo from "../assets/logo.png";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#0a0f1c] text-zinc-100 pt-16 md:pt-20 pb-16 md:pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-[0.75fr_1.25fr] gap-12 md:gap-16 items-start">
          
          {/* LEFT */}
          <div className="md:mt-6 lg:mt-8">
            <p className="text-sm text-zinc-400 mb-5 tracking-wide">
              About
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/15 blur-lg rounded-full" />
                <img
                  src={logo}
                  alt="Shai.Dev"
                  className="relative w-11 h-11 object-contain"
                />
              </div>

              <span className="text-sm text-zinc-400 tracking-wide">
                Shai.Dev
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08] max-w-[16ch] mx-auto md:mx-0 text-center md:text-left">
              How I work on real systems
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-2xl">
            <p className="text-zinc-200 text-lg leading-8 mb-8">
              I’m Shai, a developer focused on mobile products and frontend systems that need to behave consistently under real use. Most of my work is in React Native and React, with a strong focus on real-time flows, state handling, and product behavior.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mb-8">
              In Impostor Futbolero, I built the full app and handled real-time synchronization between players during rooms, voting, and round changes. The main challenge was keeping the game state consistent across multiple clients without breaking the flow of the match.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mb-10">
              That is the kind of work I enjoy most: building products where logic matters as much as UI, and where small state mistakes turn into real product problems.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mb-10">
              I also build freelance products from scratch, taking care of the implementation and product flow needed to turn an idea into something people can actually use.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <span className="min-w-[170px] text-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                React & React Native
              </span>
              <span className="min-w-[110px] text-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                Firebase (Realtime)
              </span>
              <span className="min-w-[160px] text-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                Multiplayer systems
              </span>
            </div>

            <p className="text-sm text-zinc-500 tracking-wide">
              Currently focused on building mobile-first products and looking
              for full-time opportunities where I can contribute and keep
              growing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
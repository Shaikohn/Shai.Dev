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
              I build clear, structured products.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-2xl">
            <p className="text-zinc-200 text-lg leading-8 mb-8">
              I’m Shai, a developer focused on building modern digital products,
              with a strong interest in mobile experiences. My current work is
              centered around React Native, while maintaining a solid foundation
              in web development with React, Node.js and MongoDB.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mb-8">
              I focus on building products that are easy to understand and
              consistent to use. I care about structure, not just in code, but
              in how users interact with what I build. Every decision has a
              purpose — from layout to logic.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mb-10">
              I enjoy turning ideas into real, usable products that feel clear,
              intentional and well put together, without adding unnecessary
              complexity.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <span className="min-w-[170px] text-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                Mobile-first mindset
              </span>
              <span className="min-w-[110px] text-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                Clear UI
              </span>
              <span className="min-w-[160px] text-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                Structured systems
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
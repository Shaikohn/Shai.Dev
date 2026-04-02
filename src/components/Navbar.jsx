import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#0a0f1c]/80 backdrop-blur-md px-4 sm:px-5 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
          
          {/* Brand */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-2.5 shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={logo}
              alt="Shai.Dev"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-105"
            />

            <span className="text-sm sm:text-base font-semibold tracking-tight leading-none">
              <span className="text-sky-400 transition-colors duration-300 group-hover:text-sky-300">
                Shai
              </span>
              <span className="text-lime-400 transition-colors duration-300 group-hover:text-lime-300">
                .Dev
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a
              href="#projects"
              className="group relative text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              Projects
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#about"
              className="group relative text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              About
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#contact"
              className="group relative text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              Contact
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 text-zinc-100 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          >
            <span className="sr-only">Menu</span>

            <div className="relative w-4 h-4">
              <span
                className={`absolute left-0 top-[2px] block h-0.5 w-4 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-4 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] block h-0.5 w-4 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-60 opacity-100 mt-3 translate-y-0" : "max-h-0 opacity-0 mt-0 -translate-y-2"
          }`}
        >
          <nav className="rounded-2xl border border-white/10 bg-[#0a0f1c]/90 backdrop-blur-md px-4 py-4 flex flex-col gap-4 text-sm text-zinc-300 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <a
              href="#projects"
              onClick={closeMenu}
              className="transition-all duration-300 hover:text-white hover:translate-x-1"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="transition-all duration-300 hover:text-white hover:translate-x-1"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="transition-all duration-300 hover:text-white hover:translate-x-1"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
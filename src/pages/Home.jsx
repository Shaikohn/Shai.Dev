import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <main className="bg-[#0a0f1c] min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
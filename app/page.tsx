import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Qualifications from "@/components/Qualifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen">
      <Nav />
      <LeftSidebar />
      <RightSidebar />

      {/* Hero is full-bleed, no container */}
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24 space-y-24">
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="qualifications" className="scroll-mt-24">
          <Qualifications />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
    </div>
  );
}

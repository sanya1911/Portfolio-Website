import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Qualifications from "@/components/Qualifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen">
      {/* Left vertical sidebar (desktop) / top bar + drawer (mobile) */}
      <Nav />

      {/* Main content — offset by sidebar width on desktop, top bar on mobile */}
      <div className="lg:ml-64 pt-14 lg:pt-0">
        <section id="home" className="scroll-mt-8">
          <Hero />
        </section>

        <main className="max-w-5xl mx-auto px-6 sm:px-10 pb-24 space-y-24">
          <section id="about" className="scroll-mt-8">
            <About />
          </section>
          <section id="skills" className="scroll-mt-8">
            <Skills />
          </section>
          <section id="qualifications" className="scroll-mt-8">
            <Qualifications />
          </section>
          <section id="projects" className="scroll-mt-8">
            <Projects />
          </section>
          <section id="contact" className="scroll-mt-8">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

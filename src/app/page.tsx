import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Education } from "@/components/portfolio/education";
import { Experience } from "@/components/portfolio/experience";
import { Footer } from "@/components/portfolio/footer";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

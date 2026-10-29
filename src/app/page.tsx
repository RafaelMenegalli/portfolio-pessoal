import { ContactFooter } from "@/components/sections/contact-footer";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Skills />
        <Experience />
      </main>
      <ContactFooter />
    </>
  );
}

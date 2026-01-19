import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";
import { ProjectsSection } from "./components/projects-section";
import { ServicesSection } from "./components/services-section";
import { SkillsSection } from "./components/skills-section";


export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}

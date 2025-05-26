import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import TechStackSection from "@/components/tech-stack-section"
import ContactSection from "@/components/contact-section"
import FloatingElements from "@/components/floating-elements"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
    </div>
  )
}

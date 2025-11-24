import HeroSection from "./public/HeroSection";
import ProjectSection from "./public/ProjectSection";
import ContactMe from "./public/ContactMe";
import SkillSection from "./public/SkillSection";

export default function HomePage() {
  return (
    <div className="transition-all duration-700">
      <HeroSection />
      <div className="bg-white dark:bg-black"> <SkillSection/></div>
      <ProjectSection />
      <ContactMe />
    </div>
  );
}

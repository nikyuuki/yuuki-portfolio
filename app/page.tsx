import HeroSection from "./public/HeroSection";
import ProjectSection from "./public/ProjectSection";
import ContactMe from "./public/ContactMe";
import SkillSection from "./public/SkillSection";

export default function HomePage() {
  return (
    <div className="transition-all duration-700">

      <div
        className="
          absolute top-0 left-0 w-full
          h-[50vh]
          bg-[#EBD8FF]
          dark:bg-purple-900
          z-[1]
        "
      />
      <HeroSection />
      <div className="bg-white dark:bg-black"> <SkillSection/></div>
      <ProjectSection />
      <ContactMe />
    </div>
  );
}

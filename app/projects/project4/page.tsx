import ProjectModule from "../../components/ProjectModule";
import { imageBasePath } from "../../lib/config";

export default function Project4() {
  return (
    <ProjectModule
      title="My Portfolio Website"
      subtitle="A system to showcase my projects and skills using Next.js and Tailwind CSS"
      breadcrumb="My Portfolio Website"
      images={[
        `${imageBasePath}/project4-preview.webp`,
        `${imageBasePath}/project4-1.webp`,
        `${imageBasePath}/project4-2.webp`,
        `${imageBasePath}/project4-3.webp`,
      ]}
      overview={`" This portfolio website is built using Next.js for the backend and
frontend, with Tailwind CSS for styling. It features a modern,
responsive design that adapts seamlessly to different screen sizes."`}
      technologies={[
        "Next.js (Backend & Frontend)",
        "Tailwind CSS (Styling)",
        "Framer Motion (Animations)",
        "GitHub (Deployment)",
      ]}
      features={[
        "Interactive project showcase",
        "Responsive design with Tailwind CSS",
        "Dark mode support",
        "Smooth animations with Framer Motion",
      ]}

      /* NEW FIELDS */
      quotes="A portfolio is not just a website — it’s the story of who you are as a developer."
      position="Project Manager & Fullstack Developer"
      problems={[
        "Needed a professional place to display all my projects clearly",
        "Hard to create a design that looks modern but still lightweight",
        "Animations caused layout shift when not implemented carefully",
        "Maintaining both dark and light mode styles consistently",
      ]}
      solutions={[
        "Designed and built a custom project showcase using reusable components",
        "Used Tailwind CSS to maintain a clean, scalable design system",
        "Implemented Framer Motion with controlled animations to prevent layout issues",
        "Created a theme-aware styling structure for seamless dark mode support",
      ]}
    />
  );
}

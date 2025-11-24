
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
              "Next.js (backend)",
              "Next.js + Tailwind CSS (frontend)",
              "Framer Motion (animations)",
              "GitHub (deployment)",
      ]}
      features={[
              "Interactive project showcase",
              "Responsive design with Tailwind CSS",
              "Dark mode support",
              "Responsive & mobile-friendly design",
      ]}
    />
  );
}

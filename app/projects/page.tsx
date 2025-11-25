"use client";

import Image from "next/image";
import Link from "next/link";
import { imageBasePath } from "../lib/config";
import { useTheme } from "../context/ThemeContext";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const { isDay } = useTheme();

  return (
    <section data-aos="fade-down" className="pt-8 w-full max-w-8xl mx-auto px-2">
      <h2 className="text-3xl font-bold mb-6 text-center">
        My Project
      </h2>

      <div className="px-4 md:px-20 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <ProjectCard
          title="My Portfolio"
          description="Creative system for exhibit my projects and background."
          image={`${imageBasePath}/project4-preview.webp`}
          link="/projects/project4"
        />

        <ProjectCard
          title="Lokalities Food System"
          description="Ruby on Rails-based kiosk management system."
          image={`${imageBasePath}/project1-preview.webp`}
          link="/projects/project1"
        />

        <ProjectCard
          title="My Rider ID"
          description="Creative system for managing rider identity and vehicle progress."
          image={`${imageBasePath}/project2-preview.webp`}
          link="/projects/project2"
        />

        <ProjectCard
          title="Award Istiadat Management System"
          description="A Ruby on Rails-based Award Management System."
          image={`${imageBasePath}/project3-preview.webp`}
          link="/projects/project3"
        />

      </div>
    </section>
  );
}

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

      {/* 🌸 Main Personal Project */}
      <h2 className="text-3xl font-bold mb-6 text-center">
        My Project
      </h2>
      {/* 🌸 Next.js Section */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-center underline underline-offset-8 decoration-purple-400 decoration-4">
        Next.js Project
      </h2>

      <div className="px-4 md:px-20 pt-5 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="My Portfolio (Next.js)"
          description="Modern responsive portfolio built with Next.js."
          image={`${imageBasePath}/project4-preview.webp`}
          link="/projects/project4"
        />
      </div>

      {/* 🌸 Ruby on Rails Section */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-center underline underline-offset-8 decoration-purple-400 decoration-4">
        Ruby on Rails Projects
      </h2>

      <div className="px-4 md:px-20 pb-10 pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

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

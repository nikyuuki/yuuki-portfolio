"use client";

import Link from "next/link";
import { imageBasePath } from "../lib/config";
import { useTheme } from "../context/ThemeContext";
import ProjectCard from "../components/ProjectCard"

export default function ProjectSection() {
    const { isDay } = useTheme();

  return (
    <section className="relative bg-[#ffffff] dark:bg-[#000000] pt-6 pb-0">
      <h2 className="text-3xl font-bold mb-6  text-center">
        My Project
      </h2>

      <div className="px-4 md:px-40 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

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
        title="Portfolio Website"
        description="Modern responsive portfolio with interactive effects."
        image={`${imageBasePath}/project3-preview.webp`}
        link="/projects/project3"
      />

      </div>

      {/* Button */}
      <div className="flex justify-center relative z-20">
        <Link href="/projects" className="cute-button">
          🌸 View My Work
          <span className="cute-button-glow"></span>
        </Link>

      </div>
      {/* 🌊 Wave Transition */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 h-32 md:h-44 overflow-hidden -mt-16">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44C379.39,45.65,435.55,26.31,493.39,14.58C575.78-1.83,661.53-3.08,743.84,12.52C812.89,25.61,880.11,49.72,951.22,55.97C1021.47,62.16,1094.44,47.74,1158,17.35V120H0V90.72C100.21,72.11,201.39,67.22,321.39,56.44Z"
            fill={isDay ? "#EAD8FF" : "#4a0b73"}
          />
        </svg>
      </div>
    </section>
  );
}

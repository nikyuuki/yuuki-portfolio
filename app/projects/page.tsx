"use client";

import Image from "next/image";
import Link from "next/link";
import { imageBasePath } from "../lib/config";

export default function ProjectsPage() {
  return (
    <section data-aos="fade-down" className="w-full max-w-6xl mx-auto  px-2">
      {/* 🌸 Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-pink-600 dark:text-blue-300">
        My Projects
      </h1>

      {/* 🪞 Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          href="/projects/project4"
          className="group rounded-2xl overflow-hidden bg-white/40 dark:bg-white/10 backdrop-blur-md border border-pink-200/40 dark:border-blue-800/40 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-500"
        >
          <Image
            src={`${imageBasePath}/project4-preview.webp`}
            alt="Portfolio Website preview"
            width={400}
            height={250}
            loading="lazy"
            className="object-cover w-full h-48"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-pink-500 dark:group-hover:text-blue-300">
              Portfolio Website
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Next.js-based Modern responsive portfolio with interactive effects to show my projects.
            </p>
          </div>
        </Link>

        {/* Project 1 */}
        <Link
          href="/projects/project1"
          className="group rounded-2xl overflow-hidden bg-white/40 dark:bg-white/10 backdrop-blur-md border border-pink-200/40 dark:border-blue-800/40 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-500"
        >
          <Image
            src={`${imageBasePath}/project1-preview.webp`}
            alt="Lokalities Food System preview"
            width={400}
            height={250}
            loading="lazy"
            className="object-cover w-full h-48"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-pink-500 dark:group-hover:text-blue-300">
              Lokalities Food System
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Ruby on Rails-based kiosk management system for enhanced utility and product tracking.
            </p>
          </div>
        </Link>

        {/* Add more projects below */}
        <Link
          href="/projects/project2"
          className="group rounded-2xl overflow-hidden bg-white/40 dark:bg-white/10 backdrop-blur-md border border-pink-200/40 dark:border-blue-800/40 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-500"
        >
          <Image
            src={`${imageBasePath}/project2-preview.webp`}
            alt="My Rider ID preview"
            width={400}
            height={250}
            loading="lazy"
            className="object-cover w-full h-48"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-pink-500 dark:group-hover:text-blue-300">
              My Rider ID
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Creative system for managing rider information using QR technology.
            </p>
          </div>
        </Link>

        <Link
          href="/projects/project3"
          className="group rounded-2xl overflow-hidden bg-white/40 dark:bg-white/10 backdrop-blur-md border border-pink-200/40 dark:border-blue-800/40 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-500"
        >
          <Image
            src={`${imageBasePath}/project3-preview.webp`}
            alt="Award Istiadat Management System preview"
            width={400}
            height={250}
            loading="lazy"
            className="object-cover w-full h-48"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-pink-500 dark:group-hover:text-blue-300">
              Award Istiadat Management System
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              A system to upload the bulk excel to preview the data to the public.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div data-aos="fade-down" className="flex flex-col items-center justify-center w-full text-center md:text-left px-6 md:px-12 lg:px-24 py-2 space-y-20 transition-all duration-700">
      {/* 🌼 Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 py-2">
        {/* 🩷 Profile Image */}
        <div className="relative">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-[5px] border-pink-400 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,182,193,0.6)]">
            <Image
              src="/yuuki.svg"
              alt="Nik Alyaa portrait"
              width={100}
              height={100}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>

        {/* 🌸 Name & Title */}
        <div className="space-y-2 text-center md:text-left">
          <h1 className="header-fancy text-5xl font-extrabold text-pink-500 dark:text-blue-200 drop-shadow-sm tracking-wide">
            NIK ALYAA
          </h1>

          <h2 className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">
            Creative Web Designer • Developer
          </h2>
        </div>

        {/* 💌 Contact Info */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 mt-4 text-gray-700 dark:text-gray-300 text-sm md:text-base">

          {/* 📱 Phone */}
          <button
            onClick={() => {
              navigator.clipboard.writeText("+6011-18842605");
              const toast = document.createElement("div");
              toast.textContent = "✨ Copied!";
              toast.className =
                "fixed bottom-10 left-1/2 -translate-x-1/2 bg-pink-500/90 text-white text-sm px-4 py-2 rounded-full shadow-md animate-fade-in-out z-50";
              document.body.appendChild(toast);
              setTimeout(() => toast.remove(), 1200);
            }}
            className="flex items-center gap-2 hover:text-pink-500 dark:hover:text-blue-300 transition-all"
          >
            <span>📱</span>
            <span className="underline underline-offset-2 cursor-pointer">
              +6011-18842605
            </span>
          </button>

          {/* Divider (cute dot) */}
          <span className="hidden sm:inline text-gray-400">•</span>

          {/* 📧 Email */}
          <button
            onClick={() => {
              navigator.clipboard.writeText("nikalyaa5@gmail.com");
              const toast = document.createElement("div");
              toast.textContent = "✨ Copied!";
              toast.className =
                "fixed bottom-10 left-1/2 -translate-x-1/2 bg-blue-600/90 text-white text-sm px-4 py-2 rounded-full shadow-md animate-fade-in-out z-50";
              document.body.appendChild(toast);
              setTimeout(() => toast.remove(), 1200);
            }}
            className="flex items-center gap-2 hover:text-pink-500 dark:hover:text-blue-300 transition-all"
          >
            <span>💌</span>
            <span className="underline underline-offset-2 cursor-pointer">
              nikalyaa5@gmail.com
            </span>
          </button>

          {/* Divider (cute dot) */}
          <span className="hidden sm:inline text-gray-400">•</span>

          {/* 🌐 Social Links */}
          <a
            href="https://www.linkedin.com/in/nik-alyaa-nasuha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-500 dark:hover:text-blue-300 transition-all"
          >
            <span>💼</span>
            <span className="underline underline-offset-2">LinkedIn: Nik Alyaa Nasuha</span>
          </a>

          <a
            href="https://github.com/nikyuuki"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-500 dark:hover:text-blue-300 transition-all"
          >
            <span>🐙</span>
            <span className="underline underline-offset-2">GitHub: nikyuuki</span>
          </a>
        </div>

        {/* ✨ Quote */}
        <blockquote className="mt-6 text-lg md:text-xl italic font-medium text-gray-700 dark:text-gray-300 border-l-4 border-pink-400 dark:border-blue-400 pl-4 md:pl-6 max-w-3xl">
          “Build your own world, enhance your creativity and you will see your dream be alive.”
        </blockquote>
      </section>

      {/* 🌸 Featured Projects */}
      <section className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-pink-600 dark:text-blue-300 text-center">
          🌸 Featured Projects
        </h2>

      {/* 🪞 Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <Link
          href="/projects/project1"
          className="group rounded-2xl overflow-hidden bg-white/40 dark:bg-white/10 backdrop-blur-md border border-pink-200/40 dark:border-blue-800/40 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-500"
        >
          <Image
            src="/project1-preview.png"
            alt="Lokalities Food System preview"
            width={400}
            height={250}
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
            src="/project2-preview.png"
            alt="My Rider ID preview"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-pink-500 dark:group-hover:text-blue-300">
              My Rider ID
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Creative system for managing rider identity and vehicle progress.
            </p>
          </div>
        </Link>

        <Link
          href="/projects/project3"
          className="group rounded-2xl overflow-hidden bg-white/40 dark:bg-white/10 backdrop-blur-md border border-pink-200/40 dark:border-blue-800/40 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-500"
        >
          <Image
            src="/project3-preview.png"
            alt="Portfolio Website preview"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-pink-500 dark:group-hover:text-blue-300">
              Portfolio Website
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Modern responsive portfolio with interactive effects.
            </p>
          </div>
        </Link>
      </div>
        {/* 💖 Centered Cute Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/projects"
            className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-all duration-500
              bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500
              dark:from-blue-700 dark:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600
              shadow-[0_0_20px_rgba(255,182,193,0.4)] hover:shadow-[0_0_25px_rgba(173,216,230,0.4)]
              hover:scale-105"
          >
            🌸 View My Work
            <span className="absolute -z-10 inset-0 rounded-full bg-white/20 blur-md animate-pulse"></span>
          </Link>
        </div>
      </section>


      {/* 💌 Call To Action */}
      <section className="text-center space-y-4">
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
          Let’s bring your ideas to life together.
        </p>
        <a
          href="https://wa.me/601118842605"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500 dark:from-blue-700 dark:to-purple-700 shadow-md hover:shadow-lg transition-all duration-500"
        >
          💌 Contact Me
        </a>
      </section>
    </div>
  );
}

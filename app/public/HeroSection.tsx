"use client";

import Image from "next/image";
import { imageBasePath } from "../lib/config";
import { useTheme } from "../context/ThemeContext";

export default function HeroSection() {
  const { isDay } = useTheme();

  return (
    <section className="relative w-full pt-2 overflow-hidden">

      {/* 🌸 Top Background */}
      <div
        className="
          absolute top-0 left-0 w-full
          h-[50vh]
          bg-[#EBD8FF]
          dark:bg-purple-900
          z-[1]
        "
      />

      {/* 🌸 Bottom Background */}
      <div
        className="
          absolute top-[50vh] left-0 w-full
          h-[50vh]
          bg-white
          dark:bg-black
          z-0
        "
      />

      {/* CONTENT */}
      <div className="relative z-[2] flex flex-col items-center justify-center pt-10 pb-10">
        <div
          className="
            w-[90%] md:w-[80%]
            rounded-3xl
            bg-[#FBF5FF]
            dark:bg-[#E8D7FF]
            shadow-xl border border-white/50
            p-8 md:p-12
            text-center flex flex-col items-center
          "
        >
          {/* PROFILE IMAGE */}
          <div className="relative mb-6">
            <div
              className="
                w-44 h-44 md:w-52 md:h-52
                rounded-full overflow-hidden
                border-[6px] border-purple-400
                shadow-[0_0_30px_rgba(173,137,255,0.5)]
                transition-all duration-500 hover:scale-105
              "
            >
              <Image
                src={`${imageBasePath}/yuuki.webp`}
                alt="Nik Alyaa portrait"
                width={208}
                height={208}
                priority
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold drop-shadow-sm tracking-wide">
            NIK ALYAA
          </h1>
          <h2 className="mt-2 text-lg md:text-xl font-medium">
            Creative Web Designer • Developer
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-6 text-gray-700 dark:text-black-300 text-sm md:text-base">
            <button
              onClick={() => {
                navigator.clipboard.writeText("+6011-18842605");
                const toast = document.createElement("div");
                toast.textContent = "✨ Copied!";
                toast.className =
                  "fixed bottom-10 left-1/2 -translate-x-1/2 bg-purple-500/90 text-white text-sm px-4 py-2 rounded-full shadow-md animate-fade-in-out z-50";
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 1200);
              }}
              className="flex items-center gap-2 hover:text-purple-500 transition-all"
            >
              <span>📱</span>
              <span className="underline underline-offset-2 cursor-pointer">
                +6011-18842605
              </span>
            </button>

            <span className="hidden sm:inline text-gray-400">•</span>

            <button
              onClick={() => {
                navigator.clipboard.writeText("nikalyaa5@gmail.com");
                const toast = document.createElement("div");
                toast.textContent = "✨ Copied!";
                toast.className =
                  "fixed bottom-10 left-1/2 -translate-x-1/2 bg-blue-500/90 text-white text-sm px-4 py-2 rounded-full shadow-md animate-fade-in-out z-50";
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 1200);
              }}
              className="flex items-center gap-2 hover:text-purple-500 transition-all"
            >
              <span>💌</span>
              <span className="underline underline-offset-2 cursor-pointer">
                nikalyaa5@gmail.com
              </span>
            </button>

            <span className="hidden sm:inline text-white-400">•</span>

            <a
              href="https://www.linkedin.com/in/nik-alyaa-nasuha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-500 transition-all"
            >
              <span>💼</span>
              <span className="underline underline-offset-2">
                LinkedIn: Nik Alyaa Nasuha
              </span>
            </a>
            <a
              href="https://github.com/nikyuuki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-500 transition-all"
            >
              <span>🐙</span>
              <span className="underline underline-offset-2">
                GitHub: nikyuuki
              </span>
            </a>
          </div>

          <blockquote className="mt-8 text-lg md:text-xl italic font-medium text-gray-700 border-l-4 border-purple-400 dark:border-blue-400 pl-4 md:pl-6 max-w-2xl">
            “Build your own world, enhance your creativity and you will see your dream be alive.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

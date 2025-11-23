"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { imageBasePath } from "../../lib/config";

function TypewriterWords({ text }: { text: string }) {
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);

  const cleaned = text
    .replace(/^\s+/, "")        // remove ALL leading whitespace
    .replace(/\n\s+/g, "\n");   // remove new line indentation

  const words = cleaned.split(/\s+/).filter(Boolean);

  useEffect(() => {
    setDisplayedWords([]);

    let i = 0;
    const interval = setInterval(() => {
      if (i < words.length) {
        setDisplayedWords((prev) => [...prev, words[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [cleaned]);

  return (
    <p className="typewriter text-gray-700 dark:text-gray-300 leading-relaxed" style={{ whiteSpace: "pre-wrap" }}>
      {displayedWords.join(" ")}
    </p>
  );
}

function TypewriterList({ items }: { items: string[] }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i <= items.length) {
        setVisibleCount(i);
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed">
      {items.slice(0, visibleCount).map((item, index) => (
        <li
          key={index}
          className="opacity-0 animate-fade-in typing-item"
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Project1Page() {
  const images = [
    `${imageBasePath}/project2-preview.png`,
    `${imageBasePath}/project2-1.png`,
    `${imageBasePath}/project2-2.png`,
    `${imageBasePath}/project2-3.png`,
    `${imageBasePath}/project2-4.png`,
];

const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, 5000);

  return () => clearInterval(timer);
}, [images.length]);

const [zoomed, setZoomed] = useState(false);

const nextImage = () => {
  setCurrentIndex((prev) => (prev + 1) % images.length);
};

const prevImage = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );
};
  return (
    <section className="max-w-5xl mx-auto py-2 md:px-10 space-y-10 relative">
        {/* 🧭 Breadcrumb */}
      <div className="pt-1 text-sm md:text-base text-gray-700 dark:text-gray-300 mb-1">
        <Link
          href="/projects"
          className="hover:text-pink-500 dark:hover:text-blue-300 transition-colors"
        >
          My Project
        </Link>
        <span className="mx-1 text-gray-400">«</span>
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          MyRiderID System
        </span>
      </div>

      {/* 🌸 Floating Project Banner */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed left-0 right-0 mx-auto
          w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]
          bg-gradient-to-r from-pink-200/80 to-blue-200/80 dark:from-blue-900/80 dark:to-purple-900/80
          backdrop-blur-lg border border-pink-300/40 dark:border-blue-800/40
          shadow-[0_0_25px_rgba(255,182,193,0.4)] dark:shadow-[0_0_25px_rgba(150,180,255,0.4)]
          rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          {/* 🌸 Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-pink-600 dark:text-blue-200 drop-shadow-sm">
            {`🌸 MyRiderID System`}
          </h1>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-1 text-center md:text-left">
            {`A Ruby on Rails-based QR Rider Management system`}
          </p>
        </div>

      </motion.div>

      {/* ✨ Space below fixed banner */}
      <div className="pt-20" />

      {/* ✨ Project Header */}
      <div className="text-center pt-3 space-y-4">
               {/* ✨ Quote */}
        <blockquote className="mt-6  text-lg md:text-xl italic font-medium text-gray-700 dark:text-gray-300 border-l-4 border-pink-400 dark:border-blue-400 pl-4 md:pl-6 max-w-3xl">
          A centralized rider management for emergency that utilise QR to show the rider information, emergency contact
          and health information in case of accident or lose of the helmet that have the QR.
        </blockquote>
      </div>

      {/* 🪞 Project Image Slider */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto">

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
            relative w-full rounded-2xl overflow-hidden
            bg-gray-200/40 dark:bg-blue-950/40
            flex items-center justify-center
          "
          style={{
            height: window?.innerWidth < 768
              ? "min(35vh, 320px)"   // 📱 mobile
              : "min(50vh, 450px)",  // 💻 desktop
          }}
        >

          {/* Blurred background */}
          <div className="absolute inset-0 blur-3xl scale-110 opacity-60">
            <Image
              src={images[currentIndex]}
              alt={`Background ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Main image */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              width={800}
              height={1000}
              onClick={() => setZoomed(true)}
              className="object-contain w-auto max-w-full h-full max-h-full cursor-zoom-in rounded-2xl shadow-xl border border-pink-200/40 dark:border-blue-800/40 transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      <button
        onClick={(e) => { e.stopPropagation(); prevImage(); }}
        className="psp-arrow psp-left"
      >
        ‹
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); nextImage(); }}
        className="psp-arrow psp-right"
      >
        ›
      </button>

        {/* Counter */}
        <div className="flex flex-col items-center mt-3">
          <p className="text-[11px] text-pink-400 dark:text-blue-300 mt-1 animate-floaty">
            ✨ Click Picture to Zoom ✨
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {currentIndex + 1} / {images.length}
          </p>
        </div>

        {/* Dots Indicator */}
      <div className="flex gap-2 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-3 h-3 rounded-full transition-all
              ${index === currentIndex
                ? "bg-pink-400 dark:bg-blue-300 scale-110 shadow-sm"
                : "bg-pink-200 dark:bg-blue-900 opacity-60 hover:opacity-100"
              }
            `}
          />
        ))}
      </div>

        {zoomed && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setZoomed(false)}
          >
            <Image
              src={images[currentIndex]}
              alt="Zoomed image"
              width={1200}
              height={1600}
              className="object-contain max-h-[90vh] w-auto rounded-2xl shadow-2xl border border-pink-300/50 dark:border-blue-800/50 cursor-zoom-out"
            />
          </div>
        )}
      </div>

      <div className="backdrop-blur-md bg-white/40 dark:bg-white/10 rounded-2xl shadow-md border border-pink-200/30 dark:border-blue-800/30 p-8 space-y-5">
        <h3>📖 Project Overview</h3>
        <div className="box-white">
          <TypewriterWords
          text={`" MyRiderID is a comprehensive rider management platform designed to enhance safety and efficiency for motorcycle riders.
                Built with Ruby on Rails for the backend with Tailwind CSS for the frontend, this system offers a user-friendly dashboard for managing rider profiles.
                The MyRiderID System aims to provide a reliable solution for rider identification and emergency response through QR code technology."`}
           />
        </div>


        <h3>🛠️ Technologies Used</h3>
        <div className="box-white">
          <TypewriterList
            items={[
              "Ruby on Rails (Backend)",
              "PostgreSQL (Database)",
              "javascript + Tailwind CSS (Frontend)",
            ]}
          />
        </div>


        <h3>🌸 Key Features</h3>
         <div className="box-white">
          <TypewriterList
            items={[
              "Profile management dashboard",
              "QR code generation for riders in admin panel",
              "Emergency contact & health info storage",
              "Responsive & mobile-friendly design",
            ]}
          />
        </div>
      </div>

      {/* 💌 Back Button (bottom too) */}
      <div className="text-center">
        <Link
          href="/projects"
          className="inline-block mt-6 px-8 py-3 rounded-full font-semibold text-white transition-all duration-500
            bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500
            dark:from-blue-700 dark:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600
            shadow-lg hover:shadow-xl"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
}

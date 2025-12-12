"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------------- TYPEWRITER TEXT ---------------- */
function TypewriterWords({ text }: { text: string }) {
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const words = text.replace(/\s+/g, " ").trim().split(" ");

  useEffect(() => {
    setDisplayedWords([]);
    let i = 0;
    const interval = setInterval(() => {
      if (i < words.length) setDisplayedWords((prev) => [...prev, words[i]]);
      else clearInterval(interval);
      i++;
    }, 250);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      {displayedWords.map((w, i) => (
        <span key={i}>
          {w}
          {i < words.length - 1 && " "}
        </span>
      ))}
    </p>
  );
}

/* ---------------- TYPEWRITER LIST ---------------- */
function TypewriterList({ items }: { items: string[] }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < items.length) setCount(i + 1);
      else clearInterval(interval);
      i++;
    }, 550);

    return () => clearInterval(interval);
  }, []);

  return (
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed">
      {items.slice(0, count).map((item, index) => (
        <li
          key={index}
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ---------------- MODULE ---------------- */
export default function ProjectModule({
  title,
  subtitle,
  breadcrumb,
  images,
  overview,
  technologies,
  features,
  quotes,
  position,
  problems,
  solutions,
}: {
  title: string;
  subtitle: string;
  breadcrumb: string;
  images: string[];
  overview: string;
  technologies: string[];
  features: string[];
  quotes?: string;
  position?: string;
  problems?: string[];
  solutions?: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((p) => (p + 1) % images.length),
      5000
    );
    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => setCurrentIndex((p) => (p + 1) % images.length);
  const prev = () =>
    setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <section className="max-w-5xl mx-auto pt-10 px-3 md:px-10 space-y-10">

      {/* Breadcrumb */}
      <div className="pt-1 text-sm md:text-base text-gray-700 dark:text-gray-300 mb-2">
        <Link
          href="/projects"
          className="hover:text-purple-500 dark:hover:text-blue-300"
        >
          My Project
        </Link>
        <span className="mx-1 text-gray-400">«</span>
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          {breadcrumb}
        </span>
      </div>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          bg-[#f7f3ff] dark:bg-white/10
          border border-purple-100 dark:border-white/25
          backdrop-blur-xl shadow-xl
          rounded-2xl p-6 w-full mx-auto
        "
      >
        <h1 className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-blue-200">
          {title}
        </h1>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-1">
          {subtitle}
        </p>
      </motion.div>

      {/* Quote */}
      <div className="text-center">
        <blockquote className="
          text-lg md:text-xl italic font-medium
          text-gray-700 dark:text-gray-300
          border-l-4 border-purple-300 dark:border-blue-400
          pl-4 md:pl-6 mx-auto max-w-3xl
        ">
          {quotes ? `"${quotes}"` : `"${overview.slice(0, 120)}..."`}
        </blockquote>
      </div>

      {/* Image Slider */}
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
            relative w-full h-[40vh] md:h-[50vh]
            rounded-2xl overflow-hidden
            bg-[#f7f3ff] dark:bg-white/10
            border border-purple-100 dark:border-white/25
            backdrop-blur-xl
          "
        >
          {/* blurred background */}
          <div className="absolute inset-0 blur-3xl opacity-60">
            <Image
              src={images[currentIndex]}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* main image */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt=""
              width={900}
              height={900}
              onClick={() => setZoomed(true)}
              className="object-contain max-h-full cursor-zoom-in rounded-2xl shadow-xl"
            />
          </div>
        </motion.div>

        {/* arrows */}
        <button onClick={prev} className="psp-arrow psp-left">‹</button>
        <button onClick={next} className="psp-arrow psp-right">›</button>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`
                w-3 h-3 rounded-full transition-all
                ${
                  i === currentIndex
                    ? "bg-purple-500 dark:bg-blue-300 scale-110"
                    : "bg-purple-200 dark:bg-blue-900 opacity-60"
                }
              `}
            />
          ))}
        </div>

        {/* zoom */}
        {zoomed && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setZoomed(false)}
          >
            <Image
              src={images[currentIndex]}
              alt="zoom"
              width={1200}
              height={1600}
              className="object-contain max-h-[90vh] rounded-2xl shadow-2xl"
            />
          </div>
        )}
      </div>

      {/* Details */}
      <div className="
        bg-[#f7f3ff] dark:bg-white/10
        border border-purple-100 dark:border-white/25
        backdrop-blur-xl shadow-xl
        rounded-2xl p-8 space-y-6
      ">
        {/* Position */}
        {position && (
          <>
            <h3 className="text-xl font-semibold text-purple-600 dark:text-blue-300">
              👤 Role / Position
            </h3>
            <div className="box-white">
              <p className="text-gray-700 dark:text-gray-300">{position}</p>
            </div>
          </>
        )}
        <h3 className="text-xl font-semibold text-purple-600 dark:text-blue-300">
          📖 Project Overview
        </h3>
        <div className="box-white" >
         <TypewriterWords text={overview} />
        </div>
        {/* Problems */}
        {problems && problems.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-purple-600 dark:text-blue-300">
              ⚠️ Problems Faced
            </h3>
            <div className="box-white">
              <TypewriterList items={problems} />
            </div>
          </>
        )}

        {/* Solutions */}
        {solutions && solutions.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-purple-600 dark:text-blue-300">
              💡 How I Handled It
            </h3>
            <div className="box-white">
              <TypewriterList items={solutions} />
            </div>
          </>
        )}

        <h3 className="text-xl font-semibold text-purple-600 dark:text-blue-300">
          🛠 Technologies Used
        </h3>
        <div className="box-white" >
        <TypewriterList items={technologies} />
        </div>

        <h3 className="text-xl font-semibold text-purple-600 dark:text-blue-300">
          🌸 Key Features
        </h3>
        <div className="box-white" >
            <TypewriterList items={features} />
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center pb-10">
        <Link
          href="/projects"
          className="
            px-8 py-3 rounded-full font-semibold text-white
            bg-purple-500 hover:bg-purple-600
            dark:bg-blue-700 dark:hover:bg-blue-600
            shadow-lg hover:shadow-xl transition-all
          "
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
}

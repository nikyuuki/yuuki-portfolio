"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { imageBasePath } from "../lib/config";

export default function AboutMe() {
  return (
    <section className="w-full py-12 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-12 text-center">
          About Me
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            flex flex-col md:flex-row items-center md:items-start
            justify-center gap-10 md:gap-16
          "
        >
          {/* Image */}
          <div className="relative flex-shrink-0 w-56 h-72 md:w-64 md:h-80 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={`${imageBasePath}/yuuki.webp`}
                alt="Nik Alyaa portrait"
                width={208}
                height={208 }
                priority
                className="object-cover w-full h-full"
              />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center space-y-4 text-center md:text-left max-w-2xl">
            <h3 className="text-2xl font-bold text-purple-600 dark:text-blue-200">
              {"Hello! I'm NIK ALYAA 💕"}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I’m a passionate web designer and developer who loves building
              digital experiences that feel alive and meaningful. ✨
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              My work blends{" "}
              <span className="font-semibold text-purple-600 dark:text-blue-300">
                imagination and functionality
              </span>
              , transforming ideas into interactive stories that breathe life
              into the digital world.
            </p>

            <p className="italic text-gray-500 dark:text-gray-400">
              “Every creation is a heartbeat — where logic meets art.” 🌙
            </p>

            <a
            href="/nik-alyaa-resume.pdf"
            download
            className="
              inline-block mt-6 px-6 py-3
              bg-purple-600 hover:bg-purple-700
              dark:bg-blue-700 dark:hover:bg-blue-600
              text-white font-semibold
              rounded-full shadow-lg hover:shadow-xl
              transition-all duration-300
            "
          >
            📄 Download My CV
          </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

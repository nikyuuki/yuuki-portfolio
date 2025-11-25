"use client";

import { motion } from "framer-motion";
import {  Sparkles } from "lucide-react";
import SkillSection from "../public/SkillSection";
import AboutMe from "../about/AboutMe";
import Education from "../about/Education";
import Exprience from "../about/Exprience";
import { imageBasePath } from "../lib/config";


export default function AboutPage() {
  return (
    <section className="relative w-full overflow-hidden ">
    {/* 🌸 Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16"
      >
        <AboutMe/>
      </motion.div>

      {/* 💻 Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-8"
      >
      <SkillSection/>
      </motion.div>

      {/* 💼 Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-6"
      >
      <Exprience/>
      </motion.div>


      <Education/>


      {/* 🌷 Fun Personal Touch */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="pt-4 text-center space-y-4"
      >
        <div className="pt-4 flex items-center justify-center gap-2 text-pink-400 dark:text-blue-300 text-lg">
          <Sparkles className="w-5 h-5" />
          <h3>Beyond the Screen </h3>
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="box-white">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          When I’m not coding, I love creating stories, exploring games, and
          finding beauty in little things ✨. Every adventure, every smile, and
          every spark of creativity helps me see the world in colors worth
          designing for 💖.
        </p>
        </div>
      </motion.div>
    </section>
  );
}

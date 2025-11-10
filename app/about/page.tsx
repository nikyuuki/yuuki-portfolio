"use client";

import { motion } from "framer-motion";
import { Code, Palette, Heart, Briefcase, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-16 animate-fade-in">
    {/* 🌸 Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16"
      >
        {/* 🖼️ Profile Image */}
        <div className="relative flex-shrink-0 w-56 h-72 md:w-64 md:h-80 rounded-3xl overflow-hidden shadow-xl ring-4 ring-pink-300 dark:ring-blue-400 hover:scale-[1.02] transition-transform duration-500">
          <img
            src="/yuuki.svg"
            alt="Nik Alyaa portrait"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>

        {/* 💕 Text Info */}
        <div className="flex flex-col justify-center space-y-4 text-center md:text-left max-w-2xl">
          <h2 className="text-4xl font-bold text-pink-500 dark:text-blue-200">
            About Me 💕
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            I’m <span className="font-semibold">NIK ALYAA</span>, a passionate web
            designer and developer who loves building digital experiences that feel
            alive and meaningful. ✨
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            I began designing and coding because I believe creativity can shape the
            way people experience technology. My work mixes{" "}
            <span className="font-semibold text-pink-500 dark:text-blue-300">
              imagination and functionality
            </span>
            , transforming abstract ideas into interactive stories that breathe life
            into the digital world.
          </p>
          <p className="italic text-gray-500 dark:text-gray-400">
            “Every creation is a heartbeat — where logic meets art.” 🌙
          </p>
        </div>
      </motion.div>

      {/* 💻 Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-8"
      >
        <h3 className="text-2xl font-bold text-pink-500 dark:text-blue-200 flex items-center gap-2">
          <Code className="w-5 h-5" /> Skills & Tools
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-pink-200/40 dark:border-blue-900/40 shadow-sm">
            <h4 className="font-semibold text-lg mb-2 text-pink-500 dark:text-blue-200">
              💻 Technical
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>HTML, CSS, JavaScript</li>
              <li>Next.js, React</li>
              <li>Ruby on Rails</li>
              <li>Tailwind CSS</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-pink-200/40 dark:border-blue-900/40 shadow-sm">
            <h4 className="font-semibold text-lg mb-2 text-pink-500 dark:text-blue-200">
              🎨 Design
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Figma</li>
              <li>UI/UX Design</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-pink-200/40 dark:border-blue-900/40 shadow-sm">
            <h4 className="font-semibold text-lg mb-2 text-pink-500 dark:text-blue-200">
              💕 Soft Skills
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Leadership</li>
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Creative Thinking</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* 💼 Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-pink-500 dark:text-blue-200 flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> Experience
        </h3>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-pink-200/40 dark:border-blue-900/40">
            <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
              Project Manager • 2024 – Present
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Leading a team of developers to create innovative, user-focused
              web applications that blend creativity and technical precision.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-pink-200/40 dark:border-blue-900/40">
            <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
              Web Developer Freelancer • 2022 – 2024
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Crafted responsive websites and creative interfaces for clients,
              ensuring aesthetic harmony and efficient functionality.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-pink-200/40 dark:border-blue-900/40">
            <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
              Illustrator • 2022 – 2023
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Crafted responsive websites and creative interfaces for clients,
              ensuring aesthetic harmony and efficient functionality.
            </p>
          </div>
        </div>

      </motion.div>

      {/* 🎓 Education Timeline */}
      <section
        className="mt-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h3 className="subtitle text-2xl font-bold text-pink-500 dark:text-blue-200 mb-6 text-center">
          🎓 Education & Certificates
        </h3>

        <div className="relative border-l-4 border-pink-300 dark:border-blue-700 pl-6 space-y-10 max-w-2xl mx-auto">
          {/* 2023 – 2025 */}
          <div
            className="relative bg-white/60 dark:bg-blue-950/40 p-5 rounded-2xl shadow-md border border-pink-200/40 dark:border-blue-800/40 hover:scale-[1.02] transition-all duration-500 backdrop-blur-md"
            data-aos="fade-right"
          >
            <div className="absolute -left-[10px] top-5 w-5 h-5 bg-pink-400 dark:bg-blue-500 rounded-full shadow-lg"></div>
            <p className="text-sm text-gray-500 dark:text-gray-400">2023 – 2025</p>
            <h4 className="font-semibold text-pink-600 dark:text-blue-300">
              Bachelor of Computer Engineering
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Universiti Teknologi MARA (UiTM), Shah Alam
            </p>
            <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-400">
              “Exploring the bridge between creativity and technology ✨”
            </p>
          </div>

          {/* Certificate */}
          <div
            className="relative bg-white/60 dark:bg-blue-950/40 p-5 rounded-2xl shadow-md border border-pink-200/40 dark:border-blue-800/40 hover:scale-[1.02] transition-all duration-500 backdrop-blur-md"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div className="absolute -left-[10px] top-5 w-5 h-5 bg-pink-400 dark:bg-blue-500 rounded-full shadow-lg"></div>
            <p className="text-sm text-gray-500 dark:text-gray-400">2024</p>
            <h4 className="font-semibold text-pink-600 dark:text-blue-300">
              CPRE – Certified Professional for Requirements Engineering
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Awarded by Malaysian Software Testing Board (MSTB)
            </p>
          </div>

          {/* 2021 – 2023 */}
          <div
            className="relative bg-white/60 dark:bg-blue-950/40 p-5 rounded-2xl shadow-md border border-pink-200/40 dark:border-blue-800/40 hover:scale-[1.02] transition-all duration-500 backdrop-blur-md"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="absolute -left-[10px] top-5 w-5 h-5 bg-pink-400 dark:bg-blue-500 rounded-full shadow-lg"></div>
            <p className="text-sm text-gray-500 dark:text-gray-400">2021 – 2023</p>
            <h4 className="font-semibold text-pink-600 dark:text-blue-300">
              Diploma in Computer Science
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Universiti Teknologi MARA (UiTM), Machang
            </p>
            <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-400">
              “Built my foundation in code and problem-solving 💻”
            </p>
          </div>
        </div>
      </section>


      {/* 🌷 Fun Personal Touch */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-2 text-pink-400 dark:text-blue-300 text-lg">
          <Sparkles className="w-5 h-5" />
          <h3>Beyond the Screen 🌸</h3>
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

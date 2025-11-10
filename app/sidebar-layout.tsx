"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("day");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "night");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "day" ? "night" : "day");
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isDay = theme === "day";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // 🌸❄️ Hydration-safe falling effects
const [flakes, setFlakes] = useState<
  { left: number; duration: number; delay: number; rotate: number; size: number; img: string }[]
>([]);

useEffect(() => {
  const items = [...Array(25)].map(() => {
    const randomPetal = Math.random() < 0.5 ? "/sakura1.svg" : "/sakura2.svg";
    const randomSnow = Math.random() < 0.5 ? "/snow1.svg" : "/snow2.svg";

    return {
      left: Math.random() * 100,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
      rotate: Math.random() * 360,
      size: 20 + Math.random() * 40,
      img: isDay ? randomPetal : randomSnow,
    };
  });
  setFlakes(items);
}, [isDay]);

  return (
    <div
      className={`flex min-h-screen transition-all overflow-x-hidden duration-700 ${
        isDay
          ? "bg-gradient-to-br from-pink-100 via-white to-blue-100 text-gray-800"
          : "bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-gray-100"
      }`}
    >
      {/* ✨ Sidebar */}
      <aside
        className={`sticky top-0 h-screen w-72 flex flex-col justify-between border-r backdrop-blur-md shadow-lg transition-all duration-700 ${
          isDay
            ? "border-pink-200/70 bg-white/60"
            : "border-indigo-700/60 bg-white/10"
        } hidden md:flex`}
      >
        <div>
          {/* 🌸 Name */}
          <div className="text-center mb-6 mt-6">
            <h1
              className={`text-3xl font-serif font-bold tracking-wide ${
                isDay
                  ? "text-pink-500 drop-shadow-[0_1px_1px_rgba(255,182,193,0.8)]"
                  : "text-blue-200 drop-shadow-[0_0_5px_rgba(180,200,255,0.8)]"
              }`}
            >
              {isDay ? "🌸 Nik Alyaa 🌸" : "❄️ Nik Alyaa ❄️"}
            </h1>
            <div
              className={`mx-auto mt-2 h-[3px] w-24 rounded-full ${
                isDay
                  ? "bg-gradient-to-r from-pink-400 to-blue-300 shadow-[0_0_10px_2px_rgba(255,182,193,0.6)]"
                  : "bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_10px_2px_rgba(173,216,230,0.5)]"
              }`}
            ></div>
          </div>

          {/* 📖 Navigation Menu */}
          <nav
            className={`flex flex-col gap-2 text-lg font-medium ${
              isDay ? "text-gray-700" : "text-gray-200"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative py-2 px-4 rounded-md transition-all duration-300 group ${
                    isDay
                      ? "hover:bg-pink-100 hover:text-pink-600"
                      : "hover:bg-indigo-800/40 hover:text-blue-200"
                  } ${
                    isActive
                      ? isDay
                        ? "bg-pink-200/60 text-pink-700 font-semibold"
                        : "bg-indigo-700/50 text-blue-300 font-semibold"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

      {/* 🌗 Theme Toggle (glowing magic button) */}
      <button
        onClick={toggleTheme}
        className={`mt-8 mb-6 self-center px-8 py-3 rounded-lg text-center font-semibold shadow-lg transition-all duration-500 relative overflow-hidden ${
          isDay
            ? "bg-gradient-to-r from-pink-300 to-blue-300 text-white hover:shadow-[0_0_25px_rgba(255,182,193,0.8)]"
            : "bg-gradient-to-r from-purple-800 to-blue-700 text-yellow-100 hover:shadow-[0_0_25px_rgba(180,200,255,0.8)]"
        }`}
      >
        {/* ✨ Glowing Aura (soft pulse animation) */}
        <span
          className={`absolute inset-0 rounded-lg blur-md opacity-75 animate-pulse transition-all duration-700 ${
            isDay
              ? "bg-gradient-to-r from-pink-300/100 to-blue-300/80"
              : "bg-gradient-to-r from-purple-800/80 to-blue-700/80"
          }`}
        ></span>

        {/* 💖 Button Text */}
        <span className="relative z-10">
          {isDay ? "Switch Night ❄️" : "Switch Day 🌸"}
        </span>
      </button>

      </aside>

      {/* 📱 Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg transition-all ${
          isDay
            ? "bg-pink-200/80 hover:bg-pink-300 text-pink-800"
            : "bg-indigo-900/70 hover:bg-indigo-800 text-blue-100"
        }`}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* ✨ Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed inset-0 z-30 md:hidden backdrop-blur-md flex flex-col justify-center items-center space-y-6 text-2xl ${
              isDay
                ? "bg-gradient-to-br from-pink-100/90 to-blue-100/90"
                : "bg-gradient-to-br from-indigo-950/90 to-blue-900/90"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`relative px-6 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? isDay
                        ? "bg-pink-300/70 text-pink-800 font-semibold shadow-md"
                        : "bg-indigo-700/70 text-blue-200 font-semibold shadow-md"
                      : isDay
                      ? "hover:text-pink-600"
                      : "hover:text-blue-200"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <button
              onClick={toggleTheme}
              className={`mt-8 px-6 py-2 rounded-lg font-semibold text-lg shadow-md ${
                isDay
                  ? "bg-gradient-to-r from-pink-300 to-blue-300 hover:from-pink-400 hover:to-blue-400 text-white"
                  : "bg-gradient-to-r from-purple-800 to-blue-700 hover:from-purple-700 hover:to-blue-600 text-yellow-100"
              }`}
            >
              {isDay ? "Switch Night ❄️" : "Switch Day 🌸"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
        {/* 🌸 Right Side (Main + Falling Effects) */}
        <div className="relative flex-1 min-h-screen overflow-hidden transition-all duration-700">
        {/* falling animation (background) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {flakes.map((f, i) => (
            <div
                key={i}
                className="absolute animate-fall"
                style={{
                left: `${f.left}%`,
                animationDuration: `${f.duration}s`,
                animationDelay: `${f.delay}s`,
                transform: `rotate(${f.rotate}deg)`,
                }}
            >
                <img
                src={f.img}
                className="opacity-80"
                alt="floating particle"
                style={{
                    width: `${f.size}px`,
                    height: "auto",
                }}
                />
            </div>
            ))}
        </div>

        {/* 📖 Magical Storybook Main */}
        <main
          className={`relative z-10 p-8 md:p-10 transition-all duration-700 min-h-screen overflow-y-auto overflow-x-hidden ${
            isDay
              ? "bg-gradient-to-br from-pink-50/60 to-blue-50/60"
              : "bg-gradient-to-br from-indigo-950/40 to-blue-900/30"
          }`}
        >
          {/* 🪄 Book Border */}
          <div
            className={`relative mx-auto w-full md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] min-h-[85vh] p-10 shadow-2xl rounded-2xl border-[6px] transition-all duration-700 overflow-hidden ${
              isDay
                ? "border-pink-200 bg-white/90 text-gray-800"
                : "border-blue-900 bg-gradient-to-br from-indigo-950/60 to-blue-950/40 text-gray-100"
            }`}
            style={{
              boxShadow: isDay
                ? "0 0 40px rgba(255,182,193,0.3)"
                : "0 0 40px rgba(150,180,255,0.3)",
            }}
          >
            {/* ✨ Decorative Inner Border (soft book edge) */}
            <div
              className={`absolute inset-3 rounded-xl border-[2px] pointer-events-none ${
                isDay ? "border-pink-100/80" : "border-blue-800/60"
              }`}
            ></div>

            {/* 📜 Page Content */}
            <div className="relative z-10 space-y-6">
              {children}
            </div>
          </div>
        </main>
        </div>
    </div>

  );
}

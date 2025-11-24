"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, User, FolderKanban  } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { imageBasePath } from "./lib/config";
import { ThemeContext } from "../app/context/ThemeContext"
import ThemeToggle from "./components/ThemeToggle";

export default function TopNavbarLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("day");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isDay = theme === "day";

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTimeout(() => setTheme(stored), 0);
    }
  }, []);


  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "night");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(isDay ? "night" : "day");
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  // Falling sakura/snow effect
  const [flakes, setFlakes] = useState<
    { left: number; duration: number; delay: number; rotate: number; size: number; img: string }[]
  >([]);

  useEffect(() => {
    const items = [...Array(25)].map(() => {
      const randomPetal =
        Math.random() < 0.5
          ? `${imageBasePath}/sakura1.svg`
          : `${imageBasePath}/sakura2.svg`;
      const randomSnow =
        Math.random() < 0.5
          ? `${imageBasePath}/snow1.svg`
          : `${imageBasePath}/snow2.svg`;
      return {
        left: Math.random() * 100,
        duration: 6 + Math.random() * 6,
        delay: Math.random() * 5,
        rotate: Math.random() * 360,
        size: 20 + Math.random() * 40,
        img: isDay ? randomPetal : randomSnow,
      };
    });
    requestAnimationFrame(() => setFlakes(items));
  }, [isDay]);
return (

/* change background here */
  <div
    className={`relative min-h-screen overflow-hidden transition-all duration-700 ${
      isDay

        ? "bg-gradient-to-br from-purple-100 via-white to-blue-100 text-gray-800"
        : "bg-gradient-to-br from-[#0a0f2c] via-[#0f1a44] to-[#1b2a6d] text-gray-100"
    }`}
  >

<header
  className={`
    fixed top-0 left-0 right-0 z-50
    flex items-center justify-between
    px-6 md:px-12
    transition-all duration-500
    rounded-b-3xl backdrop-blur-xl
    ${isDay ? "bg-[#F8F3FF]/70 text-gray-800" : "bg-[#1C1240]/70 text-gray-200"}
    ${scrolled ? "py-2" : "py-5"}
  `}
  style={{
    boxShadow: isDay
      ? "0 4px 12px rgba(173, 137, 255, 0.20)"
      : "0 4px 14px rgba(147, 197, 253, 0.25)",
  }}
>
  {/* Left: Logo */}
  <div className="flex items-center gap-3">
    <h1
      className={`text-2xl md:text-3xl font-bold font-serif transition-all duration-300 ${
        isDay ? "text-purple-600" : "text-blue-300"
      }`}
    >
      {isDay ? "🌸 Nik Alyaa" : "❄️ Nik Alyaa"}
    </h1>
  </div>

  {/* Middle: Desktop Nav */}
  <nav className="hidden md:flex items-center gap-10 font-semibold text-lg">
    {navLinks.map((link) => {
      const isActive = pathname === link.path;

      const iconMap: any = {
        "/": <Home className="w-5 h-5" />,
        "/about": <User className="w-5 h-5" />,
        "/projects": <FolderKanban className="w-5 h-5" />,
      };

      return (
        <Link key={link.path} href={link.path} className="relative group">
          {isActive && (
            <motion.div
              layoutId="activeNavBubble"
              className={`absolute -inset-y-2 -inset-x-4 rounded-xl ${
                isDay ? "bg-purple-200/60" : "bg-blue-700/40"
              } backdrop-blur-md`}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}

          <div
            className={`relative z-10 flex items-center gap-2 px-2 transition-all ${
              isActive
                ? isDay
                  ? "text-purple-700"
                  : "text-blue-300"
                : "opacity-70 group-hover:opacity-100"
            }`}
          >
            {iconMap[link.path]}
            {link.name}
          </div>
        </Link>
      );
    })}
  </nav>

  {/* Right: Theme toggle + hamburger (mobile) */}
  <div className="flex items-center gap-3">
    {/* Always visible */}
    <ThemeToggle isDay={isDay} toggleTheme={toggleTheme} />

    {/* Mobile Menu Button */}
    <button
      onClick={toggleMenu}
      className={`
        md:hidden p-2 rounded-lg transition-all duration-300
        ${isDay
          ? "bg-purple-100 text-purple-700 border border-blue-600"
          : "bg-indigo-800 text-blue-100 border border-white-200"
        }
      `}
    >
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
</header>


      {/* 📱 Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 text-2xl font-semibold ${
              isDay
                ? "bg-gradient-to-br from-indigo-100/95 to-blue-100/95 text-gray-800"
                : "bg-gradient-to-br from-indigo-950/95 to-blue-900/95 text-gray-100"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              const iconMap: any = {
                "/": <Home className="w-7 h-7" />,
                "/about": <User className="w-7 h-7" />,
                "/projects": <FolderKanban className="w-7 h-7" />,
              };

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="relative group"
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobileNavBubble"
                      className={`absolute -inset-x-6 -inset-y-3 rounded-2xl
                        ${isDay ? "bg-purple-200/60" : "bg-blue-700/40"}
                        backdrop-blur-md`}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}

                  <div
                    className={`relative z-10 flex items-center gap-3 transition-all ${
                      isActive
                        ? isDay
                          ? "text-purple-700"
                          : "text-blue-300"
                        : "opacity-70 group-hover:opacity-100"
                    }`}
                  >
                    {iconMap[link.path]}
                    {link.name}
                  </div>
                </Link>
              );
            })}

          </motion.div>
        )}
      </AnimatePresence>

    {/* 🌼 Main Content*/}
    <ThemeContext.Provider value={{ isDay }}>
      <main className="relative min-h-screen w-full transition-all duration-700">
        <div className="pt-20">
          {children}
        </div>
      </main>
    </ThemeContext.Provider>
  </div>
  );
}
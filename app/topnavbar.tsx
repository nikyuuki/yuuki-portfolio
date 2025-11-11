"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const imageBasePath =
  process.env.NODE_ENV === "production" ? "/yuuki-portfolio" : "";


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
  <div
    className={`relative min-h-screen overflow-hidden transition-all duration-700 ${
      isDay
        ? "bg-gradient-to-br from-pink-100 via-white to-blue-100 text-gray-800"
        : "bg-gradient-to-br from-[#0a0f2c] via-[#0f1a44] to-[#1b2a6d] text-gray-100"
    }`}
  >
    {/* 🌸 Fixed Background (Doesn't Scroll) */}
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* 🌸 Falling petals / snow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
              alt="falling"
              style={{ width: `${f.size}px`, height: "auto" }}
            />
          </div>
        ))}
      </div>

      {/* 🌊 Mountain & Trees */}
      <div className="absolute bottom-[-10px]  left-0 w-full overflow-visible  leading-[0]">
        <svg
          className="relative block w-[110%] h-32 -ml-[5%]"
          style={{ transform: "translateY(1px)" }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <defs>
            <linearGradient id="nightWaveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2b1a52" />
              <stop offset="100%" stopColor="#3a5c91" />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.41,168.14-17.66,250.45-2.06,69.05,13.09,136.27,37.2,207.38,43.45,70.25,6.19,143.22-8.23,206.78-38.62V120H0V90.72A600.21,600.21,0,0,0,321.39,56.44Z"
            className={`transition-all duration-700 ${
              isDay ? "fill-pink-200" : "fill-gradient-night"
            }`}
          ></path>
        </svg>

        {/* 🌲 Trees */}
        <img
          src={`${imageBasePath}/tree-left.svg`}
          alt="Left tree"
          className="absolute bottom-[-5px] left-[-30px] h-48 md:h-60 lg:h-72 xl:h-80 pointer-events-none select-none drop-shadow-lg transition-all duration-700"
          style={{
            filter: isDay
              ? "drop-shadow(0 0 8px rgba(255,192,203,0.4))"
              : "drop-shadow(0 0 10px rgba(100,150,255,0.4))",
          }}
        />
        <img
          src={`${imageBasePath}/tree-right.svg`}
          alt="Right tree"
          className="absolute bottom-[-5px] right-[-30px] h-48 md:h-60 lg:h-72 xl:h-80 pointer-events-none select-none drop-shadow-lg transition-all duration-700"
          style={{
            filter: isDay
              ? "drop-shadow(0 0 8px rgba(255,192,203,0.4))"
              : "drop-shadow(0 0 10px rgba(100,150,255,0.4))",
          }}
        />
      </div>
    </div>


      {/* 🌸 Sticky Top Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 rounded-b-3xl backdrop-blur-md ${
          isDay
            ? "bg-white/70 text-gray-800"
            : "bg-indigo-950/70 text-gray-100"
        } ${scrolled ? "py-2 shadow-md" : "py-5 shadow-sm"}`}
      >
        <div className="flex items-center gap-3">
          <h1
            className={`text-2xl md:text-3xl font-bold font-serif transition-all duration-300 ${
              isDay ? "text-pink-500" : "text-blue-300"
            }`}
          >
            {isDay ? "🌸 Nik Alyaa" : "❄️ Nik Alyaa"}
          </h1>
        </div>

        {/* 🌈 Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10 font-semibold text-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-all duration-300 ${
                  isActive
                    ? isDay
                      ? "text-pink-600 underline decoration-pink-300"
                      : "text-blue-300 underline decoration-blue-400"
                    : "hover:opacity-80"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* 🌙 Toggle Button (Desktop Only) */}
        <button
          onClick={toggleTheme}
          className={`hidden md:inline-block ml-4 px-5 py-2 rounded-xl font-semibold text-white transition-all duration-500 ${
            isDay
              ? "bg-gradient-to-r from-pink-300 to-blue-300 hover:from-pink-400 hover:to-blue-400"
              : "bg-gradient-to-r from-purple-800 to-blue-700 hover:from-purple-700 hover:to-blue-600"
          }`}
        >
          {isDay ? "Switch Night ❄️" : "Switch Day 🌸"}
        </button>

        {/* 🍔 Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden ml-3 p-2 rounded-lg ${
            isDay ? "bg-pink-100 text-pink-700" : "bg-indigo-800 text-blue-100"
          }`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                ? "bg-gradient-to-br from-pink-100/95 to-blue-100/95 text-gray-800"
                : "bg-gradient-to-br from-indigo-950/95 to-blue-900/95 text-gray-100"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-all duration-300 ${
                    isActive
                      ? isDay
                        ? "text-pink-600 underline decoration-pink-300"
                        : "text-blue-300 underline decoration-blue-400"
                      : "hover:opacity-80"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* 🌙 Theme Toggle (only inside dropdown for mobile) */}
            <button
            onClick={() => {
                toggleTheme();
                setMenuOpen(false);
            }}
            className={`mt-8 px-6 py-2 rounded-lg font-semibold text-lg shadow-md ${
                isDay
                ? "bg-gradient-to-r from-pink-300 to-blue-300 text-white"
                : "bg-gradient-to-r from-purple-800 to-blue-700 text-yellow-100"
            }`}
            >
            {isDay ? "Switch Night ❄️" : "Switch Day 🌸"}
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    {/* 🌼 Main Content (Scrollable) */}
    <main className="relative z-10 pt-28 md:pt-32 transition-all duration-700 p-6 md:p-12 overflow-y-auto">
      <div
        className={`mx-auto w-full md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70%] min-h-[85vh] p-10 rounded-2xl border-[1px] backdrop-blur-xl transition-all duration-700 shadow-[0_0_30px_rgba(255,255,255,0.1)] ${
          isDay
            ? "border-pink-200/40 bg-white/30 text-gray-800 shadow-[0_0_20px_rgba(255,182,193,0.3)]"
            : "border-blue-300/30 bg-white/10 text-gray-100 shadow-[0_0_25px_rgba(173,216,230,0.25)]"
        }`}
        style={{
          boxShadow: isDay
            ? "0 0 30px rgba(255,182,193,0.2)"
            : "0 0 30px rgba(100,150,255,0.2)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="relative z-10 space-y-6">{children}</div>
      </div>
    </main>
  </div>
  );
}
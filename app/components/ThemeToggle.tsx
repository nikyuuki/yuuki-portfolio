"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDay: boolean;
  toggleTheme: () => void;
  setMenuOpen?: (value: boolean) => void;
}

export default function ThemeToggle({ isDay, toggleTheme, setMenuOpen }: ThemeToggleProps) {
  return (
    <button
      onClick={() => {
        toggleTheme();
        setMenuOpen?.(false);
      }}
      className={`
        relative w-24 h-10 rounded-full
        transition-all duration-300
        cursor-pointer select-none flex items-center
        ${isDay ? "bg-[#ffd37a]" : "bg-[#6b4aff]"}
        shadow-[inset_0_2px_6px_rgba(0,0,0,0.25)]
      `}
    >
      {/* DAY MODE Text */}
      <span
        className={`
          absolute right-3 text-xs font-semibold uppercase tracking-wide
          transition-all duration-300
          ${isDay ? "text-white opacity-100" : "opacity-0"}
        `}
      >
        DAY <br/>MODE
      </span>

      {/* NIGHT MODE Text */}
      <span
        className={`
          absolute left-3 text-xs font-semibold uppercase tracking-wide
          transition-all duration-300
          ${!isDay ? "text-white opacity-100" : "opacity-0"}
        `}
      >
        NIGHT <br/> MODE
      </span>

      {/* Sliding 3D Knob */}
      <div
        className={`
          absolute w-9 h-9 rounded-full bg-white
          transition-all duration-300
          flex items-center justify-center
          shadow-[0_2px_4px_rgba(0,0,0,0.25),0_4px_8px_rgba(0,0,0,0.20)]

          ${isDay ? "translate-x-1" : "translate-x-[56px]"}
        `}
      >
        {isDay ? (
          <Sun className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_2px_rgba(255,200,0,0.8)]" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 drop-shadow-[0_0_2px_rgba(110,40,255,0.8)]" />
        )}
      </div>
    </button>
  );
}

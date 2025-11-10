"use client";
import { useEffect, useRef } from "react";

export default function FireflyCursor() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      glow.animate(
        { left: `${x}px`, top: `${y}px` },
        { duration: 400, fill: "forwards", easing: "ease-out" }
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed w-12 h-12 rounded-full blur-md opacity-70 z-[9999]
        bg-gradient-to-r from-pink-300 to-blue-300 dark:from-blue-400 dark:to-purple-400
        transition-all duration-300"
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow:
          "0 0 20px rgba(255,182,193,0.6), 0 0 40px rgba(173,216,230,0.5)",
      }}
    ></div>
  );
}

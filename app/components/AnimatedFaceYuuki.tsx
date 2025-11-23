"use client";

import { useState } from "react";
import Image from "next/image";

export default function AnimatedFaceYuuki() {
  return (
    <div className="relative w-[140px] h-[140px]">

      {/* --- Base PNG --- */}
      <Image
        src="/mnt/data/ced41d74-d2ea-472d-9f31-c6344ba953a8.png"
        alt="yuuki"
        fill
        className="object-contain select-none pointer-events-none"
      />

      {/* --- Animated Face Layer --- */}
      <svg
        viewBox="0 0 140 140"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        {/* Eyes */}
        <circle cx="55" cy="65" r="5" fill="#2a2a2a">
          <animate
            attributeName="r"
            values="5;1;5"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="85" cy="65" r="5" fill="#2a2a2a">
          <animate
            attributeName="r"
            values="5;1;5"
            dur="4s"
            begin="0.15s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Blush */}
        <ellipse cx="48" cy="78" rx="8" ry="5" fill="#ffd6e0">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="3s"
            repeatCount="indefinite"
          />
        </ellipse>

        <ellipse cx="92" cy="78" rx="8" ry="5" fill="#ffd6e0">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="3s"
            begin="0.4s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Mouth */}
        <path
          d="M60 85 Q70 92 80 85"
          stroke="#2a2a2a"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        >
          <animate
            attributeName="d"
            dur="2s"
            repeatCount="indefinite"
            values="
              M60 85 Q70 92 80 85;
              M60 85 Q70 88 80 85;
              M60 85 Q70 92 80 85;
            "
          />
        </path>
      </svg>
    </div>
  );
}

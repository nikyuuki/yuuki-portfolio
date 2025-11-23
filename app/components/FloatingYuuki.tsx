"use client";

import { useState } from "react";
import Image from "next/image";
import { imageBasePath } from "../lib/config";


export default function FloatingYuuki() {
  const [gone, setGone] = useState(false);
  const [hover, setHover] = useState(false);

  if (gone) return null;

  return (
    <div
      className="
        fixed bottom-4 right-4 z-50
        flex flex-col items-end gap-2
        animate-[float_3s_ease-in-out_infinite]
        max-w-[90vw]
      "
    >
      {/* Dialog bubble */}
      <div
        className="
          relative bg-white/90 dark:bg-black/60
          border border-pink-300 dark:border-blue-700
          shadow-lg backdrop-blur-md
          px-4 py-4 rounded-2xl text-sm
          max-w-[200px] transition-all duration-300
        "
      >
        {/* Tail */}
        <div
          className="
            absolute bottom-[-6px] right-6
            w-4 h-4 bg-white/90 dark:bg-black/60
            border-l border-b
            border-pink-300 dark:border-blue-700
            rotate-[135deg] rounded-sm
          "
        />

        <p className="text-gray-700 dark:text-gray-200 leading-tight">
          {!hover ? (
            <>
              Hello, I’m Yuuki! {"( • ᵕ • )♡"}
              <br />
              Click any picture or project you like!
              <br />
              or.. you can click me to delete me.. {"(｡•́︿•̀｡)"}
            </>
          ) : (
            <>
              D-don’t click me…
              <br />
              Y-you will delete me…
              <br />
              {"｡ﾟ(>﹏<)ﾟ｡"}
            </>
          )}
        </p>
      </div>

      {/* Yuuki Image */}
      <div
        className={`
          cursor-pointer transition
          ${hover
            ? "animate-[scared-shake_0.3s_linear_infinite]"
            : "animate-[bounce_1.5s_ease-in-out_infinite]"
          }
        `}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setGone(true)}
      >
        <Image
          src={`${imageBasePath}/chibiyuuki.svg`}
          alt="chibi yuuki"
          width={110}
          height={110}
          className="rounded-full drop-shadow-xl"
        />
      </div>
    </div>
  );
}

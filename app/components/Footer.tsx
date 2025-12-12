"use client";

import Link from "next/link";
import { Github, Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        w-full py-10 px-6
        bg-[#F8F3FF] dark:bg-[#1C1240]
        text-gray-800 dark:text-gray-200
        border-t border-purple-200 dark:border-white/10
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">

        {/* Name */}
        <h2 className="text-2xl font-bold text-purple-700 dark:text-blue-300">
          Nik Alyaa
        </h2>

        {/* Quick Links */}
        <div className="flex gap-6 text-lg font-medium">
          <Link
            href="/"
            className="hover:text-purple-500 dark:hover:text-blue-300 transition-all"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-purple-500 dark:hover:text-blue-300 transition-all"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-purple-500 dark:hover:text-blue-300 transition-all"
          >
            Projects
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/nikyuuki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 dark:hover:text-blue-300 transition-all"
          >
            <Github />
          </a>

          <a
            href="mailto:nikalyaa5@gmail.com"
            className="hover:text-purple-500 dark:hover:text-blue-300 transition-all"
          >
            <Mail />
          </a>

          <a
            href="https://www.linkedin.com/in/nik-alyaa-nasuha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 dark:hover:text-blue-300 transition-all"
          >
            <Linkedin />
          </a>

          <a
            href="https://wa.me/601118842605"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 dark:hover:text-blue-300 transition-all"
          >
            <Phone />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-purple-200 dark:bg-white/10"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Nik Alyaa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

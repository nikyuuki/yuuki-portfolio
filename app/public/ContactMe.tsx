"use client";

import { useState } from "react";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    const message = `Hi Nik Alyaa!

Name: ${name}
Email: ${email}
Company: ${company}
Reason: ${reason}

Sent from your portfolio website `;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/601118842605?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="w-full pb-6 bg-[#EAD8FF] dark:bg-[#4a0b73] transition-all duration-500 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">
          Contact Me
        </h2>

        <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">
          Let’s bring your ideas to life together.
        </p>
      </div>


      <div className="max-w-xl mx-auto bg-white dark:bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-purple-200 dark:border-white/10">

        {/* Name */}
        <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
          Name
        </label>
        <input
          type="text"
          className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-white/20 text-gray-800 dark:text-white outline-none border border-gray-300 dark:border-white/20"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-white/20 text-gray-800 dark:text-white outline-none border border-gray-300 dark:border-white/20"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Company */}
        <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
          Company
        </label>
        <input
          type="text"
          className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-white/20 text-gray-800 dark:text-white outline-none border border-gray-300 dark:border-white/20"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        {/* Reason */}
        <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">
          Reason for Contact
        </label>
        <textarea
          className="w-full mb-6 p-3 rounded-lg bg-gray-100 dark:bg-white/20 text-gray-800 dark:text-white outline-none border border-gray-300 dark:border-white/20 h-32"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        ></textarea>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="cute-button"
          >
            💌 Send to WhatsApp
            <span className="cute-button-glow"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

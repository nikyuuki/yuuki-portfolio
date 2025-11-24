"use client";

export default function Education() {
  const items = [
    {
      year: "2023 – 2025",
      title: "Bachelor of Computer Engineering",
      place: "Universiti Teknologi MARA (UiTM), Shah Alam",
      note: "“Exploring the bridge between creativity and technology ✨”",
    },
    {
      year: "2024",
      title: "CPRE – Certified Professional for Requirements Engineering",
      place: "Awarded by Malaysian Software Testing Board (MSTB)",
    },
    {
      year: "2021 – 2023",
      title: "Diploma in Computer Science",
      place: "Universiti Teknologi MARA (UiTM), Machang",
      note: "“Built my foundation in code and problem-solving 💻”",
    },
  ];

  return (
    <section className="w-full py-12 transition-all duration-500">
      {/* Title */}
        <h2 className="text-3xl font-bold mb-12 text-center">
          Education and Certificate
        </h2>

      <div className="relative max-w-3xl mx-auto border-l-4 border-purple-300 dark:border-blue-600 pl-6 space-y-10">

        {items.map((edu, i) => (
          <div
            key={i}
            className="
              relative p-6 rounded-2xl shadow-xl border
              bg-[#f7f3ff] dark:bg-white/20
              border-purple-100 dark:border-white/25
              backdrop-blur-xl transition-all duration-500
            "
          >
            {/* Timeline dot */}
            <div className="absolute -left-[11px] top-6 w-5 h-5 bg-purple-400 dark:bg-blue-500 rounded-full shadow-lg"></div>

            <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
            <h4 className="font-semibold text-lg text-purple-600 dark:text-blue-300">
              {edu.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300">{edu.place}</p>

            {edu.note && (
              <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-400">
                {edu.note}
              </p>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}

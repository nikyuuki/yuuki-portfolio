"use client";

export default function Experience() {
  const experiences = [
    {
      role: "Project Manager",
      year: "2024 – Present",
      desc: "Leading teams to deliver impactful web projects.",
    },
    {
      role: "Web Developer Freelancer",
      year: "2022 – 2024",
      desc: "Built responsive websites and clean UI designs.",
    },
    {
      role: "Illustrator",
      year: "2022 – 2023",
      desc: "Created stylized digital art and concepts.",
    },
  ];

  return (
    <section className="w-full px-10 py-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

      <div className="flex flex-col gap-5">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="
              p-5 rounded-2xl shadow-lg border
              bg-[#f7f3ff] dark:bg-white/20
              border-purple-100 dark:border-white/25
              backdrop-blur-xl transition-all duration-500
            "
          >
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {exp.role} • {exp.year}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

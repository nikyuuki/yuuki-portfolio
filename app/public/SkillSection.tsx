"use client";

export default function SkillSection() {
  const sections = [
    {
      title: "💻 Technical",
      skills: [
        { name: "HTML, CSS, JavaScript", percent: 95 },
        { name: "Next.js, React", percent: 90 },
        { name: "Ruby on Rails", percent: 85 },
        { name: "Tailwind CSS", percent: 95 },
        { name: "Bootstrap CSS", percent: 95 },
        { name: "PostgreSQL", percent: 80 },
        { name: "Git & Version Control", percent: 90 },
      ],
    },
    {
      title: "🎨 Design",
      skills: [
        { name: "Figma", percent: 75 },
        { name: "UI/UX Design", percent: 90 },
        { name: "Wireframing", percent: 90 },
        { name: "Prototyping", percent: 85 },
        { name: "Responsive Design", percent: 95 },
        { name: "Color Theory", percent: 75 },
      ],
    },
    {
      title: "💕 Soft Skills",
      skills: [
        { name: "Leadership", percent: 90 },
        { name: "Teamwork", percent: 95 },
        { name: "Time Management", percent: 85 },
        { name: "Creative Thinking", percent: 90 },
        { name: "Communication", percent: 95 },
        { name: "Problem Solving", percent: 85 },
      ],
    },
    {
      title: "🛠 Tools",
      skills: [
        { name: "VS Code", percent: 95 },
        { name: "GitHub", percent: 90 },
        { name: "Notion", percent: 95 },
        { name: "Browser DevTools", percent: 90 },
      ],
    },
    {
      title: "🧩 Backend",
      skills: [
        { name: "Ruby", percent: 80 },
        { name: "Node.js", percent: 75 },
        { name: "API Integration", percent: 85 },
        { name: "Database Modelling", percent: 80 },
        { name: "Authentication / JWT", percent: 80 },
      ],
    },
    {
      title: "🌍 Languages",
      skills: [
        { name: "English (Fluent)", percent: 80 },
        { name: "Malay (Native)", percent: 100 },
        { name: "Basic Japanese", percent: 40 },
      ],
    },
  ];

  return (
    <section className="w-full py-12 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-purple-500 dark:text-blue-300">{`</>`}</span>{" "}
          Skills & Tools
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {sections.map((section, idx) => (
            <div
              key={idx}
              className="
                p-6 rounded-2xl shadow-xl border
                bg-[#f7f3ff] dark:bg-white/20
                border-purple-100 dark:border-white/25
                backdrop-blur-xl transition-all duration-500
              "
            >
              {/* Card title */}
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
                {section.title}
              </h3>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {section.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span>• {skill.name}</span>
                    <span className="font-medium text-purple-600 dark:text-blue-300">
                      {skill.percent}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

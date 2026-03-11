const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 99 },
      { name: "Next.js", level: 99 },
      { name: "Tailwind CSS", level: 100 },
      { name: "TypeScript", level: 100 },
    ],
  },
  {
    category: "Backend",
    items: [{ name: "Python", level: 100 },{ name: "Django", level: 95 },{name:"FastAPI",level:95}],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: 99 },
      { name: "MySQL", level: 99 },
      { name: "Sqlite", level: 99 },
    ],
  },
  {
    category: "Tools & Additional Knowledge",
    items: [
      { name: "AWS", level: 99 },
      { name: "Git & Github", level: 99 },
      { name: "VS Code", level: 99 },
      {name:"Chatgpt",level:96},
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-indigo-500">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
              <ul className="space-y-4">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex justify-between mb-1 text-sm font-medium">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-indigo-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
const projects = [
  {
    title: "Blogging Plateform",
    description:
      "A Modern Full-Stack Blogging Web Application Built with Django. It allows users to register, create posts, upload media, interact via comments, and manage content efficiently through an admin dashboard. Designed with clean UI principles and scalable backend architecture.",
    tech: ["Python","Django","Bootstrap","Sqlite"],
    link: "https://github.com/MFW-1/Blogging-platform.git",
  },
  {
    title: "Restaurant website",
    description: "A professional level restaurant app with full admin panel.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/MFW-1/new-mern-stack-restaurant.git",
  },
];

export default function Projects() {
  return (
    <section
      id="services"
      className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-indigo-500">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
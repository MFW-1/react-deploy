export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content - Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            About <span className="text-indigo-500">MFW</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            I am a full-stack web developer with years of experience building
            scalable and professional web applications for businesses and
            startups. I focus on delivering high-quality solutions with a strong
            emphasis on performance, security, and user experience.
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            I also specialize in responsive design and UI/UX optimization using
            Tailwind CSS and TypeScript.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-500 transition"
          >
            Work With Me
          </a>
        </div>

        {/* Right Content - Image or Illustration */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-80 h-80 bg-indigo-100 dark:bg-indigo-900 rounded-2xl shadow-xl flex items-center justify-center text-indigo-500 text-6xl font-bold">
            <img src={"/back.jpg"} />
          </div>
        </div>
      </div>
    </section>
  );
}
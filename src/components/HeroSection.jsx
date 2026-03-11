import { FaReact,FaNode,FaAws,FaPython,FaGitAlt } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiFastapi,
  SiJavascript
} from "react-icons/si";
import Animate from "./Animate";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-30 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Build{" "}
            <span className="text-indigo-500">klhsdsknhss Web Solutions </span>
            for Businesses & Startups
          </h1>
          <div className="text-slate-700 dark:text-slate-300 text-xl  mb-6 max-w-lg">
            <Animate />
          </div>
          <a
            href="#contact"
            className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-500 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Right Tech Icons */}
        <div className="flex-1 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-6 justify-center items-center">
          <div className="flex flex-col items-center gap-2 text-indigo-500">
            <FaReact size={50} />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              React
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-indigo-500">
            <SiNextdotjs size={50} />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Next.js
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-green-500">
            <FaNode size={50} />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Node.js
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-violet-500">
            <SiFastapi size={50} />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              FastAPI
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-green-600">
            <DiDjango size={50} />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Django
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-blue-500">
            <SiMysql size={50} />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              MySQL
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-green-500">
            <SiMongodb size={50} />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              MongoDB
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-blue-600">
            <SiTypescript size={50} />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-black dark:text-white">
            <FaAws size={50} />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Aws
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-blue-600">
            <FaPython size={50} />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Python
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-red-600">
            <FaGitAlt size={50} />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Git & Github
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-yellow-600">
            <SiJavascript size={50} />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              JavaScript
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 dark:bg-slate-950 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold text-white">MFW</h2>
          <p className="mt-2 text-sm text-slate-400">
            Professional Web Solutions for Businesses. Delivering
            executive-level web presence that commands trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:text-indigo-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-indigo-500 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-indigo-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-md font-semibold text-white mb-2">Connect</h3>
          <div className="text-sm text-slate-400">
            Email:{" "}
            <div className="hover:text-indigo-500 transition">
              am64fw5@gmail.com
            </div>
          </div>
          <div className="text-sm text-slate-400 mt-1">
            Phone:{" "}
            <div className="hover:text-indigo-500 transition">
              +92 316 4506972
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-slate-400">
            <a
              href="https://github.com/MFW-1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800 mt-8 py-4 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} MFW. All rights reserved.
      </div>
    </footer>
  );
}
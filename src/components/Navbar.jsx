
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#services" },
];

// 🔒 Hydration-safe class strings
const headerClass =
  "fixed top-0 left-0 z-50 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800";

const navClass =
  "mx-auto flex h-16 max-w-7xl items-center justify-between px-6";

const logoClass = "text-xl font-bold tracking-wide text-white";

const desktopLinkClass =
  "relative text-sm font-medium text-slate-300 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full";

const contactBtnClass =
  "hidden md:inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500";

const mobileLinkClass =
  "block rounded-md px-2 py-2 text-slate-300 transition hover:bg-slate-900 hover:text-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={headerClass}>
      <nav className={navClass}>
        {/* Logo */}
        <a href="#home" className={logoClass}>
          <span className="text-indigo-500">&lt;</span>
          MFW
          <span className="text-indigo-500"> /&gt;</span>
        </a>

        {/* Center Links – Desktop */}
        <ul className="hidden lg:flex gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a href={link.href} className={desktopLinkClass}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Tablet Links */}
          <ul className="hidden md:flex lg:hidden gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-slate-300 hover:text-white transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <a href="#contact" className={contactBtnClass}>
            Contact
          </a>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-slate-200"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <ul className="flex flex-col gap-2 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-indigo-600 py-2 text-center text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Contact
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
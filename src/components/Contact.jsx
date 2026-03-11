
import {
  FaWhatsapp,
  FaFacebook,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Picture */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="w-80 h-80 bg-indigo-100 dark:bg-indigo-900 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
            <img
              src="/back.jpg" // Replace with your image path
              alt="MFW"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-indigo-500">Me</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            Feel free to reach out through any of the following channels.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhone className="text-indigo-500" size={24} />
              <a
                href="tel:+1234567890"
                className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition"
              >
                +92 316 4506972
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500" size={24} />
              <a
                href="https://wa.me/03164506972"
                className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-indigo-500" size={24} />
              <h3 className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition">
                am64fw5@gmail.com
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <FaFacebook className="text-blue-600" size={24} />
              <a
                href="https://web.facebook.com/profile.php?id=61584677935571"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition"
              >
                Facebook
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub
                className="text-slate-800 dark:text-slate-200"
                size={24}
              />
              <a
                href="https://github.com/MFW-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
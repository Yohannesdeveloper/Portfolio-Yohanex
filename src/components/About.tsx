import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaDatabase,
  FaReact,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaHtml5 />, title: "HTML5", level: "Expert" },
  { icon: <FaCss3Alt />, title: "CSS3", level: "Advanced" },
  { icon: <SiJavascript />, title: "JavaScript", level: "Advanced" },
  { icon: <FaReact />, title: "React & TypeScript", level: "Advanced" },
    { icon: <FaReact />, title: "React Native", level: "Advanced" },
  { icon: <FaFigma />, title: "UI/UX & Prototyping", level: "Advanced" },
  { icon: <FaCode />, title: "Full-Stack Dev", level: "Intermediate" },
  { icon: <FaPaintBrush />, title: "Graphics Design", level: "Junior" },
  { icon: <FaDatabase />, title: "Database (MongoDB)", level: "Intermediate" },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      {/* Sidebar */}
      <aside className="md:w-1/4 bg-gradient-to-b from-pink-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 text-white p-8">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <ul className="space-y-4 text-sm">
          {["Who I Am", "Skills", "Education", "Experience"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:underline block"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-12">
        {/* Who I Am */}
        <motion.div
          id="who-i-am"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl font-extrabold mb-4">👋 Who I Am</h3>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            I’m <span className="font-semibold">Yohannes Fikre</span>, a passionate
            <span className="font-semibold"> Web Developer</span> and
            <span className="font-semibold"> Graphics Designer</span> based in
            Ethiopia 🇪🇹. I hold a Bachelor of Science in Computer Science from
            Ambo University{" "}
            <span className="text-sm">(GPA: 3.06, Expected Graduation: 2026)</span>.
            <br />
            <br />
            I specialize in building{" "}
            <span className="font-semibold">full-stack applications</span> and
            crafting{" "}
            <span className="font-semibold">
              visually engaging, user-focused interfaces
            </span>
            , combining performance, clean architecture, and creative design to
            deliver real-world solutions.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-3xl font-bold mb-6">🛠️ Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-neutral-900 border dark:border-white/10 rounded-xl shadow-xl flex items-center space-x-4 transition-all"
              >
                <div className="text-3xl text-pink-500 dark:text-cyan-400">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{skill.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {skill.level}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          id="education"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold mb-4">🎓 Education</h3>
          <div className="space-y-4 bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-xl border border-gray-200 dark:border-white/10 shadow-xl">
            <p className="font-semibold text-lg">BSc in Computer Science</p>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Ambo University | Expected Graduation: 2026 | GPA: 3.06
            </p>
            <p className="mt-3 text-sm text-gray-800 dark:text-gray-300">
              📚 Core studies include Data Structures, Object-Oriented
              Programming, Embedded Systems, Software Engineering, and Web
              Programming—building a strong balance between theory and hands-on
              practice.
            </p>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          id="experience"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold mb-4">💼 Experience</h3>
          <div className="space-y-4 bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-xl border border-gray-200 dark:border-white/10 shadow-xl">
            <p className="font-semibold text-lg">
             
            </p>

            <p className="text-sm text-gray-800 dark:text-gray-300">
              🚀 Academic Background & Accomplished Projects
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-300">
              <li>🔥 Fire & Gas Detection System — Embedded safety solution</li>
              <li>🛒 E-Commerce Shoe Platform — Full-stack application</li>
              <li>💼 HustleX — Opportunity-driven digital platform</li>
              <li>🏋️ Trener — Sports coaching web app</li>
              <li>🌐 Personal Portfolio — Animated modern UI</li>
              <li>🦷 Nash Dental Clinic — Healthcare website</li>
              <li>🎭 Tonetor Eteal — Cultural entertainment platform</li>
              <li>⛪ Eteal Ze Orthodox — Spiritual content platform</li>
            </ul>
          </div>
        </motion.div>

        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            href="/assets/CVlast.pdf"
            download
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-pink-600 hover:to-purple-600 transition"
          >
            📄 Download CV
          </a>
        </motion.div>
      </main>
    </section>
  );
};

export default About;

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
import { SiJavascript } from "react-icons/si"; // Import JavaScript icon here
import { motion } from "framer-motion";

const skills = [
  { icon: <FaHtml5 />, title: "HTML5", level: "Expert" },
  { icon: <FaCss3Alt />, title: "CSS3", level: "Advanced" },
  { icon: <SiJavascript />, title: "JavaScript", level: "Advanced" }, // Use SiJavascript icon here
  { icon: <FaReact />, title: "React & TypeScript", level: "Advanced" },
  { icon: <FaFigma />, title: "UI/UX & Prototyping", level: "Advanced" },
  { icon: <FaCode />, title: "Full-Stack Dev", level: "Intermediate" },
  { icon: <FaPaintBrush />, title: "Graphics Design", level: "Junior" },

  {
    icon: <FaDatabase />,
    title: "Database (MongoDB)",
    level: "Intermediate",
  },
];

// Your component follows...

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      {/* Sidebar */}
      <aside className=" md:w-1/4 bg-gradient-to-b from-pink-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 text-white p-8">
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
        <motion.div
          id="who-i-am"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl font-extrabold mb-4">Who I Am</h3>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            I’m Yohannes Fikre — a passionate web developer and graphics
            designer based in Ethiopia. With a background in Computer Science
            (BSc) from Ambo University and a GPA of 3.06, I specialize in
            building full-stack applications and crafting stunning user
            interfaces.
          </p>
        </motion.div>

        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-3xl font-bold mb-6">Skills</h3>
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

        <motion.div
          id="education"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold mb-4   ">Education</h3>
          <div className="space-y-4 bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-xl border border-gray-200 dark:border-white/10 shadow-xl">
            <p className="font-semibold">BSc in Computer Science</p>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Ambo University | Expected Graduation: 2026 | GPA: 3.06
            </p>
            <p className="mt-3 text-sm text-gray-800 dark:text-gray-300">
           
          </div>
        </motion.div>

        <motion.div
          id="experience"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold mb-4   ">Experience</h3>
          <div className="space-y-4 bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-xl border border-gray-200 dark:border-white/10 shadow-xl">
            <p className="font-semibold">
              Tonetor Eteal Multimedia Web Developer & Designer
            </p>
            <p className="font-semibold">Two Major Projects:</p>

            <p className="mt-3 text-sm text-gray-800 dark:text-gray-300">
    🚀 Academic Background & Accomplished Projects

Throughout my academic journey, I built a strong foundation in Data Structures, Object-Oriented Programming, Embedded Systems, Software Engineering, and Web Programming. I consistently translated theory into practice by delivering real-world, production-ready projects.

✅ Key Accomplished Projects

🔥 Fire & Gas Detection System
Designed and implemented an embedded safety system focused on early hazard detection and reliability in real-world environments.

🛒 E-Commerce Shoe Platform
Developed a full-stack e-commerce application delivering a smooth shopping experience, secure transactions, and scalable backend architecture.

💼 HustleX Platform
Built a digital platform aimed at connecting users with opportunities and services, contributing across the full development lifecycle from planning to deployment.

🏋️ Trener – Sports Coaching Platform
Created a web application that enables users to unlock their potential through personalized training and direct access to professional sports coaches.

🌐 Personal Portfolio Website
Designed a modern portfolio featuring dark/light mode, animated UI, and scroll-reveal effects, emphasizing performance and user experience.

🦷 Nash Dental Clinic Website
Developed a professional healthcare website focused on clarity, accessibility, and patient-friendly navigation.

🎭 Tonetor Eteal
Built a cultural entertainment platform celebrating tradition and creativity through vibrant digital experiences.

⛪ Eteal Ze Orthodox
Created a content-driven platform dedicated to sharing Orthodox spiritual teachings, traditions, and educational resources.

        <motion.div
          id="who-i-am"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Download Resume Button */}
          <a
            href="/assets/CV.pdf"
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

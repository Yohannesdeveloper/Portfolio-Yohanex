import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaDatabase,
  FaReact,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiRailway,
  SiVercel,
  SiAngular,
  SiBootstrap,
} from "react-icons/si";
import { motion } from "framer-motion";
import resumePdf from "../assets/YOHANNES_FIKRE_Resume.pdf";

const skills = [
  { icon: <FaHtml5 />, title: "HTML5", level: "Expert" },
  { icon: <FaCss3Alt />, title: "CSS3", level: "Advanced" },
  { icon: <SiJavascript />, title: "JavaScript", level: "Advanced" },
  { icon: <SiTypescript />, title: "TypeScript", level: "Advanced" },
  { icon: <FaReact />, title: "React & React Native", level: "Advanced" },
  { icon: <SiAngular />, title: "Angular", level: "Intermediate" },
  { icon: <SiNextdotjs />, title: "Next.js", level: "Advanced" },
  { icon: <FaNodeJs />, title: "Node.js (MERN)", level: "Intermediate" },
  { icon: <SiSupabase />, title: "Supabase", level: "Intermediate" },
  { icon: <SiTailwindcss />, title: "Tailwind CSS", level: "Expert" },
  { icon: <SiBootstrap />, title: "Bootstrap", level: "Advanced" },
  { icon: <SiRailway />, title: "Railway (Deployment)", level: "Intermediate" },
  { icon: <SiVercel />, title: "Vercel (Deployment)", level: "Advanced" },
  { icon: <FaGitAlt />, title: "Git", level: "Advanced" },
  { icon: <FaGithub />, title: "GitHub", level: "Advanced" },
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
              📚 Computer Science & Full-Stack Development. Built a strong
              foundation in Computer Science through core studies in Data
              Structures and Algorithms, Object-Oriented Programming, Database
              Management Systems, Operating Systems, Computer Networks,
              Embedded Systems, Software Engineering, and Web Development.
              Developed practical skills in full-stack application development,
              including frontend technologies such as HTML, CSS, JavaScript,
              React.js, and Tailwind CSS, alongside backend development using
              Node.js, PHP, Laravel, RESTful APIs, and SQL databases. Gained
              hands-on experience in software design, database architecture,
              API integration, authentication, debugging, version control with
              Git and GitHub, and responsive web application development.
              Applied theoretical knowledge to real-world projects, focusing on
              scalable, secure, efficient, and user-friendly software solutions.
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
              🚀 Academic Background & Accomplished Projects
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-300">
              <li>🏋️ <strong>Trener</strong> — Sports coaching web application designed to streamline training management, fitness programs, and communication between coaches and athletes.</li>
              <li>🌐 <strong>Personal Portfolio</strong> — Modern, responsive developer portfolio featuring interactive animations, dark mode, smooth navigation, and creative UI/UX design.</li>
              <li>💼 <strong>HustleX</strong> — Multi-platform freelancer task automation system integrating web, mobile, and Telegram Bot functionality to simplify task management and workflow coordination.</li>
              <li>💚 <strong>Tenadam</strong> — AI-powered health and wellness platform focused on personalized health tracking, intelligent recommendations, and user-friendly wellness management.</li>
              <li>🍽️ <strong>Habesha Kurt Bet</strong> — Responsive restaurant website showcasing traditional Ethiopian cuisine, digital menus, restaurant services, and customer engagement features.</li>
              <li>☕ <strong>Bright Cafe & Restaurant</strong> — Digital restaurant platform featuring QR-code menus, online ordering, and live piano entertainment information to enhance customer experience.</li>
              <li>🦷 <strong>Nash Dental Clinic</strong> — Professional healthcare website featuring dental service information, responsive layouts, and accessible patient communication features.</li>
              <li>🎭 <strong>Tonetor Eteal</strong> — Cultural entertainment platform designed to promote creative content, showcase cultural activities, and improve digital audience engagement.</li>
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
            href={resumePdf}
            download="YOHANNES_FIKRE_Resume.pdf"
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

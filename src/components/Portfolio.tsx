import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Shoe Platform",
    description:
      "Step into style and comfort with our premium collection of shoes for every occasion.",
    image: "/Images/Project1.png",
    link: "https://nike-shoe-website-seven.vercel.app/",
  },
  {
    title: "Trener",
    description:
      "Unlock your full potential with personalized training from a dedicated sports coach.",
    image: "/Images/Project2.png",
    link: "https://fitness-website-omega-five.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with dark/light mode, animated UI, and scroll reveal effects.",
    image: "/Images/Project4.png",
    link: "https://portfolio-yohanex.vercel.app/",
  },
  {
    title: "Nash Dental clinic",
    description:
      "Nash Dental Clinic offers expert, compassionate dental care with a focus on your smile and comfort.",
    image: "/Images/Project3.png",
    link: "https://nash-dental-clinic-obwt.vercel.app/",
  },
  {
    title: "Tonetor Eteal",
    description:
      "Celebrate tradition and creativity with vibrant cultural entertainment that inspires and connects.",
    image: "/Images/Screenshot (235).png",
    link: "https://tonetor.vercel.app/",
  },
  {
    title: "Eteal Ze Ortohdox",
    description:
      "Discover faith, tradition, and wisdom through timeless Orthodox spiritual teachings and practices.",
    image: "/Images/Screenshot (249).png",
    link: "https://cultural-website-beta.vercel.app/",
  },
    {
    title: "Hustle X ",
    description:
      "HustleX is a platform that helps freelancers and hustlers automate tasks, grow communities, and manage projects efficiently via web, mobile apps, and Telegram bots.",
    image: "/Images/Screenshot 2026-01-19 232920.png",
    link: "https://hustle-x-freelancing-platform-p6bi-hoaro2fkl.vercel.app/",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-20 px-6 md:px-16"
    >
      <h2 className="text-5xl font-extrabold text-center mb-16 tracking-tight">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-400 dark:to-blue-500">
          Portfolio
        </span>
      </h2>

      <div className="grid md:grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-gray-300 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 group relative"
          >
            <div className="overflow-hidden h-120">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
            </div>
            <div className="p-6 space-y-3 text-center">
              <h3 className="text-2xl font-bold uppercase">{project.title}</h3>
              <p className="text-sm opacity-80">{project.description}</p>
            </div>

            {/* glowing bottom line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:blur-sm group-hover:h-[3px] transition-all duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

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
    title: "Trainer",
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
    {
    title: "Waka Nexus ",
    description:
      "WAKA Nexus is an international cultural platform organizing visual art exhibitions and professionally governed art competitions across multiple countries.",
    image: "/Images/Screenshot (291).png",
    link: "https://waka-nexus.vercel.app/",
  },
];

// Add a thumbnails array so you can replace these entries with your own images easily
const thumbnails = [
  { src: "/Images/T1.png", alt: "Thumbnail 1" },
  { src: "/Images/T2.png", alt: "Thumbnail 2" },

];

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-20 px-6 md:px-16"
    >
      <h2 className="text-5xl font-extrabold text-center mb-16 tracking-tight">
        My{" "}
        <span className="font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-400 dark:to-blue-500 tracking-tight">
          Portfolio
        </span>
      </h2>
        <h3 className="text-5xl font-extrabold text-center mb-16 tracking-tight">
        Web{" "}
        <span className="font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-400 dark:to-blue-500 tracking-tight">
         Sites
        </span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3 md:auto-rows-fr gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-gray-300 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 group relative flex flex-col h-full"
          >
            <div className="overflow-hidden h-56 md:h-64">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </a>
            </div>
            <div className="p-6 space-y-3 text-center flex-1">
              <h3 className="text-2xl font-bold uppercase">{project.title}</h3>
              <p className="text-sm opacity-80">{project.description}</p>
            </div>

            {/* glowing bottom line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:blur-sm group-hover:h-[3px] transition-all duration-300" />
          </motion.div>
        ))}

        {/* placeholders to ensure a 3x3 grid (9 slots) */}
        {Array.from({ length: Math.max(0, 9 - projects.length) }).map((_, i) => (
          <div
            key={`placeholder-${i}`}
            className="bg-transparent border border-dashed border-gray-200 dark:border-white/10 rounded-2xl h-full flex items-center justify-center p-6"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 font-display">
              Coming soon
            </span>
          </div>
        ))}
      </div>

      {/* Thumbnails subsection - replace the items in `thumbnails` with your own images */}
      <div className="mt-16">
        <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-center mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-400 dark:to-blue-500">
          Thumbnails
        </h3>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 font-body">
      Explore my thumbnails — designed to stop the scroll and drive massive clicks 🔥
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3 md:auto-rows-fr gap-6">
          {thumbnails.slice(0, 9).map((thumb, idx) => (
            <a
              key={idx}
              href={thumb.src}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block rounded-lg overflow-hidden bg-white/30 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg transition-transform duration-200 h-48 sm:h-56 md:h-64"
              title={thumb.alt}
            >
              <img
                src={thumb.src}
                alt={thumb.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {/* hover caption */}
              <div className="absolute inset-0 flex items-end justify-center p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-display font-extrabold text-sm sm:text-base tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-400 dark:to-blue-500">
                  {thumb.alt}
                </span>
              </div>
            </a>
          ))}

          {/* ensure exactly 9 slots (3x3) by adding placeholders when thumbnails < 9 */}
          {Array.from({ length: Math.max(0, 9 - thumbnails.slice(0, 9).length) }).map((_, i) => (
            <div
              key={`thumb-placeholder-${i}`}
              className="bg-transparent border border-dashed border-gray-200 dark:border-white/10 rounded-2xl h-48 sm:h-56 md:h-64 flex items-center justify-center p-6"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400 font-display">
                Coming soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

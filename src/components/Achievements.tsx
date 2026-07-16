import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const certificates = [
  {
    id: 1,
    title: "Artificial intelligence Fundamentals ",
    issuer: "Udacity",
    date: "2025",
    image: "/assets/Achievments/Ai.png",
  },
  {
    id: 2,
    title: "Data analysis Fundamentals",
    issuer: "Udacity",
    date: "2024",
    image: "/assets/Achievments/data analysis.png",
  },
  {
    id: 3,
    title: "Programming Fundamentals",
    issuer: "Udacity",
    date: "2024",
    image: "/assets/Achievments/programming fundamentals.png",
  },
  {
    id: 4,
    title: " Digital Marketing Fundamentals",
    issuer: "Awaqi",
    date: "2024",
    image: "/assets/Achievments/Digital marketing.png",
  },
  {
    id: 5,
    title: "Introduction to Photoshop ",
    issuer: "Awaqi",
    date: "2024",
    image: "/assets/Achievments/Photoshop.png",
  },
  {
    id: 6,
    title: "Professional English",
    issuer: "Awaqi",
    date: "2024",
    image: "/assets/Achievments/Professional english.png",
  },
];

const Achievements: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      id="achievements"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-black-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-black-800 relative"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Achievements & Certifications
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          A showcase of my proudest milestones and credentials 🏆
        </p>
      </motion.div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden transform transition duration-500 group cursor-pointer relative"
            onClick={() => setSelected(cert.image)}
          >
            {/* Certificate Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <span className="text-white font-semibold text-lg flex items-center gap-2">
                <FaAward className="text-yellow-400" />
                View Certificate
              </span>
            </div>
            {/* Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {cert.issuer} • {cert.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-[90%] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
            >
              ✕
            </button>
            <img
              src={selected}
              alt="Certificate Preview"
              className="w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Achievements;

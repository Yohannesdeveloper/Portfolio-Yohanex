import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Yohannes is an absolute genius! His web designs are sleek, modern, and super responsive. Working with him was the best decision ever.",
    name: "Messay A.",
    role: "CEO, Tonetor",
    img: "C:UsersYohannesOneDriveFinal year projectOneDriveDesktopPortfolio-Yohanex-mainpublicImages\testimonialsMessay.jpg",
  },
  {
    quote:
      "Creative, detail-oriented, and fast! Yohannes took our vague ideas and turned them into something truly stunning.",
    name: "Messert A.",
    role: "Front-End Developer, Addis ababa",
    img: "C:UsersYohannesOneDriveFinal year projectOneDriveDesktopPortfolio-Yohanex-mainpublicImages\testimonialsMessie.png",
  },
  {
    quote:
      "Not just a developer, but a visionary. He blends design and functionality in ways I’ve rarely seen. Highly recommended!",
    name: "Geachew T>",
    role: "Trener, Norway",
    img: "C:UsersYohannesOneDriveFinal year projectOneDriveDesktopPortfolio-Yohanex-mainpublicImages\testimonialsGetachew.png",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 md:px-16 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          What People Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Real experiences from real clients I’ve worked with.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{
                scale: 1.07,
                rotateX: 6,
                rotateY: -6,
                boxShadow: "0px 20px 50px rgba(236, 72, 153, 0.4)",
              }}
              className="p-6 rounded-2xl bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-xl border border-gray-200/30 dark:border-gray-700/30 transition-all duration-500 hover:border-pink-500/60 hover:dark:border-purple-500/60"
            >
              <p className="italic text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-500 group-hover:text-black dark:group-hover:text-white">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gradient-to-r from-pink-500 to-purple-500"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

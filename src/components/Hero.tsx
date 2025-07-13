import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-white dark:bg-black text-black dark:text-white transition duration-500  px-6 md:px-16"
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 p-6 md:pl-16 text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          I am a <br />
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 dark:from-cyan-400 dark:to-blue-500 text-transparent bg-clip-text animate-pulse">
            Web Developer
          </span>
          &<br />
          <span className="bg-gradient-to-r from-yellow-500 to-red-500 dark:from-teal-400 dark:to-lime-500 text-transparent bg-clip-text animate-pulse delay-150">
            Graphics Designer
          </span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
          I build stunning interfaces & high-performance digital experiences.
        </p>
      </div>

      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[750px] bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 opacity-20 blur-3xl rounded-full top-0 left-1/2 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-10 tracking-tight"></h2>
      </div>

      {/* Right Half Image */}
      <div className="w-full md:w-1/2 h-[300px] md:h-screen overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-transparent to-transparent z-10" />
        <img
          src="/Images/IMG_1529.JPG"
          alt="Profile Right"
          className="object-cover h-full w-[100%] translate-x-1/1 grayscale hover:grayscale-0 transition duration-700 ease-in-out"
        />
      </div>
    </section>
  );
};

export default Hero;

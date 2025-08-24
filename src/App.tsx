import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 pt-16">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <section id="home" className="scroll-mt-16">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-16">
        <About />
      </section>

      <section id="portfolio" className="scroll-mt-16">
        <Portfolio />
      </section>
      <section id="Testimonials" className="scroll-mt-16">
        <Testimonials />
      </section>

      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>

      <section id="footer" className="scroll-mt-16">
        <Footer />
      </section>
    </div>
  );
};

export default App;

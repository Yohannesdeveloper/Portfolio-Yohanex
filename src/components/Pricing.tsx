import React from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaRocket,
  FaBuilding,
  FaIndustry,
  FaCrown,
  FaWrench,
  FaLaptopCode,
  FaPaintBrush,
  FaBriefcase,
  FaStore,
  FaHotel,
  FaSchool,
  FaShoppingCart,
  FaCalendarCheck,
  FaCode,
} from "react-icons/fa";

const packages = [
  {
    name: "Starter",
    icon: <FaRocket />,
    color: "from-green-400 to-green-600",
    border: "border-green-500/40 hover:border-green-500",
    badge: "bg-green-500",
    price: "25,000 – 60,000",
    bestFor: "Individuals & small businesses",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "WhatsApp integration",
      "Google Maps",
      "Basic SEO",
      "SSL certificate",
      "2 weeks support",
    ],
  },
  {
    name: "Professional",
    icon: <FaBuilding />,
    color: "from-blue-400 to-blue-600",
    border: "border-blue-500/40 hover:border-blue-500",
    badge: "bg-blue-500",
    price: "60,000 – 150,000",
    bestFor: "SMEs & growing businesses",
    features: [
      "Everything in Starter",
      "Custom UI/UX",
      "CMS/Admin panel",
      "Blog",
      "Portfolio/Gallery",
      "Advanced SEO",
      "Analytics",
      "Booking forms",
      "Up to 15 pages",
    ],
  },
  {
    name: "Business Pro",
    icon: <FaIndustry />,
    color: "from-purple-400 to-purple-600",
    border: "border-purple-500/40 hover:border-purple-500",
    badge: "bg-purple-500",
    price: "150,000 – 400,000",
    bestFor: "Medium to large businesses",
    features: [
      "Everything in Professional",
      "User accounts",
      "Chapa/Telebirr payment integration",
      "Custom dashboards",
      "Email automation",
      "API integrations",
      "Multi-language",
      "Advanced security",
      "Performance optimization",
    ],
  },
  {
    name: "Enterprise",
    icon: <FaCrown />,
    color: "from-yellow-400 to-amber-600",
    border: "border-yellow-500/40 hover:border-yellow-500",
    badge: "bg-yellow-500",
    price: "400,000 – 1,500,000+",
    bestFor: "Large organizations & custom systems",
    features: [
      "Fully custom web application",
      "AI features",
      "ERP/CRM integration",
      "Multi-role dashboards",
      "Reporting & analytics",
      "Staff training",
      "Priority support",
      "Ongoing maintenance",
    ],
  },
];

const maintenance = [
  { plan: "Basic", price: "2,000 – 5,000" },
  { plan: "Standard", price: "5,000 – 10,000" },
  { plan: "Premium", price: "10,000 – 25,000+" },
];

const projectPrices = [
  { project: "Landing Page", price: "15,000", icon: <FaLaptopCode /> },
  { project: "Portfolio Website", price: "20,000", icon: <FaPaintBrush /> },
  { project: "Business Website", price: "35,000", icon: <FaBriefcase /> },
  { project: "Restaurant Website", price: "45,000", icon: <FaStore /> },
  { project: "Hotel Website", price: "60,000", icon: <FaHotel /> },
  { project: "School Website", price: "80,000", icon: <FaSchool /> },
  { project: "E-commerce Website", price: "120,000", icon: <FaShoppingCart /> },
  {
    project: "Booking Platform",
    price: "180,000",
    icon: <FaCalendarCheck />,
  },
  {
    project: "Custom Web Application",
    price: "250,000+",
    icon: <FaCode />,
  },
];

const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="relative py-20 px-6 md:px-16 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-r from-pink-500/10 via-purple-500/15 to-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Value-based pricing for the Ethiopian market. Choose a package that
            fits your business needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 20px 50px rgba(168, 85, 247, 0.3)",
              }}
              className={`relative flex flex-col p-6 rounded-2xl bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-xl border ${pkg.border} transition-all duration-500`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center text-white text-2xl mb-4 shadow-lg`}
              >
                {pkg.icon}
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {pkg.bestFor}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {pkg.price} ETB
                </span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-2 mb-6">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <FaCheck className="mt-1 text-green-500 shrink-0" />
                    <span
                      className={
                        feature.startsWith("Everything")
                          ? "font-semibold"
                          : ""
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl bg-gradient-to-r ${pkg.color} text-white font-semibold shadow-lg hover:opacity-90 transition`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Monthly Maintenance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-extrabold text-center mb-2">
            Monthly Maintenance
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Keep your website running smoothly after launch.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {maintenance.map((m, i) => (
              <motion.div
                key={m.plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-xl border border-gray-200/30 dark:border-gray-700/30 hover:border-pink-500/60 hover:dark:border-purple-500/60 transition-all duration-500"
              >
                <FaWrench className="text-3xl text-pink-500 dark:text-cyan-400 mb-3" />
                <h4 className="text-xl font-bold mb-1">{m.plan}</h4>
                <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {m.price} ETB/mo
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project-Based Starting Prices */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-extrabold text-center mb-2">
            Recommended Starting Prices
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Quick reference for common project types.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {projectPrices.map((p, i) => (
              <motion.div
                key={p.project}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-gray-200/30 dark:border-white/10 shadow-md hover:border-pink-400/50 hover:dark:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-2xl text-pink-500 dark:text-cyan-400 shrink-0">
                  {p.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{p.project}</h4>
                </div>
                <span className="font-bold text-sm bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
                  {p.price} ETB
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

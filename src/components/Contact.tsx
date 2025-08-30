import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    // Dynamically select API URL based on environment
    const API_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000/api/contact"
        : "https://portfolio-yohanex-backend-1.onrender.com/api/contact";

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again later.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 md:px-16 bg-white dark:bg-black text-black dark:text-white relative"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 opacity-10 blur-3xl rounded-full top-0 left-1/3 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-10 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-cyan-400 dark:to-blue-500">
            Get In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-purple-600 dark:text-cyan-400" />
              <span>yohannesfk123@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl text-purple-600 dark:text-cyan-400" />
              <span>+251 942 927999</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-purple-600 dark:text-cyan-400" />
              <span>Addis Ababa, Ethiopia</span>
            </div>

            <p className="pt-4 text-gray-700 dark:text-gray-300">
              Have a project in mind or just want to say hello? I'm always open
              to discussing new opportunities, design challenges, or tech
              collaborations.
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-xl border border-gray-200 dark:border-white/10 shadow-xl"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400"
              required
              disabled={status === "sending"}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400"
              required
              disabled={status === "sending"}
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400"
              required
              disabled={status === "sending"}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 dark:from-cyan-400 dark:to-blue-500 text-white font-bold py-3 rounded-md hover:scale-105 transition-transform disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-2">
                {errorMsg || "Something went wrong. Please try again later."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

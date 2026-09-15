"use client";

import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Send, Mail } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="bg-black border-b-normal border-b text-white py-3 sm:py-4 sticky top-0 z-50 shadow-lg"
    >
      {/* ... همان کد قبلی ... */}
      <h2 className="text-2xl sm:text-3xl text-normal md:text-4xl font-bold mb-6 flex items-center">
        Contact
      </h2>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <p className="flex items-center text-normal text-sm sm:text-base">
            <Mail className="mr-2 h-5 w-5" /> Email:
            mohammadmohammadi2025@gmail.com
          </p>
          <p className="text-sm text-normal sm:text-base md:text-lg flex items-center">
            <Linkedin className="mr-2 h-5 w-5" />
            <a
              href="https://www.linkedin.com/in/mohammad-mohammadi-372a45394/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              https://www.linkedin.com/in/mohammad-mohammadi-372a45394/
            </a>
          </p>
          <p className="text-sm sm:text-base text-normal md:text-lg flex items-center ">
            <Github className="mr-2 h-5 w-5 " />
            <a
              href="https://github.com/mohammadmohammadi785-crypto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/mohammadmohammadi785-crypto
            </a>
          </p>
        </div>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4 border p-4 rounded-md"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-normal"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full p-2 border rounded-lg focus:outline-0 focus:border-normal"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-normal"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border rounded-lg focus:outline-0 focus:border-normal"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-normal"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full p-2 border rounded-lg focus:outline-0 focus:border-normal"
              rows={4}
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-normal text-white px-6 py-3 rounded-full flex items-center  transition-colors duration-300"
          >
            <Send className="mr-2 h-5 w-5" /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.header>
  );
}

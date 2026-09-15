"use client";

import { motion } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Main() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="container mx-auto px-4 py-12 space-y-16"
    >
      <Home />
      <About />
      <Projects />
      {/* <Contact /> */}
    </motion.main>
  );
}

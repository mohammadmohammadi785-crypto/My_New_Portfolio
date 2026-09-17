"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const skills = [
    { name: "React", icon: "/react1.svg" },
    { name: "TypeScript", icon: "/typescript.svg" },
    { name: "JavaScript", icon: "/javascript.svg" },
    { name: "Html", icon: "/html5.svg" },
    { name: "CSS", icon: "/css.svg" },
    { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
    { name: "NextJs", icon: "/nextdotjs.svg" },
    { name: "Laravel", icon: "/laravel.svg" },
    { name: "Redux", icon: "/redux1.svg" },
  ];

  return (
    <motion.section
      id="about"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black text-white border-b rounded-b-none p-6 sm:p-8 md:p-10 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Image
            src="/profile2.jpg"
            alt="Your Profile"
            width={200}
            height={200}
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-normal shadow-md"
          />
        </motion.div>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base md:text-lg mb-6 text-gray-600"
          >
            I'm Mohammad Mohammadi, a dedicated web developer...
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
              My Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-black p-3 bg-gray-100"
                >
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <span className="ml-3 text-base sm:text-lg font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-black p-3 bg-gray-100"
              >
                <i className="fab fa-github h-6 w-6"></i>
                <span className="ml-3 text-base sm:text-lg font-medium">
                  GitHub
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

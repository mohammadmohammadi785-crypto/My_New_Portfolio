"use client";

import { motion } from "framer-motion";
import Github from "@/public/icons/github.svg";
import { useTranslation } from "react-i18next";
import "@/i18n/config";

const skills = [
  ["React", "/react1.svg"],
  ["Type Script", "/typescript.svg"],
  ["Java Script", "/javascript.svg"],
  ["Html", "/html5.svg"],
  ["CSS", "/css.svg"],
  ["Tailwind CSS", "/tailwindcss.svg"],
  ["NextJs", "/nextdotjs.svg"],
  ["GitHub", "github"],
  ["Laravel", "/laravel.svg"],
  ["Redux", "/redux1.svg"],
];

export default function About() {
  const { t } = useTranslation();
  return (
    <motion.section
      id="about"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white dark:bg-gray-900 border-b p-6 sm:p-8 md:p-10 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl text-normal sm:text-3xl md:text-4xl font-bold mb-6">
        {t("about.title")}
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-shrink-0"
        >
          <img
            src="/profile2.jpg"
            alt="Mohammad Mohammadi"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 object-cover rounded-full border-4 border-normal shadow-md"
          />
        </motion.div>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base md:text-lg mb-6 text-gray-600 dark:text-gray-300"
          >
            {t("about.description")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {t("about.skills")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map(([name, icon], index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-black dark:text-white p-3 bg-gray-100 dark:bg-gray-800 text-sm sm:text-base rounded"
                >
                  {icon === "github" ? (
                    <Github className="h-6 w-6" />
                  ) : (
                    <img src={icon} alt={name} className="w-6 h-6" />
                  )}
                  <span className="ml-3 rtl:mr-3 rtl:ml-0 text-base sm:text-lg font-medium">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

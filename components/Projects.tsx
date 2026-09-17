"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@/i18n/config";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("projects.restaurantTitle"),
      description: t("projects.restaurantDescription"),
      link: "https://github.com/mohammadmohammadi785-crypto",
      image: "/project1.png",
    },
    {
      title: t("projects.portfolioTitle"),
      description: t("projects.portfolioDescription"),
      link: "https://github.com/mohammadmohammadi785-crypto/My-Portfolio",
      image: "/project2.png",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white dark:bg-black p-6 border-b sm:p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        {t("projects.title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="border overflow-hidden text-normal shadow-md bg-gray-50 dark:bg-black"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg dark:text-white text-black sm:text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-normal text-sm sm:text-base mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-medium"
              >
                {t("projects.view")}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";
import { User, Code, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/i18n/config";

export default function Home() {
  const { t } = useTranslation();
  return (
    <motion.section
      id="home"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16 relative border-b border-normal dark:bg-black sm:py-16 md:py-20"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl text-black dark:text-white sm:text-4xl md:text-5xl font-bold mb-4"
      >
        {t("home.title")}
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-base w-full md:w-[70%] sm:text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300"
      >
        {t("home.intro")}
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
      >
        <a
          href="#about"
          className="bg-normal rounded-sm text-white px-6 py-3 flex items-center justify-center"
        >
          <User className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
          {t("home.learnMore")}
        </a>
        <a
          href="#projects"
          className="bg-normal text-white px-6 py-3 rounded-sm flex items-center justify-center"
        >
          <Code className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
          {t("home.viewProjects")}
        </a>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-12"
      >
        <h3 className="text-xl text-center text-normal sm:text-2xl font-semibold mb-4">
          {t("home.expertise")}
        </h3>
        <div className="flex flex-col items-center sm:flex-row justify-center gap-4 sm:gap-8">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-normal mr-2 rtl:ml-2 rtl:mr-0" />
            <span className="dark:text-normal">{t("home.frontend")}</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-normal mr-2 rtl:ml-2 rtl:mr-0" />
            <span className="dark:text-normal">{t("home.fullstack")}</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

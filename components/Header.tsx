"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import "@/i18n/config";

export default function Header() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const language = i18n.language.startsWith("fa") ? "fa" : "en";

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as "en" | "fa" | null;
    const lang = saved ?? "en";
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [i18n]);

  const changeLanguage = async (lang: "en" | "fa") => {
    await i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    setIsMenuOpen(false);
  };

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const navItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="bg-black border-b border-normal text-white py-3 sm:py-4 sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl dancing-script gradient-bg sm:text-2xl md:text-3xl font-extrabold tracking-tight">
          {t("title")}
        </h1>

        <div className="hidden sm:flex items-center gap-4">
          <nav>
            <ul className="flex gap-6 md:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-normal transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => changeLanguage(language === "en" ? "fa" : "en")}
              className="p-2 text-normal rounded-full"
              aria-label="Change language"
              title={
                language === "en"
                  ? t("language.persian")
                  : t("language.english")
              }
            >
              <Languages className="h-5 w-5" />
            </button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 text-normal rounded-full"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => changeLanguage(language === "en" ? "fa" : "en")}
            className="p-2 text-normal"
            aria-label="Change language"
          >
            <Languages className="h-5 w-5" />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 text-normal"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="sm:hidden fixed top-0 right-0 h-full w-64 bg-black z-40 shadow-2xl"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-7 w-7" />
              </button>
            </div>
            <ul className="flex flex-col gap-6 px-6 pt-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg text-normal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

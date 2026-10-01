"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Github from "@/public/icons/github.svg";
import Linkedin from "@/public/icons/linkedin.svg";
import Twitter from "@/public/icons/github.svg";
// const socialLinks1 = [
//   ["GitHub", <Github className="h-5 w-5 sm:h-6 sm:w-6" />],
//   ["LinkedIn", <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />],
//   ["twitter", <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />],
// ];
import { useTranslation } from "react-i18next";
import "@/i18n/config";
import Image from "next/image";

export default function Footer() {
  const { t } = useTranslation();
  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];
  const socialLinks = [
    {
      name: `${t("SocialLinks.GitHub")}`,
      href: "https://github.com/mohammadmohammadi785-crypto",
      icon: (
        <Image
          width={500}
          height={500}
          alt="Github"
          src={Github}
          className="h-5 w-5 sm:h-6 sm:w-6 text-white"
        />
      ),
    },
    {
      name: `${t("SocialLinks.Linkedin")}`,
      href: "https://www.linkedin.com/in/mohammad-mohammadi-372a45394/",
      icon: (
        <Image
          alt="linkedin"
          src={Linkedin}
          className="h-5 w-5 sm:h-6 sm:w-6"
        />
      ),
    },
    {
      name: `${t("SocialLinks.twitter")}`,
      href: "https://x.com/M0HAMMADI1212",
      icon: (
        <Image alt="twitter" src={Twitter} className="h-5 w-5 sm:h-6 sm:w-6" />
      ),
    },
  ];

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black border-t border-normal text-white py-8 sm:py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-normal">
              {t("footer.navigation")}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-normal text-sm sm:text-base"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-normal">
              {t("footer.follow")}
            </h3>
            <div className="flex flex-col">
              {socialLinks.map(({ name, icon }, index) => (
                <motion.a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-normal w-fit flex items-center gap-2 my-2"
                >
                  {icon}
                  {name}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-normal">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-normal text-sm sm:text-base">
                <Mail className="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" />
                mohammadmohammadi2025@gmail.com
              </li>
              <li className="flex items-center text-normal text-sm sm:text-base">
                <Phone className="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0" />
                +93 729125123
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 sm:pt-8 border-t border-normal text-center">
          <p className="text-xs sm:text-sm text-normal mb-2">
            &copy; 2025 Mohammad Mohammadi. {t("footer.rights")}
          </p>
          <p className="text-xs sm:text-sm text-normal">{t("footer.built")}</p>
        </div>
      </div>
    </motion.footer>
  );
}

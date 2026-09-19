"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n/config";

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    if (!publicKey || !templateId || !serviceId) {
      alert("EmailJS environment variables are missing.");
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          to_name: "Mohammad Mohammadi",
          message,
        },
        { publicKey },
      )
      .then(() => {
        alert(t("contact.success"));
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert(t("contact.failed") + error.text);
      });
  };

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="contact"
      className="bg-white border-normal rounded-bl-none rounded-br-none dark:bg-black p-6 border-b sm:p-8 md:p-10 shadow-lg"
    >
      <h2 className="text-2xl sm:text-3xl text-normal md:text-4xl font-bold mb-6">
        {t("contact.title")}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-4">
          <p className="flex items-center text-normal text-sm sm:text-base">
            <Mail className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
            {t("contact.email")}: mohammadmohammadi2025@gmail.com
          </p>
          <p className="text-sm text-normal sm:text-base md:text-lg flex items-center">
            <Linkedin className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
            <a
              href="https://www.linkedin.com/in/mohammad-mohammadi-372a45394/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-sm sm:text-base text-normal md:text-lg flex items-center">
            <Github className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
            <a
              href="https://github.com/mohammadmohammadi785-crypto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              GitHub
            </a>
          </p>
        </div>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4 border border-normal p-4 rounded-md"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-normal"
            >
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full p-2 border border-normal focus:outline-none  bg-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-normal"
            >
              {t("contact.emailField")}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border border-normal rounded-lg focus:outline-none  bg-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-normal"
            >
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full p-2 border border-normal rounded-lg focus:outline-none  bg-transparent"
              rows={4}
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-normal text-white px-6 py-3 rounded-full flex items-center"
          >
            <Send className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />{" "}
            {t("contact.send")}
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}

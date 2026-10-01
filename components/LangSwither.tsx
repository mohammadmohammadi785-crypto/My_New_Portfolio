"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import "@/i18n/config";
import { Languages } from "lucide-react";

export default function LangSwither() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const language = i18n.language.startsWith("fa") ? "fa" : "en";

  const changeLanguage = async (lang: "en" | "fa") => {
    await i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    setIsMenuOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages size={20} className="text-normal" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Language</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuItem
          onClick={() => changeLanguage(language === "fa" ? "en" : "en")}
        >
          <div className="w-full flex justify-between">
            <span>{t("language.english")}</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage(language === "en" ? "fa" : "fa")}
          className="p-2 text-normal rounded-full"
          aria-label="Change language"
        >
          <div className="w-full flex justify-between">
            <span>{t("language.persian")}</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export default function ThemeSwither() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  });
  if (!mount) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-normal">
        {theme === "light" ? (
          <Sun size={20} />
        ) : theme === "dark" ? (
          <Moon size={20} />
        ) : (
          <SunMoon size={20} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <div className="w-full flex justify-between">
            <span>{t("theme.light")}</span>
            <Sun size={20} />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <div className="w-full flex justify-between">
            <span>{t("theme.dark")}</span>
            <Moon size={20} />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <div className="w-full flex justify-between">
            <span>{t("theme.system")}</span>
            <SunMoon size={20} />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

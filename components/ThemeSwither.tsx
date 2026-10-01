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

export default function ThemeSwither() {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  });
  if (!mount) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-normal">
        {theme === "light" ? (
          <Sun />
        ) : theme === "dark" ? (
          <Moon />
        ) : (
          <SunMoon />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <div className="w-full flex justify-between">
            <span>Light</span>
            <Sun />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <div className="w-full flex justify-between">
            <span>Dark</span>
            <Moon />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <div className="w-full flex justify-between">
            <span>System</span>
            <SunMoon />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import { ReactNode } from "react";
import { ThemeProvider as ThemeContext } from "../context/ThemeContext";
export default function Providers({ children }: { children: ReactNode }) {
  return <ThemeContext>{children}</ThemeContext>;
}

export { ThemeContext };

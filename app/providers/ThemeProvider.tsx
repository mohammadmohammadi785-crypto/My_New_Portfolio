"use client";

import { ReactNode } from "react";
import { Themeprovider as ThemeCtx } from "../context/ThemeContext";

export default function Providers({ children }: { children: ReactNode }) {
  return <ThemeCtx>{children}</ThemeCtx>;
}

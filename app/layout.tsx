import "./globals.css";
import "../fontawesome-free-5.15.4-web/css/all.min.css";
import I18nProvider from "@/providers/I18nProvider";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Mohammad Mohammadi | Portfolio",
  description: "Mohammad Mohammadi personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", inter.variable)}
    >
      <body className="dark:bg-[#1f2937]">
        <ThemeProvider attribute="class" enableSystem defaultTheme="dark">
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

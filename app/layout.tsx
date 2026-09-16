import type { Metadata } from "next";
import "./globals.css";
// import Providers from "./providers/ThemeProvider";
import ThemeProvider from "next-themes";
import "@/fontawesome-free-5.15.4-web/css/all.min.css";

export const metadata: Metadata = {
  title: "Mohammad Mohammadi | Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

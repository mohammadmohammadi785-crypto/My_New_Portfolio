import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers/ThemeProvider";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

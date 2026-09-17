import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import I18nProvider from "@/providers/I18nProvider";

export const metadata = {
  title: "Mohammad Mohammadi | Portfolio",
  description: "Mohammad Mohammadi personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-[#1f2937]">
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

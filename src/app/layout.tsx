import type { Metadata } from "next";
import { Jura, Krona_One } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../theme/theme-provider";

const geistJura = Jura({
  variable: "--font-geist-jura",
  subsets: ["latin"],
});

const geistKronaOne = Krona_One({
  variable: "--font-geist-krona-one",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joel Montes de Oca Lopez",
  description: "My personal website, where I share my articles and ideas. If you are looking for a partner for your next project, a code developer for one task, or a friend, you can find my contact information here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistJura.variable} ${geistKronaOne.variable} antialiased`}
      >
        {/* DARK LIGHT THEME*/}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

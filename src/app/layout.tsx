import type { Metadata } from "next";
import { Jura, Krona_One } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${geistJura.variable} ${geistKronaOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

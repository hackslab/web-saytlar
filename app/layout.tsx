import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Navbar";
import TargetCursor from "./reactbits/Target Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web-Saytlar.uz | Premium Web Dizayn",
  description: "O'zbekistonda professional web-sayt yaratish xizmatlari. Zamonaviy dizayn, tez ishlash, arzon narxlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TargetCursor targetSelector=".cursor-target" />
        <Header />
        {children}
      </body>
    </html>
  );
}

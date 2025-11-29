import type { Metadata } from "next";
import { Inter, Bungee_Spice } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const surgena = localFont({
  src: "../public/surgenapersonaluseonlysembd-q2qwd.ttf",
  variable: "--font-surgena",
});
const bungeeSpice = Bungee_Spice({ subsets: ["latin"], weight: "400", variable: "--font-bungee-spice" });

export const metadata: Metadata = {
  title: "Gaurav's Portfolio",
  description: "This is my portfolio",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${surgena.variable} ${bungeeSpice.variable} font-surgena bg-brand-blue overflow-y-scroll overflow-x-hidden`}
      >

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

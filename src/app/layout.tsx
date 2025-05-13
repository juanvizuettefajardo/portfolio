import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JMVFolio Juan Manuel - Est Ingenieria de Software",
  description: "Mi Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <Navbar />
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}

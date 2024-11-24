import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Project",
  description: "A next.js project with TS and TailwindCSS.",
  keywords: "Next.js, TS, TailwindCSS",
};

type RootLayoutType = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutType) => {
  return (
    <html lang="eng">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

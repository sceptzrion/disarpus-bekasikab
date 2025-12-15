import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Dinas Arsip dan Perpustakaan - Kabupaten Bekasi",
  description: "Portal Informasi DISARPUS Kabupaten Bekasi",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

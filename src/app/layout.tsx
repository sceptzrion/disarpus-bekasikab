import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "DISARPUS Bekasi",
  description: "Portal Informasi DISARPUS Kabupaten Bekasi",
};

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

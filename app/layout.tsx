// app/layout.tsx
// This is the root layout for the entire application, including public pages.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PublicNav } from "@/components/public-nav";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PAC Consultants",
  description: "Strategic guidance and innovative solutions for growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Public Navigation Bar (client-side route-aware) */}
        <PublicNav />
        {children}
      </body>
    </html>
  );
}

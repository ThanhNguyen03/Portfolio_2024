import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Porfolio",
  description: "Create by ThanhNguyen03",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/black-hole.png" />
      </head>
      <body className={`${inter.className} dark overflow-y-scroll overflow-x-hidden`}>
        <StarCanvas/>
        {children}
      </body>
    </html>
  );
}

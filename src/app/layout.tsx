import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: "Yens Van Hout",
  description: "Portfolio for Yens Van Hout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${karla.className} antialiased`}>{children}</body>
    </html>
  );
}

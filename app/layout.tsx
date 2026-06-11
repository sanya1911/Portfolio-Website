import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanya Sachdeva — Portfolio",
  description:
    "Computer Science Student | Software & AI Developer. Personal portfolio of Sanya Sachdeva.",
  keywords: ["portfolio", "software developer", "AI", "computer science", "Sanya Sachdeva"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-[#e8f0e9] text-zinc-900 antialiased">{children}</body>
    </html>
  );
}

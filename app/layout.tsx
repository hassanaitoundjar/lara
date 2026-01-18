import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fraunces } from "next/font/google"; // Added Fraunces for that editorial serif look
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"], // Variable font features
});

export const metadata: Metadata = {
  title: "DevPortfolio | Creative Developer",
  description: "A professional 3D portfolio showcasing modern web development capabilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
        cz-shortcut-listen="true"
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

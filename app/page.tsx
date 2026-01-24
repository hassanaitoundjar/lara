import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import { PAGE_METADATA } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_METADATA.home.title,
  description: PAGE_METADATA.home.description,
  keywords: PAGE_METADATA.home.keywords,
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

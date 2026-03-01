import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Pricing from "@/components/sections/Pricing";
import { ShoppingBag, Zap, Shield, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_METADATA.products.title,
  description: PAGE_METADATA.products.description,
  keywords: PAGE_METADATA.products.keywords,
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
            <ShoppingBag size={14} /> Catalog
          </div>
          <h1 className="text-6xl md:text-9xl font-black font-heading tracking-tighter mb-8 leading-[0.8]">
            OUR <br />
            <span className="text-white/10">PRODUCTS</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            High-performance SaaS foundations, design systems, and custom engineering 
            services delivered with absolute precision.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <Zap className="text-primary" size={32} />
          <h3 className="text-xl font-bold font-heading">Instant Delivery</h3>
          <p className="text-white/50 text-sm leading-relaxed">
            All digital assets and boilerplate foundations are delivered instantly upon 
            payment verification via Paddle secure servers.
          </p>
        </div>
        <div className="space-y-4">
          <Shield className="text-primary" size={32} />
          <h3 className="text-xl font-bold font-heading">Secure Licensing</h3>
          <p className="text-white/50 text-sm leading-relaxed">
            Every purchase includes a professional commercial license, ensuring you 
            own the rights to your code and assets forever.
          </p>
        </div>
        <div className="space-y-4">
          <Rocket className="text-primary" size={32} />
          <h3 className="text-xl font-bold font-heading">Service-First</h3>
          <p className="text-white/50 text-sm leading-relaxed">
            Beyond digital products, we provide high-velocity custom engineering 
            support to help you ship your dream project.
          </p>
        </div>
      </section>

      {/* Pricing Section - Reused from Home */}
      <Pricing />

      <Footer />
    </main>
  );
}

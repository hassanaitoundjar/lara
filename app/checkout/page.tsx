import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Pricing from "@/components/sections/Pricing";
import { Lock, ShieldCheck, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_METADATA.checkout.title,
  description: PAGE_METADATA.checkout.description,
  keywords: PAGE_METADATA.checkout.keywords,
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-8">
            SECURE <span className="text-white/20 italic font-serif">Checkout</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            Finalize your investment. All transactions are encrypted and processed 
            by Paddle, our authorized reseller.
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Lock className="text-primary" size={24} />
            <span className="text-sm font-bold uppercase tracking-widest text-white/60">256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <ShieldCheck className="text-primary" size={24} />
            <span className="text-sm font-bold uppercase tracking-widest text-white/60">Merchant of Record: Paddle</span>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <Globe className="text-primary" size={24} />
            <span className="text-sm font-bold uppercase tracking-widest text-white/60">Global Tax Compliance</span>
          </div>
        </div>
      </section>

      {/* Pricing/Checkout Grid */}
      <Pricing />

      {/* Payment Info */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-2xl font-bold font-heading">Payment Information</h2>
        <p className="text-white/50 leading-relaxed">
          Upon clicking &quot;Get Started&quot;, a secure Paddle checkout overlay will appear. 
          You can pay using Credit Card, PayPal, or other local payment methods. 
          Your license key and digital assets will be delivered to your email 
          immediately after successful payment.
        </p>
        <div className="pt-8 border-t border-white/10">
          <p className="text-xs text-white/30 uppercase tracking-[0.2em]">
            Need help? Contact <a href="mailto:support@devhassan.studio" className="text-primary hover:underline">support@devhassan.studio</a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

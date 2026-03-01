import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { Mail, MessageSquare, Twitter, Github } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_METADATA.contact.title,
  description: PAGE_METADATA.contact.description,
  keywords: PAGE_METADATA.contact.keywords,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-black font-heading tracking-tighter mb-8 leading-[0.8]">
            SAY <br />
            <span className="text-white/10">HELLO</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl font-light">
            Initiate a handshake. We respond to all inquiries within 12-24 hours.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        {/* Direct Channels */}
        <div className="lg:col-span-1 space-y-12">
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Direct Channels</h3>
            
            <a href="mailto:hello@devhassan.studio" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Email</p>
                <p className="text-white font-medium">hello@devhassan.studio</p>
              </div>
            </a>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Chat</p>
                <p className="text-white font-medium">Available on Telegram</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:col-span-2">
           <Contact />
        </div>
      </section>

      <Footer />
    </main>
  );
}

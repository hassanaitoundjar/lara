import type { Metadata } from "next";
import { Target, Users, Mail, Phone, MapPin } from "lucide-react";
import { PAGE_METADATA } from "@/lib/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: PAGE_METADATA.about.title,
  description: PAGE_METADATA.about.description,
  keywords: PAGE_METADATA.about.keywords,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-8">
            CREATIVE <span className="text-white/20 italic font-serif">Studio</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            DevHassan Studio is a premium digital agency specializing in high-velocity engineering 
            and immersive web experiences. We build the future of the web, one pixel at a time.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Target size={24} />
          </div>
          <h2 className="text-3xl font-bold font-heading">Our Mission</h2>
          <p className="text-white/60 leading-relaxed text-lg">
            Our mission is to empower businesses with cutting-edge technology and world-class design. 
            We believe in transparency, efficiency, and delivering exceptional value through 
            one-time payment models that prioritize client ownership.
          </p>
        </div>
        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Users size={24} />
          </div>
          <h2 className="text-3xl font-bold font-heading">Our Team</h2>
          <p className="text-white/60 leading-relaxed text-lg">
            Led by Hassan, a seasoned full-stack engineer and designer, our collective brings years 
            of experience across Next.js, React Native, and Laravel ecosystems. We are a distributed 
            team of passionate creators dedicated to technical excellence.
          </p>
        </div>
      </section>

      {/* Corporate Info for Paddle */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center">
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Credibility</h2>
            <h3 className="text-4xl font-black font-heading tracking-tight">BUSINESS INFO</h3>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <Mail className="text-primary" size={32} />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Email</h4>
                <p className="text-white/70 leading-relaxed">
                  For more information on how Paddle handles your data, please see 
                  <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    Paddle&apos;s Privacy Policy
                  </a>.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <Phone className="text-primary" size={32} />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Phone</h4>
                <p className="text-white/60 text-sm">+1 (555) 000-0000</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <MapPin className="text-primary" size={32} />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">HQ</h4>
                <p className="text-white/60 text-sm">Remote worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

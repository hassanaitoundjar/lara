"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check, Info } from "lucide-react";
import { useRef } from "react";

const PACKAGES = [
    {
        name: "STARTER",
        price: "18",
        description: "Perfect for personal blogs and simple landing pages.",
        features: [
            "Single Page Application",
            "Mobile Responsive Design",
            "Basic SEO Optimization",
            "Contact Form Integration",
            "1 Month Support"
        ],
        highlight: false,
        color: "#00FFFF" // Cyan
    },
    {
        name: "PROFESSIONAL",
        price: "39",
        description: "Ideal for small businesses and creative portfolios.",
        features: [
            "Multi-Page Website (up to 5)",
            "CMS Integration (Sanity/Strapi)",
            "Advanced Animations & Interactions",
            "Google Analytics Setup",
            "Social Media Integration",
            "3 Months Support"
        ],
        highlight: true,
        color: "#CCFF00" // Neon Lime
    },
    {
        name: "ENTERPRISE",
        price: "60",
        description: "Full-scale solution for e-commerce and complex web apps.",
        features: [
            "Custom Web Application",
            "Database Integration",
            "User Authentication",
            "Payment Gateway Setup",
            "Admin Dashboard",
            "API Development",
            "6 Months Support"
        ],
        highlight: false,
        color: "#2D55FF" // Electric Blue
    }
];

export default function Pricing() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.fromTo(".pricing-card", 
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%", // Trigger earlier
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            }
        );
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="pricing"
            className="relative py-32 px-4 md:px-8 max-w-[1400px] mx-auto"
        >
             {/* Background Elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[150px] rounded-full -z-10" />

            {/* Header */}
            <div className="text-center mb-20">
                <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">
                    Investment
                </h2>
                <h3 className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-6">
                    SIMPLE <span className="text-white/50 font-serif italic font-light">pricing</span>
                </h3>
                <p className="text-white/60 max-w-lg mx-auto text-lg">
                    Transparent one-time payments. No hidden fees. Own your code forever.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PACKAGES.map((pkg, index) => (
                    <div
                        key={pkg.name}
                        className={`pricing-card relative p-8 rounded-[2rem] border transition-all duration-300 group hover:-translate-y-2 ${
                            pkg.highlight
                                ? "bg-white/10 border-primary/50 shadow-[0_0_30px_rgba(204,255,0,0.1)]"
                                : "bg-white/5 border-white/10 hover:border-white/20"
                        }`}
                    >
                         {/* Highlight Badge */}
                        {pkg.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                Most Popular
                            </div>
                        )}

                        {/* Card Header */}
                        <div className="mb-8 p-4 rounded-2xl bg-black/20 text-center">
                            <h4 className="text-lg font-bold tracking-widest text-white/80 mb-2">
                                {pkg.name}
                            </h4>
                            <div className="flex items-start justify-center gap-1 text-white">
                                <span className="text-2xl mt-2">$</span>
                                <span className="text-6xl font-black font-heading tracking-tighter" style={{ color: pkg.color }}>
                                    {pkg.price}
                                </span>
                            </div>
                            <p className="text-sm text-white/50 mt-2 font-mono uppercase tracking-wide">
                                One-time Payment
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-white/70 text-center mb-8 h-12">
                            {pkg.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-4 mb-10">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                        <Check size={14} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <button
                            className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 ${
                                pkg.highlight
                                    ? "bg-primary text-black hover:bg-white hover:scale-[1.02]"
                                    : "bg-white/5 text-white hover:bg-white hover:text-black border border-white/10"
                            }`}
                        >
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-white/60">
                     <Info size={16} className="text-primary" />
                     <span>Need a custom quote? <a href="#contact" className="text-white hover:underline underline-offset-4 decoration-primary">Let&apos;s talk about your specific needs.</a></span>
                </div>
            </div>
        </section>
    );
}

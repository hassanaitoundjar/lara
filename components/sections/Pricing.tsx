"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check, Info } from "lucide-react";
import { useRef } from "react";
import { PRICING_PLANS } from "@/constants";
import PaddleCheckout from "@/components/paddle/PaddleCheckout";

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
                {PRICING_PLANS.map((plan) => (
                    <div
                        key={plan.id}
                        className={`pricing-card relative p-8 rounded-[2rem] border transition-all duration-300 group hover:-translate-y-2 ${
                            plan.highlight
                                ? "bg-white/10 border-primary/50 shadow-[0_0_30px_rgba(204,255,0,0.1)]"
                                : "bg-white/5 border-white/10 hover:border-white/20"
                        }`}
                    >
                         {/* Highlight Badge */}
                        {plan.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                Most Popular
                            </div>
                        )}

                        {/* Card Header */}
                        <div className="mb-8 p-4 rounded-2xl bg-black/20 text-center">
                            <h4 className="text-lg font-bold tracking-widest text-white/80 mb-2">
                                {plan.name}
                            </h4>
                            <div className="flex items-start justify-center gap-1 text-white">
                                <span className="text-2xl mt-2">$</span>
                                <span className="text-6xl font-black font-heading tracking-tighter" style={{ color: plan.color }}>
                                    {plan.price}
                                </span>
                            </div>
                            <p className="text-sm text-white/50 mt-2 font-mono uppercase tracking-wide">
                                One-time Payment
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-white/70 text-center mb-8 h-12">
                            {plan.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-4 mb-10">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                        <Check size={14} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <PaddleCheckout 
                            priceId={plan.id === "starter" ? "pri_01jsc0..." : plan.id === "professional" ? "pri_01jsc2..." : "pri_01jsc3..."} 
                            buttonText="Get Started"
                            variant={plan.highlight ? "primary" : "secondary"}
                            className="w-full"
                        />
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

"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";

const Hero3DScene = dynamic(() => import("@/components/3d/Hero3DScene"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-background z-0" />
});

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".hero-text-line", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.5,
        })
            .from(".hero-btn", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            }, "-=0.5")
            .from(".scroll-indicator", {
                opacity: 0,
                y: -20,
                duration: 1,
                ease: "power2.out",
            }, "-=0.5");

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full flex items-center justify-start overflow-hidden pt-20"
        >
            <Hero3DScene />

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                <div ref={textRef} className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <div className="overflow-hidden mb-6">
                        <h2 className="hero-text-line text-sm md:text-base font-bold text-primary tracking-[0.2em] uppercase border border-primary/30 px-4 py-1 rounded-full backdrop-blur-sm">
                            Hassan • Full Stack Developer
                        </h2>
                    </div>

                    <div className="overflow-hidden relative">
                        <h1 className="hero-text-line text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold font-heading leading-[0.9] tracking-tighter mb-4 mix-blend-difference z-10 relative">
                            REDEFINING
                        </h1>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[50%] bg-primary/20 blur-[100px] -z-10 rounded-full" />
                    </div>

                    <div className="overflow-hidden">
                        <h1 className="hero-text-line text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-serif italic text-white leading-[0.9] mb-8">
                            LIMITS
                        </h1>
                    </div>

                    <div className="overflow-hidden">
                        <p className="hero-text-line text-lg md:text-2xl text-white/80 max-w-2xl mb-12 leading-relaxed font-light">
                            Crafting <span className="text-primary font-bold">immersive</span> digital experiences that blend high-performance engineering with award-winning aesthetics.
                        </p>
                    </div>

                    <div className="hero-btn flex flex-wrap gap-6 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-background font-bold text-lg uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300 rounded-sm"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-white/20 text-white font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-background transition-all duration-300 rounded-sm backdrop-blur-sm flex items-center gap-2"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ArrowDown size={20} />
            </div>
        </section>
    );
}

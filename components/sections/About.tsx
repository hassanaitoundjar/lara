"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { ABOUT_SPECS, SKILLS } from "@/constants";

const ParticleRing = dynamic(() => import("@/components/3d/ParticleRing"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Parallax text effect
        gsap.to(".about-bg-text", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            x: -200,
            ease: "none"
        });

        gsap.from(".about-content", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });

        gsap.from(".spec-card", {
            scrollTrigger: {
                trigger: ".specs-grid",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });

    }, { scope: containerRef });

    return (
        <section id="about" ref={containerRef} className="py-32 relative overflow-hidden bg-background border-t border-white/5">

            {/* Background Huge Text */}
            <div className="absolute top-20 left-0 whitespace-nowrap opacity-5 select-none pointer-events-none">
                <h2 className="about-bg-text text-[20rem] font-black font-heading leading-none text-white">
                    FULL STACK
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.5fr_1fr] gap-16 items-center relative z-10 mb-24">

                {/* Left Content */}
                <div className="order-2 md:order-1">
                    <div className="inline-block mb-6">
                        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase border border-primary/30 px-3 py-1 rounded-sm bg-primary/5">
                            About Me
                        </span>
                    </div>

                    <h2 className="about-content text-5xl md:text-7xl font-bold font-heading mb-8 leading-[0.9]">
                        I AM <br />
                        <span className="text-primary font-serif italic font-light lowercase">Hassan</span>
                    </h2>

                    <div className="space-y-6 text-lg text-white/70 about-content font-light leading-relaxed max-w-xl">
                        <p>
                            I am a passionate developer who thrives in the space between complex backend logic and beautiful frontend interfaces. With deep expertise in <strong>Laravel, Next.js, and Mobile Development</strong>, I build complete systems from the ground up.
                        </p>
                        <p>
                            From architecting scalable databases to crafting fluid animations in Flutter and React Native, I deliver robust, high-performance solutions across all platforms.
                        </p>
                    </div>

                    {/* Specs Grid */}
                    <div className="specs-grid grid gap-4 mt-12">
                        {ABOUT_SPECS.map((spec, i) => (
                            <div key={i} className="spec-card flex items-center justify-between border-b border-white/10 pb-4 group hover:border-primary/50 transition-colors">
                                <div>
                                    <span className="block text-xs text-primary uppercase tracking-widest mb-1">{spec.label}</span>
                                    <span className="block text-sm text-white/60">{spec.desc}</span>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">{spec.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right 3D Content */}
                <div className="h-[400px] md:h-[600px] w-full relative order-1 md:order-2 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full" />

                    {/* HUD Elements */}
                    <div className="absolute top-10 right-10 text-xs text-primary font-mono opacity-50 flex flex-col items-end gap-1">
                        <span>CPU: 42%</span>
                        <span>MEM: 12GB</span>
                        <span>NET: ONLINE</span>
                    </div>

                    <Canvas className="z-10">
                        <ambientLight intensity={0.5} />
                        <ParticleRing />
                    </Canvas>
                </div>

            </div>

            {/* Tech Stream */}
            <div className="relative border-y border-white/5 py-6 overflow-hidden bg-black/50 backdrop-blur-sm">
                <div className="flex gap-16 whitespace-nowrap animate-marquee">
                    {SKILLS.map((skill, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-2xl font-heading font-bold text-white/40 uppercase tracking-widest hover:text-white transition-colors duration-300">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </section>
    );
}

"use client";

import { EXPERIENCES } from "@/constants";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%", // Trigger earlier
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".exp-header", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from(".exp-item", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                clearProps: "all" // Ensure visibility after animation
            }, "-=0.4");

        // Scroll Progress Line
        gsap.fromTo(lineRef.current,
            { height: "0%" },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".exp-list",
                    start: "top center",
                    end: "bottom center",
                    scrub: 0
                }
            }
        );

    }, { scope: containerRef });

    return (
        <section id="experience" ref={containerRef} className="py-32 bg-background relative overflow-hidden border-t border-white/5">
            {/* Background Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-16">

                {/* Header Section */}
                <div className="exp-header sticky top-32 self-start">
                    <div className="inline-block mb-6">
                        <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase border border-primary/30 px-3 py-2 rounded-sm bg-primary/5">
                            Career Trajectory
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-heading leading-[0.9] mb-8 tracking-tighter">
                        WORK <br />
                        <span className="text-white/10">HISTORY</span>
                    </h2>
                    <p className="text-lg text-white/50 leading-relaxed max-w-sm font-light">
                        Deployed production systems for industry leaders. A timeline of technical execution.
                    </p>
                </div>

                {/* Timeline Section */}
                <div className="exp-list relative space-y-12 py-4">
                    {/* Vertical Line Base */}
                    <div className="absolute left-0 top-4 bottom-4 w-px bg-white/5 hidden md:block" />
                    {/* Vertical Line Progress - Neon Fill */}
                    <div ref={lineRef} className="absolute left-0 top-4 w-px bg-primary shadow-[0_0_10px_rgba(204,255,0,0.5)] hidden md:block" />

                    {EXPERIENCES.map((exp, i) => (
                        <div key={i} className="exp-item relative md:pl-12 group p-8 rounded-tr-3xl rounded-bl-3xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-500">

                            {/* Timeline Dot */}
                            <div className="absolute left-[-4px] top-12 w-2 h-2 hidden md:block z-10">
                                <div className="absolute w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_10px_#CCFF00] transition-all duration-500" />
                                <div className="absolute w-2 h-2 bg-white/20 rounded-full top-0 left-0 group-hover:opacity-0 transition-opacity" />
                            </div>

                            <div className="flex flex-col md:flex-row gap-2 md:items-baseline md:justify-between mb-4">
                                <h3 className="text-4xl font-bold font-heading text-white group-hover:text-primary transition-colors duration-300">
                                    {exp.company}
                                </h3>
                                <span className="font-mono text-xs tracking-widest text-white/30 group-hover:text-white transition-colors">{exp.period}</span>
                            </div>

                            <div className="text-lg text-white/60 font-medium mb-6 flex items-center gap-2 group-hover:text-white transition-colors">
                                {exp.role}
                            </div>

                            <p className="text-white/40 leading-relaxed mb-8 max-w-2xl font-light group-hover:text-white/60 transition-colors">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {exp.tech.map((tech, t) => (
                                    <span key={t} className="text-[10px] font-mono border border-white/5 px-3 py-1.5 rounded-sm text-white/30 uppercase tracking-wider group-hover:border-primary/20 group-hover:text-primary transition-all duration-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

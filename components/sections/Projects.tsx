"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CATEGORIES, PROJECTS } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

// Utility to determine col-span based on size
const getSpanClass = (size: string) => {
    switch (size) {
        case "large":
            return "md:col-span-2 row-span-2";
        case "medium":
            return "md:col-span-1 row-span-2"; // Taller portrait card
        case "small":
            return "md:col-span-1 row-span-1";
        default:
            return "md:col-span-1 row-span-1";
    }
};

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("ALL");
    const containerRef = useRef<HTMLElement>(null);
    const filterRef = useRef<HTMLDivElement>(null);

    // Filter projects logic
    const filteredProjects = useMemo(() => {
        if (activeCategory === "ALL") return PROJECTS;
        return PROJECTS.filter((p) => p.category === activeCategory);
    }, [activeCategory]);

    // Animation for filtering
    useGSAP(() => {
        gsap.fromTo(
            ".project-card",
            { opacity: 0, y: 20, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.out",
                overwrite: "auto",
            }
        );
    }, { dependencies: [activeCategory], scope: containerRef });

    // Initial Scroll Animation
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(".section-title", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        })
            .from(
                filterRef.current,
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                },
                "-=0.4"
            );
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="projects"
            className="relative min-h-screen py-24 px-4 md:px-8 max-w-[1600px] mx-auto"
        >
            {/* Background Gradients for ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
            </div>

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="section-title">
                    <h2 className="text-[12vw] leading-[0.9] font-black tracking-tighter opacity-10 font-heading select-none absolute top-10 left-0 -z-10">
                        WORKS
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading">
                        Selected <span className="text-primary">Works</span>
                    </h2>
                    <p className="mt-4 text-white/60 max-w-md text-lg">
                        A collection of digital experiences, interactive installations, and scalable systems.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div
                    ref={filterRef}
                    className="flex flex-wrap gap-2 p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
                >
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={twMerge(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group",
                                activeCategory === cat
                                    ? "text-black bg-primary font-bold shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                                    : "text-white/70 hover:text-white hover:bg-white/10"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[300px]">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className={twMerge(
                            "project-card group relative flex flex-col justify-between overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/20",
                            getSpanClass(project.size)
                        )}
                    >
                        {/* Image Background */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={(project as any).image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/90 z-10" />
                        </div>

                        {/* Content Top */}
                        <div className="p-8 z-10">
                            <div className="flex justify-between items-start">
                                <span className="text-sm font-mono text-white/50 border border-white/10 px-3 py-1 rounded-full">
                                    {project.year}
                                </span>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <button className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-colors">
                                        <Github className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 bg-primary rounded-full hover:bg-primary/80 text-black transition-colors">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>



                        {/* Content Bottom */}
                        <div className="p-8 z-20 relative">
                            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                <h3 className="text-3xl font-bold font-heading mb-2 leading-tight drop-shadow-lg">
                                    {project.title}
                                </h3>
                                <p className="text-white/80 mb-4 line-clamp-2 text-sm group-hover:text-white transition-colors font-medium drop-shadow-md">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                                {project.tags.length > 3 && (
                                    <span className="text-xs font-mono text-white/80 px-2 py-1 backdrop-blur-md bg-black/40 rounded-md">
                                        +{project.tags.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 flex justify-center">
                <button className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium transition-all group hover:scale-105 active:scale-95 flex items-center gap-2">
                    View Full Archive <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </button>
            </div>
        </section>
    );
};
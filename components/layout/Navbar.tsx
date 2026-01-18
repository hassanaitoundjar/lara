"use client";

import { NAV_LINKS } from "@/constants";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingBag } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Refs for animation
    const menuRef = useRef<HTMLDivElement>(null);
    const linksContainerRef = useRef<HTMLDivElement>(null);
    const menuTimeline = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Create timeline on mount
    useGSAP(() => {
        if (!menuRef.current || !linksContainerRef.current) return;

        menuTimeline.current = gsap.timeline({ paused: true })
            .to(menuRef.current, {
                opacity: 1,
                visibility: "visible",
                duration: 0.5,
                ease: "power2.inOut"
            })
            .from(linksContainerRef.current.children, {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power4.out",
                skewY: 7
            }, "-=0.2");

    }, { scope: menuRef });

    // Handle Open/Close
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
            menuTimeline.current?.play();
        } else {
            document.body.style.overflow = "auto";
            menuTimeline.current?.reverse();
        }
    }, [isMobileMenuOpen]);

    const FlipLink = ({ href, children, className, onClick }: { href: string, children: string, className?: string, onClick?: () => void }) => {
        return (
            <Link
                href={href}
                onClick={onClick}
                className={cn("relative block overflow-hidden whitespace-nowrap group", className)}
                style={{ lineHeight: 1 }} // Tighter line height for better flip effect
            >
                <div className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    {children}
                </div>
                <div className="absolute top-0 left-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 text-primary italic font-serif">
                    {children}
                </div>
            </Link>
        );
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 py-4 md:px-8 md:py-6",
                    isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
                )}
            >
                <div className="flex items-start justify-between w-full relative">

                    {/* Left Corner - CTA button similar to "Store" */}
                    <Link
                        href="#projects"
                        className="hidden md:flex items-center gap-2 px-6 py-2 bg-primary text-background font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300 rounded-sm"
                    >
                        <ShoppingBag size={16} /> Work
                    </Link>
                    {/* Mobile Only Logo (Left aligned if desktop is hidden) */}
                    <Link href="/" className="md:hidden text-2xl font-bold font-heading tracking-tighter mix-blend-difference">
                        LN
                    </Link>


                    {/* Center - Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 hidden md:block">
                        <Link href="/" className="text-4xl font-bold font-heading tracking-tighter hover:text-primary transition-colors mix-blend-difference">
                            ALEX<span className="text-primary">.</span>DEV
                        </Link>
                    </div>

                    {/* Right Corner - Menu Trigger */}
                    <button
                        className="flex items-center gap-2 group z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="hidden md:block text-sm font-bold tracking-widest uppercase group-hover:text-primary transition-colors mix-blend-difference">
                            {isMobileMenuOpen ? "Close" : "Menu"}
                        </div>
                        <div className="p-2 bg-white/10 rounded-sm group-hover:bg-primary group-hover:text-background transition-colors">
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </div>
                    </button>
                </div>
            </nav>

            {/* Full Screen Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center opacity-0 invisible"
            >
                <div ref={linksContainerRef} className="flex flex-col items-center gap-2">
                    {NAV_LINKS.map((link) => (
                        <div key={link.name} className="overflow-hidden">
                            <FlipLink
                                href={link.href}
                                className="text-5xl sm:text-6xl md:text-8xl font-black font-heading tracking-tighter text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </FlipLink>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-10 left-0 right-0 text-center text-white/30 text-sm uppercase tracking-widest">
                    Based in SF • Available for Freelance
                </div>
            </div>
        </>
    );
}

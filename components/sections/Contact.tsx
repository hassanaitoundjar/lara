"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [status, setStatus] = useState("IDLE");

    useGSAP(() => {
        gsap.from(".contact-anim", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    return (
        <section id="contact" ref={containerRef} className="py-32 relative overflow-hidden bg-background border-t border-white/5">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">

                {/* Left: Content */}
                <div className="flex flex-col justify-center">
                    <div className="contact-anim inline-block mb-8">
                        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase border border-primary/30 px-3 py-2 rounded-sm bg-primary/5">
                            Secure Channel
                        </span>
                    </div>

                    <h2 className="contact-anim text-5xl sm:text-6xl md:text-8xl font-black font-heading leading-[0.9] mb-8 tracking-tighter">
                        START <br />
                        <span className="text-white/10">TRANSMISSION</span>
                    </h2>

                    <p className="contact-anim text-lg text-white/50 leading-relaxed max-w-md font-light mb-12">
                        Available for select freelance opportunities and high-velocity engineering roles. Initiating handshake...
                    </p>

                    <div className="contact-anim space-y-4 font-mono text-sm text-white/30 hidden md:block">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span>ENCRYPTION</span>
                            <span className="text-primary">AES-256</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span>LATENCY</span>
                            <span className="text-primary">12ms</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span>STATUS</span>
                            <span className="text-primary animate-pulse">{status === "IDLE" ? "AWAITING_INPUT" : "TRANSMITTING..."}</span>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="contact-anim relative">
                    <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full opacity-20" />

                    <form className="relative bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl space-y-8">

                        <div className="group relative">
                            <label className="text-xs font-mono text-primary mb-2 block tracking-widest uppercase opacity-70 group-focus-within:opacity-100">Identity</label>
                            <div className="flex items-center border-b border-white/20 group-focus-within:border-primary transition-colors duration-300">
                                <span className="text-white/30 mr-4 font-mono">{">"}</span>
                                <input
                                    type="text"
                                    placeholder="ENTER_NAME"
                                    className="w-full bg-transparent px-0 py-4 text-white placeholder-white/20 focus:outline-none font-bold tracking-widest uppercase text-sm"
                                    onFocus={() => setStatus("TYPING")}
                                    onBlur={() => setStatus("IDLE")}
                                />
                            </div>
                        </div>

                        <div className="group relative">
                            <label className="text-xs font-mono text-primary mb-2 block tracking-widest uppercase opacity-70 group-focus-within:opacity-100">Coordinates</label>
                            <div className="flex items-center border-b border-white/20 group-focus-within:border-primary transition-colors duration-300">
                                <span className="text-white/30 mr-4 font-mono">{">"}</span>
                                <input
                                    type="email"
                                    placeholder="EMAIL@ADDRESS.COM"
                                    className="w-full bg-transparent px-0 py-4 text-white placeholder-white/20 focus:outline-none font-bold tracking-widest uppercase text-sm"
                                    onFocus={() => setStatus("TYPING")}
                                    onBlur={() => setStatus("IDLE")}
                                />
                            </div>
                        </div>

                        <div className="group relative">
                            <label className="text-xs font-mono text-primary mb-2 block tracking-widest uppercase opacity-70 group-focus-within:opacity-100">Payload</label>
                            <div className="flex items-start border-b border-white/20 group-focus-within:border-primary transition-colors duration-300">
                                <span className="text-white/30 mr-4 font-mono py-4">{">"}</span>
                                <textarea
                                    rows={4}
                                    placeholder="MESSAGE_CONTENT..."
                                    className="w-full bg-transparent px-0 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-all duration-300 resize-none font-medium text-sm"
                                    onFocus={() => setStatus("TYPING")}
                                    onBlur={() => setStatus("IDLE")}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black font-bold text-lg uppercase tracking-wider py-5 hover:bg-primary transition-all duration-300 clip-path-polygon relative group overflow-hidden"
                        >
                            <span className="relative z-10 group-hover:text-black transition-colors">Execute Transmission</span>
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

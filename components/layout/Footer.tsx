import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-heading text-white">DevHassan Studio</h3>
                        <p className="text-sm text-white/60">
                            Building modern web and mobile applications with cutting-edge technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="/#about" className="text-sm text-white/60 hover:text-primary transition-colors">
                                About
                            </Link>
                            <Link href="/#projects" className="text-sm text-white/60 hover:text-primary transition-colors">
                                Projects
                            </Link>
                            <Link href="/#pricing" className="text-sm text-white/60 hover:text-primary transition-colors">
                                Pricing
                            </Link>
                            <Link href="/#contact" className="text-sm text-white/60 hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Legal</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="/privacy" className="text-sm text-white/60 hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-white/60 hover:text-primary transition-colors">
                                Terms & Conditions
                            </Link>
                            <Link href="/faq" className="text-sm text-white/60 hover:text-primary transition-colors">
                                FAQ
                            </Link>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Connect</h4>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                                <Github size={20} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-white/40">
                        © {new Date().getFullYear()} DevHassan Studio. All rights reserved.
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/40">
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Privacy
                        </Link>
                        <span>•</span>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                            Terms
                        </Link>
                        <span>•</span>
                        <Link href="/faq" className="hover:text-primary transition-colors">
                            FAQ
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

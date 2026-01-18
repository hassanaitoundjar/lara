import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="text-sm text-white/40">
                    © {new Date().getFullYear()} Alex Dev. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
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
        </footer>
    );
}

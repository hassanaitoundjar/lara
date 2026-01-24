export const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export const PROJECTS = [
    // Next.js Projects
    {
        title: "NEBULA DASH",
        year: "2025",
        color: "#00FF94",
        category: "NEXT.JS",
        type: "Dashboard",
        id: "next-01",
        location: "San Francisco",
        description: "High-performance analytics dashboard with real-time data visualization.",
        tags: ["Next.js", "React", "Tremor", "Vercel"],
        size: "large",
        image: "/images/projects/nextjs.png"
    },
    {
        title: "QUANTUM SAAS",
        year: "2024",
        color: "#0070F3",
        category: "NEXT.JS",
        type: "SaaS Platform",
        id: "next-02",
        location: "Austin",
        description: "Scalable SaaS starter kit with integrated authentication and payments.",
        tags: ["Next.js", "Supabase", "Stripe", "Tailwind"],
        size: "medium",
        image: "/images/projects/nextjs.png"
    },
    // Astro Projects
    {
        title: "COSMOS BLOG",
        year: "2024",
        color: "#FF5D01",
        category: "ASTRO",
        type: "Content Site",
        id: "astro-01",
        location: "Remote",
        description: "Static content site optimized for 100/100 Lighthouse performance scores.",
        tags: ["Astro", "Markdown", "Alpine.js", "Vercel"],
        size: "medium",
        image: "/images/projects/astro.png"
    },
    {
        title: "STELLAR DOCS",
        year: "2023",
        color: "#BC52EE",
        category: "ASTRO",
        type: "Documentation",
        id: "astro-02",
        location: "London",
        description: "Beautiful documentation portal for open source libraries.",
        tags: ["Astro", "Starlight", "MDX", "Search"],
        size: "small",
        image: "/images/projects/astro.png"
    },
    // Flutter Projects
    {
        title: "FLUTTER FLOW",
        year: "2025",
        color: "#02569B",
        category: "FLUTTER",
        type: "Mobile App",
        id: "flutter-01",
        location: "Berlin",
        description: "Cross-platform fitness tracking application with fluid animations.",
        tags: ["Flutter", "Dart", "Firebase", "HealthKit"],
        size: "large",
        image: "/images/projects/flutter.png"
    },
    {
        title: "WIDGET VERSE",
        year: "2024",
        color: "#47C5FB",
        category: "FLUTTER",
        type: "UI Kit",
        id: "flutter-02",
        location: "Toronto",
        description: "Comprehensive UI widget library for rapid mobile development.",
        tags: ["Flutter", "Riverpod", "Material 3", "Canvas"],
        size: "medium",
        image: "/images/projects/flutter.png"
    },
    // React Native Projects
    {
        title: "SOCIAL SYNC",
        year: "2025",
        color: "#61DAFB",
        category: "REACT NATIVE",
        type: "Social App",
        id: "rn-01",
        location: "New York",
        description: "Real-time social networking app with offline-first architecture.",
        tags: ["React Native", "Expo", "GraphQL", "Reanimated"],
        size: "large",
        image: "/images/projects/react-native.png"
    },
    {
        title: "NATIVE MARKET",
        year: "2024",
        color: "#282C34",
        category: "REACT NATIVE",
        type: "E-Commerce",
        id: "rn-02",
        location: "Seattle",
        description: "Mobile marketplace application with seamless checkout flows.",
        tags: ["React Native", "Shopify", "Redux", "Jest"],
        size: "medium",
        image: "/images/projects/react-native.png"
    },
    // Laravel Projects
    {
        title: "LARA ADMIN",
        year: "2024",
        color: "#FF2D20",
        category: "LARAVEL",
        type: "Admin Panel",
        id: "laravel-01",
        location: "Paris",
        description: "Robust enterprise administration panel with role-based access control.",
        tags: ["Laravel", "Filament", "Livewire", "MySQL"],
        size: "medium",
        image: "/images/projects/laravel.png"
    },
    {
        title: "API NEXUS",
        year: "2023",
        color: "#4F46E5",
        category: "LARAVEL",
        type: "Backend API",
        id: "laravel-02",
        location: "Amsterdam",
        description: "High-throughput REST API serving millions of requests daily.",
        tags: ["Laravel", "Redis", "Horizon", "Docker"],
        size: "small",
        image: "/images/projects/laravel.png"
    }
];

export const CATEGORIES = ["ALL", "NEXT.JS", "ASTRO", "FLUTTER", "REACT NATIVE", "LARAVEL"];

export const YEARS = ["ALL", "2025", "2024", "2023"];

export const EXPERIENCES = [
    {
        company: "DevHassan Studio",
        role: "Lead Developer & Founder",
        period: "2022 - Present",
        description: "Building custom web and mobile applications for clients worldwide. Specializing in modern tech stacks and delivering high-performance solutions for businesses of all sizes.",
        tech: ["Next.js", "React Native", "Laravel", "Flutter"]
    },
    {
        company: "Tech Solutions Agency",
        role: "Full Stack Developer",
        period: "2020 - 2022",
        description: "Developed e-commerce platforms and business websites for local and international clients. Led frontend architecture decisions and mentored junior developers.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
    },
    {
        company: "Digital Creatives",
        role: "Web Developer",
        period: "2018 - 2020",
        description: "Created responsive websites and landing pages for marketing campaigns. Implemented SEO best practices and optimized site performance for better user experience.",
        tech: ["WordPress", "PHP", "JavaScript", "MySQL"]
    },
    {
        company: "Freelance Projects",
        role: "Independent Developer",
        period: "2016 - 2018",
        description: "Delivered custom web solutions for startups and small businesses. Built portfolio sites, booking systems, and content management platforms tailored to client needs.",
        tech: ["Laravel", "Vue.js", "Bootstrap", "jQuery"]
    }
];

export const SKILLS = [
    "LARAVEL", "FLUTTER", "REACT NATIVE", "NEXT.JS", "REACT", "TYPESCRIPT", "NODE", "SQL",
    "LARAVEL", "FLUTTER", "REACT NATIVE", "NEXT.JS", "REACT", "TYPESCRIPT", "NODE", "SQL"
];

export const ABOUT_SPECS = [
    { label: "Frontend", value: "React / WebGL", desc: "Creating immersive, high-performance interfaces interacting at 60fps." },
    { label: "Backend", value: "Node / SQL", desc: "Architecting scalable server-side systems and robust data pipelines." },
    { label: "DevOps", value: "CI/CD / Cloud", desc: "Automating deployment workflows and ensuring 99.9% system uptime." }
];

// Pricing Plans Configuration
export const PRICING_PLANS = [
    {
        id: "starter",
        name: "STARTER",
        price: 18,
        description: "Perfect for personal blogs and simple landing pages.",
        features: [
            "Single Page Application",
            "Mobile Responsive Design",
            "Basic SEO Optimization",
            "Contact Form Integration",
            "1 Month Support"
        ],
        highlight: false,
        color: "#00FFFF", // Cyan
        paymentUrl: "https://whop.com/checkout/plan_fdEfF0drdTID3"
    },
    {
        id: "professional",
        name: "PROFESSIONAL",
        price: 39,
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
        color: "#CCFF00", // Neon Lime
        paymentUrl: "https://whop.com/checkout/plan_vGTMQFNesFnnV"
    },
    {
        id: "enterprise",
        name: "ENTERPRISE",
        price: 60,
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
        color: "#2D55FF", // Electric Blue
        paymentUrl: "https://whop.com/checkout/plan_uyIp2jcCPDXBt"
    }
];

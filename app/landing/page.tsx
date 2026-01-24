"use client";

import { PRICING_PLANS } from "@/constants";
import { Check, Zap, Shield, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/80">One-Time Payment • No Subscriptions</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight">
              Build Your Dream
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Website Today
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Professional web development services with transparent pricing.
              <br />
              Pay once, own your code forever.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="#pricing"
                className="group px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-white transition-all duration-300 flex items-center gap-2"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 border border-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">
              Why Choose Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading tracking-tight">
              Premium Quality, <span className="text-white/50 font-serif italic font-light">Guaranteed</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Optimized for performance with 90+ Lighthouse scores"
              },
              {
                icon: "🎨",
                title: "Modern Design",
                description: "Beautiful, responsive interfaces that wow your users"
              },
              {
                icon: "🔒",
                title: "Secure & Reliable",
                description: "Built with best practices and industry standards"
              },
              {
                icon: "📱",
                title: "Mobile First",
                description: "Perfect experience on all devices and screen sizes"
              },
              {
                icon: "🚀",
                title: "SEO Optimized",
                description: "Rank higher with built-in SEO best practices"
              },
              {
                icon: "💎",
                title: "Own Your Code",
                description: "Full source code ownership with no recurring fees"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{feature.title}</h4>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 md:py-32">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[150px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-8 rounded-[2rem] border transition-all duration-300 group hover:-translate-y-2 ${
                  plan.highlight
                    ? "bg-white/10 border-primary/50 shadow-[0_0_30px_rgba(204,255,0,0.1)] scale-105"
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
                <p className="text-white/70 text-center mb-8 min-h-[3rem]">
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

                {/* CTA */}
                <a
                  href={`/payment-redirect?payment=${encodeURIComponent(plan.paymentUrl)}`}
                  className={`block w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 text-center ${
                    plan.highlight
                      ? "bg-primary text-black hover:bg-white hover:scale-[1.02]"
                      : "bg-white/5 text-white hover:bg-white hover:text-black border border-white/10"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* Custom Quote CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-white/60">
              <span>Need a custom quote?</span>
              <Link href="/#contact" className="text-white hover:underline underline-offset-4 decoration-primary">
                Let&apos;s talk about your specific needs.
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-white/10 backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Choose your plan and start building your dream website today.
              No commitments, no subscriptions, just results.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-white transition-all duration-300"
            >
              Choose Your Plan
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2025 Your Company. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/#about" className="text-white/60 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link href="/#projects" className="text-white/60 hover:text-white text-sm transition-colors">
                Projects
              </Link>
              <Link href="/#contact" className="text-white/60 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

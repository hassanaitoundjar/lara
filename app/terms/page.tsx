import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Scale, AlertTriangle, CreditCard, RefreshCw, Ban } from "lucide-react";
import { PAGE_METADATA } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_METADATA.terms.title,
  description: PAGE_METADATA.terms.description,
  keywords: PAGE_METADATA.terms.keywords,
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-8"
          >
            ← Back to Home
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight">
              Terms & Conditions
            </h1>
          </div>
          
          <p className="text-white/60 text-lg">
            Last updated: January 24, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-white/70 leading-relaxed">
              Welcome to DevHassan Studio. These Terms and Conditions outline the rules and regulations for the 
              use of our website and services.
            </p>
            <p className="text-white/70 leading-relaxed">
              By accessing this website and using our services, you accept these terms and conditions in full. 
              Do not continue to use our website if you do not accept all of the terms and conditions stated on this page.
            </p>
          </div>

          {/* Agreement to Terms */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Scale className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-heading">Agreement to Terms</h2>
            </div>
            
            <div className="pl-11 space-y-4">
              <p className="text-white/70 leading-relaxed">
                By using our services, you agree to be bound by these Terms and Conditions, all applicable laws 
                and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading">Our Services</h2>
            
            <div className="space-y-4">
              <p className="text-white/70 leading-relaxed">
                DevHassan Studio provides web development, mobile app development, and related digital services. 
                We offer three main service packages:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li><strong className="text-white">Starter Package ($18):</strong> Single page applications and basic websites</li>
                <li><strong className="text-white">Professional Package ($39):</strong> Multi-page websites with CMS integration</li>
                <li><strong className="text-white">Enterprise Package ($60):</strong> Custom web applications with advanced features</li>
              </ul>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <CreditCard className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-heading">Payment Terms</h2>
            </div>
            
            <div className="pl-11 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">One-Time Payment</h3>
                <p className="text-white/70 leading-relaxed">
                  All our packages require a one-time payment. There are no recurring subscription fees. 
                  Payment must be made in full before project commencement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Payment Methods</h3>
                <p className="text-white/70 leading-relaxed">
                  We accept payments via credit card, debit card, and other payment methods as displayed 
                  during checkout through our secure payment processor.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Pricing</h3>
                <p className="text-white/70 leading-relaxed">
                  All prices are listed in USD. We reserve the right to modify our pricing at any time. 
                  Price changes will not affect orders already placed.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Policy */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-heading">Refund Policy</h2>
            </div>
            
            <div className="pl-11 space-y-4">
              <p className="text-white/70 leading-relaxed">
                We offer a 14-day money-back guarantee from the date of purchase under the following conditions:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>No work has been started on your project</li>
                <li>You notify us within 14 days of purchase</li>
                <li>Refund requests must be submitted in writing via email</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                Once development work has begun, refunds will be prorated based on work completed.
              </p>
            </div>
          </div>

          {/* Project Delivery */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading">Project Delivery & Timeline</h2>
            
            <div className="space-y-4">
              <p className="text-white/70 leading-relaxed">
                Project timelines are estimated and communicated at the start of each project. Delivery times 
                may vary based on:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Project complexity and scope</li>
                <li>Client feedback and approval timelines</li>
                <li>Availability of required resources and content</li>
                <li>Revision requests and scope changes</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading">Intellectual Property Rights</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Code Ownership</h3>
                <p className="text-white/70 leading-relaxed">
                  Upon full payment, you own the source code and final deliverables of your project. 
                  We retain the right to showcase the project in our portfolio unless otherwise agreed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Third-Party Assets</h3>
                <p className="text-white/70 leading-relaxed">
                  Any third-party libraries, frameworks, or assets used in your project remain the property 
                  of their respective owners and are subject to their own licenses.
                </p>
              </div>
            </div>
          </div>

          {/* Limitations of Liability */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-heading">Limitations of Liability</h2>
            </div>
            
            <div className="pl-11 space-y-4">
              <p className="text-white/70 leading-relaxed">
                DevHassan Studio shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our services. Our total liability shall not 
                exceed the amount paid for the specific service.
              </p>
            </div>
          </div>

          {/* Support & Maintenance */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading">Support & Maintenance</h2>
            
            <div className="space-y-4">
              <p className="text-white/70 leading-relaxed">
                Support periods are included with each package:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Starter: 1 month of support</li>
                <li>Professional: 3 months of support</li>
                <li>Enterprise: 6 months of support</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                Extended support and maintenance packages are available for purchase separately.
              </p>
            </div>
          </div>

          {/* Prohibited Uses */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Ban className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-heading">Prohibited Uses</h2>
            </div>
            
            <div className="pl-11 space-y-4">
              <p className="text-white/70 leading-relaxed">
                You may not use our services for:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Any unlawful purpose or illegal activity</li>
                <li>Violating any international, federal, or state regulations</li>
                <li>Infringing upon intellectual property rights</li>
                <li>Transmitting harmful code or malware</li>
                <li>Harassing, abusing, or harming others</li>
              </ul>
            </div>
          </div>

          {/* Termination */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading">Termination</h2>
            
            <div className="space-y-4">
              <p className="text-white/70 leading-relaxed">
                We reserve the right to terminate or suspend access to our services immediately, without prior 
                notice, for any breach of these Terms and Conditions.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading">Changes to Terms</h2>
            
            <div className="space-y-4">
              <p className="text-white/70 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting to the website. Your continued use of our services constitutes acceptance of the 
                modified terms.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">Questions?</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="text-white/70">
              <p>Email: legal@devhassan.studio</p>
              <p>Website: www.devhassan.space</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

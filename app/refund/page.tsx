import type { Metadata } from "next";
import Link from "next/link";
import { FileText, RefreshCw } from "lucide-react";
import { PAGE_METADATA } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Strict, transparent refund and cancellation policy for digital website products and subscriptions.",
  keywords: ["refund policy", "cancellation", "digital goods", "website", "subscription", "terms"],
};

export default function RefundPolicyPage() {
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
            <RefreshCw className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight">
              Refund & Cancellation Policy
            </h1>
          </div>
          <p className="text-white/60 text-lg">
            Last updated: March 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <p className="text-white/70 leading-relaxed">
              This Refund & Cancellation Policy applies to all digital website packages and maintenance subscriptions purchased from our company. By making a purchase, you agree to the terms below.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-heading">Digital Website Packages</h2>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Refunds are eligible only if requested before delivery of the final product.</li>
              <li>Once the website or digital product is delivered, all sales are final and non-refundable.</li>
              <li>Revision rounds are included as per your selected package. Additional revisions are not included.</li>
              <li>Ownership of deliverables transfers upon final delivery and full payment.</li>
              <li>No refunds are provided for dissatisfaction with features outside the defined package scope.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-heading">Maintenance Subscription</h2>
            <ul className="list-disc pl-6 text-white/70 space-y-2">
              <li>Maintenance subscriptions are billed monthly and renew automatically unless cancelled.</li>
              <li>Refunds are not available for the current billing period once service has commenced.</li>
              <li>You may cancel your subscription at any time; cancellation will take effect at the end of the current billing cycle.</li>
              <li>No partial refunds are provided for unused service within a billing period.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-white/70 leading-relaxed">
              For any questions or to request a refund before delivery, please contact our support team at <a href="mailto:hello@devhassan.studio" className="text-primary underline">hello@devhassan.studio</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

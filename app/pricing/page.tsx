import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Pricing from "@/components/sections/Pricing";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Website Packages & Subscription",
  description: "Transparent, fixed pricing for digital website packages and maintenance subscriptions. No hidden fees. Compare plans and choose the best fit for your business.",
  keywords: ["pricing", "website packages", "subscription", "digital product", "SaaS", "compare plans"],
};

const FAQ = [
  {
    question: "Are your prices one-time payments or subscriptions?",
    answer: "Website packages are one-time payments. The maintenance plan is a monthly subscription. No hidden fees."
  },
  {
    question: "What is included in each package?",
    answer: "Each package includes clearly defined deliverables, revision limits, and a fixed delivery timeframe. See the comparison table above for details."
  },
  {
    question: "Can I get a refund?",
    answer: "Refunds are only available before delivery of the final product. See our Refund Policy for full details."
  },
  {
    question: "How do I subscribe to maintenance?",
    answer: "Select the Maintenance Subscription plan and complete checkout. You can cancel anytime."
  },
  {
    question: "Do I own my website after delivery?",
    answer: "Yes. Full ownership is transferred to you upon final delivery and payment."
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-40 pb-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tighter mb-8 leading-[0.8]">
            PRICING
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Transparent, fixed pricing for digital website packages and maintenance subscriptions. No hidden fees. No surprises.
          </p>
        </div>
      </section>
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Pricing />
      </section>
      {/* Comparison Table */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold font-heading text-primary mb-8 text-center">Compare Packages</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-white/10 rounded-xl overflow-hidden text-sm text-white/80">
            <thead className="bg-primary/10">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4">Starter</th>
                <th className="p-4">Professional</th>
                <th className="p-4">Enterprise</th>
                <th className="p-4">Maintenance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 font-bold">Pages Included</td>
                <td className="p-4">1</td>
                <td className="p-4">Up to 5</td>
                <td className="p-4">Up to 10</td>
                <td className="p-4">N/A</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">CMS Integration</td>
                <td className="p-4">-</td>
                <td className="p-4">Yes</td>
                <td className="p-4">Yes</td>
                <td className="p-4">-</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Custom Web App</td>
                <td className="p-4">-</td>
                <td className="p-4">-</td>
                <td className="p-4">Yes (pre-defined modules)</td>
                <td className="p-4">-</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Delivery Time</td>
                <td className="p-4">3 days</td>
                <td className="p-4">7 days</td>
                <td className="p-4">14 days</td>
                <td className="p-4">Monthly</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Revisions Included</td>
                <td className="p-4">1</td>
                <td className="p-4">2</td>
                <td className="p-4">3</td>
                <td className="p-4">N/A</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Ownership Transfer</td>
                <td className="p-4">Yes</td>
                <td className="p-4">Yes</td>
                <td className="p-4">Yes</td>
                <td className="p-4">N/A</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Refund Policy</td>
                <td className="p-4">Before delivery only</td>
                <td className="p-4">Before delivery only</td>
                <td className="p-4">Before delivery only</td>
                <td className="p-4">Not eligible after service month starts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-heading text-primary mb-8 text-center flex items-center justify-center gap-2">
          <HelpCircle className="w-8 h-8 text-primary" /> Pricing FAQ
        </h2>
        <div className="space-y-6">
          {FAQ.map((item, idx) => (
            <div key={idx} className="border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-semibold text-white pr-8">{item.question}</span>
                <span className="text-white/70 mt-2 md:mt-0">{item.answer}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <span className="text-white/60">See our <Link href="/refund" className="text-primary underline">Refund Policy</Link> for details.</span>
        </div>
      </section>
      <Footer />
    </main>
  );
}

"use client";

import Link from "next/link";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ_DATA = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What services do you offer?",
        answer: "We offer comprehensive web and mobile development services including single-page applications, multi-page websites, e-commerce platforms, custom web applications, mobile apps (React Native & Flutter), and CMS integration. We have three main packages: Starter ($18), Professional ($39), and Enterprise ($60)."
      },
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity. A simple landing page (Starter) typically takes 3-5 days, a multi-page website (Professional) takes 1-2 weeks, and custom applications (Enterprise) can take 2-4 weeks. We'll provide a detailed timeline during our initial consultation."
      },
      {
        question: "Do you work with clients internationally?",
        answer: "Yes! We work with clients worldwide. All communication is handled via email, video calls, and project management tools. We're flexible with time zones and ensure smooth collaboration regardless of location."
      },
      {
        question: "What technologies do you use?",
        answer: "We specialize in modern tech stacks including Next.js, React, React Native, Flutter, Laravel, Node.js, and various databases. We choose the best technology based on your project requirements and long-term goals."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        question: "Are your prices one-time payments or subscriptions?",
        answer: "All our packages are one-time payments. You pay once and own your code forever. There are no hidden recurring fees or subscription charges. Support periods are included with each package (1-6 months depending on the tier)."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, debit cards, and online payment methods through our secure payment processor (Stripe). All transactions are encrypted and secure."
      },
      {
        question: "Can I get a custom quote?",
        answer: "Absolutely! If your project doesn't fit our standard packages, we're happy to provide a custom quote. Contact us with your requirements, and we'll prepare a tailored proposal within 24-48 hours."
      },
      {
        question: "Do you offer refunds?",
        answer: "Yes, we offer a 14-day money-back guarantee if no work has been started on your project. Once development begins, refunds are prorated based on work completed. See our Terms & Conditions for full details."
      }
    ]
  },
  {
    category: "Project Process",
    questions: [
      {
        question: "What's your development process?",
        answer: "Our process includes: 1) Initial consultation to understand requirements, 2) Project proposal and timeline, 3) Design mockups for approval, 4) Development with regular updates, 5) Testing and revisions, 6) Final delivery and deployment, 7) Post-launch support."
      },
      {
        question: "How many revisions are included?",
        answer: "Starter package includes 2 revision rounds, Professional includes 3 rounds, and Enterprise includes unlimited revisions during the development phase. Additional revisions beyond these limits can be purchased separately."
      },
      {
        question: "Will I own the source code?",
        answer: "Yes! Upon full payment, you receive complete ownership of the source code and all project deliverables. We can also provide documentation and training if needed."
      },
      {
        question: "Do you provide hosting services?",
        answer: "We can help you set up hosting on platforms like Vercel, Netlify, AWS, or your preferred provider. Hosting costs are separate and paid directly to the hosting provider. We can also manage hosting for you with a monthly maintenance package."
      }
    ]
  },
  {
    category: "Support & Maintenance",
    questions: [
      {
        question: "What's included in the support period?",
        answer: "Support includes bug fixes, minor content updates, technical assistance, and guidance on using your website/app. It does not include new features or major redesigns, which can be quoted separately."
      },
      {
        question: "What happens after the support period ends?",
        answer: "You can purchase extended support packages or reach out for specific updates on a project basis. Your website/app will continue to function normally; support just means we're available for assistance and updates."
      },
      {
        question: "Do you offer ongoing maintenance?",
        answer: "Yes! We offer monthly maintenance packages that include regular updates, security patches, content updates, performance monitoring, and priority support. Contact us for pricing details."
      },
      {
        question: "Can you help with SEO and marketing?",
        answer: "We implement SEO best practices in all our projects (proper meta tags, semantic HTML, fast loading times). For advanced SEO services and digital marketing, we can connect you with trusted partners or provide recommendations."
      }
    ]
  },
  {
    category: "Technical Questions",
    questions: [
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely! All our websites are built with a mobile-first approach and are fully responsive across all devices (phones, tablets, desktops). We test on multiple screen sizes to ensure perfect display."
      },
      {
        question: "Can you integrate with third-party services?",
        answer: "Yes! We can integrate payment gateways (Stripe, PayPal), email services (Mailchimp, SendGrid), CMS platforms (Sanity, Strapi), analytics (Google Analytics), and many other third-party APIs and services."
      },
      {
        question: "Do you provide website analytics?",
        answer: "Yes, we can set up Google Analytics, privacy-friendly alternatives like Plausible, or custom analytics dashboards depending on your needs. This is included in Professional and Enterprise packages."
      },
      {
        question: "Is my website secure?",
        answer: "Security is a top priority. We implement HTTPS, secure authentication, input validation, protection against common vulnerabilities (XSS, CSRF), and follow industry best practices. For Enterprise packages, we can include advanced security features."
      }
    ]
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-white pr-8">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 text-white/70 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
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
            <HelpCircle className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight">
              Frequently Asked Questions
            </h1>
          </div>
          
          <p className="text-white/60 text-lg">
            Find answers to common questions about our services, pricing, and process.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {FAQ_DATA.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-3xl font-bold font-heading text-primary">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, qIdx) => (
                  <FAQItem
                    key={qIdx}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Still Have Questions */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-white/10 text-center">
            <h3 className="text-2xl font-bold font-heading mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/70 mb-6">
              Can't find the answer you're looking for? We're here to help!
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded-xl hover:bg-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

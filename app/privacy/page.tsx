import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, Database, Mail, AlertCircle } from "lucide-react";
import { PAGE_METADATA } from "@/lib/seo";

export const metadata: Metadata = {
  title: PAGE_METADATA.privacy.title,
  description: PAGE_METADATA.privacy.description,
  keywords: PAGE_METADATA.privacy.keywords,
};

export default function PrivacyPolicy() {
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
            <Shield className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight">
              Privacy Policy
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
              At DevHassan Studio, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-white/70 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the site.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Database className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-heading">Information We Collect</h2>
            </div>
            
            <div className="space-y-4 pl-11">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Personal Data</h3>
                <p className="text-white/70 leading-relaxed">
                  We may collect personally identifiable information such as your name, email address, 
                  phone number, and payment information when you:
                </p>
                <ul className="list-disc list-inside text-white/70 mt-2 space-y-1 ml-4">
                  <li>Fill out a contact form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Make a purchase</li>
                  <li>Create an account</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Usage Data</h3>
                <p className="text-white/70 leading-relaxed">
                  We automatically collect certain information when you visit our website, including:
                </p>
                <ul className="list-disc list-inside text-white/70 mt-2 space-y-1 ml-4">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website addresses</li>
                  <li>Device information</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Eye className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-heading">How We Use Your Information</h2>
            </div>
            
            <div className="pl-11 space-y-2">
              <p className="text-white/70 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Process your transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Monitor and analyze usage and trends</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Improve our website and services</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Lock className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-heading">Data Security</h2>
            </div>
            
            <div className="pl-11 space-y-4">
              <p className="text-white/70 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-white/70 leading-relaxed">
                However, please note that no method of transmission over the Internet or electronic storage is 
                100% secure. While we strive to use commercially acceptable means to protect your personal data, 
                we cannot guarantee its absolute security.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-heading">Cookies and Tracking</h2>
            </div>
            
            <div className="pl-11 space-y-4">
              <p className="text-white/70 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store 
                certain information. You can instruct your browser to refuse all cookies or to indicate when 
                a cookie is being sent.
              </p>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading">Third-Party Services</h2>
            
            <div className="space-y-4">
              <p className="text-white/70 leading-relaxed">
                We may employ third-party companies and individuals to facilitate our service, provide the 
                service on our behalf, or assist us in analyzing how our service is used. These third parties 
                may have access to your personal data only to perform these tasks on our behalf.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading">Your Privacy Rights</h2>
            
            <div className="space-y-4">
              <p className="text-white/70 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-heading">Contact Us</h2>
            </div>
            
            <div className="pl-11 space-y-4">
              <p className="text-white/70 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="text-white/70">
                <p>Email: privacy@devhassan.studio</p>
                <p>Website: www.devhassan.space</p>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">Policy Updates</h3>
            <p className="text-white/70 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the Last updated date.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

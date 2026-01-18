"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PaymentRedirectContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the payment URL from query parameters
    const paymentUrl = searchParams.get("payment");
    
    if (paymentUrl) {
      // Redirect to the payment URL after a brief delay
      setTimeout(() => {
        window.location.href = paymentUrl;
      }, 1500);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        {/* Loading Animation */}
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Redirecting to Payment...
          </h1>
          <p className="text-white/60 text-sm md:text-base">
            Please wait while we securely redirect you to complete your subscription.
          </p>
        </div>

        {/* Security Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <svg
            className="w-4 h-4 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span className="text-xs text-white/60">Secure Payment Processing</span>
        </div>
      </div>
    </div>
  );
}

export default function PaymentRedirect() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6 p-8">
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Loading...</h1>
        </div>
      </div>
    }>
      <PaymentRedirectContent />
    </Suspense>
  );
}

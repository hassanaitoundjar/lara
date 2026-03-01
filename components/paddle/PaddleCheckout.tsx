"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

interface PaddleCheckoutProps {
  priceId: string;
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function PaddleCheckout({ 
  priceId, 
  buttonText = "Get Started", 
  className = "",
  variant = "primary"
}: PaddleCheckoutProps) {
  const [isPaddleLoaded, setIsPaddleLoaded] = useState(false);

  useEffect(() => {
    const checkPaddle = () => {
      if (window.Paddle) {
        setIsPaddleLoaded(true);
      } else {
        setTimeout(checkPaddle, 500);
      }
    };
    checkPaddle();
  }, []);

  const handleCheckout = () => {
    if (!window.Paddle) {
      console.error("Paddle not loaded");
      return;
    }

    window.Paddle.Checkout.open({
      items: [
        {
          priceId: priceId,
          quantity: 1
        }
      ],
      settings: {
        displayMode: "overlay",
        theme: "dark",
        locale: "en"
      }
    });
  };

  const baseStyles = "inline-flex items-center justify-center py-4 px-8 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 text-center";
  const variants = {
    primary: "bg-primary text-black hover:bg-white hover:scale-[1.02]",
    secondary: "bg-white/5 text-white hover:bg-white hover:text-black border border-white/10"
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={!isPaddleLoaded}
      className={`${baseStyles} ${variants[variant]} ${className} ${!isPaddleLoaded ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <ShoppingBag size={18} className="mr-2" />
      {buttonText}
    </button>
  );
}

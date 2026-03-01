"use client";

import Script from "next/script";

export default function PaddleLoader() {
  const PADDLE_ENV = process.env.NEXT_PUBLIC_PADDLE_ENV || "sandbox";
  const PADDLE_TOKEN = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;

  return (
    <>
      <Script
        src="https://cdn.paddle.com/paddle/v2/paddle.js"
        onLoad={() => {
          if (PADDLE_TOKEN) {
            window.Paddle?.Initialize({ 
              token: PADDLE_TOKEN,
              environment: PADDLE_ENV as "sandbox" | "production"
            });
          }
        }}
      />
    </>
  );
}

declare global {
  interface Window {
    Paddle?: any;
  }
}

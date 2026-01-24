# Pricing Configuration Guide

## Overview

This project includes a comprehensive pricing system with three tiers: **Starter ($18)**, **Professional ($39)**, and **Enterprise ($60)**.

## Configuration

### Pricing Plans

All pricing plans are centrally configured in `/constants/index.ts` under the `PRICING_PLANS` export.

```typescript
export const PRICING_PLANS = [
  {
    id: "starter",
    name: "STARTER",
    price: 18,
    paymentUrl: "https://buy.stripe.com/test_starter_18",
    // ... features
  },
  // ... other plans
];
```

### Payment URLs

**IMPORTANT:** Update the `paymentUrl` for each plan with your actual payment processor links:

- **Stripe:** Create payment links at https://dashboard.stripe.com/payment-links
- **Other processors:** Replace with your payment gateway URLs

Example:

```typescript
paymentUrl: "https://buy.stripe.com/live/your_actual_link_here";
```

## Pages

### 1. Main Landing Page (`/app/landing/page.tsx`)

A dedicated landing page featuring:

- Hero section with compelling CTA
- Features showcase
- Pricing plans display
- Trust indicators
- Call-to-action sections

**Access:** Navigate to `/landing` in your browser

### 2. Pricing Section (`/components/sections/Pricing.tsx`)

Reusable pricing component used in the main homepage.

**Access:** Scroll to the pricing section on the homepage or navigate to `/#pricing`

### 3. Payment Redirect (`/app/payment-redirect/page.tsx`)

Handles secure redirection to payment processors.

**How it works:**

1. User clicks "Get Started" on a pricing plan
2. Redirects to `/payment-redirect?payment=<encoded_url>`
3. Shows loading animation for 1 second
4. Automatically redirects to the payment processor

## Customization

### Updating Prices

Edit `/constants/index.ts`:

```typescript
{
  id: "starter",
  price: 25, // Change price here
  // ...
}
```

### Modifying Features

Edit the `features` array in `/constants/index.ts`:

```typescript
features: [
  "Your Feature 1",
  "Your Feature 2",
  // Add more features
];
```

### Changing Colors

Each plan has a custom color:

```typescript
color: "#00FFFF"; // Cyan for Starter
color: "#CCFF00"; // Neon Lime for Professional
color: "#2D55FF"; // Electric Blue for Enterprise
```

## Testing

### Test Payment Flow

1. Run development server: `npm run dev`
2. Navigate to `/landing` or `/#pricing`
3. Click "Get Started" on any plan
4. Verify redirect to payment URL

### Before Going Live

- [ ] Replace test payment URLs with production URLs
- [ ] Test all three pricing tiers
- [ ] Verify mobile responsiveness
- [ ] Check payment processor integration
- [ ] Test redirect functionality

## Support

For questions or issues, contact your development team or refer to the main project documentation.

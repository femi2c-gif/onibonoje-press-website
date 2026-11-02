# Onibonoje Press & Book Industry storefront

A responsive React + Vite + Tailwind CSS storefront concept based on the supplied OPBI UI references and asset library.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Included in this frontend

- Responsive homepage and navigation
- Book collections and searchable/filterable catalogue
- Product cards and Quick View modal
- Functional cart drawer with quantity and remove controls
- Checkout preview and bulk school enquiry form
- Newsletter interaction states
- Responsive layouts, reduced-motion support, and animated hero
- Supplied OPBI assets under `public/Asset`

## Important: payment and production security

This package is a frontend starter. Checkout is intentionally a preview and does not charge a payment method or store an order. Before taking live payments, implement a trusted backend/API (or serverless functions) that:

1. Creates payment sessions using provider secret keys stored only in server environment variables.
2. Recalculates item prices and stock server-side from trusted product records. Never trust a browser subtotal.
3. Verifies provider webhook signatures and confirms payment status server-side before marking orders paid.
4. Uses idempotency for payment/order creation and webhook processing.
5. Validates all input server-side, rate-limits sensitive endpoints, and uses secure session cookies where authentication is added.
6. Uses HTTPS, a restrictive Content Security Policy, least-privilege credentials, dependency updates, and logs that do not contain payment secrets or sensitive customer data.

Do not put Paystack/Flutterwave secret keys, database credentials, or privileged tokens in `VITE_` variables or frontend JavaScript. A browser-only app cannot provide a secure payment backend by itself.

## GitHub

After testing, initialize and push from this folder:

```bash
git init
git add .
git commit -m "Build Onibonoje Books storefront"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace the placeholder repository URL with your own GitHub repository URL.

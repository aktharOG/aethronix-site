# Aethrionix Website

Production-oriented Next.js company website for Aethrionix.

## Stack
- Next.js App Router + React + TypeScript
- Tailwind CSS v4
- Lucide icons
- Server-first architecture with minimal client-side code
- Responsive, accessible UI
- SEO metadata
- Contact API route ready for Resend/Postmark/CRM integration

## Run
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Production
```bash
npm run build
npm start
```

Before launch, replace the placeholder email/domain and connect `/api/contact` to your email/CRM provider.

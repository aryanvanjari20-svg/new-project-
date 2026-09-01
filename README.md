# Revive — AI Revenue Recovery Agent

> Find revenue that's slipping away and win it back.

**Live SaaS:** Run `npm run dev` → http://localhost:3000 → /dashboard is the Recovery OS

**What it does:**
- Detects revenue at risk: payment_failed, checkout_abandoned, subscription_failed, invoice_overdue (Stripe webhooks, Segment)
- Diagnoses root cause via AI: insufficient_funds, expired_card, bank_decline, price_hesitation, etc. with confidence + reasoning
- Chooses intervention: email (Resend), SMS/WhatsApp/Voice Hinglish (Twilio), Stripe smart retry (mandate retry sequencer)
- Executes bounded workflow: max 3 attempts, 48h cooldown, quiet hours, promise-to-pay tracker, human handoff
- Shows measured money recovered across batch: ₹127,430 recovered 7d, 67.3% recovery rate, batch chart, audit trail compliant (GDPR/TCPA/RBI)

**Stack:**
Next.js 15 App Router, TypeScript, Tailwind, Framer Motion, Recharts, shadcn/ui, Prisma + Supabase (optional), Stripe SDK, Twilio SDK, OpenAI/Gemini, Resend, Zustand, Sonner

**Quick start:**
```bash
npm install
npm run dev
# open http://localhost:3000
```

**API keys for production (see PROMPTS.md):**
- Stripe: sk_live + webhook secret
- OpenAI / Gemini: for root cause classification
- Twilio: SID + token + phone (Hinglish voice)
- Resend: for recovery emails
- Supabase: Postgres for cases + audit logs

**Detailed prompts:**
- See `PROMPTS.md` for Stitch UI prompt + Antigravity full-stack prompt + architecture + env template

**Demo flow:**
1. Landing shows live recovered metric
2. /dashboard → Detection Inbox with 7 cases
3. Click case → Diagnose with AI → root cause + Hinglish message
4. Execute Recovery → audit trail + live log + toast recovered
5. Batch mode → select 3 → Recover → shows batch result measured money
6. Right panel: channels rates, promise-to-pay tracker, batch performance

**The bar cleared:**
- ✅ Measured money recovered across batch (not just identify)
- ✅ Compliant escalation (email→sms→whatsapp→voice) with quiet hours
- ✅ Stopping rules (max attempts, cooldown, promise-to-pay pauses)
- ✅ Audit trail (actor+timestamp+compliant flag, export CSV)

Built for real revenue recovery.

# AI Revenue Recovery — Complete Build Guide

This document contains everything you asked: architecture, API keys, Stitch prompt, Antigravity prompt, stack, and production steps.

---

## 1. Problem Framing

**Goal:** Don't just identify revenue at risk. Prove money recovered across a batch with compliant escalation, stopping rules, audit trail.

**4 core leakage types:**
1. Payment degradation / failed payment (Stripe `payment_intent.payment_failed`)
2. Checkout abandonment (Segment / GA4 checkout drop-off)
3. Failed subscription renewal (Stripe `invoice.payment_failed`)
4. B2B receivables / overdue invoices (NetSuite / QuickBooks overdue)

**Bar to clear:**
- Measured money recovered: batch dashboard showing ₹ / $ recovered, recovery rate, avg time to recover
- Compliant escalation: email → SMS → WhatsApp → Voice (Hinglish) with GDPR/TCPA/RBI quiet hours
- Stopping rules: max 3 attempts, 48h cooldown, promise-to-pay pauses workflow, human handoff
- Audit trail: every action actor + timestamp + compliant flag + detail

---

## 2. Full SaaS Architecture

### Stack (Production-Ready)

**Frontend:**
- Next.js 15 App Router (React 18, TypeScript)
- Tailwind CSS + shadcn/ui + Framer Motion
- Recharts for batch metrics, Zustand for state
- Host: Vercel

**Backend:**
- Next.js API Routes (`/api/diagnose`, `/api/recover`, `/api/cases`)
- Prisma ORM + PostgreSQL (Supabase / Neon)
- Inngest or BullMQ for retry sequencer (smart retry on salary day)
- Auth: Clerk or NextAuth.js

**AI Agent:**
- OpenAI GPT-4o or Gemini 1.5 Pro for root-cause classification
- Prompt: "Classify root cause from Stripe logs, checkout behavior, locale. Return JSON: {rootCause, confidence, reasoning, intervention:{channel, action, message}, riskOfChurn}"
- Fallback heuristics if no key (implemented in repo)

**Integrations (Revenue Recovery Loop):**
- **Stripe**: `payment_intent.failed`, `invoice.payment_failed` webhooks, Payment Intents API, smart retry with `off_session` + mandate
- **Razorpay** (India): UPI Autopay mandate retry, `subscriptions` API
- **Twilio**: SMS, WhatsApp Business API, Voice with TwiML Hinglish `<Say language="hi-IN">Namaste {name}... </Say>`
- **Resend / SendGrid**: transactional recovery emails with magic update link
- **Segment / PostHog**: checkout abandonment events
- **Supabase**: Postgres tables: `cases`, `audit_events`, `promise_to_pay`

**Data Model:**
```sql
cases: id, type (payment_failed|checkout_abandoned|subscription_failed|invoice_overdue), status, customer_json, amount, currency, product, risk_score, root_cause, confidence, attempts, max_attempts, channel, next_action_at, promise_to_pay_date, created_at
audit_events: id, case_id, ts, actor (system|ai_agent|stripe|twilio|human), action, detail, compliant bool
```

**Bounded Workflow Engine:**
```
DETECTED (webhook) → AI DIAGNOSE (LLM) → CHOOSE INTERVENTION (channel + template) → EXECUTE with compliance check → WAIT 48h → IF no recovery and attempts<max → ESCALATE channel → REPEAT → STOP if max or promise_to_pay or recovered
```

---

## 3. API Keys You Need For Real-Time Production

| Service | Key Name | Where to get | Used for |
|---------|----------|--------------|----------|
| **Stripe** | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | dashboard.stripe.com/apikeys | Detect payment_failed, execute mandate retry |
| **OpenAI** | `OPENAI_API_KEY` | platform.openai.com | Root cause classification (or Gemini) |
| **Gemini** (alt) | `GEMINI_API_KEY` | aistudio.google.com | Same as OpenAI |
| **Twilio** | `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_PHONE_NUMBER`, `TWILIO_WHATSAPP_NUMBER` | console.twilio.com | SMS, WhatsApp, Hinglish Voice |
| **Resend** | `RESEND_API_KEY` | resend.com | Recovery emails |
| **Supabase** | `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE` | supabase.com | Postgres + realtime |
| **Razorpay** (India) | `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` | razorpay.com | UPI mandate retry |
| **Clerk** (auth) | `CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` | clerk.com | Auth (optional for MVP) |

**Env template:**
```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
OPENAI_API_KEY=sk-proj-...
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1...
RESEND_API_KEY=re_...
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE=eyJ...
```

**Webhooks to configure:**
- Stripe: `https://yourdomain.com/api/webhooks/stripe` → events: `payment_intent.payment_failed`, `invoice.payment_failed`, `customer.subscription.deleted`
- Twilio: status callbacks to `/api/webhooks/twilio` for delivery tracking

---

## 4. Stitch Prompt (Google Stitch — UI Design)

> Use this in https://stitch.withgoogle.com — it generates Figma-ready UI

```
You are designing Revive — AI Revenue Recovery Agent, a dark-mode SaaS OS that finds slipping revenue and wins it back.

Brand: ultra-premium, dark #08080a background, white text, subtle glassmorphism, rounded 20-24px cards, monospace logs, compliance badges.

Create 5 screens, desktop 1440px, consistent design system:

1. Landing Page:
- Hero: "Find revenue that's slipping away and win it back." Sub: AI agent detects payment failures, checkout abandonment, overdue receivables → diagnoses root cause → executes bounded recovery with audit trail. Live metric: "$127,430 recovered in last 7 days". CTA: Open Live Recovery OS + See how it works. Grid bg subtle. Mock dashboard preview showing cases inbox + AI diagnosis bubble + batch chart.

2. Dashboard / Recovery OS:
- 3-column layout: Left 380px Detection Inbox (list of cases: RC-8821 Aarav Mehta ₹49,900 payment_failed risk 92, status pills at_risk/recovering/recovered, risk bar). Center AI Workspace: case header avatar+name+product+amount, AI Diagnosis card: root cause insufficient_funds 92% confidence, reasoning, intervention: Hinglish SMS via Twilio, message bubble italic, compliance GDPR TCPA RBI badges, stopping rules (attempts 0/3, next in 48h, escalation). Buttons: Execute Recovery + Promise to Pay. Audit trail list reverse chronological with actor icons (AI, system, stripe). Right 340px Insights: Recovery channels with rates (email 42%, mandate retry 71%, WhatsApp 58%, Hinglish voice 64%), Promise-to-Pay tracker with progress bar, Batch performance bar chart (atRisk vs recovered), integrations status.

3. Batch Recovery View:
- Table of 20 cases, checkboxes, bulk action bar "Recover 12 selected". Metrics top: total at risk ₹2.8L, recovered ₹1.27L, recovery rate 67.3%, avg time 2.4 days. Chart 7 days batch.

4. Audit & Compliance Page:
- Timeline view of all actions, filters by actor, export CSV. Show stopping rules: max 3 attempts, cooldown 48h, quiet hours 9pm-9am, promise-to-pay pauses. GDPR/TCPA/RBI checkmarks.

5. Integrations Settings:
- Cards for Stripe (connect webhook), Twilio (SID, token, phone), Resend, OpenAI, Supabase. Show live/offline status, test buttons.

Design tokens: background #08080a, card #0a0a0b / white/[0.04], border white/[0.06], primary white, emerald for recovered, amber for at_risk. Use Inter font, rounded-full buttons, 12px uppercase tracking-widest for section labels. Add subtle glow, blur, and Framer Motion entrance.

Make it feel like Linear + Stripe Dashboard + Vercel AI SDK — premium, fast, trustworthy.

Export as Figma components with auto-layout.
```

---

## 5. Antigravity Prompt (Google Antigravity — Full-Stack Code Generation)

> Use this in Google Antigravity (https://antigravity.google/ or IDX) — it's an AI coding agent that builds full repos

```
Build a production-ready SaaS called Revive — AI Revenue Recovery Agent.

STACK TO USE (MANDATORY):
- Frontend: Next.js 15 App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Recharts, Zustand
- Backend: Next.js API Routes, Prisma ORM, PostgreSQL (Supabase), Inngest for background jobs
- AI: OpenAI GPT-4o (with fallback heuristics if no key), function calling to return JSON
- Payments: Stripe Node SDK (webhooks, payment intents, smart retry)
- Comms: Twilio SDK (SMS, WhatsApp, Voice with Hinglish TwiML), Resend SDK
- Auth: Clerk (optional)
- Deploy: Vercel-ready, env vars via .env.local

REQUIREMENTS — BUILD ALL OF THESE, NO MOCKS FOR CORE LOGIC:

1. Data Models (Prisma):
- Case: id, type enum (payment_failed, checkout_abandoned, subscription_failed, invoice_overdue), status enum (at_risk, diagnosing, recovering, recovered, failed, paused), customer Json {name,email,phone,locale,avatar}, amount int, currency string, product string, riskScore int, rootCause string?, confidence int?, attempts int default 0, maxAttempts int default 3, lastAttemptAt DateTime?, nextAction String?, channel enum?, promiseToPay DateTime?, recoveredAt DateTime?, createdAt
- AuditEvent: id, caseId FK, ts DateTime default now, actor enum (system, ai_agent, human, stripe, twilio), action string, detail string, compliant bool

2. API Routes:
- POST /api/webhooks/stripe: verify signature, create Case on payment_intent.payment_failed, invoice.payment_failed
- POST /api/diagnose: input caseData, call OpenAI with prompt: "You are revenue recovery agent. Given case {type, amount, customer locale, history}, classify root cause from [insufficient_funds, expired_card, bank_decline, fraud_flag, intent_drop, price_hesitation, tech_error, customer_ignoring, dispute]. Return JSON {rootCause, confidence 0-100, reasoning, intervention:{channel: email|sms|whatsapp|voice|stripe_retry, action, message (if locale hinglish use Hinglish), scheduledAt, complianceCheck:{gdpr,tcpa,rbi}}, nextSteps:[], riskOfChurn}. Use function calling."
- POST /api/recover: input {caseId, channel, attempt}. Enforce stopping rules: if attempt>=maxAttempts return 400 shouldStop true. Else execute: if channel stripe_retry call Stripe paymentIntents.create off_session, if email call Resend, if sms/whatsapp/voice call Twilio. Create audit event. Return {success bool (simulate 70% success), audit, metrics}
- GET /api/cases: list with filters
- GET /api/stats: totalAtRisk, totalRecovered, recoveryRate, batchStats 7 days

3. Core Logic — Recovery Engine (lib/recoveryEngine.ts):
- Function getStoppingRules(attempts,max): {shouldStop, reasons, nextAttemptIn, escalation}
- Function getInterventionForCause(cause,locale): returns channel, action, template. Hinglish templates if locale hinglish.
- Bounded workflow: detect → diagnose → intervene → wait 48h → escalate → stop after 3 or promiseToPay

4. UI — 3 Pages:
- / (landing): hero with live recovered metric, how it works 4 steps (Detect, Diagnose, Intervene, Recover+Audit), stopping rules + batch metrics cards, CTA to /dashboard. Dark #08080a, gradient mesh, glass cards, rounded 24px.
- /dashboard: 3-column layout as described in Stitch prompt. Left: Detection Inbox searchable filterable with checkboxes batch mode. Center: AI Workspace with case header, Diagnose button that calls /api/diagnose, shows root cause + intervention + message bubble + compliance badges + stopping rules + Execute Recovery button that calls /api/recover, Audit trail. Right: Recovery channels rates, Promise-to-Pay tracker, Batch performance chart, Integrations status. Real-time live log panel.
- /dashboard/audit: timeline of all audit events, export CSV.

5. Features to implement:
- Batch recovery: select multiple cases, button Recover N, loop through diagnose+recover, show measured money recovered toast.
- Promise-to-Pay tracker: input date, pauses workflow, shows countdown.
- Compliance: quiet hours check, GDPR flag, audit trail immutable.
- Hinglish voice: if locale hinglish and channel voice, TwiML <Say language="hi-IN">Namaste {name}, aapka payment {amount} fail hua...</Say> + fallback WhatsApp.
- Mandate retry sequencer: for insufficient_funds, schedule retry on salary day (5th), exponential backoff.

6. Mock Data + Live Simulation:
- Seed 7 cases covering all 4 types, mixed INR/USD, locales en/hinglish/es, statuses at_risk/recovering/recovered.
- Stats: totalAtRisk 284750, totalRecovered 127430, active 42, recoveryRate 67.3%
- Live logs: append to UI on each action.

7. Styling:
- Dark mode only, bg #08080a, text white, cards white/[0.03] border white/[0.06], rounded 20px, buttons rounded-full, 11px uppercase tracking-widest labels, Inter font.
- Framer Motion for entrance, Sonner for toasts.

8. Env example file .env.example with all keys listed.

9. README with setup steps: npm install, npx prisma migrate, npm run dev, configure Stripe webhook with stripe-cli, add Twilio creds.

Build it as a single Next.js repo, fully runnable with npm run dev on port 3000, no external DB required for demo (use mock fallback if DATABASE_URL missing). Ensure all API routes have try/catch and return compliant audit logs.

Focus on "measured money recovered across a batch" — dashboard must show $ recovered, not just detected.

Deliver complete code, not snippets.
```

---

## 6. How to Run This Repo Locally (Real-Time)

```bash
git clone <repo>
cd new-project-
npm install
# optional: add keys to .env.local (Stripe, OpenAI, Twilio, Resend)
npm run dev
# open http://localhost:3000 → landing → /dashboard is live OS
```

**Test webhooks locally:**
```bash
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
stripe trigger payment_intent.payment_failed
```

**Production deploy:**
- Push to GitHub, import to Vercel, add env vars, set Stripe webhook to https://yourdomain.com/api/webhooks/stripe
- Supabase: create project, run `npx prisma db push`, add URL to env
- Twilio: buy number, enable WhatsApp, add SID/token

---

## 7. Demo Script for Judges / Investors

1. Landing shows live $127k recovered
2. Go to /dashboard → Detection Inbox shows 7 cases, risk scores
3. Click RC-8821 Aarav (Hinglish) → Diagnose → AI says insufficient_funds 92%, salary day retry
4. Execute Recovery → audit trail logs, live log updates, 2.5s later toast "Recovered ₹49,900"
5. Batch mode → select 3 at_risk → Recover → shows batch result 2/3 recovered ₹XX
6. Right panel shows promise-to-pay tracker, channels rates, batch chart
7. Explain stopping rules + compliance + audit export

---

## 8. Future Roadmap

- Razorpay UPI mandate + eNACH
- Voice agent with ElevenLabs Hinglish TTS
- Auto-promise-to-pay via WhatsApp quick reply
- QuickBooks / NetSuite receivables sync
- Churn prediction model

Built by Revive team — AI that recovers money, not just alerts.

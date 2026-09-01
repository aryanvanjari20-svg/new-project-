# ULTRA DETAILED PROMPTS — Copy Paste Ready

## PART 1: GOOGLE STITCH ULTRA DETAILED UI PROMPT (For https://stitch.withgoogle.com)

```
You are a world-class SaaS product designer (Linear, Stripe Dashboard, Vercel level). Design Revive — AI Revenue Recovery Agent — a premium dark-mode OS that finds slipping revenue and wins it back.

### BRAND & DESIGN SYSTEM

**Brand Personality:** Premium, trustworthy, AI-native, financial-grade, fast, calm, compliant. Feels like Linear + Stripe Dashboard + Palantir + Vercel AI SDK.

**Color Palette (MANDATORY):**
- Background: #08080a (primary bg), #0a0a0b (sidebar/cards), #0f0f10 (center workspace)
- Card: rgba(255,255,255,0.04) / rgba(255,255,255,0.03) with border rgba(255,255,255,0.06) / rgba(255,255,255,0.08)
- Text: #FFFFFF (primary), rgba(255,255,255,0.6) (secondary), rgba(255,255,255,0.4) (tertiary), rgba(255,255,255,0.3) (labels)
- Primary Button: #FFFFFF text #000000 with shadow 0 0 20px rgba(255,255,255,0.2)
- Secondary Button: #27272a (zinc-800) border zinc-700
- Success/Recovered: #10b981 / rgba(16,185,129,0.2) bg, #6ee7b7 text, border rgba(16,185,129,0.2)
- Warning/At Risk: #f59e0b / rgba(245,158,11,0.2) bg, #fcd34d text
- Danger/Failed: #ef4444 / rgba(239,68,68,0.2)
- Accent gradients: radial-gradient at 40% 20% hsla(28,100%,74%,0.15), at 80% 0% hsla(189,100%,56%,0.15), etc. Use gradient-mesh subtle.

**Typography:**
- Font: Inter (600 for headings, 500 medium, 400 regular), JetBrains Mono for logs/audit
- Headings: 84px / 600 / -0.04em tracking / 0.9 line-height for hero, 56px for section, 28px for cards, 18px for case names
- Labels: 11px uppercase tracking-widest 0.1em text-white/30
- Body: 13px / 14px / 1.5 line-height
- Mono logs: 11px / 12px font-mono

**Spacing & Radius:**
- Cards: border-radius 20px-24px, padding 20px-24px (p-5 / p-6)
- Buttons: rounded-full (999px), h-10 px-6 (default), h-9, h-12 lg, h-8 sm
- Gaps: 12px, 16px, 24px grid
- Borders: 1px solid rgba(255,255,255,0.06)

**Shadows & Effects:**
- Glassmorphism: backdrop-blur-xl bg-white/[0.06] border white/[0.08]
- Glow: shadow-[0_0_80px_rgba(255,255,255,0.08)] for hero mock
- Subtle grid bg: linear-gradient to right #ffffff08 1px transparent 1px, size 72px
- Animate: Framer Motion entrance opacity 0 y 20 → 1 y 0 duration 0.6, pulse for live dot

**Icons:** Lucide React, 16px default, 12px small, 20px large, stroke 1.5

### SCREENS TO DESIGN (5 screens, Desktop 1440px, auto-layout, responsive to 768px)

**SCREEN 1: LANDING PAGE (/)**
- Header: left logo (8x8 rounded-full white bg black text R) + Revive + badge "AI REVENUE AGENT" 10px px-2 py-0.5 rounded-full bg-white/10 border white/10. Right: ghost button Live Dashboard + primary Start recovering. Max width 1280px centered px-10 py-6.
- Hero Section pt-28 pb-20:
  - Live pill: inline-flex gap-2 text 12px px-3 py-1 rounded-full bg-white/[0.06] border white/[0.08] with emerald dot animate-pulse "LIVE: $127,430 recovered in last 7 days across 42 cases"
  - H1: 84px font 600 tracking -0.04em leading 0.9: "Find revenue that's slipping away and win it back." Second line gradient white→white/40 clip-text.
  - Sub: 20px leading 1.4 text white/60 max-w-2xl: "AI agent that detects payment failures, checkout abandonment & overdue invoices → diagnoses root cause → executes bounded recovery with compliant escalation & audit trail."
  - CTA row: primary lg "Open Live Recovery OS →" + secondary lg "Play See how it works"
  - Metrics 3 col grid max-w-xl mt-12 border-t white/10 pt-4: Recovery Rate 67.3%, Avg Time 2.4 days, Compliance GDPR•TCPA•RBI, 24px semibold + 11px uppercase label white/40
- Hero Visual Mock (mt-24):
  - Outer rounded 24px border white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-3 shadow 0 0 80px rgba(255,255,255,0.08)
  - Inner rounded 16px overflow-hidden bg #0f0f10 border white/[0.06]
  - Top bar flex justify-between px-5 py-3 border-b white/[0.06] bg-white/[0.02]: left 3 dots white/20, center "revive.ai • recovery agent • LIVE" 11px white/40, right "● Agent active" 11px px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border emerald-500/20
  - Grid 280px | 1fr | 320px min-h 480px:
    - Left list bg #0a0a0b p-3 space-y-2: case cards p-3 rounded-xl border text 12px: if recovered bg-emerald-500/10 border-emerald-500/20 else bg-white/[0.04] border-white/[0.06]. Inside: top flex justify-between ID white/50 + status pill 10px amber/emeral d. Middle font-medium name•amount. Bottom white/40 11px type•risk.
    - Center p-6: label 11px uppercase tracking-widest white/30 "AI DIAGNOSIS • RC-8821". AI bubble flex gap-3: avatar 8x8 rounded-full white black text AI 12px bold. Bubble flex-1 rounded-2xl bg-white/[0.06] border white/[0.08] p-4 text 13px leading 1.5: Root cause insufficient_funds 92% conf bold, reason white/50, intervention box mt-3 p-2.5 rounded-xl bg-black/40 border white/10 text 12px: label white/40 Intervention + white text Smart mandate retry + Hinglish SMS + italic white/60 message. Compliance box rounded-xl bg-white/[0.03] border white/[0.06] p-3 text 11px flex gap-2 Shield icon. Buttons row: flex-1 h-10 rounded-full bg-white text-black center text 13px font-medium "Execute Recovery →" + h-10 px-4 rounded-full border white/15 text 13px white/70 "Audit Trail"
    - Right border-l white/[0.06] p-4 bg #0a0a0b space-y-4: Batch Recovery card rounded-xl bg-white/[0.04] border white/[0.06] p-4: label 11px white/40 uppercase, value 28px semibold $18,200 + 14px emerald +67%, sub 11px white/40 Today•12 cases recovered, chart 60px flex items-end gap-1 bars gradient white/10 to white/60. Promise-to-Pay card rounded-xl bg-white/[0.04] border white/[0.06] p-4 text 12px: header white/60 flex gap-2 Clock icon, rows flex justify-between name + amber date, progress bar w-full h-1 bg-white/10 rounded-full inner 70% amber, sub 11px white/40 2 days left.

**SCREEN 2: DASHBOARD / RECOVERY OS (/dashboard) — MAIN PRODUCT**

Layout: Sidebar 280px + Main flex-1. Sidebar hidden < md. Main grid lg 380px | 1fr | 340px.

- Sidebar 280px border-r white/[0.06] bg #0a0a0b flex-col:
  - Top p-6 border-b white/[0.06]: logo + Revive + LIVE + green dot pulse.
  - Section Revenue at Risk: label 11px uppercase white/30 mb-3. Card rounded-2xl bg-white/[0.04] border white/[0.06] p-4: label 11px white/40 Total at risk, value 28px semibold tracking-tight ₹2,84,750, sub 11px amber TrendingUp icon 12% increase today, grid 3 cols gap-2 text 11px mt-4: At risk, Recovering, Recovered cards rounded-xl bg-black/40 p-2 border white/5 + emerald variant for recovered.
  - Section Measured Recovery: rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border white/[0.08] p-4: header flex justify-between label 11px white/40 7 days recovered + pill 11px px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 +67.3%, value 24px semibold ₹1,27,430, chart 64px AreaChart recovered vs atRisk, sub 11px white/30 Batch today 12 recovered.
  - Live Agent Log: rounded-2xl border white/[0.06] bg-white/[0.02] p-3: header 11px white/40 uppercase flex gap-2 FileText icon, inner h-140px overflow-auto text 11px font-mono space-y-1 white/60 bg-black/40 rounded-xl p-2 border white/5. Show "> AI Agent analyzing RC-8821..." etc. If empty text white/20 Agent idle.
  - Footer p-4 border-t white/[0.06]: user card rounded-xl bg-white text-black p-3 flex justify-between avatar 6x6 rounded-full bg-black text-white 10px AV + name 12px medium Aryan•Admin + MoreHorizontal icon opacity 50.

- Top Bar h-64px border-b white/[0.06] bg #0a0a0b/80 backdrop-blur-xl flex justify-between px-6 gap-4:
  - Left: All cases (7) pill bg-white/[0.06] border white/[0.08] 13px + separator + filter pills All, At Risk, Recovering, Recovered rounded-full text 12px border capitalize, active bg-white text-black else bg-white/[0.04] border white/[0.06] white/60 hover white/[0.08]
  - Right: Search relative w-260px max-w-320px: Search icon 4x4 absolute left-3 top 50% -translate-y-1/2 white/30, input w-full h-9 pl-9 pr-3 rounded-full bg-white/[0.06] border white/[0.08] text 13px placeholder white/30 focus border white/20. Batch button secondary sm gap-1.5 BarChart3 icon + if batchMode primary "Recover N" Play icon.

- Left Inbox Column 380px border-r white/[0.06] bg #0a0a0b overflow-auto:
  - Header p-3 flex justify-between: label 11px uppercase white/30 Detection Inbox • N cases + pill 11px px-2 py-0.5 rounded-full bg-white/10 border white/10 flex gap-1 dot emerald animate-pulse Live webhooks
  - List px-3 pb-3 space-y-2: case card group p-3.5 rounded-2xl border cursor-pointer transition-all: if selected bg-white text-black border-white shadow 0 0 30px rgba(255,255,255,0.15) else bg-white/[0.03] border-white/[0.06] hover bg-white/[0.06] text-white. Inside: flex justify-between start: left flex gap-2.5 avatar 8x8 rounded-full grid center 11px bold bg-white/10 or if selected bg-black text-white. Name 13px medium leading-none, ID•type 11px mt-1 white/40 or black/50 if selected. Right text-right amount 13px semibold flex gap-1 Rupee/Dollar icon 3x3 + status pill 10px px-1.5 py-0.5 rounded-full mt-1 inline-flex recovered emerald, recovering amber black text, failed red, at_risk white/10. Bottom mt-3 flex justify-between: left flex gap-2 risk bar h-1.5 w-72px rounded-full overflow-hidden bg-white/10 or black/10 inner gradient amber→red width risk%. Label 10px risk N white/40 or black/50. Right 10px flex gap-1 Clock icon 3x3 white/30 time + attempts.

- Center AI Workspace bg #0f0f10 overflow-auto:
  - Sticky top z-10 backdrop-blur-xl bg #0f0f10/80 border-b white/[0.06] p-4 flex justify-between: left flex gap-3 avatar 8x8 white black bold 12px AI + title 13px semibold flex gap-2 Revenue Recovery Agent + pill 10px emerald LIVE + sub 11px white/40 Detect→Diagnose→Intervene→Recover•Compliant. Right label 11px white/40 hidden md Stopping rules max N attempts 48h cooldown + Shield icon white/20.
  - Content p-6 space-y-6:
    - Case Header rounded 20px border white/[0.08] bg-white/[0.04] p-5 flex justify-between start: left flex gap-4 avatar 12x12 rounded-full bg-white text-black bold, name 18px semibold + ID pill 11px px-2 py-0.5 rounded-full bg-white/10 border white/10 + status pill 11px emerald/amber, email•phone•locale 13px white/50 mt-1, product•amount•risk 13px white/70 mt-1 flex gap-2 amount semibold. Right text-right label 11px white/30 uppercase Type + pill 12px mt-1 px-2.5 py-1 rounded-full bg-white/[0.06] border white/[0.08] capitalize.
    - Diagnose Card rounded 20px border white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5: header flex justify-between mb-4 label 11px uppercase white/30 flex gap-2 Zap icon AI Diagnosis•Root Cause Analysis + button secondary sm gap-1.5 Sparkles icon Diagnose with AI / spinner if diagnosing. States:
      - Idle: rounded-xl bg-black/40 border white/10 p-4 text 13px white/40 description + grid 3 cols gap-2 text 11px rounded-lg bg-white/[0.04] p-2 border white/[0.06] examples.
      - Diagnosing: rounded-xl bg-black/60 border white/10 p-4: flex gap-2 text 12px white/60 dot violet animate-pulse AI reading Stripe events... + progress bar h-2 w-full bg-white/10 rounded-full overflow-hidden inner motion width 0→100% duration 1.2 bg-white + mono 11px white/30.
      - Diagnosed: motion opacity 0 y10 →1 y0: grid md 1fr 200px gap-4: left rounded-xl bg-black/60 border white/10 p-4: label 11px white/40 uppercase Root Cause + row flex gap-3 mt-2 cause 16px semibold + confidence pill emerald 11px + churn pill amber 11px, reasoning 13px white/60 mt-2 leading 1.5, intervention box mt-4 rounded-xl bg-white/[0.04] border white/[0.06] p-3: label 11px white/40 Intervention chosen + row 13px medium flex gap-2 icon per channel Mail/MessageSquare/Phone/CreditCard + action•via channel, message 12px white/50 mt-2 italic bg-black/40 p-2.5 rounded-lg border white/5, compliance row mt-3 flex gap-2 text 10px pills bg-white/10 border white/10 GDPR TCPA RBI + scheduled time pill bg-white/5. Right column space-y-3: Stopping Rules card rounded-xl bg-white/[0.04] border white/[0.06] p-3: label 11px white/40 uppercase + mt-2 space-y-2 text 11px flex justify-between label white/40 value medium attempts/max, next in, escalation capitalize, progress bar w-full h-1.5 bg-white/10 rounded-full mt-2 inner bg-white width attempts/max*100, warning if shouldStop amber. Next Steps card rounded-xl bg-white/[0.04] border white/[0.06] p-3 label 11px white/40 uppercase + list mt-2 space-y-1.5 text 11px white/60 numbered. Buttons row flex gap-2: primary gap-2 Play icon Execute Recovery (attempt+1/max) + secondary gap-1.5 Pause icon Promise to Pay.
    - Audit Trail rounded 20px border white/[0.08] bg-white/[0.03] p-5: header flex justify-between mb-4 label 11px uppercase white/30 flex gap-2 Shield icon Audit Trail•Compliant•Immutable + count pill 11px px-2 py-0.5 rounded-full bg-white/10 border white/10 N events. List space-y-2 max-h 260px overflow-auto pr-1: each row flex gap-3 text 12px p-2.5 rounded-xl bg-black/30 border white/[0.04]: avatar 6x6 rounded-full grid center 10px bold shrink-0 bg-white text-black if ai_agent else bg-white/10 if system else violet 20 if stripe. Right flex-1 min-w-0: row flex gap-2 action font-medium + timestamp 11px white/30 + compliant pill ml-auto 10px px-1.5 py-0.5 rounded-full emerald/red. Detail white/50 11px mt-0.5 truncate.

- Right Insights Column 340px border-l white/[0.06] bg #0a0a0b overflow-auto hidden lg block p-4 space-y-4:
  - Recovery Channels card rounded-2xl bg-white/[0.04] border white/[0.06] p-4: label 11px uppercase white/30. List mt-3 space-y-2.5: each row flex justify-between p-2.5 rounded-xl bg-black/30 border white/5: left flex gap-2 avatar 7x7 rounded-full grid center colored bg-blue-500/20 text-blue-300 etc + label 12px + rate 12px semibold right.
  - Promise-to-Pay Tracker card rounded-2xl bg-white/[0.04] border white/[0.06] p-4: header 11px uppercase white/30 flex gap-2 Clock icon. List mt-3 space-y-3: card rounded-xl bg-black/40 border white/5 p-3: top flex justify-between text 12px name medium + date amber 11px, sub 11px white/40 amount•product, progress mt-2 w-full h-1.5 bg-white/10 rounded-full inner 70% amber, buttons mt-2 flex gap-1.5: secondary sm h-7 text 11px flex-1 Remind + ghost h-7 text 11px flex-1 border white/10 Mark paid.
  - Batch Performance card rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border white/[0.08] p-4: label 11px uppercase white/30. Chart mt-3 h-100px BarChart atRisk vs recovered XAxis date 10px white/40. Grid mt-3 2 cols gap-2 text 11px cards rounded-xl bg-black/40 p-2.5 border white/5 label white/40 value 14px semibold mt-1 Today recovered $18,200 Batch rate 67%. Button sm secondary w-full mt-3 gap-1.5 ArrowUpRight Export CSV•Audit log.
  - Integrations Required card rounded-2xl border white/[0.06] bg-white/[0.02] p-4: label 11px uppercase white/30. List mt-3 space-y-2 text 11px white/50 flex justify-between: Stripe webhook ● live emerald, OpenAI ● live fallback, Twilio Voice ○ key needed amber, Resend ○ key needed amber, Supabase ○ optional white/30.

**SCREEN 3: BATCH RECOVERY VIEW (/dashboard/batch)**
- Top metrics 4 cards grid: Total at risk, Recovered, Active cases, Recovery rate with trends. Table with checkboxes, columns: Case ID, Customer, Type, Amount, Risk, Status, Attempts, Channel, Last attempt, Next action, Audit. Bulk action bar sticky bottom: "3 selected • ₹1,23,000 at risk → Recover" primary button + "Export". Chart 7 days batch area chart atRisk vs recovered.

**SCREEN 4: AUDIT & COMPLIANCE (/dashboard/audit)**
- Timeline vertical line, filters by actor (system, ai_agent, stripe, twilio, human) pills, search, date range. Each event card: timestamp, actor avatar, action badge, detail, compliant check green, case link. Export CSV button. Stopping rules explanation cards: Max Attempts 3 per case then human handoff, Cooldown 48h between touches RBI mandate, Quiet Hours No SMS 9pm-9am local TCPA, Audit Trail Every action actor+timestamp+compliant flag.

**SCREEN 5: INTEGRATIONS SETTINGS (/dashboard/settings)**
- Cards grid 2 cols: Stripe (inputs secret key, webhook secret, test webhook button, status live/offline), Twilio (SID, Auth Token, Phone, WhatsApp number, test SMS), Resend (API key, from email), OpenAI (key, model select gpt-4o/gemini), Supabase (URL, service role), Razorpay (key id/secret). Each card: header icon + title + status dot live/offline, inputs rounded-xl bg-black/40 border white/10 text 13px, test button secondary sm, save button primary sm. Help text 11px white/40.

### INTERACTIONS & STATES

- Hover: cards bg-white/[0.06] transition-all, buttons scale 1.02, shadow increase
- Selected case: bg-white text-black shadow glow
- Loading: spinner border 2 white/30 border-t-white rounded-full animate-spin 12px, skeleton pulse white/5
- Empty: icon 48px white/10 + text 13px white/40 + CTA
- Toast: Sonner dark, rounded-full, border white/10, bg #111
- Micro: risk bar gradient amber→red, progress bar white, dot pulse emerald for live, checkboxes rounded
- Responsive: sidebar collapses to bottom nav <768px, grid 1 col, search full width

### EXPORT

Export as Figma components with auto-layout, variants for status, boolean for selected, dark mode only. Provide design tokens JSON.

Make it feel like a real financial OS, not a demo. Every pixel matters.
```

---

## PART 2: GOOGLE ANTIGRAVITY ULTRA DETAILED FULL-STACK PROMPT (For https://antigravity.google / Firebase Studio / IDX)

```
You are an expert full-stack AI engineer. Build a complete, production-ready SaaS called Revive — AI Revenue Recovery Agent — that actually recovers money, not just shows dashboards.

MANDATORY STACK — USE EXACTLY THIS:

- Frontend: Next.js 15 App Router (latest), React 18.3, TypeScript 5.6, Tailwind CSS 3.4, shadcn/ui components, Framer Motion 11, Recharts 2.13, Zustand 5 for state, Lucide React icons, Sonner toasts
- Backend: Next.js API Routes (app/api/*), Prisma ORM 5.x, PostgreSQL (Supabase or Neon), Node 22
- AI: OpenAI SDK (GPT-4o) + Google Gemini SDK (fallback), function calling, JSON mode
- Payments: Stripe Node SDK 14.x, Razorpay SDK for India UPI
- Comms: Twilio SDK 5.x (SMS, WhatsApp Business, Voice TwiML), Resend SDK 4.x for email
- Queue/Jobs: Inngest or BullMQ for smart retry sequencer (salary day retry, exponential backoff)
- Auth: Clerk or NextAuth.js (optional for MVP, but scaffold)
- Deployment: Vercel-ready, env via .env.local, next.config.mjs with X-Frame-Options ALLOWALL for preview
- Tooling: ESLint, TypeScript strict, PostCSS, Autoprefixer

PROJECT STRUCTURE TO CREATE:

revive/
├── app/
│   ├── layout.tsx (dark html class, metadata title Revive — AI Revenue Recovery Agent)
│   ├── globals.css (tailwind base, :root vars --background etc, gradient-mesh, glass, scrollbar)
│   ├── page.tsx (landing page — see UI spec)
│   ├── dashboard/
│   │   ├── page.tsx (main Recovery OS 3-col layout)
│   │   ├── batch/page.tsx (batch view table)
│   │   ├── audit/page.tsx (timeline audit)
│   │   └── settings/page.tsx (integrations)
│   └── api/
│       ├── diagnose/route.ts (POST AI diagnosis)
│       ├── recover/route.ts (POST bounded recovery executor)
│       ├── cases/route.ts (GET list, POST create)
│       ├── stats/route.ts (GET metrics)
│       ├── webhooks/
│       │   ├── stripe/route.ts (POST verify signature, create case)
│       │   └── twilio/route.ts (POST status callbacks)
│       └── promise/route.ts (POST promise-to-pay)
├── components/
│   ├── ui/
│   │   ├── button.tsx (cn clsx tailwind-merge, variants default ghost outline secondary, sizes default sm lg icon, rounded-full)
│   │   ├── card.tsx, input.tsx, badge.tsx (shadcn)
│   └── dashboard/
│       ├── CaseList.tsx, AICard.tsx, AuditTrail.tsx, BatchChart.tsx, LiveLog.tsx
├── lib/
│   ├── mockData.ts (RecoveryCase type, AuditEvent, mockCases 7 entries covering all 4 types, recoveryStats, getInterventionForCause)
│   ├── aiAgent.ts (diagnoseCase, getStoppingRules)
│   ├── recoveryEngine.ts (bounded workflow, compliance checks)
│   ├── prisma.ts (PrismaClient singleton)
│   ├── stripe.ts (Stripe instance)
│   ├── twilio.ts (Twilio client)
│   ├── resend.ts (Resend client)
│   └── utils.ts (cn)
├── prisma/
│   └── schema.prisma (see below)
├── public/
├── .env.example
├── tailwind.config.ts (darkMode class, content app/components, extend colors border input ring background foreground primary secondary muted accent card, borderRadius lg md sm, keyframes pulse-subtle)
├── postcss.config.js (tailwindcss autoprefixer)
├── next.config.mjs (headers X-Frame-Options ALLOWALL)
├── tsconfig.json (paths @/*)
├── package.json (scripts dev build start lint, deps as above)

PRISMA SCHEMA (prisma/schema.prisma):

datasource db { provider = "postgresql" url = env("DATABASE_URL") }
generator client { provider = "prisma-client-js" }

model Case {
  id String @id @default(cuid())
  type String // payment_failed | checkout_abandoned | subscription_failed | invoice_overdue
  status String @default("at_risk") // at_risk | diagnosing | recovering | recovered | failed | paused
  customer Json // {name,email,phone,locale,avatar}
  amount Int
  currency String @default("USD")
  product String
  riskScore Int
  rootCause String?
  confidence Int?
  attempts Int @default(0)
  maxAttempts Int @default(3)
  lastAttemptAt DateTime?
  nextAction String?
  channel String? // email | sms | whatsapp | voice | stripe_retry
  promiseToPay DateTime?
  recoveredAt DateTime?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  auditEvents AuditEvent[]
}

model AuditEvent {
  id String @id @default(cuid())
  caseId String
  case Case @relation(fields: [caseId], references: [id])
  ts DateTime @default(now())
  actor String // system | ai_agent | human | stripe | twilio
  action String
  detail String
  compliant Boolean @default(true)
}

MOCK DATA (lib/mockData.ts) — CREATE EXACTLY 7 CASES:

- RC-8821 Aarav Mehta +91 hinglish INR 49900 Pro Plan Annual payment_failed at_risk risk 92 attempts 0
- RC-8822 Sarah Chen US en USD 299 Growth Stack checkout_abandoned at_risk 78
- RC-8823 Vikram Singh hinglish INR 12000 Enterprise API subscription_failed recovering 88 rootCause expired_card confidence 94 attempts 1 nextAction Hinglish voice call + UPI link channel voice audit 3 events
- RC-8824 Acme Corp en USD 12500 B2B Seats x50 invoice_overdue at_risk 85 attempts 2 nextAction Escalate to CFO + promise-to-pay link channel email audit 3
- RC-8825 Priya Nair hinglish INR 2999 Starter Monthly payment_failed recovered 45 rootCause insufficient_funds 89 attempts 2 recoveredAt 3h ago audit 4 including RECOVERED
- RC-8826 Alex Rivera es USD 149 Lifetime Deal checkout_abandoned recovered 62 price_hesitation 91 attempts 1 recovered 1h ago
- RC-8827 David Park en USD 999 Pro Plan payment_failed at_risk 95 attempts 0 bank_decline fraud

recoveryStats: totalAtRisk 284750, totalRecovered 127430, activeCases 42, recoveryRate 67.3, avgTimeToRecover "2.4 days", batchStats 7 days Mon-Sun atRisk/recovered numbers.

getInterventionForCause(cause,locale): map rootCause → channel, action, template with Hinglish if locale hinglish. e.g. insufficient_funds → channel stripe_retry action Smart retry on salary day + UPI autopay reminder template Hinglish.

AI AGENT (lib/aiAgent.ts):

export interface DiagnosisResult { rootCause string, confidence number, reasoning string, intervention {channel, action, message, scheduledAt, complianceCheck {gdpr,tcpa,rbi}}, nextSteps string[], riskOfChurn number }

export async function diagnoseCase(caseData): Promise<DiagnosisResult> {
  // If OPENAI_API_KEY exists, call OpenAI:
  // const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})
  // prompt = `You are revenue recovery agent. Given case type ${caseData.type}, amount ${caseData.amount}, customer locale ${caseData.customer.locale}, history ${JSON.stringify(caseData.auditTrail)}. Classify root cause from [insufficient_funds, expired_card, bank_decline, fraud_flag, intent_drop, price_hesitation, tech_error, customer_ignoring, dispute]. Return JSON {rootCause, confidence 0-100, reasoning, intervention:{channel: email|sms|whatsapp|voice|stripe_retry, action, message (if locale hinglish use Hinglish like "Hi Aarav! Aapka payment..."), scheduledAt ISO, complianceCheck:{gdpr,tcpa,rbi}}, nextSteps:[], riskOfChurn}. Use function calling.`
  // Else fallback heuristic as in mockData.
  // Simulate latency 1200ms.
}

export function getStoppingRules(attempts,max): {shouldStop bool, reasons string[], nextAttemptIn string, escalation string} { if attempts>=max shouldStop true reasons Max attempts reached, nextAttemptIn 2h/48h/72h, escalation email/sms/whatsapp/voice/human }

API ROUTES:

1. POST /api/diagnose:
- Input {caseData}
- Call diagnoseCase or OpenAI, return {rootCause, confidence, reasoning, intervention, stoppingRules {maxAttempts 3, cooldown 48h, escalation [email,sms,voice], quietHours 21:00-09:00 local}, audit {actor ai_agent compliant true}}
- Try/catch return 500 if error.

2. POST /api/recover:
- Input {caseId, channel, attempt}
- Enforce stopping rules: if attempt>=3 return 400 {success false error Max attempts reached - human handoff required shouldStop true audit {action STOPPED reason max_attempts}}
- Simulate channel execution map: email Sent recovery email via Resend, sms Sent SMS via Twilio, whatsapp Sent WhatsApp template via Twilio, voice Initiated Hinglish voice call via Twilio TwiML <Say language="hi-IN">Namaste...</Say>, stripe_retry Scheduled Stripe smart retry using mandate + UPI autopay
- If env keys exist, actually call: if stripe_retry stripe.paymentIntents.create {amount, currency, customer, off_session true, confirm true}, if email resend.emails.send {from, to, subject, html}, if sms twilio.messages.create {body, from, to}, if voice twilio.calls.create {twiml: `<Response><Say language="hi-IN">Namaste ${name}, aapka payment...</Say><Play>...</Play></Response>`, to, from}
- Create audit event in DB (or mock), return {success bool random 70% true, caseId, channel, attempt+1, action, nextAttemptIn, compliance {gdpr true tcpa true rbi true quietHoursRespected true}, audit {id, ts, actor, action RECOVERED or ATTEMPT_FAILED, detail, compliant true}, metrics if success {recoveredAmount, batchTotal}}
- Latency 600ms.

3. POST /api/webhooks/stripe:
- Verify signature using stripe.webhooks.constructEvent with STRIPE_WEBHOOK_SECRET
- On payment_intent.payment_failed, invoice.payment_failed, customer.subscription.deleted: create Case with type mapping, riskScore random 70-95, amount from event, customer from event, auditEvent DETECTED.
- Return 200.

4. GET /api/cases: return mockCases or DB findMany with filters ?status= & ?search= & ?type=

5. GET /api/stats: return recoveryStats with calculated totalAtRisk from cases.

6. POST /api/promise: input {caseId, promiseDate}, update case promiseToPay, create audit PAUSED, return.

FRONTEND — LANDING PAGE (app/page.tsx):

- Use "use client", framer-motion, lucide icons, Button component, Link
- Structure as in Stitch prompt Screen 1: header, hero with live pill, h1 44px md 84px, sub 18px md 20px white/60, CTA Open Live Recovery OS + See how it works, metrics 3 col, visual mock 3-col grid inside rounded 24px glass card.
- Background: absolute inset-0 pointer-events-none: radial gradients at 40%20% hsla(28,100%,74%,0.15) etc + linear grid #ffffff08 1px size 72px.
- How it works section id how: h2 36px md 56px From detection to recovered money with guardrails. Sub white/50. Grid md 4 cols gap-4: Detect, Diagnose, Intervene, Recover+Audit cards rounded 20px border white/[0.08] bg-white/[0.03] p-6 relative overflow-hidden with gradient from-amber-500/20 etc opacity 60 absolute inset-0, inner relative icon 10x10 rounded-full bg-white black center, label 11px uppercase white/40 Step N, title 18px semibold, desc 13px white/50 leading 1.5. Second row grid 2 cols: Stopping Rules & Compliance card + Measured Money Recovered card.
- Demo CTA section id demo rounded 24px border white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-1 inner rounded 23px bg #0a0a0b p-8 md p-10 flex justify-between CTA Launch Recovery OS.
- Bottom 2 cols text 13px leading 1.6: What you get + API keys needed list disc pl-5.
- Footer border-t white/[0.06] py-8 px-10 flex justify-between text 12px white/30.

FRONTEND — DASHBOARD (app/dashboard/page.tsx) — MAIN PRODUCT:

- "use client", useState cases mockCases, selected first, diagnosis null, isDiagnosing bool, filter all/at_risk/recovering/recovered, search string, batchMode bool, selectedIds string[], recoveredTotal recoveryStats.totalRecovered, liveLog string[]
- filtered = cases filter by filter and search (id name type includes lower)
- atRisk, recovering, recovered counts, totalAtRiskAmt sum currency USD*83 + INR
- useEffect setSelected filtered[0]
- handleDiagnose(c): setIsDiagnosing true diagnosis null liveLog add "> AI Agent analyzing...", call diagnoseCase (or fetch /api/diagnose), setDiagnosis, setIsDiagnosing false, liveLog add root cause + intervention, update cases map rootCause confidence nextAction channel.
- handleRecover(c): if attempts>=maxAttempts toast error Max attempts reached. Else update cases status recovering attempts+1 lastAttemptAt now audit RECOVERY_EXECUTED, liveLog add Executing recovery..., toast Recovery workflow started. setTimeout 2500 random success 70%: if success update status recovered recoveredAt now audit RECOVERED, recoveredTotal add amt, liveLog add ✅ RECOVERED, toast success Recovered. Else update status at_risk or failed if attempts+1>=max audit ATTEMPT_FAILED, liveLog ❌, toast failed will retry.
- handleBatchRecover: if selectedIds 0 toast error. Else toast Starting batch. Loop selectedIds each 800ms set status recovering liveLog Batch processing id. After 3000ms map cases if id in selectedIds random success 70% recovered else at_risk, count recoveredInBatch sum amt, recoveredTotal add, liveLog BATCH RESULT, toast success Batch complete, clear selectedIds batchMode false.
- UI: outer min-h-screen bg #08080a text-white flex. Sidebar 280px border-r white/[0.06] bg #0a0a0b hidden md flex-col: top p-6 border-b logo + LIVE dot, sections Revenue at Risk card + Measured Recovery card with AreaChart + Live Agent Log h-140px mono 11px bg-black/40 rounded-xl p-2 border white/5, footer user card white black. Main flex-1 flex-col: Top bar h-64px border-b bg #0a0a0b/80 backdrop-blur-xl flex justify-between px-6: left filter pills, right search input + Batch + Recover N buttons. Grid lg 380px 1fr 340px: Left Inbox overflow-auto header Detection Inbox • N + Live webhooks pill, list px-3 pb-3 space-y-2 case cards group p-3.5 rounded-2xl border cursor-pointer transition-all selected bg-white text-black shadow glow else bg-white/[0.03] border-white/[0.06] hover bg-white/[0.06]. Inside avatar 8x8, name 13px medium, ID•type 11px, amount 13px semibold flex Rupee/Dollar icon, status pill 10px, risk bar h-1.5 w-72px rounded-full bg-white/10 inner gradient amber→red width risk%, time + attempts 10px. Center AI Workspace bg #0f0f10 overflow-auto sticky top backdrop-blur-xl bg #0f0f10/80 border-b p-4 header AI avatar + title + LIVE pill + stopping rules label + Shield. Content p-6 space-y-6 Case Header rounded 20px border white/[0.08] bg-white/[0.04] p-5 avatar 12x12, name 18px semibold + ID pill + status pill, email•phone•locale 13px white/50, product•amount•risk 13px white/70 amount semibold, right Type pill. Diagnose Card rounded 20px border white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 header label + Diagnose button Sparkles icon spinner if diagnosing. States idle (bg-black/40 border white/10 p-4 text 13px white/40 + grid 3 cols examples), diagnosing (bg-black/60 border white/10 p-4 dot violet pulse + progress bar motion width 0→100% 1.2s + mono), diagnosed (motion opacity 0 y10 →1 y0 grid md 1fr 200px gap-4 left rounded-xl bg-black/60 border white/10 p-4 root cause 16px semibold + confidence pill emerald + churn pill amber, reasoning 13px white/60, intervention box bg-white/[0.04] border white/[0.06] p-3 label 11px white/40 + row icon + action•via channel + message italic bg-black/40 p-2.5 rounded-lg border white/5 + compliance pills GDPR TCPA RBI + scheduled time, right Stopping Rules card + Next Steps card, buttons Execute Recovery + Promise to Pay). Audit Trail rounded 20px border white/[0.08] bg-white/[0.03] p-5 header + count pill + list max-h 260px overflow-auto reverse auditTrail: each flex gap-3 text 12px p-2.5 rounded-xl bg-black/30 border white/[0.04] avatar 6x6 bold shrink-0 bg-white black if ai_agent else white/10 system else violet 20 stripe, action font-medium + timestamp 11px white/30 + compliant pill emerald/red ml-auto, detail white/50 11px truncate. Right Insights 340px border-l bg #0a0a0b overflow-auto hidden lg block p-4 space-y-4: Recovery Channels card, Promise-to-Pay Tracker card, Batch Performance card with BarChart, Integrations Required card.

- Use Recharts: BarChart, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer
- Use Framer Motion for entrance, AnimatePresence
- Use Sonner Toaster theme dark top-right
- Use lucide icons: AlertTriangle CheckCircle2 Clock Mail Phone MessageSquare CreditCard TrendingUp Shield Zap Search Filter Play Pause FileText BarChart3 ArrowUpRight MoreHorizontal Sparkles IndianRupee DollarSign

STYLING:

- app/globals.css: @tailwind base components utilities, :root vars --background etc dark mode, body bg background text foreground antialiased, .gradient-mesh radial gradients, .glass bg-white/70 backdrop-blur-xl border white/20, scrollbar 6px thumb #e5e7eb.

COMPONENTS:

- components/ui/button.tsx: cn clsx twMerge, Button forwardRef variant default ghost outline secondary size default sm lg icon, base inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all, variants default bg-white text-black hover bg-white/90 shadow 0 0 20px rgba(255,255,255,0.2) secondary bg-zinc-800 text-white hover bg-zinc-700 border zinc-700 ghost hover bg-white/10 text-white outline border white/20 bg-transparent hover bg-white/10 text-white, sizes h-10 px-6 etc.

LIB FILES:

- lib/mockData.ts as described
- lib/aiAgent.ts as described
- lib/recoveryEngine.ts: getIntervention, compliance check quietHours, GDPR, etc.

ENV EXAMPLE (.env.example):

DATABASE_URL="postgresql://..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
OPENAI_API_KEY="sk-proj-..."
GEMINI_API_KEY="..."
TWILIO_ACCOUNT_SID="AC..."
TWILIO_AUTH_TOKEN="..."
TWILIO_PHONE_NUMBER="+1..."
TWILIO_WHATSAPP_NUMBER="whatsapp:+1..."
RESEND_API_KEY="re_..."
SUPABASE_URL="https://xxx.supabase.co"
SUPABASE_SERVICE_ROLE="eyJ..."
NEXT_PUBLIC_APP_URL="http://localhost:3000"

PACKAGE.JSON DEPS:

next 15.0.3, react ^18.3.1, react-dom ^18.3.1, lucide-react ^0.460.0, recharts ^2.13.0, framer-motion ^11.11.17, clsx ^2.1.1, tailwind-merge ^2.5.4, sonner ^1.7.1, zustand ^5.0.1, @prisma/client, stripe, twilio, resend, openai, @google/generative-ai, inngest
dev: typescript ^5.6.3, @types/node ^20.17.6, @types/react ^18.3.12, @types/react-dom ^18.3.1, tailwindcss ^3.4.14, postcss ^8.4.49, autoprefixer ^10.4.20, eslint ^9.15.0, eslint-config-next 15.0.3, prisma

BUILD STEPS:

1. npx create-next-app@latest revive --typescript --tailwind --app --eslint --src-dir false --import-alias @/*
2. Install deps: npm install next@15.0.3 react react-dom lucide-react recharts framer-motion clsx tailwind-merge sonner zustand stripe twilio resend openai @google/generative-ai @prisma/client inngest
3. Setup Tailwind config.ts with darkMode class, content pages/components/app, extend colors as above.
4. Create lib files, components, app files as above.
5. npx prisma init, add schema, npx prisma generate, npx prisma db push (if DATABASE_URL else mock fallback)
6. Create .env.local from .env.example
7. npm run dev on port 3000 host 0.0.0.0
8. Test Stripe webhook: stripe login, stripe listen --forward-to localhost:3000/api/webhooks/stripe, stripe trigger payment_intent.payment_failed
9. Build: npm run build, ensure no type errors, fix.
10. Deploy to Vercel: vercel --prod, add env vars, set Stripe webhook https://yourdomain.com/api/webhooks/stripe

COMPLIANCE & STOPPING RULES IMPLEMENTATION:

- Function isQuietHours(now, timezone): return true if hour 21-9 local, then don't send SMS, queue for 9am.
- Function checkCompliance(channel, locale): return {gdpr: true if consent, tcpa: true if not quiet hours, rbi: true if mandate retry respects RBI e-mandate 24h pre-debit notification}
- Stopping: attempts >= maxAttempts → shouldStop true, require human review after 2 fails, log STOPPED.
- Promise-to-Pay: if promiseToPay date set, pause workflow until date, auto-reminder 24h before, if overdue escalate.
- Audit: every action create AuditEvent with actor, action, detail, compliant bool, immutable.

HINGLISH VOICE IMPLEMENTATION:

- If locale hinglish and channel voice:
  const twiml = `<Response><Say language="hi-IN" voice="Polly.Aditi">Namaste ${firstName}! Aapka ${product} ka payment ${amount} rupees fail ho gaya. Koi baat nahi, hum salary day ko dobara try karenge. Ya abhi UPI se pay karne ke liye link bhej diya hai. Dhanyavaad!</Say><Pause length="1"/><Say language="en-IN">We have sent you a payment link on WhatsApp.</Say></Response>`;
  twilio.calls.create({twiml, to: customer.phone, from: process.env.TWILIO_PHONE_NUMBER})
- Fallback: if call fails or no answer, send WhatsApp template.

MANDATE RETRY SEQUENCER:

- For insufficient_funds: schedule retries on 5th (salary day), 6th, 10th with exponential backoff, use Stripe off_session with mandate, Razorpay UPI autopay for INR.
- Store nextAttemptAt, use Inngest cron to trigger.

MEASURED MONEY RECOVERED:

- Dashboard top shows totalAtRisk, totalRecovered, recoveryRate, avgTimeToRecover
- Batch view shows batch today $18,200 12 cases recovered, chart 7 days atRisk vs recovered, table with recoveredAt.
- Every recovery updates recoveredTotal and shows toast + live log + audit RECOVERED with amount.

ERROR HANDLING & EDGE:

- All API routes try/catch, return 500 with error message, log audit.
- If no OPENAI key, use fallback heuristic.
- If no Stripe key, simulate success 70%.
- If no Twilio key, log to console + audit but don't fail.

DELIVER COMPLETE CODE, FULLY RUNNABLE WITH npm run dev, NO PLACEHOLDERS, NO TODO, PRODUCTION-READY.

Make sure UI matches Stitch spec dark #08080a, rounded 20px, glass, premium.

Include README with setup, env, demo script, architecture, API keys.

End.
```

---

## PART 3: API KEYS & REAL-TIME SETUP (Production)

**Keys needed (same as above, but detailed):**

1. Stripe: Go to dashboard.stripe.com → Developers → API keys → sk_live_xxx, Developers → Webhooks → Add endpoint https://yourdomain.com/api/webhooks/stripe → events payment_intent.payment_failed, invoice.payment_failed, customer.subscription.deleted → copy whsec_xxx. For local: stripe-cli `stripe login` + `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

2. OpenAI: platform.openai.com → API keys → Create sk-proj-... → Model gpt-4o, enable function calling. Alt Gemini: aistudio.google.com → Get API key.

3. Twilio: console.twilio.com → Account SID ACxxx, Auth Token, Phone Numbers → Buy number +1xxx capable voice sms, Messaging → WhatsApp → Enable sandbox or Business API, Voice → TwiML. For Hinglish voice need <Say language="hi-IN">.

4. Resend: resend.com → API Keys → re_xxx, Domains → Verify domain, from email noreply@yourdomain.com.

5. Supabase: supabase.com → New project → URL https://xxx.supabase.co, Settings → API → service_role key, Database → Connection string postgresql://... for DATABASE_URL. Run `npx prisma db push`.

6. Razorpay (India): razorpay.com → Settings → API Keys → Key ID rzp_test_xxx, Secret, Webhooks for subscription.

**Real-time flow:**

- Stripe webhook hits /api/webhooks/stripe → creates Case → triggers Inngest job → calls /api/diagnose (OpenAI) → determines channel → calls /api/recover → Twilio/Resend/Stripe → audit → if fail schedule nextAttempt 48h later via Inngest.
- Frontend polls /api/cases or uses Supabase realtime subscription to cases table for live updates.
- Batch recovery: frontend selects IDs → POST /api/recover batch → loops.

**Env template already in PROMPTS.md**

**Deploy:**

- Vercel: import GitHub repo, add env vars, build command npm run build, output .next
- Set Stripe webhook to production URL
- Supabase: enable realtime for cases table
- Twilio: set status callback to https://yourdomain.com/api/webhooks/twilio

---

## PART 4: HOW TO USE THESE PROMPTS

- **Stitch:** Go to stitch.withgoogle.com → New Project → Paste PART 1 prompt → Generate → Figma export → Use as design reference for frontend (already built in repo to match).
- **Antigravity:** Go to antigravity.google or Firebase Studio (idx) → New Workspace → Choose Next.js template → Paste PART 2 prompt → Let it build full repo → It will create all files as specified → Run npm run dev → Add API keys to .env.local → Test with Stripe CLI.

Both prompts are intentionally verbose to force AI to build production-grade, not demo.

---

Built for Revive — AI Revenue Recovery. Real money recovered, not just alerts.

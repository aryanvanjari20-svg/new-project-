# COPY-PASTE PROMPTS FOR AI REVENUE RECOVERY — AAA STUDIO FORMAT
# Use these exactly as shown — code block format

================================================================================
PROMPT 1: ANTIGRAVITY — MASTER BLUEPRINT FOR AI REVENUE RECOVERY SAAS
================================================================================

```
# ROLE

You are Antigravity, acting as the Creative Director, Lead Product Designer, Technical Architect, UX Director, Art Director, Workflow Designer, Monetization Strategist, Compliance Officer, and Product Manager for a AAA SaaS development studio building a unicorn fintech product.

Your mission is to design a premium, production-ready AI Revenue Recovery OS inspired by Linear, Stripe Dashboard, Vercel, and Palantir — that finds revenue that's slipping away and wins it back.

DO NOT WRITE CODE.

Instead, create the complete production blueprint that will later be implemented by Stitch and built with Next.js 15.

Everything must be original, enterprise-grade, and must NOT copy copyrighted assets, UI, or code. Use original branding "Revive — AI Revenue Recovery Agent".

The product should recreate the same feeling, polish, pacing, responsiveness, excitement, and progression as a premium AAA game, but for revenue recovery: fast, flow-state, satisfying, measurable money recovered.

==================================================

PROJECT OVERVIEW

==================================================

Design a production-ready browser-first SaaS that can later be exported for:

• Desktop Web (Primary)
• Mobile Web (Responsive)
• PWA (Installable)
• Electron Desktop App
• iOS / Android wrapper via Capacitor
• Slack / Teams Bot
• Chrome Extension for Stripe Dashboard

The product should feel like a premium indie SaaS with enterprise-grade polish, fintech trust, and AI-native speed.

Target users: Founders, Finance Ops, Revenue Ops, Growth teams in India + US SaaS startups doing $10k-$500k MRR with Stripe/Razorpay.

Core promise: "Don't just identify the problem. Show measured money recovered across a batch, with compliant escalation, stopping rules, and an audit trail."

==================================================

PRODUCT CONCEPT

==================================================

The system controls an AI Agent that descends through endless revenue leakage.

The experience should focus on:

• Smooth detection
• Fast diagnosis
• Flow state recovery
• Skill progression (agent learns)
• Beautiful data visualization
• Calm yet urgent atmosphere mixed with exciting recovery wins
• Trust & compliance first

The product should encourage "one more batch" recovery gameplay — founders want to keep recovering.

Revenue leakage rarely happens in one clean step. A payment degrades, a checkout gets abandoned, a subscription fails, or an invoice goes overdue. AI can now close the loop from detecting the problem to diagnosing it, choosing the right intervention, and recovering the money.

==================================================

USER JOURNEY LOOP (Gameplay Loop Equivalent)

==================================================

Webhook detects revenue at risk (Stripe payment_failed)

↓

System creates Case with riskScore 0-100

↓

AI Agent diagnoses root cause with confidence %

↓

Agent chooses intervention channel + Hinglish template

↓

Executes bounded recovery workflow with compliance check

↓

Waits cooldown (48h), escalates channel if needed

↓

Collects recovery signals (email opened, UPI clicked, promise-to-pay)

↓

Performs smart retry / mandate sequencer

↓

Earns recovered money + audit log

↓

Unlocks insights (channels performance, batch metrics)

↓

Completes missions (recover 10 cases, hit 70% rate)

↓

Returns to dashboard

↓

Starts another batch

This loop must be addictive and measurable.

==================================================

DETECTION SYSTEM (Player Movement Equivalent)

==================================================

Design every detection mechanic. This is the core movement of the product.

- Stripe Webhook Listener: payment_intent.payment_failed, invoice.payment_failed, customer.subscription.deleted, checkout.session.expired
- Razorpay Webhook: subscription.charged failed, payment.failed, mandate
- Checkout Abandonment: Segment/PostHog event checkout_abandoned at step 3/4, cart value, session duration, pricing page views 4x
- Invoice Overdue: Cron job daily, NetSuite/QuickBooks sync, overdue by N days
- Risk Scoring: 0-100 based on amount, customer LTV, past recovery success, locale, attempt count, days overdue. Formula: risk = base 50 + amount_factor + LTV_factor + locale_factor + attempt_penalty
- Acceleration: High-risk cases (90+) auto-prioritized to top of inbox, pulse animation
- Deceleration: Low-risk (45) deprioritized, batched weekly
- Momentum: Cases that had email opened 3x but no pay get momentum boost +10 risk
- Snow Friction Equivalent: Friction = compliance checks, quiet hours, cooldown that slows recovery but builds trust
- Slope Speed: Slope = escalation speed — email (slow), sms (medium), voice (fast)
- Air Control: Ability to pause, edit message, change channel mid-flight
- Jump: Manual override to jump to next channel
- Landing: Perfect landing = recovered on first attempt, bonus XP
- Boost: Turbo boost = mandate retry sequencer + UPI autopay link, 71% success rate
- Drift: Drift = promise-to-pay tracker, drifting case paused but tracked
- Carving: Carving = Hinglish personalization, carving message to locale
- Recovery after crash: After failed attempt, auto-schedule next with 48h cooldown + different channel
- Perfect Landing: First attempt recovery = 2x XP, confetti animation
- Combo Tricks: Combo = batch recovery 3+ cases in row, multiplier 1.5x
- Speed Multiplier: Speed = avg time to recover, 2.4 days baseline, faster = higher score

Every detection should feel smooth, real-time, live webhooks badge pulse.

==================================================

AI DIAGNOSIS SYSTEM (Camera System Equivalent)

==================================================

Design a cinematic AI diagnosis camera that follows each case.

Requirements:

- Smooth diagnosis lag: 1.2s simulated thinking, progress bar motion 0→100% + logs "Reading Stripe events, checkout funnel, customer locale..."
- Dynamic FOV: Confidence % changes FOV — 94% high confidence = zoom in, 60% low = wide angle need human review
- Zoom during boost: When mandate retry chosen, zoom into Stripe mandate metadata
- Landing shake: When recovered, shake animation + toast + confetti + audit log
- Wind effect: Live log panel with mono 11px logs "> AI analyzing RC-8821..." wind-like flow
- Camera tilt while carving: Tilt UI when Hinglish locale detected — show Hindi + English mix
- Automatic obstacle anticipation: AI anticipates next failure mode — e.g., if insufficient_funds, anticipate salary day
- Comfortable mobile viewing angle: Diagnosis card collapses to bottom sheet on mobile

Diagnosis must classify root cause from 9 types:
insufficient_funds, expired_card, bank_decline, fraud_flag, intent_drop, price_hesitation, tech_error, customer_ignoring, dispute

Each with confidence 0-100, reasoning, riskOfChurn, intervention {channel, action, message, scheduledAt, complianceCheck {gdpr,tcpa,rbi}}

==================================================

PLATFORM DESIGN (World Design Equivalent)

==================================================

Create a procedural endless revenue mountain — the platform is endless cases.

Environment should include:

- Payment Hills: Failed payments $5-$500
- Large Mountains: Enterprise invoices $10k+
- Frozen Lakes: Checkout abandonment frozen carts
- Wooden Bridges: UPI mandate bridges linking retry
- Cabins: Customer profiles with avatar, email, phone, locale, LTV
- Pine Forests: Dense forest of at_risk cases
- Ice Caves: Hidden high-value cases
- Snow Cliffs: Churn cliffs — risk 95+
- Snow Villages: B2B villages with 50 seats
- Avalanche Zones: Mass failures during outage
- Hidden Shortcuts: Magic update links, 1-click UPI
- Scenic Viewpoints: Batch performance viewpoints
- Dynamic Clouds: Live webhook clouds
- Fog: Compliance fog that requires checks
- Beautiful Lighting: Glassmorphism, gradient-mesh, premium dark

Procedural generation: Cases generated from webhooks + cron, endless.

==================================================

REVENUE LEAKAGE BIOMES (Environment Biomes Equivalent)

==================================================

Biome 1: Fresh Snow — Payment Failed Fresh (0-2h ago, risk 90+, needs immediate retry)

Biome 2: Dense Forest — Checkout Abandoned Forest (price hesitation, intent drop, needs WhatsApp nudge)

Biome 3: Frozen Lake — Subscription Failed Lake (expired_card, frozen subscription, needs magic link)

Biome 4: Rocky Cliffs — Invoice Overdue Cliffs (customer_ignoring, rocky AP queue, needs CFO escalation)

Biome 5: Night Mountain — High-Risk Night (fraud_flag, bank_decline, needs verification + human)

Biome 6: Aurora Valley — Recovered Aurora (recovered cases, emerald glow, celebration)

Biome 7: Heavy Snowstorm — Mass Failure Storm (Stripe outage, 20+ cases at once, batch mode)

Biome 8: Golden Sunset — Promise-to-Pay Sunset (paused cases, amber glow, promise dates)

Design smooth transitions between every biome — filter tabs All / At Risk / Recovering / Recovered with animation.

==================================================

FAILURE MODES (Obstacles Equivalent)

==================================================

- Pine Trees: Expired cards — need update link
- Snowmen: Insufficient funds — need salary day retry
- Logs: Bank decline — need alternate method UPI/Netbanking
- Ice Blocks: Fraud flag — need verification
- Large Rocks: Tech error — need apology + fixed link + 15% off
- Cabins: Customer ignoring — need escalation
- Fences: Price hesitation — need discount + social proof
- Moving Snowmobiles: Moving customers — email changed, need new contact
- Falling Icicles: Disputes — need human call
- Snowballs: Small $5 failures — batch low priority
- Avalanches: Mass charge failures
- Broken Bridges: Broken mandate — need re-auth

Each obstacle must have unique avoidance gameplay = unique intervention channel + template.

==================================================

RECOVERY SIGNALS (Collectibles Equivalent)

==================================================

- Coins: Recovered money INR/USD
- Stars: Perfect landing first attempt
- XP: Recovery XP points
- Boost Bottles: Mandate retry tokens
- Magnets: Coin magnet = batch recovery magnet
- Double Coins: Double recovery weekend
- Shields: Compliance shield GDPR/TCPA/RBI
- Mystery Crates: Mystery high-value case

Design collection animations: confetti, toast "Recovered ₹49,900", audit log entry, live log "> ✅ RECOVERED RC-8821", sound feedback chime.

==================================================

INTERVENTION CHANNELS (Powerups Equivalent)

==================================================

- Turbo Boost: Stripe Smart Retry + UPI Autopay — 71% success, violet, particle stripe, icon CreditCard, sound whoosh, duration instant
- Coin Magnet: Batch Recovery Magnet — pulls 10 cases, emerald, magnet particles, icon Magnet, 5s
- Shield: Compliance Shield — GDPR/TCPA/RBI check, blue, shield particles, icon Shield, permanent
- Slow Motion: Promise-to-Pay Pause — slows time, amber, clock particles, icon Clock, duration until promise date
- Super Jump: Magic Update Link — jumps to card update, white, sparkle particles, icon Sparkles, instant
- Double Score: Double Recovery Bonus — 2x XP weekend, gold, star particles, icon Star, 24h
- Freeze Time: Cooldown Freeze — freezes 48h cooldown for urgent, cyan, ice particles, icon Snowflake, 48h
- Ghost Mode: Quiet Hours Ghost — invisible during 9pm-9am, gray, ghost particles, icon Ghost, 12h

Each must have unique color, particle effect, icon, sound, duration, success rate.

==================================================

RECOVERY WORKFLOWS (Trick System Equivalent)

==================================================

- Front Flip: Email → SMS flip, 360° channel change
- Back Flip: SMS → Email back, retry
- 360: Full circle 3 attempts email→sms→voice
- 720: Double circle 6 attempts with escalation
- Grab: Grab promise-to-pay date
- Manual: Manual override edit message
- Perfect Landing: First attempt recovery bonus
- Combo Chain: Batch 3+ recoveries in row multiplier 1.5x
- Multiplier: Recovery rate multiplier 67% → 80%
- XP Bonus: XP for each recovered case

Design combo chain UI: "3x COMBO! ₹1.2L recovered" with animation.

==================================================

COMPLIANCE & RISK CONDITIONS (Weather System Equivalent)

==================================================

- Sunny: GDPR Compliant — clear, all checks pass, green badges
- Snowfall: TCPA Quiet Hours — snowfall 9pm-9am, no SMS, queue
- Blizzard: RBI Mandate Blizzard — heavy compliance, need 24h pre-debit notification, 48h cooldown
- Cloudy: Low Confidence — 60% conf, need human review, cloudy UI
- Night: High Risk Night — risk 95+, night mode, needs verification
- Sunset: Promise-to-Pay Sunset — amber, paused, countdown
- Aurora: Recovered Aurora — emerald celebration, confetti
- Heavy Wind: Mass Failure Wind — batch mode, wind particles

Each weather changes UI lighting, visibility, ambience, gameplay — e.g., blizzard shows compliance fog, aurora shows celebration.

==================================================

VISUAL STYLE

==================================================

- Stylized AAA Fintech: Linear + Stripe Dashboard + Vercel + Palantir
- Pixar-quality polish: Soft shadows, rounded 20-24px cards, glassmorphism
- Soft lighting: White/[0.04] cards, border white/[0.06], backdrop-blur-xl
- HDR: Glow shadows 0 0 80px rgba(255,255,255,0.08) for hero mock
- Bloom: Primary button shadow 0 0 20px rgba(255,255,255,0.2)
- Ambient Occlusion: Subtle inner shadows for depth
- Snow particles equivalent: Live log mono particles, confetti for recovered
- Wind trails: Framer Motion entrance opacity 0 y 20 → 1 y 0
- Dynamic shadows: Card hover bg-white/[0.06] transition-all
- PBR materials: Glass cards, premium dark #08080a, #0a0a0b, #0f0f10
- Beautiful skybox: Gradient-mesh radial gradients hsla(28,100%,74%,0.15) etc + grid #ffffff08 1px size 72px
- Typography: Inter 600/500/400, JetBrains Mono for logs, 11px uppercase tracking-widest labels, 84px hero, 18px case names, 13px body
- Icons: Lucide React 16px stroke 1.5
- Animations: Pulse emerald dot, spinner border, progress bar motion, confetti

==================================================

USER INTERFACE

==================================================

Design every screen with premium animations, dark #08080a, rounded-full buttons, 11px uppercase labels.

- Main Menu / Landing (/): Header logo R + Revive + AI REVENUE AGENT badge + Live Dashboard ghost + Start recovering primary. Hero live pill emerald dot + "$127,430 recovered" + H1 84px "Find revenue that's slipping away and win it back." + sub 20px white/60 + CTA + metrics 3 col Recovery Rate 67.3% Avg Time 2.4 days Compliance GDPR•TCPA•RBI. Hero Visual Mock rounded 24px glass + inner 16px bg #0f0f10 grid 280px|1fr|320px with case cards + AI diagnosis bubble + batch chart.

- Play / Dashboard (/dashboard): 3-col layout Sidebar 280px + Main. Sidebar: Revenue at Risk card total at risk ₹2.8L + grid At risk/Recovering/Recovered + Measured Recovery AreaChart + Live Agent Log mono 11px + user card. Top Bar 64px filter pills All/At Risk/Recovering/Recovered + search + Batch + Recover N. Left Inbox 380px Detection Inbox • N + Live webhooks pulse + case cards p-3.5 rounded-2xl selected white black glow else white/[0.03] + avatar + name + ID•type + amount Rupee/Dollar + status pill + risk bar gradient amber→red + time + attempts. Center AI Workspace bg #0f0f10 sticky header AI avatar + LIVE pill + stopping rules + Shield + case header 12x12 avatar + name 18px + ID + status + email•phone•locale + product•amount•risk + Type pill + Diagnose card gradient + states idle/diagnosing/diagnosed with root cause 16px + confidence pill emerald + churn pill amber + reasoning + intervention box icon Mail/MessageSquare/Phone/CreditCard + action + italic message bg-black/40 + compliance pills GDPR TCPA RBI + Stopping Rules card + Next Steps + buttons Execute Recovery + Promise to Pay + Audit Trail reverse chronological actor avatar + action + timestamp + compliant pill + detail. Right Insights 340px Recovery Channels rates + Promise-to-Pay Tracker progress + Batch Performance BarChart + Integrations Required status.

- Settings (/dashboard/settings): Cards grid 2 cols Stripe (secret key, webhook secret, test webhook, status live/offline), Twilio (SID, token, phone, WhatsApp, test SMS), Resend (API key, from email), OpenAI (key, model gpt-4o/gemini), Supabase (URL, service role), Razorpay. Each header icon + title + dot + inputs rounded-xl bg-black/40 border white/10 + test + save.

- Leaderboard / Batch (/dashboard/batch): Top metrics 4 cards Total at risk Recovered Active Recovery rate + table checkboxes + columns Case ID Customer Type Amount Risk Status Attempts Channel Last attempt Next action Audit + sticky bottom bulk bar "3 selected • ₹1.2L at risk → Recover" + chart 7 days.

- Daily Reward / Promise-to-Pay: Tracker with countdown, progress bar 70%, buttons Remind + Mark paid, auto-reminder 24h before.

- Achievements: Recover 10 cases, hit 70% rate, first Hinglish recovery, batch 5, etc.

- Shop / Integrations Marketplace: Stripe, Razorpay, Twilio, Resend, Supabase, Slack, Chrome Extension — connect.

- Pause / Paused Cases: Paused tab with promise dates, amber.

- Game Over / Failed Cases: Failed tab with human handoff required, max attempts reached.

- HUD: Top bar live metrics, risk score, attempts, channel icon, compliance badges, live log.

- Combo Counter: "3x COMBO! ₹1.2L recovered" animation.

- Speed Meter: Avg time to recover 2.4 days gauge.

- Distance: Total at risk distance.

- Coins: Recovered money.

- Boost Meter: Mandate retry tokens.

- Mission Tracker: Daily missions progress.

Everything premium animations: Framer Motion, Sonner toasts dark rounded-full border white/10 bg #111.

==================================================

AUDIO / FEEDBACK (Audio Equivalent)

==================================================

- Snow carving: Email sent whoosh
- Wind: Live log wind flow
- Jump: Channel escalation pop
- Landing: Recovered success chime + confetti
- Boost: Mandate retry turbo whoosh
- Coins: Money recovered coin ding
- Crash: Attempt failed buzz
- UI clicks: Button click subtle
- Background music: Calm lo-fi for dashboard, intense during batch recovery
- Dynamic music: More intense at higher recovery rate 67%→80%

Use Sonner toasts for audio-visual feedback.

==================================================

SHOP / INTEGRATIONS MARKETPLACE

==================================================

Unlock:

- Snowboards equivalent: Recovery Templates — Hinglish SMS, English Email, WhatsApp 10% off
- Characters: Customer Personas — en, hinglish, es
- Helmets: Compliance Helmets — GDPR, TCPA, RBI shields
- Jackets: Channel Jackets — Email Jacket, SMS Jacket, Voice Jacket
- Trails: Audit Trails — particle trails for recovered
- Particle effects: Confetti effects
- Victory emotes: Recovery celebration emotes

Everything cosmetic only, no pay-to-win, real integrations.

==================================================

PROGRESSION

==================================================

- XP System: 100 XP per recovered case, 50 XP per attempt, 200 XP perfect landing first attempt
- Player Level: Level 1-100 based on recovered money, unlocks new channels
- Daily Missions: Recover 3 cases, diagnose 5, hit 60% rate, send Hinglish voice
- Weekly Missions: Recover ₹1L, batch 10, 70% rate
- Achievements: First recovery, 10 recoveries, 100 recoveries, Hinglish master, batch master, compliance 100%
- Season Pass Ready: Q1 2026 Season — new templates, channels, biomes
- Statistics: Lifetime recovered, lifetime cases, avg time, best batch, longest combo, highest single recovery, channels performance
- Lifetime Coins: Total ₹ recovered
- Longest Distance: Max at-risk amount handled
- Highest Combo: Max batch combo 5x

==================================================

MONETIZATION

==================================================

- SaaS Pricing: Starter $49/mo 100 cases, Growth $199/mo 1000 cases, Enterprise $999/mo unlimited + white-label
- Cosmetics only for game equivalent: Templates, emotes, trails — no pay-to-win, recovery rate same for all
- Never pay-to-win: No boosting recovery rate with money, only skill + AI
- Commission: Optional 5% of recovered revenue (performance-based)

==================================================

OUTPUT REQUIREMENTS

==================================================

Produce complete production blueprint, no code:

• Complete Product Design Document (PDD) / GDD — all mechanics above expanded to 10 pages
• Product Requirements Document (PRD) — user stories, acceptance criteria, API specs
• UI Specification — every screen wireframe 1440px + mobile 375px, component library, design tokens JSON, states hover/active/disabled/loading/empty/error
• UX Flow — user journey maps, flowchart detection→diagnose→recover→audit, batch flow, promise-to-pay flow, compliance flow
• Technical Architecture — Next.js 15 App Router, TypeScript, Tailwind, shadcn/ui, Framer Motion, Recharts, Zustand, Prisma, PostgreSQL Supabase, OpenAI GPT-4o/Gemini function calling, Stripe Node SDK, Razorpay SDK, Twilio SDK (SMS/WhatsApp/Voice TwiML Hinglish), Resend SDK, Inngest/BullMQ, Clerk, Vercel, env vars, webhooks, cron, realtime, security
• Asset List — Icons Lucide, images, illustrations, Lottie confetti, fonts Inter/JetBrains Mono, sounds chime/whoosh/pop
• Animation List — Framer Motion entrance, pulse dot, spinner, progress bar, confetti, combo counter, toast, hover scale 1.02, shadow increase
• Sound List — whoosh, chime, ding, buzz, pop, lo-fi bg, intense batch
• Environment Guide — 8 biomes with colors, transitions, risk levels
• Color Palette — #08080a, #0a0a0b, #0f0f10, white, white/60, white/40, white/30, white/[0.06], white/[0.08], emerald #10b981, amber #f59e0b, red #ef4444, violet, blue, gradients
• Typography — Inter 600/500/400, JetBrains Mono, 84px hero, 56px section, 28px card, 18px name, 13px body, 11px label uppercase tracking-widest
• Every screen wireframe — Landing, Dashboard OS, Batch, Audit, Settings, with pixel dimensions, spacing 12/16/24, radius 20-24px, buttons rounded-full h-10 px-6
• Every gameplay mechanic — detection, risk scoring, diagnosis, intervention mapping, bounded workflow, stopping rules, escalation, promise-to-pay, mandate retry sequencer
• Every progression mechanic — XP, level, missions, achievements, stats, season pass
• Every balancing decision — success rates email 42% mandate retry 71% WhatsApp 58% Hinglish voice 64%, cooldown 48h, max 3 attempts, quiet hours 9pm-9am, salary day 5th, batch multiplier 1.5x, XP 100 per recovery

Keep expanding until every aspect is fully documented, 50+ pages equivalent.

Do not write code. Only blueprint.

Stack to mention in blueprint: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Recharts, Zustand, Prisma ORM, PostgreSQL Supabase/Neon, OpenAI GPT-4o, Gemini 1.5 Pro, Stripe Node SDK, Razorpay SDK, Twilio SDK (SMS/WhatsApp/Voice), Resend SDK, Inngest, Clerk, Vercel.

Focus on "measured money recovered across a batch, with compliant escalation, stopping rules, and an audit trail" as the bar.

Make it feel like AAA SaaS, not demo.
```

================================================================================
PROMPT 2: STITCH — ULTRA DETAILED UI IMPLEMENTATION FOR REVENUE RECOVERY
================================================================================

```
You are Stitch, acting as Lead UI Engineer, Design Systems Architect, Frontend Architect for a AAA SaaS studio. Implement the Revive — AI Revenue Recovery OS UI from the Antigravity blueprint.

STACK TO USE (MANDATORY):
- Next.js 15 App Router, React 18.3, TypeScript 5.6, Tailwind CSS 3.4, shadcn/ui, Framer Motion 11, Recharts 2.13, Zustand 5, Lucide React, Sonner toasts, next/font Inter + JetBrains Mono
- No backend logic, only UI, but make it feel live with mock data + Framer Motion + Sonner
- Dark mode only #08080a, glassmorphism, premium

DESIGN TOKENS (USE EXACT):

- Colors: bg #08080a, sidebar #0a0a0b, workspace #0f0f10, card bg-white/[0.04] border-white/[0.06], text white, white/60, white/40, white/30, primary button white text-black shadow 0 0 20px rgba(255,255,255,0.2), secondary zinc-800 border zinc-700, success emerald #10b981 bg rgba(16,185,129,0.2) text #6ee7b7 border emerald/20, warning amber #f59e0b, danger red #ef4444
- Radius: 20px cards, 24px hero mock, 16px inner, 999px buttons/pills
- Spacing: p-5/p-6 cards, gap-2/3/4, h-10 px-6 buttons, h-9 search, h-12 lg, h-8 sm
- Typography: Inter, 84px hero 600 -0.04em 0.9, 56px section, 28px card, 18px name semibold, 13px body 1.5, 11px label uppercase tracking-widest white/30, mono 11px JetBrains
- Shadows: glass backdrop-blur-xl, glow 0 0 80px rgba(255,255,255,0.08), grid #ffffff08 1px size 72px
- Icons: Lucide 16px stroke 1.5, 12px small, 20px large

SCREENS TO BUILD (5 screens, 1440px, auto-layout, responsive 768px):

SCREEN 1: LANDING (app/page.tsx)

- Header max-w-7xl mx-auto px-10 py-6 flex justify-between: left logo 8x8 rounded-full white black R + Revive semibold + badge 10px px-2 py-0.5 rounded-full bg-white/10 border white/10 AI REVENUE AGENT, right ghost Live Dashboard + primary Start recovering. Absolute bg inset-0 pointer-events-none: radial gradients at 40%20% hsla(28,100%,74%,0.15) etc + linear grid.
- Hero max-w-4xl pt-28 pb-20 motion opacity 0 y20 →1 y0 0.6s: live pill inline-flex gap-2 text 12px px-3 py-1 rounded-full bg-white/[0.06] border white/[0.08] emerald dot animate-pulse LIVE $127,430 recovered 7 days 42 cases, H1 44px md 84px 600 tracking -0.04em leading 0.9 "Find revenue that's slipping away and win it back." second line gradient white→white/40 clip-text, sub 18px md 20px leading 1.4 white/60 max-w-2xl "AI agent that detects payment failures...", CTA flex gap-3 primary lg gap-2 Open Live Recovery OS ArrowRight + secondary lg gap-2 Play See how it works, metrics grid 3 cols max-w-xl mt-12 border-t white/10 pt-4 24px semibold + 11px uppercase white/40 Recovery Rate 67.3% Avg Time 2.4 days Compliance GDPR•TCPA•RBI
- Visual Mock mt-24 motion opacity 0 y40 →1 y0 delay 0.3 duration 0.8: outer rounded 24px border white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-3 shadow 0 0 80px rgba(255,255,255,0.08), inner rounded 16px overflow-hidden bg #0f0f10 border white/[0.06], top bar flex justify-between px-5 py-3 border-b white/[0.06] bg-white/[0.02] left 3 dots white/20, center 11px white/40 revive.ai • recovery agent • LIVE, right 11px px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border emerald/20 ● Agent active, grid 280px|1fr|320px min-h 480px: left list bg #0a0a0b p-3 space-y-2 case cards p-3 rounded-xl border text 12px recovered bg-emerald-500/10 border-emerald-500/20 else bg-white/[0.04] border-white/[0.06] top flex justify-between ID white/50 + status pill 10px amber/emerald, middle font-medium name•amount, bottom white/40 11px type•risk. Center p-6 label 11px uppercase white/30 AI DIAGNOSIS • RC-8821, bubble flex gap-3 avatar 8x8 white black AI 12px bold + flex-1 rounded-2xl bg-white/[0.06] border white/[0.08] p-4 text 13px leading 1.5 root cause insufficient_funds 92% conf + reason white/50 + intervention box mt-3 p-2.5 rounded-xl bg-black/40 border white/10 12px label white/40 + white Smart mandate retry + Hinglish SMS + italic white/60 message, compliance box rounded-xl bg-white/[0.03] border white/[0.06] p-3 11px flex gap-2 Shield, buttons flex-1 h-10 rounded-full bg-white black 13px medium Execute Recovery → + h-10 px-4 rounded-full border white/15 13px white/70 Audit Trail. Right border-l white/[0.06] p-4 bg #0a0a0b space-y-4 Batch Recovery card rounded-xl bg-white/[0.04] border white/[0.06] p-4 label 11px white/40 uppercase + value 28px semibold $18,200 + 14px emerald +67% + sub 11px white/40 Today•12 + chart 60px flex end gap-1 bars gradient white/10 to white/60, Promise-to-Pay card rounded-xl bg-white/[0.04] border white/[0.06] p-4 12px white/60 flex gap-2 Clock + rows flex justify-between name + amber date + bar w-full h-1 bg-white/10 rounded-full inner 70% amber + sub 11px white/40.

SCREEN 2: DASHBOARD OS (app/dashboard/page.tsx) — MAIN

- Outer min-h-screen bg #08080a text-white flex. Sidebar 280px border-r white/[0.06] bg #0a0a0b hidden md flex-col: top p-6 border-b logo + LIVE dot pulse, Revenue at Risk label 11px uppercase white/30 mb-3 card rounded-2xl bg-white/[0.04] border white/[0.06] p-4 label 11px white/40 Total at risk + value 28px semibold ₹2,84,750 + sub 11px amber TrendingUp 12% + grid 3 cols gap-2 text 11px mt-4 cards rounded-xl bg-black/40 p-2 border white/5 At risk/Recovering/Recovered emerald variant. Measured Recovery rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border white/[0.08] p-4 header flex justify-between label 11px white/40 7 days recovered + pill 11px emerald +67.3% + value 24px semibold ₹1,27,430 + chart 64px AreaChart recovered vs atRisk + sub 11px white/30 Batch today 12. Live Agent Log rounded-2xl border white/[0.06] bg-white/[0.02] p-3 header 11px white/40 uppercase flex gap-2 FileText + inner h-140px overflow-auto text 11px mono space-y-1 white/60 bg-black/40 rounded-xl p-2 border white/5 logs. Footer p-4 border-t user card rounded-xl bg-white black p-3 flex justify-between avatar 6x6 black white AV + name 12px medium + MoreHorizontal.
- Main flex-1 flex-col: Top Bar h-64px border-b white/[0.06] bg #0a0a0b/80 backdrop-blur-xl flex justify-between px-6 gap-4 left All cases (7) pill bg-white/[0.06] border white/[0.08] 13px + separator + filter pills All At Risk Recovering Recovered rounded-full 12px border capitalize active white black else white/[0.04] border white/[0.06] white/60 hover white/[0.08], right search relative w-260px max-w-320px Search icon 4x4 absolute left-3 top 50% -translate-y-1/2 white/30 input w-full h-9 pl-9 pr-3 rounded-full bg-white/[0.06] border white/[0.08] text 13px placeholder white/30 focus border white/20 + Batch secondary sm gap-1.5 BarChart3 + if batchMode primary Recover N Play.
- Grid lg 380px|1fr|340px: Left Inbox border-r white/[0.06] bg #0a0a0b overflow-auto header p-3 flex justify-between label 11px uppercase white/30 Detection Inbox • N + pill 11px px-2 py-0.5 rounded-full bg-white/10 border white/10 dot emerald pulse Live webhooks, list px-3 pb-3 space-y-2 case card group p-3.5 rounded-2xl border cursor-pointer transition-all selected bg-white text-black border-white shadow 0 0 30px rgba(255,255,255,0.15) else bg-white/[0.03] border-white/[0.06] hover bg-white/[0.06] text-white. Inside flex justify-between start left flex gap-2.5 checkbox if batchMode + avatar 8x8 rounded-full 11px bold bg-white/10 or black white if selected + name 13px medium leading-none + ID•type 11px mt-1 white/40 or black/50, right text-right amount 13px semibold flex gap-1 Rupee/Dollar 3x3 + status pill 10px px-1.5 py-0.5 rounded-full mt-1 inline-flex recovered emerald etc at_risk white/10, bottom mt-3 flex justify-between left flex gap-2 risk bar h-1.5 w-72px rounded-full overflow-hidden bg-white/10 or black/10 inner gradient amber→red width risk% + label 10px risk N, right 10px flex gap-1 Clock 3x3 white/30 time + attempts.
- Center AI Workspace bg #0f0f10 overflow-auto sticky top z-10 backdrop-blur-xl bg #0f0f10/80 border-b white/[0.06] p-4 flex justify-between left flex gap-3 avatar 8x8 white black bold 12px AI + title 13px semibold flex gap-2 Revenue Recovery Agent + pill 10px emerald LIVE + sub 11px white/40 Detect→Diagnose→Intervene→Recover•Compliant, right label 11px white/40 hidden md Stopping rules max N 48h + Shield white/20. Content p-6 space-y-6 Case Header rounded 20px border white/[0.08] bg-white/[0.04] p-5 flex justify-between start left flex gap-4 avatar 12x12 white black bold + name 18px semibold + ID pill 11px px-2 py-0.5 rounded-full bg-white/10 border white/10 + status pill 11px emerald/amber + email•phone•locale 13px white/50 mt-1 + product•amount•risk 13px white/70 mt-1 flex gap-2 amount semibold, right Type pill 12px px-2.5 py-1 rounded-full bg-white/[0.06] border white/[0.08] capitalize. Diagnose Card rounded 20px border white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 header flex justify-between mb-4 label 11px uppercase white/30 flex gap-2 Zap + Diagnose button secondary sm gap-1.5 Sparkles + spinner if diagnosing. States idle rounded-xl bg-black/40 border white/10 p-4 13px white/40 + grid 3 cols gap-2 11px rounded-lg bg-white/[0.04] p-2 border white/[0.06], diagnosing rounded-xl bg-black/60 border white/10 p-4 dot violet pulse + progress bar h-2 w-full bg-white/10 rounded-full overflow-hidden inner motion width 0→100% 1.2s bg-white + mono 11px white/30, diagnosed motion opacity 0 y10 →1 y0 grid md 1fr 200px gap-4 left rounded-xl bg-black/60 border white/10 p-4 label 11px white/40 uppercase Root Cause + row flex gap-3 mt-2 cause 16px semibold + confidence pill emerald 11px + churn pill amber 11px + reasoning 13px white/60 mt-2 leading 1.5 + intervention box mt-4 rounded-xl bg-white/[0.04] border white/[0.06] p-3 label 11px white/40 + row 13px medium flex gap-2 icon Mail/MessageSquare/Phone/CreditCard + action•via channel + message 12px white/50 mt-2 italic bg-black/40 p-2.5 rounded-lg border white/5 + compliance row mt-3 flex gap-2 10px pills bg-white/10 border white/10 GDPR TCPA RBI + scheduled time pill bg-white/5, right Stopping Rules card rounded-xl bg-white/[0.04] border white/[0.06] p-3 label 11px white/40 uppercase + mt-2 space-y-2 11px flex justify-between label white/40 value medium attempts/max next in escalation capitalize + bar w-full h-1.5 bg-white/10 rounded-full mt-2 inner bg-white width attempts/max*100 + warning if shouldStop amber, Next Steps card rounded-xl bg-white/[0.04] border white/[0.06] p-3 label 11px white/40 uppercase + list mt-2 space-y-1.5 11px white/60 numbered, buttons flex gap-2 primary gap-2 Play Execute Recovery (attempt+1/max) + secondary gap-1.5 Pause Promise to Pay. Audit Trail rounded 20px border white/[0.08] bg-white/[0.03] p-5 header flex justify-between mb-4 label 11px uppercase white/30 flex gap-2 Shield + count pill 11px px-2 py-0.5 rounded-full bg-white/10 border white/10 N events + list space-y-2 max-h 260px overflow-auto pr-1 each flex gap-3 text 12px p-2.5 rounded-xl bg-black/30 border white/[0.04] avatar 6x6 rounded-full 10px bold shrink-0 bg-white black if ai_agent else white/10 system else violet 20 stripe + right flex-1 min-w-0 row flex gap-2 action font-medium + timestamp 11px white/30 + compliant pill ml-auto 10px px-1.5 py-0.5 rounded-full emerald/red + detail white/50 11px truncate.
- Right Insights 340px border-l white/[0.06] bg #0a0a0b overflow-auto hidden lg block p-4 space-y-4 Recovery Channels card rounded-2xl bg-white/[0.04] border white/[0.06] p-4 label 11px uppercase white/30 + list mt-3 space-y-2.5 each flex justify-between p-2.5 rounded-xl bg-black/30 border white/5 left flex gap-2 avatar 7x7 rounded-full colored bg-blue-500/20 text-blue-300 etc + label 12px + rate 12px semibold right, Promise-to-Pay Tracker card rounded-2xl bg-white/[0.04] border white/[0.06] p-4 header 11px uppercase white/30 flex gap-2 Clock + list mt-3 space-y-3 card rounded-xl bg-black/40 border white/5 p-3 top flex justify-between 12px name medium + date amber 11px + sub 11px white/40 amount•product + bar mt-2 w-full h-1.5 bg-white/10 rounded-full inner 70% amber + buttons mt-2 flex gap-1.5 secondary sm h-7 11px flex-1 Remind + ghost h-7 11px flex-1 border white/10 Mark paid, Batch Performance card rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border white/[0.08] p-4 label 11px uppercase white/30 + chart mt-3 h-100px BarChart atRisk vs recovered XAxis date 10px white/40 + grid mt-3 2 cols gap-2 11px cards rounded-xl bg-black/40 p-2.5 border white/5 label white/40 value 14px semibold mt-1 Today recovered $18,200 Batch rate 67% + button sm secondary w-full mt-3 gap-1.5 ArrowUpRight Export CSV•Audit log, Integrations Required card rounded-2xl border white/[0.06] bg-white/[0.02] p-4 label 11px uppercase white/30 + list mt-3 space-y-2 11px white/50 flex justify-between Stripe webhook ● live emerald etc.

SCREEN 3: BATCH (/dashboard/batch)

- Top metrics 4 cards grid Total at risk Recovered Active Recovery rate with trends. Table with checkboxes columns Case ID Customer Type Amount Risk Status Attempts Channel Last attempt Next action Audit. Bulk action bar sticky bottom "3 selected • ₹1.2L at risk → Recover" primary + Export. Chart 7 days batch area chart atRisk vs recovered.

SCREEN 4: AUDIT (/dashboard/audit)

- Timeline vertical line, filters by actor pills system ai_agent stripe twilio human, search, date range. Each event card timestamp avatar action badge detail compliant check green case link. Export CSV. Stopping rules explanation cards Max Attempts 3 per case then human handoff, Cooldown 48h between touches RBI mandate, Quiet Hours No SMS 9pm-9am local TCPA, Audit Trail Every action actor+timestamp+compliant flag.

SCREEN 5: SETTINGS (/dashboard/settings)

- Cards grid 2 cols Stripe (inputs secret key webhook secret test webhook button status live/offline), Twilio (SID Auth Token Phone WhatsApp test SMS), Resend (API key from email), OpenAI (key model select gpt-4o/gemini), Supabase (URL service role), Razorpay. Each header icon + title + dot live/offline + inputs rounded-xl bg-black/40 border white/10 text 13px + test button secondary sm + save primary sm + help text 11px white/40.

INTERACTIONS & STATES:

- Hover cards bg-white/[0.06] transition-all, buttons scale 1.02 shadow increase
- Selected case bg-white text-black shadow glow 0 0 30px rgba(255,255,255,0.15)
- Loading spinner border 2 white/30 border-t-white rounded-full animate-spin 12px, skeleton pulse white/5
- Empty icon 48px white/10 + text 13px white/40 + CTA
- Toast Sonner dark rounded-full border white/10 bg #111
- Micro risk bar gradient amber→red, progress white, dot pulse emerald live, checkboxes rounded
- Responsive sidebar collapses to bottom nav <768px, grid 1 col, search full width

Use mockCases 7 entries covering all 4 types, mixed INR/USD, locales en/hinglish/es, statuses at_risk/recovering/recovered. Use recoveryStats totalAtRisk 284750 totalRecovered 127430 active 42 recoveryRate 67.3% batchStats 7 days.

Make it feel like real financial OS, not demo, Linear + Stripe + Vercel AI SDK premium, fast, trustworthy.

Export as Figma components auto-layout variants for status boolean selected dark only.

Build with Next.js 15 App Router, TypeScript, Tailwind, Framer Motion, Recharts, Zustand, Sonner, Lucide.

No backend, only UI, but make it feel live.
```

================================================================================
HOW TO USE
================================================================================

- Copy PROMPT 1 → Paste into Antigravity (https://antigravity.google / Firebase Studio / IDX) → Generate full blueprint doc (50+ pages) → It will produce GDD, PRD, UI Spec, UX Flow, Tech Arch, Asset List, etc. — NO CODE.

- Then copy PROMPT 2 → Paste into Stitch (https://stitch.withgoogle.com) → Generate Figma UI + React code → Then implement with Next.js 15 stack listed.

- Stacks mentioned in both prompts: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Recharts, Zustand, Prisma ORM, PostgreSQL Supabase/Neon, OpenAI GPT-4o, Gemini 1.5 Pro, Stripe Node SDK, Razorpay SDK, Twilio SDK (SMS/WhatsApp/Voice Hinglish TwiML), Resend SDK, Inngest/BullMQ, Clerk, Vercel.

- Both prompts focus on bar: "Don't just identify the problem. Show measured money recovered across a batch, with compliant escalation, stopping rules, and an audit trail."

Built for Revive — AI Revenue Recovery OS.

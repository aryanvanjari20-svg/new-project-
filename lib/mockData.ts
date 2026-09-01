export type CaseType = "payment_failed" | "checkout_abandoned" | "subscription_failed" | "invoice_overdue";
export type CaseStatus = "at_risk" | "diagnosing" | "recovering" | "recovered" | "failed" | "paused";
export type RootCause = "insufficient_funds" | "expired_card" | "bank_decline" | "fraud_flag" | "intent_drop" | "price_hesitation" | "tech_error" | "customer_ignoring" | "dispute";

export interface RecoveryCase {
  id: string;
  type: CaseType;
  status: CaseStatus;
  customer: { name: string; email: string; phone: string; locale: "en" | "hinglish" | "es"; avatar: string };
  amount: number;
  currency: string;
  product: string;
  riskScore: number;
  rootCause?: RootCause;
  confidence?: number;
  attempts: number;
  maxAttempts: number;
  lastAttemptAt?: string;
  nextAction?: string;
  channel?: "email" | "sms" | "whatsapp" | "voice" | "stripe_retry";
  promiseToPay?: string;
  recoveredAt?: string;
  auditTrail: AuditEvent[];
  createdAt: string;
}

export interface AuditEvent {
  id: string;
  ts: string;
  actor: "system" | "ai_agent" | "human" | "stripe" | "twilio";
  action: string;
  detail: string;
  compliant: boolean;
}

export const mockCases: RecoveryCase[] = [
  {
    id: "RC-8821",
    type: "payment_failed",
    status: "at_risk",
    customer: { name: "Aarav Mehta", email: "aarav.m@startup.io", phone: "+91 98765 43210", locale: "hinglish", avatar: "AM" },
    amount: 49900,
    currency: "INR",
    product: "Pro Plan Annual",
    riskScore: 92,
    attempts: 0,
    maxAttempts: 3,
    auditTrail: [{ id: "a1", ts: new Date(Date.now()-1000*60*30).toISOString(), actor: "system", action: "DETECTED", detail: "Payment failed via Stripe: insufficient_funds", compliant: true }],
    createdAt: new Date(Date.now()-1000*60*60*2).toISOString()
  },
  {
    id: "RC-8822",
    type: "checkout_abandoned",
    status: "at_risk",
    customer: { name: "Sarah Chen", email: "sarah@designco.com", phone: "+1 415 555 0142", locale: "en", avatar: "SC" },
    amount: 299,
    currency: "USD",
    product: "Growth Stack",
    riskScore: 78,
    attempts: 0,
    maxAttempts: 3,
    auditTrail: [{ id: "a2", ts: new Date(Date.now()-1000*60*60*5).toISOString(), actor: "system", action: "DETECTED", detail: "Checkout abandoned at step 3/4, cart value $299", compliant: true }],
    createdAt: new Date(Date.now()-1000*60*60*5).toISOString()
  },
  {
    id: "RC-8823",
    type: "subscription_failed",
    status: "recovering",
    customer: { name: "Vikram Singh", email: "vikram@buildfast.ai", phone: "+91 98101 22334", locale: "hinglish", avatar: "VS" },
    amount: 12000,
    currency: "INR",
    product: "Enterprise API",
    riskScore: 88,
    rootCause: "expired_card",
    confidence: 94,
    attempts: 1,
    maxAttempts: 3,
    lastAttemptAt: new Date(Date.now()-1000*60*60*12).toISOString(),
    nextAction: "Hinglish voice call + UPI link",
    channel: "voice",
    auditTrail: [
      { id: "a3", ts: new Date(Date.now()-1000*60*60*20).toISOString(), actor: "system", action: "DETECTED", detail: "Subscription renewal failed", compliant: true },
      { id: "a4", ts: new Date(Date.now()-1000*60*60*18).toISOString(), actor: "ai_agent", action: "DIAGNOSED", detail: "Root cause: expired_card (94% conf). Previous card exp 02/25", compliant: true },
      { id: "a5", ts: new Date(Date.now()-1000*60*60*12).toISOString(), actor: "twilio", action: "EMAIL_SENT", detail: "Sent card update email in Hinglish", compliant: true },
    ],
    createdAt: new Date(Date.now()-1000*60*60*20).toISOString()
  },
  {
    id: "RC-8824",
    type: "invoice_overdue",
    status: "at_risk",
    customer: { name: "Acme Corp", email: "finance@acme.co", phone: "+1 650 555 0199", locale: "en", avatar: "AC" },
    amount: 12500,
    currency: "USD",
    product: "B2B Seats x50",
    riskScore: 85,
    attempts: 2,
    maxAttempts: 4,
    lastAttemptAt: new Date(Date.now()-1000*60*60*48).toISOString(),
    nextAction: "Escalate to CFO + promise-to-pay link",
    channel: "email",
    auditTrail: [
      { id: "a6", ts: new Date(Date.now()-1000*60*60*96).toISOString(), actor: "system", action: "DETECTED", detail: "Invoice INV-4021 overdue by 12 days", compliant: true },
      { id: "a7", ts: new Date(Date.now()-1000*60*60*72).toISOString(), actor: "ai_agent", action: "DIAGNOSED", detail: "Root cause: customer_ignoring, likely AP queue", compliant: true },
      { id: "a8", ts: new Date(Date.now()-1000*60*60*48).toISOString(), actor: "twilio", action: "EMAIL_SENT", detail: "Friendly reminder #2", compliant: true },
    ],
    createdAt: new Date(Date.now()-1000*60*60*96).toISOString()
  },
  {
    id: "RC-8825",
    type: "payment_failed",
    status: "recovered",
    customer: { name: "Priya Nair", email: "priya@nair.dev", phone: "+91 98867 11223", locale: "hinglish", avatar: "PN" },
    amount: 2999,
    currency: "INR",
    product: "Starter Monthly",
    riskScore: 45,
    rootCause: "insufficient_funds",
    confidence: 89,
    attempts: 2,
    maxAttempts: 3,
    recoveredAt: new Date(Date.now()-1000*60*60*3).toISOString(),
    auditTrail: [
      { id: "a9", ts: new Date(Date.now()-1000*60*60*30).toISOString(), actor: "system", action: "DETECTED", detail: "Payment failed", compliant: true },
      { id: "a10", ts: new Date(Date.now()-1000*60*60*28).toISOString(), actor: "ai_agent", action: "DIAGNOSED", detail: "Insufficient funds, salary cycle mismatch", compliant: true },
      { id: "a11", ts: new Date(Date.now()-1000*60*60*26).toISOString(), actor: "stripe", action: "RETRY_SCHEDULED", detail: "Smart retry after 3 days (salary day)", compliant: true },
      { id: "a12", ts: new Date(Date.now()-1000*60*60*3).toISOString(), actor: "stripe", action: "RECOVERED", detail: "Payment succeeded $2999 via mandate retry", compliant: true },
    ],
    createdAt: new Date(Date.now()-1000*60*60*30).toISOString()
  },
  {
    id: "RC-8826",
    type: "checkout_abandoned",
    status: "recovered",
    customer: { name: "Alex Rivera", email: "alex@rivera.co", phone: "+1 323 555 0178", locale: "es", avatar: "AR" },
    amount: 149,
    currency: "USD",
    product: "Lifetime Deal",
    riskScore: 62,
    rootCause: "price_hesitation",
    confidence: 91,
    attempts: 1,
    maxAttempts: 3,
    recoveredAt: new Date(Date.now()-1000*60*60*1).toISOString(),
    auditTrail: [
      { id: "a13", ts: new Date(Date.now()-1000*60*60*8).toISOString(), actor: "system", action: "DETECTED", detail: "Abandoned at payment page", compliant: true },
      { id: "a14", ts: new Date(Date.now()-1000*60*60*7).toISOString(), actor: "ai_agent", action: "DIAGNOSED", detail: "Price hesitation, viewed pricing 4x", compliant: true },
      { id: "a15", ts: new Date(Date.now()-1000*60*60*6).toISOString(), actor: "twilio", action: "WHATSAPP_SENT", detail: "Sent 10% off + testimonial", compliant: true },
      { id: "a16", ts: new Date(Date.now()-1000*60*60*1).toISOString(), actor: "system", action: "RECOVERED", detail: "Checkout completed with code SAVE10", compliant: true },
    ],
    createdAt: new Date(Date.now()-1000*60*60*8).toISOString()
  },
  {
    id: "RC-8827",
    type: "payment_failed",
    status: "at_risk",
    customer: { name: "David Park", email: "david@parkventures.com", phone: "+1 415 555 0133", locale: "en", avatar: "DP" },
    amount: 999,
    currency: "USD",
    product: "Pro Plan",
    riskScore: 95,
    attempts: 0,
    maxAttempts: 3,
    auditTrail: [{ id: "a17", ts: new Date().toISOString(), actor: "system", action: "DETECTED", detail: "Bank decline: suspected fraud", compliant: true }],
    createdAt: new Date().toISOString()
  }
];

export const recoveryStats = {
  totalAtRisk: 284750,
  totalRecovered: 127430,
  activeCases: 42,
  recoveryRate: 67.3,
  avgTimeToRecover: "2.4 days",
  batchStats: [
    { date: "Mon", atRisk: 12000, recovered: 8200 },
    { date: "Tue", atRisk: 19000, recovered: 13200 },
    { date: "Wed", atRisk: 15000, recovered: 9800 },
    { date: "Thu", atRisk: 22000, recovered: 15600 },
    { date: "Fri", atRisk: 28000, recovered: 20100 },
    { date: "Sat", atRisk: 18000, recovered: 12300 },
    { date: "Sun", atRisk: 25000, recovered: 18200 },
  ]
};

export function getInterventionForCause(cause: RootCause, locale: string) {
  const map: Record<RootCause, any> = {
    insufficient_funds: { channel: "stripe_retry", action: "Smart retry on salary day + UPI autopay reminder", template: locale === "hinglish" ? "Hinglish SMS: Paise kam the? Salary ke baad retry karenge. UPI link:" : "Low balance detected. Retrying after payday." },
    expired_card: { channel: "email", action: "Card update flow with 1-click", template: "Your card expired. Update in 10 seconds." },
    bank_decline: { channel: "sms", action: "Bank auth link + alternate method", template: "Bank declined. Try UPI/Netbanking?" },
    fraud_flag: { channel: "email", action: "Verification + human handoff", template: "Security check needed" },
    intent_drop: { channel: "whatsapp", action: "Abandoned checkout nudge with social proof", template: "Still interested? 12 people bought this today." },
    price_hesitation: { channel: "whatsapp", action: "Limited discount + comparison", template: "Get 10% off in next 2 hours" },
    tech_error: { channel: "email", action: "Apology + fixed checkout link", template: "Sorry! We fixed the bug. Here's 15% off." },
    customer_ignoring: { channel: "email", action: "CFO escalation + promise-to-pay", template: "Quick promise-to-pay? Pick a date." },
    dispute: { channel: "voice", action: "Human call + dispute resolution", template: "Let's resolve your concern" }
  };
  return map[cause];
}

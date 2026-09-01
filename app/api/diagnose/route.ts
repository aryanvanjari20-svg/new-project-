import { NextRequest, NextResponse } from "next/server";

// In production, call OpenAI / Gemini here
// This simulates AI diagnosis with compliance checks

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { caseData } = body;

  // Simulate LLM latency
  await new Promise(r => setTimeout(r, 800));

  // Simple heuristic + LLM prompt would be:
  // "Classify root cause from: payment logs, checkout events, customer locale"
  const rootCauses = {
    payment_failed: [
      { cause: "insufficient_funds", confidence: 92, reason: "Balance low on 1st, salary on 5th. Pattern from Razorpay mandate." },
      { cause: "expired_card", confidence: 88, reason: "Card expiry in Stripe metadata" }
    ],
    checkout_abandoned: [
      { cause: "price_hesitation", confidence: 91, reason: "Viewed pricing 4x, hovered annual discount" }
    ],
    subscription_failed: [
      { cause: "expired_card", confidence: 94, reason: "Card expired 02/25" }
    ],
    invoice_overdue: [
      { cause: "customer_ignoring", confidence: 87, reason: "Email opened 3x, no reply, AP queue likely" }
    ]
  };

  const bucket = (rootCauses as any)[caseData.type] || rootCauses.payment_failed;
  const pick = bucket[0];

  const locale = caseData.customer?.locale || "en";
  const intervention = pick.cause === "insufficient_funds" ? {
    channel: "stripe_retry",
    action: "Smart mandate retry sequencer + UPI",
    message: locale === "hinglish"
      ? `Hi ${caseData.customer.name.split(" ")[0]}! Aapka payment fail hua. Salary day ko retry karenge. UPI: revive.pay/${caseData.id}`
      : `Low balance detected. Smart retry scheduled on salary day. Pay now via UPI: revive.pay/${caseData.id}`,
    compliance: { gdpr: true, tcpa: true, rbi: true }
  } : {
    channel: "email",
    action: "Card update magic link",
    message: `Update your card in 10s: revive.pay/${caseData.id}`,
    compliance: { gdpr: true, tcpa: true, rbi: true }
  };

  return NextResponse.json({
    rootCause: pick.cause,
    confidence: pick.confidence,
    reasoning: pick.reason,
    intervention,
    stoppingRules: { maxAttempts: 3, cooldown: "48h", escalation: ["email","sms","voice"], quietHours: "21:00-09:00 local" },
    audit: { actor: "ai_agent", compliant: true }
  });
}

// Simulated AI Agent - in production this calls OpenAI / Gemini / Claude
// Implements the full loop: detect -> diagnose -> choose intervention -> execute with stopping rules

export interface DiagnosisResult {
  rootCause: string;
  confidence: number;
  reasoning: string;
  intervention: {
    channel: "email" | "sms" | "whatsapp" | "voice" | "stripe_retry";
    action: string;
    message: string;
    scheduledAt: string;
    complianceCheck: { gdpr: boolean; tcpa: boolean; rbi: boolean };
  };
  nextSteps: string[];
  riskOfChurn: number;
}

export async function diagnoseCase(caseData: any): Promise<DiagnosisResult> {
  // Simulate AI thinking time
  await new Promise(r => setTimeout(r, 1200));

  const causes: Record<string, any> = {
    payment_failed: {
      causes: [
        { c: "insufficient_funds", conf: 92, reason: "Balance low on 1st of month, customer salary on 5th. Historical pattern shows success on 6th." },
        { c: "expired_card", conf: 88, reason: "Card expiry detected in Stripe metadata. Last 4 updated 2 years ago." },
        { c: "bank_decline", conf: 75, reason: "Bank flagged as suspicious due to international charge." },
      ]
    },
    checkout_abandoned: {
      causes: [
        { c: "price_hesitation", conf: 91, reason: "Viewed pricing page 4x, hovered over annual discount. Price sensitive." },
        { c: "intent_drop", conf: 82, reason: "Session duration 45s, distracted. No tech errors." },
      ]
    },
    subscription_failed: {
      causes: [
        { c: "expired_card", conf: 94, reason: "Card expired 02/25. User active daily until failure." },
        { c: "insufficient_funds", conf: 78, reason: "Failed at month end, low balance pattern." },
      ]
    },
    invoice_overdue: {
      causes: [
        { c: "customer_ignoring", conf: 87, reason: "No response to 2 reminders, but email opened 3x. Likely in AP queue." },
      ]
    }
  };

  const bucket = causes[caseData.type] || causes["payment_failed"];
  const pick = bucket.causes[0];

  const locale = caseData.customer?.locale || "en";

  let message = "";
  let channel: any = "email";
  if (pick.c === "insufficient_funds") {
    channel = "stripe_retry";
    message = locale === "hinglish"
      ? `Hi ${caseData.customer.name.split(" ")[0]}! Aapka payment ₹${caseData.amount} fail hua kyunki balance low tha. Koi baat nahi! Hum salary day (5th) ko dobara try karenge. Ya abhi UPI se pay kar sakte ho: [link]`
      : `Hi ${caseData.customer.name.split(" ")[0]}, your payment of ${caseData.currency} ${caseData.amount} failed due to low balance. We'll smart-retry on your salary date, or you can pay now via UPI: [link]`;
  } else if (pick.c === "expired_card") {
    channel = "email";
    message = locale === "hinglish"
      ? `Namaste ${caseData.customer.name.split(" ")[0]}! Aapka card expire ho gaya hai. 10 second mein update kar do: [magic link] - Pro plan continue rahega!`
      : `Your card expired. Update it in 10 seconds to keep ${caseData.product}: [magic link]`;
  } else if (pick.c === "price_hesitation") {
    channel = "whatsapp";
    message = `Still thinking about ${caseData.product}? 12 founders bought it today. Here's 10% off for 2 hours: SAVE10 - ${caseData.product} at $${Math.round(caseData.amount * 0.9)}`;
  } else {
    channel = "email";
    message = `We noticed an issue with your ${caseData.product}. Let's fix it quickly: [recovery link]`;
  }

  return {
    rootCause: pick.c,
    confidence: pick.conf,
    reasoning: pick.reason,
    intervention: {
      channel,
      action: channel === "stripe_retry" ? "Smart mandate retry sequencer" : channel === "voice" ? "Hinglish voice call + WhatsApp fallback" : `${channel} recovery flow`,
      message,
      scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(),
      complianceCheck: { gdpr: true, tcpa: true, rbi: true }
    },
    nextSteps: [
      "Send recovery message via " + channel,
      "Wait 48h cooldown",
      "If no response, escalate to next channel",
      "Stop after 3 attempts or if promise-to-pay received"
    ],
    riskOfChurn: pick.conf > 90 ? 12 : 35
  };
}

export function getStoppingRules(attempts: number, max: number) {
  return {
    shouldStop: attempts >= max,
    reasons: [
      attempts >= max ? "Max attempts reached" : null,
      attempts >= 2 ? "Require human review after 2 fails" : null,
    ].filter(Boolean),
    nextAttemptIn: attempts === 0 ? "2 hours" : attempts === 1 ? "48 hours" : "72 hours",
    escalation: attempts === 0 ? "email" : attempts === 1 ? "sms/whatsapp" : "voice/human"
  };
}

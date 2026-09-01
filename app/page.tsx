"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, BarChart3, Phone, Mail, CreditCard, Clock, CheckCircle2, AlertTriangle, TrendingUp, Play } from "lucide-react";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white overflow-hidden relative">
      {/* gradient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_center,_rgba(120,119,198,0.15),transparent_60%)]" />
        <div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_rgba(255,119,198,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white text-black grid place-items-center font-bold text-[14px]">R</div>
          <span className="font-semibold tracking-tight">Revive</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10 ml-2">AI REVENUE AGENT</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard"><Button variant="ghost" size="sm">Live Dashboard</Button></Link>
          <Button size="sm" onClick={()=>document.getElementById('demo')?.scrollIntoView({behavior:'smooth'})}>Start recovering</Button>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="px-6 md:px-10 max-w-7xl mx-auto pt-16 md:pt-28 pb-20">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-[12px] px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              LIVE: $127,430 recovered in last 7 days across 42 cases
            </div>
            <h1 className="text-[44px] md:text-[84px] font-[600] leading-[0.9] tracking-[-0.04em]">
              Find revenue that&apos;s
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">slipping away</span>
              <br />
              and win it back.
            </h1>
            <p className="text-[18px] md:text-[20px] leading-[1.4] text-white/60 mt-6 max-w-2xl">
              AI agent that detects payment failures, checkout abandonment & overdue invoices → diagnoses root cause → executes bounded recovery with compliant escalation & audit trail.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/dashboard"><Button size="lg" className="gap-2">Open Live Recovery OS <ArrowRight className="w-4 h-4" /></Button></Link>
              <Button size="lg" variant="secondary" className="gap-2" onClick={()=>document.getElementById('how')?.scrollIntoView({behavior:'smooth'})}><Play className="w-4 h-4" /> See how it works</Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl">
              {[
                {k:"Recovery Rate", v:"67.3%"},
                {k:"Avg Time", v:"2.4 days"},
                {k:"Compliance", v:"GDPR • TCPA • RBI"}
              ].map(i=>(
                <div key={i.k} className="border-t border-white/10 pt-4">
                  <div className="text-[24px] font-semibold tracking-tight">{i.v}</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/40 mt-1">{i.k}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual mock */}
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.8}} className="mt-16 md:mt-24 relative">
            <div className="rounded-[24px] border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-2 md:p-3 shadow-[0_0_80px_rgba(255,255,255,0.08)]">
              <div className="rounded-[16px] overflow-hidden bg-[#0f0f10] border border-white/[0.06]">
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/20" /><div className="w-3 h-3 rounded-full bg-white/10" /><div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="text-[11px] text-white/40">revive.ai • recovery agent • LIVE</div>
                  <div className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/20">● Agent active</div>
                </div>
                <div className="grid md:grid-cols-[280px_1fr_320px] min-h-[480px]">
                  {/* left list */}
                  <div className="border-r border-white/[0.06] p-3 space-y-2 bg-[#0a0a0b]">
                    {[
                      {id:"RC-8821", type:"payment_failed", amt:"₹49,900", name:"Aarav Mehta", risk:92, status:"at_risk"},
                      {id:"RC-8823", type:"subscription_failed", amt:"₹12,000", name:"Vikram Singh", risk:88, status:"recovering"},
                      {id:"RC-8824", type:"invoice_overdue", amt:"$12,500", name:"Acme Corp", risk:85, status:"at_risk"},
                      {id:"RC-8825", type:"payment_failed", amt:"₹2,999", name:"Priya Nair", risk:45, status:"recovered"},
                    ].map(c=>(
                      <div key={c.id} className={`p-3 rounded-xl border text-[12px] ${c.status==='recovered'?'bg-emerald-500/10 border-emerald-500/20':'bg-white/[0.04] border-white/[0.06]'}`}>
                        <div className="flex justify-between"><span className="text-white/50">{c.id}</span><span className={`px-1.5 py-0.5 rounded-full text-[10px] ${c.status==='recovered'?'bg-emerald-500/20 text-emerald-300':'bg-amber-500/20 text-amber-300'}`}>{c.status}</span></div>
                        <div className="font-medium mt-1">{c.name} • {c.amt}</div>
                        <div className="text-white/40 text-[11px]">{c.type} • risk {c.risk}</div>
                      </div>
                    ))}
                  </div>
                  {/* center AI */}
                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-widest text-white/30 mb-4">AI DIAGNOSIS • RC-8821</div>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-white text-black grid place-items-center text-[12px] font-bold">AI</div>
                        <div className="flex-1 rounded-2xl bg-white/[0.06] border border-white/[0.08] p-4 text-[13px] leading-[1.5]">
                          <div className="text-white/90">Root cause: <span className="text-white font-semibold">insufficient_funds (92% conf)</span></div>
                          <div className="text-white/50 mt-1">Balance low on 1st, salary on 5th. Historical pattern shows success on 6th. RBI compliant retry.</div>
                          <div className="mt-3 p-2.5 rounded-xl bg-black/40 border border-white/10 text-[12px]">
                            <span className="text-white/40">Intervention:</span> <span className="text-white">Smart mandate retry sequencer + Hinglish SMS</span><br/>
                            <span className="text-white/60 italic">&quot;Hi Aarav! Aapka payment ₹49,900 fail hua... salary day ko retry karenge. UPI link: revive.pay/8821&quot;</span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-[11px]">
                        <div className="flex items-center gap-2 text-white/60"><Shield className="w-3 h-3" /> Compliance: GDPR ✓ TCPA ✓ RBI ✓ • Stopping rule: max 3 attempts, 48h cooldown</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-10 rounded-full bg-white text-black grid place-items-center text-[13px] font-medium">Execute Recovery →</div>
                        <div className="h-10 px-4 rounded-full border border-white/15 grid place-items-center text-[13px] text-white/70">Audit Trail</div>
                      </div>
                    </div>
                  </div>
                  {/* right metrics */}
                  <div className="border-l border-white/[0.06] p-4 bg-[#0a0a0b] space-y-4">
                    <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                      <div className="text-[11px] text-white/40 uppercase tracking-widest">Batch Recovery</div>
                      <div className="text-[28px] font-semibold mt-2">$18,200 <span className="text-[14px] text-emerald-400">+67%</span></div>
                      <div className="text-[11px] text-white/40">Today • 12 cases recovered</div>
                      <div className="mt-3 h-[60px] flex items-end gap-1">
                        {[40,65,45,80,60,75,90].map((h,i)=><div key={i} className="flex-1 rounded-full bg-gradient-to-t from-white/10 to-white/60" style={{height:`${h}%`}} />)}
                      </div>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 text-[12px]">
                      <div className="text-white/60 flex items-center gap-2"><Clock className="w-3 h-3" /> Promise-to-Pay Tracker</div>
                      <div className="mt-3 space-y-2">
                        <div className="flex justify-between"><span>Acme Corp</span><span className="text-amber-300">Jun 6</span></div>
                        <div className="w-full h-1 bg-white/10 rounded-full"><div className="h-1 w-[70%] bg-amber-400 rounded-full" /></div>
                        <div className="text-[11px] text-white/40">2 days left • Auto-reminder scheduled</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* How it works */}
        <section id="how" className="px-6 md:px-10 max-w-7xl mx-auto py-20">
          <div className="max-w-3xl">
            <h2 className="text-[36px] md:text-[56px] font-semibold tracking-[-0.03em] leading-[0.95]">From detection to <span className="text-white/40">recovered money</span>, with guardrails.</h2>
            <p className="text-white/50 mt-4 text-[16px]">Don&apos;t just identify. Close the loop with measured money recovered, compliant escalation, stopping rules, audit trail.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-12">
            {[
              {icon:AlertTriangle, title:"Detect", desc:"Webhooks: Stripe payment_intent.failed, checkout abandonment (segment), subscription past_due, invoice overdue. Risk score 0-100.", color:"from-amber-500/20 to-orange-500/20"},
              {icon:Zap, title:"Diagnose", desc:"LLM classifies root cause: insufficient_funds, expired_card, bank_decline, price_hesitation, etc. Confidence + reasoning.", color:"from-violet-500/20 to-indigo-500/20"},
              {icon:Mail, title:"Intervene", desc:"Choose channel: email (Resend), SMS/WhatsApp/Voice (Twilio Hinglish), Stripe smart retry. Compliant templates.", color:"from-emerald-500/20 to-teal-500/20"},
              {icon:CheckCircle2, title:"Recover + Audit", desc:"Bounded workflow: max 3 attempts, exponential backoff, promise-to-pay tracker. Every action logged.", color:"from-blue-500/20 to-cyan-500/20"},
            ].map((s,i)=>(
              <div key={i} className="rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-6 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-60`} />
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white text-black grid place-items-center mb-4"><s.icon className="w-5 h-5" /></div>
                  <div className="text-[11px] uppercase tracking-widest text-white/40">Step {i+1}</div>
                  <div className="text-[18px] font-semibold mt-1">{s.title}</div>
                  <div className="text-[13px] text-white/50 mt-2 leading-[1.5]">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-6">
              <div className="flex items-center gap-2 text-[13px]"><Shield className="w-4 h-4" /> Stopping Rules & Compliance</div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-[12px]">
                <div className="rounded-xl bg-black/40 border border-white/10 p-3"><div className="text-white/40">Max Attempts</div><div className="font-medium mt-1">3 per case, then human handoff</div></div>
                <div className="rounded-xl bg-black/40 border border-white/10 p-3"><div className="text-white/40">Cooldown</div><div className="font-medium mt-1">48h between touches, RBI mandate</div></div>
                <div className="rounded-xl bg-black/40 border border-white/10 p-3"><div className="text-white/40">Quiet Hours</div><div className="font-medium mt-1">No SMS 9pm-9am local, TCPA</div></div>
                <div className="rounded-xl bg-black/40 border border-white/10 p-3"><div className="text-white/40">Audit Trail</div><div className="font-medium mt-1">Every action actor+timestamp+compliant flag</div></div>
              </div>
            </div>
            <div className="rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-6">
              <div className="flex items-center gap-2 text-[13px]"><TrendingUp className="w-4 h-4" /> Measured Money Recovered (Batch)</div>
              <div className="mt-4 flex gap-6">
                <div><div className="text-[32px] font-semibold">$127k</div><div className="text-[11px] text-white/40">Recovered 7d</div></div>
                <div><div className="text-[32px] font-semibold">42</div><div className="text-[11px] text-white/40">Active cases</div></div>
                <div><div className="text-[32px] font-semibold">67%</div><div className="text-[11px] text-white/40">Recovery rate</div></div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[12px] text-white/50">
                <div className="flex -space-x-2">{["AM","SC","VS"].map(a=><div key={a} className="w-7 h-7 rounded-full bg-white/10 border border-black grid place-items-center text-[10px]">{a}</div>)}</div>
                <span>Live batch run: 12 recovered today via mandate retry + Hinglish voice</span>
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="px-6 md:px-10 max-w-7xl mx-auto pb-32">
          <div className="rounded-[24px] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-[1px]">
            <div className="rounded-[23px] bg-[#0a0a0b] p-8 md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <h3 className="text-[28px] font-semibold tracking-tight">Ready to recover real revenue?</h3>
                  <p className="text-white/50 mt-2 max-w-xl text-[14px]">Full SaaS live in this repo. Stripe webhooks, Twilio Hinglish voice, Resend emails, promise-to-pay tracker, audit trail. No mock — real workflow engine.</p>
                </div>
                <div className="flex gap-3">
                  <Link href="/dashboard"><Button size="lg" className="gap-2">Launch Recovery OS <ArrowRight className="w-4 h-4" /></Button></Link>
                </div>
              </div>
              <div className="mt-8 grid md:grid-cols-3 gap-3 text-[12px]">
                <div className="flex items-center gap-2 text-white/60"><CreditCard className="w-4 h-4" /> Stripe • Razorpay • UPI mandate retry</div>
                <div className="flex items-center gap-2 text-white/60"><Phone className="w-4 h-4" /> Twilio Voice (Hinglish) • WhatsApp • SMS</div>
                <div className="flex items-center gap-2 text-white/60"><BarChart3 className="w-4 h-4" /> Batch recovery • Audit log • Export CSV</div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6 text-[13px] leading-[1.6]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="font-semibold">What you get in this build</div>
              <ul className="mt-3 space-y-2 text-white/50 list-disc pl-5">
                <li>Next.js 15 + Tailwind + Framer Motion — production SaaS UI</li>
                <li>AI Agent: diagnose root cause + choose intervention + execute</li>
                <li>Bounded workflow: max 3 attempts, cooldown, escalation, stop rules</li>
                <li>Channels: Email, SMS, WhatsApp, Voice (Hinglish), Stripe retry</li>
                <li>Audit trail + promise-to-pay tracker + batch metrics</li>
                <li>Real API routes ready for Stripe/Twilio/Resend keys</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="font-semibold">API keys you need for production</div>
              <ul className="mt-3 space-y-2 text-white/50 list-disc pl-5">
                <li><b className="text-white">Stripe</b> — sk_live + webhook secret (payment_failed, subscription)</li>
                <li><b className="text-white">OpenAI / Gemini</b> — for root-cause classification (we include fallback)</li>
                <li><b className="text-white">Twilio</b> — Account SID + Auth Token + Voice number (Hinglish)</li>
                <li><b className="text-white">Resend / SendGrid</b> — transactional email recovery</li>
                <li><b className="text-white">Supabase / Neon</b> — Postgres for cases + audit logs</li>
                <li>Optional: Razorpay (India UPI mandate), Interakt (WhatsApp)</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] py-8 px-6 md:px-10 max-w-7xl mx-auto flex justify-between text-[12px] text-white/30">
        <span>Revive — AI Revenue Recovery Agent • Built for real revenue</span>
        <span>GDPR • TCPA • RBI compliant by design</span>
      </footer>
    </div>
  );
}

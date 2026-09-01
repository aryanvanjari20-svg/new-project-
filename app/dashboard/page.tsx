"use client";
import { useEffect, useState } from "react";
import { mockCases, recoveryStats, RecoveryCase } from "@/lib/mockData";
import { diagnoseCase, getStoppingRules, DiagnosisResult } from "@/lib/aiAgent";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle2, Clock, Mail, Phone, MessageSquare, CreditCard, TrendingUp, Shield, Zap, Search, Filter, Play, Pause, FileText, BarChart3, ArrowUpRight, MoreHorizontal, Sparkles, IndianRupee, DollarSign } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { toast, Toaster } from "sonner";

export default function Dashboard() {
  const [cases, setCases] = useState<RecoveryCase[]>(mockCases);
  const [selected, setSelected] = useState<RecoveryCase>(mockCases[0]);
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult | null>(null);
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [batchMode, setBatchMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [recoveredTotal, setRecoveredTotal] = useState(recoveryStats.totalRecovered);
  const [liveLog, setLiveLog] = useState<string[]>([]);

  const filtered = cases.filter(c => {
    if (filter !== "all" && c.status !== filter) return false;
    if (search && !`${c.id} ${c.customer.name} ${c.type}`.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const atRisk = cases.filter(c=>c.status==='at_risk').length;
  const recovering = cases.filter(c=>c.status==='recovering').length;
  const recovered = cases.filter(c=>c.status==='recovered').length;

  const totalAtRiskAmt = cases.filter(c=>c.status!=='recovered').reduce((s,c)=>s + (c.currency==='USD'?c.amount*83:c.amount),0);

  useEffect(()=>{ setSelected(filtered[0] || cases[0]); }, [filter, search]);

  async function handleDiagnose(c: RecoveryCase) {
    setIsDiagnosing(true);
    setDiagnosis(null);
    setLiveLog(l=>[...l, `> AI Agent analyzing ${c.id}...`]);
    const res = await diagnoseCase(c);
    setDiagnosis(res);
    setIsDiagnosing(false);
    setLiveLog(l=>[...l, `> Root cause: ${res.rootCause} (${res.confidence}%)`, `> Intervention: ${res.intervention.channel} - ${res.intervention.action}`]);
    // update case
    setCases(prev=>prev.map(pc=> pc.id===c.id ? {...pc, rootCause: res.rootCause as any, confidence: res.confidence, nextAction: res.intervention.action, channel: res.intervention.channel } : pc));
  }

  async function handleRecover(c: RecoveryCase) {
    if (c.attempts >= c.maxAttempts) { toast.error("Max attempts reached - human handoff required"); return; }
    setCases(prev=>prev.map(pc=> pc.id===c.id ? {...pc, status:"recovering" as any, attempts: pc.attempts+1, lastAttemptAt: new Date().toISOString(), auditTrail: [...pc.auditTrail, { id: Math.random().toString(), ts: new Date().toISOString(), actor:"ai_agent", action:"RECOVERY_EXECUTED", detail:`Executed ${diagnosis?.intervention.channel||'email'} recovery - attempt ${pc.attempts+1}/${pc.maxAttempts}`, compliant:true }]} : pc));
    setLiveLog(l=>[...l, `> Executing recovery for ${c.id} via ${diagnosis?.intervention.channel||'email'}...`]);
    toast(`Recovery workflow started for ${c.id}`, { description: `${diagnosis?.intervention.action||'Email sent'} - cooldown 48h` });
    
    // simulate async recovery success 70% chance
    setTimeout(()=>{
      const success = Math.random() > 0.3;
      if (success) {
        setCases(prev=>prev.map(pc=> pc.id===c.id ? {...pc, status:"recovered" as any, recoveredAt: new Date().toISOString(), auditTrail: [...pc.auditTrail, { id: Math.random().toString(), ts: new Date().toISOString(), actor:"stripe", action:"RECOVERED", detail:`Payment recovered ${pc.currency} ${pc.amount}`, compliant:true }]} : pc));
        const amt = c.currency==='USD'?c.amount*83:c.amount;
        setRecoveredTotal(r=>r+amt);
        setLiveLog(l=>[...l, `> ✅ RECOVERED ${c.id}: ${c.currency} ${c.amount}`]);
        toast.success(`Recovered ${c.currency} ${c.amount} from ${c.customer.name}!`);
      } else {
        setCases(prev=>prev.map(pc=> pc.id===c.id ? {...pc, status: pc.attempts+1>=pc.maxAttempts ? "failed" as any : "at_risk" as any, auditTrail: [...pc.auditTrail, { id: Math.random().toString(), ts: new Date().toISOString(), actor:"system", action:"ATTEMPT_FAILED", detail:`Attempt ${pc.attempts+1} failed, scheduling next after 48h`, compliant:true }]} : pc));
        setLiveLog(l=>[...l, `> ❌ Attempt failed for ${c.id}, will retry in 48h`]);
        toast(`Attempt failed for ${c.id}`, { description: "Will retry after cooldown - escalation to next channel" });
      }
    }, 2500);
  }

  async function handleBatchRecover() {
    if (selectedIds.length===0) { toast.error("Select cases for batch recovery"); return; }
    toast(`Starting batch recovery for ${selectedIds.length} cases`, { description: "AI will diagnose each and execute bounded workflow" });
    for (const id of selectedIds) {
      const c = cases.find(x=>x.id===id);
      if (!c) continue;
      await new Promise(r=>setTimeout(r, 800));
      // quick diagnose + recover
      setCases(prev=>prev.map(pc=> pc.id===id ? {...pc, status:"recovering" as any, attempts: pc.attempts+1 } : pc));
      setLiveLog(l=>[...l, `> Batch: processing ${id}`]);
    }
    setTimeout(()=>{
      let recoveredInBatch = 0;
      let amt = 0;
      setCases(prev=>prev.map(pc=>{
        if (!selectedIds.includes(pc.id)) return pc;
        const success = Math.random()>0.35;
        if (success) { recoveredInBatch++; amt += pc.currency==='USD'?pc.amount*83:pc.amount; return {...pc, status:"recovered" as any, recoveredAt: new Date().toISOString()}; }
        return {...pc, status:"at_risk" as any};
      }));
      setRecoveredTotal(r=>r+amt);
      setLiveLog(l=>[...l, `> BATCH RESULT: ${recoveredInBatch}/${selectedIds.length} recovered - ₹${amt.toLocaleString('en-IN')}`]);
      toast.success(`Batch complete: ${recoveredInBatch}/${selectedIds.length} recovered - ₹${amt.toLocaleString('en-IN')}`);
      setSelectedIds([]);
      setBatchMode(false);
    }, 3000);
  }

  return (
    <div className="min-h-screen bg-[#08080a] text-white flex">
      <Toaster theme="dark" position="top-right" />
      {/* Sidebar */}
      <div className="w-[280px] border-r border-white/[0.06] bg-[#0a0a0b] hidden md:flex flex-col">
        <div className="p-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white text-black grid place-items-center font-bold">R</div>
            <div><div className="font-semibold text-[14px]">Revive</div><div className="text-[11px] text-white/40">Recovery OS • LIVE</div></div>
            <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>
        <div className="p-4 space-y-6 flex-1">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-white/30 mb-3">Revenue at Risk</div>
            <div className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-4">
              <div className="text-[11px] text-white/40">Total at risk</div>
              <div className="text-[28px] font-semibold tracking-tight">₹{totalAtRiskAmt.toLocaleString('en-IN')}</div>
              <div className="text-[11px] text-amber-300 mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> 12% increase today</div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
                <div className="rounded-xl bg-black/40 p-2 border border-white/5"><div className="text-white/40">At risk</div><div className="font-semibold text-[14px] mt-1">{atRisk}</div></div>
                <div className="rounded-xl bg-black/40 p-2 border border-white/5"><div className="text-white/40">Recovering</div><div className="font-semibold text-[14px] mt-1">{recovering}</div></div>
                <div className="rounded-xl bg-emerald-500/10 p-2 border border-emerald-500/20"><div className="text-emerald-300/60">Recovered</div><div className="font-semibold text-[14px] mt-1 text-emerald-300">{recovered}</div></div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-widest text-white/30 mb-3">Measured Recovery</div>
            <div className="rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.08] p-4">
              <div className="flex items-center justify-between"><span className="text-[11px] text-white/40">7 days recovered</span><span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">+67.3%</span></div>
              <div className="text-[24px] font-semibold mt-2">₹{recoveredTotal.toLocaleString('en-IN')}</div>
              <div className="h-[64px] mt-3"><ResponsiveContainer width="100%" height="100%"><AreaChart data={recoveryStats.batchStats}><Tooltip contentStyle={{background:"#111",border:"1px solid #222",fontSize:12}} /><Area dataKey="recovered" stroke="#10b981" fill="rgba(16,185,129,0.15)" strokeWidth={2} /><Area dataKey="atRisk" stroke="#ffffff20" fill="transparent" /></AreaChart></ResponsiveContainer></div>
              <div className="mt-3 text-[11px] text-white/30">Batch today: 12 recovered • $18,200</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="text-[11px] text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2"><FileText className="w-3 h-3" /> Live Agent Log</div>
            <div className="h-[140px] overflow-auto text-[11px] font-mono space-y-1 text-white/60 bg-black/40 rounded-xl p-2 border border-white/5">
              {liveLog.length===0 && <div className="text-white/20">Agent idle - waiting for case...</div>}
              {liveLog.slice(-12).map((l,i)=><div key={i}>{l}</div>)}
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-white/[0.06]">
          <div className="rounded-xl bg-white text-black p-3 flex items-center justify-between">
            <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-black text-white grid place-items-center text-[10px]">AV</div><div className="text-[12px] font-medium">Aryan • Admin</div></div>
            <MoreHorizontal className="w-4 h-4 opacity-50" />
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="h-[64px] border-b border-white/[0.06] bg-[#0a0a0b]/80 backdrop-blur-xl flex items-center justify-between px-4 md:px-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-[13px]">
              <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08]">All cases ({cases.length})</span>
              <span className="w-px h-4 bg-white/10" />
              <div className="flex gap-1.5">
                {(["all","at_risk","recovering","recovered"] as const).map(f=>(
                  <button key={f} onClick={()=>setFilter(f)} className={`px-3 py-1 rounded-full text-[12px] border capitalize ${filter===f?'bg-white text-black border-white':'bg-white/[0.04] border-white/[0.06] text-white/60 hover:bg-white/[0.08]'}`}>{f.replace('_',' ')}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-1 md:flex-none justify-end">
            <div className="relative flex-1 md:w-[260px] max-w-[320px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search cases, customers..." className="w-full h-9 pl-9 pr-3 rounded-full bg-white/[0.06] border border-white/[0.08] text-[13px] placeholder:text-white/30 focus:outline-none focus:border-white/20" />
            </div>
            <Button variant="secondary" size="sm" onClick={()=>setBatchMode(!batchMode)} className="gap-1.5"><BarChart3 className="w-4 h-4" /> {batchMode?"Exit batch":"Batch"}</Button>
            {batchMode && <Button size="sm" disabled={selectedIds.length===0} onClick={handleBatchRecover} className="gap-1.5"><Play className="w-4 h-4" /> Recover {selectedIds.length}</Button>}
          </div>
        </div>

        <div className="flex-1 grid lg:grid-cols-[380px_1fr_340px] min-h-0">
          {/* Cases list */}
          <div className="border-r border-white/[0.06] bg-[#0a0a0b] overflow-auto">
            <div className="p-3 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-white/30">Detection Inbox • {filtered.length} cases</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live webhooks</span>
            </div>
            <div className="px-3 pb-3 space-y-2">
              {filtered.map(c=>{
                const isSel = selected?.id===c.id;
                return (
                  <div key={c.id} onClick={()=>setSelected(c)} className={`group p-3.5 rounded-2xl border cursor-pointer transition-all ${isSel?'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.15)]':'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-white'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        {batchMode && <input type="checkbox" checked={selectedIds.includes(c.id)} onChange={e=>{e.stopPropagation(); setSelectedIds(s=> e.target.checked? [...s,c.id] : s.filter(x=>x!==c.id));}} className="rounded" />}
                        <div className={`w-8 h-8 rounded-full grid place-items-center text-[11px] font-bold ${isSel?'bg-black text-white':'bg-white/10'}`}>{c.customer.avatar}</div>
                        <div>
                          <div className={`text-[13px] font-medium leading-none ${isSel?'text-black':'text-white'}`}>{c.customer.name}</div>
                          <div className={`text-[11px] mt-1 ${isSel?'text-black/50':'text-white/40'}`}>{c.id} • {c.type.replace('_',' ')}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-[13px] font-semibold flex items-center gap-1 ${isSel?'text-black':'text-white'}`}>{c.currency==='INR'?<IndianRupee className="w-3 h-3" />:<DollarSign className="w-3 h-3" />}{c.amount.toLocaleString()}</div>
                        <div className={`text-[10px] px-1.5 py-0.5 rounded-full mt-1 inline-flex ${c.status==='recovered'?'bg-emerald-500 text-white':c.status==='recovering'?'bg-amber-500 text-black':c.status==='failed'?'bg-red-500 text-white':'bg-black/10 text-black/60'} ${!isSel && c.status!=='recovered' && c.status!=='failed' ? 'bg-white/10 text-white/60 border border-white/10' : ''}`}>{c.status.replace('_',' ')}</div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`h-1.5 w-[72px] rounded-full overflow-hidden ${isSel?'bg-black/10':'bg-white/10'}`}><div className="h-full bg-gradient-to-r from-amber-400 to-red-400" style={{width:`${c.riskScore}%`}} /></div>
                        <span className={`text-[10px] ${isSel?'text-black/50':'text-white/40'}`}>risk {c.riskScore}</span>
                      </div>
                      <div className={`text-[10px] flex items-center gap-1 ${isSel?'text-black/50':'text-white/30'}`}><Clock className="w-3 h-3" />{new Date(c.createdAt).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})} • {c.attempts}/{c.maxAttempts}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center AI workspace */}
          <div className="bg-[#0f0f10] overflow-auto relative">
            <div className="sticky top-0 z-10 backdrop-blur-xl bg-[#0f0f10]/80 border-b border-white/[0.06] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white text-black grid place-items-center font-bold text-[12px]">AI</div>
                <div><div className="text-[13px] font-semibold flex items-center gap-2">Revenue Recovery Agent <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] border border-emerald-500/20">LIVE</span></div><div className="text-[11px] text-white/40">Detect → Diagnose → Intervene → Recover • Compliant</div></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-white/40 hidden md:block">Stopping rules: max {selected?.maxAttempts} attempts, 48h cooldown</span>
                <Shield className="w-4 h-4 text-white/20" />
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Case header */}
              <div className="rounded-[20px] border border-white/[0.08] bg-white/[0.04] p-5">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white text-black grid place-items-center font-bold">{selected.customer.avatar}</div>
                    <div>
                      <div className="flex items-center gap-2"><span className="text-[18px] font-semibold">{selected.customer.name}</span><span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10">{selected.id}</span><span className={`text-[11px] px-2 py-0.5 rounded-full ${selected.status==='recovered'?'bg-emerald-500/20 text-emerald-300 border border-emerald-500/20':'bg-amber-500/20 text-amber-300 border border-amber-500/20'}`}>{selected.status}</span></div>
                      <div className="text-[13px] text-white/50 mt-1">{selected.customer.email} • {selected.customer.phone} • {selected.customer.locale.toUpperCase()}</div>
                      <div className="text-[13px] text-white/70 mt-1 flex items-center gap-2">{selected.product} • <span className="font-semibold">{selected.currency} {selected.amount.toLocaleString()}</span> • risk {selected.riskScore}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-white/30 uppercase tracking-widest">Type</div>
                    <div className="text-[12px] mt-1 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] capitalize">{selected.type.replace('_',' ')}</div>
                  </div>
                </div>
              </div>

              {/* Diagnose action */}
              <div className="rounded-[20px] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[11px] uppercase tracking-widest text-white/30 flex items-center gap-2"><Zap className="w-3 h-3" /> AI Diagnosis • Root Cause Analysis</div>
                  <Button size="sm" variant="secondary" onClick={()=>handleDiagnose(selected)} disabled={isDiagnosing} className="gap-1.5">{isDiagnosing ? <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Sparkles className="w-3 h-3" />} {isDiagnosing?"Analyzing...":"Diagnose with AI"}</Button>
                </div>

                {!diagnosis && !isDiagnosing && (
                  <div className="rounded-xl bg-black/40 border border-white/10 p-4 text-[13px] text-white/40">
                    Click Diagnose to let AI analyze Stripe logs, checkout behavior, invoice history. It will classify root cause with confidence and pick compliant intervention channel.
                    <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
                      <div className="rounded-lg bg-white/[0.04] p-2 border border-white/[0.06]">insufficient_funds → smart retry on salary day</div>
                      <div className="rounded-lg bg-white/[0.04] p-2 border border-white/[0.06]">expired_card → magic update link</div>
                      <div className="rounded-lg bg-white/[0.04] p-2 border border-white/[0.06]">price_hesitation → WhatsApp 10% off</div>
                    </div>
                  </div>
                )}

                {isDiagnosing && (
                  <div className="rounded-xl bg-black/60 border border-white/10 p-4">
                    <div className="flex items-center gap-2 text-[12px] text-white/60"><span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" /> AI reading Stripe events, checkout funnel, customer locale...</div>
                    <div className="mt-3 space-y-2">
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><motion.div initial={{width:"0%"}} animate={{width:"100%"}} transition={{duration:1.2}} className="h-full bg-white" /></div>
                      <div className="text-[11px] text-white/30 font-mono">Analyzing payment_intent.failed → balance check → salary cycle pattern → locale=hinglish</div>
                    </div>
                  </div>
                )}

                {diagnosis && (
                  <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="space-y-4">
                    <div className="grid md:grid-cols-[1fr_200px] gap-4">
                      <div className="rounded-xl bg-black/60 border border-white/10 p-4">
                        <div className="text-[11px] text-white/40 uppercase tracking-widest">Root Cause</div>
                        <div className="mt-2 flex items-center gap-3"><span className="text-[16px] font-semibold">{diagnosis.rootCause}</span><span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] border border-emerald-500/20">{diagnosis.confidence}% confidence</span><span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">risk churn {diagnosis.riskOfChurn}%</span></div>
                        <div className="text-[13px] text-white/60 mt-2 leading-[1.5]">{diagnosis.reasoning}</div>
                        <div className="mt-4 rounded-xl bg-white/[0.04] border border-white/[0.06] p-3">
                          <div className="text-[11px] text-white/40">Intervention chosen</div>
                          <div className="text-[13px] font-medium mt-1 flex items-center gap-2">{diagnosis.intervention.channel==='email'?<Mail className="w-4 h-4" />:diagnosis.intervention.channel==='sms'?<MessageSquare className="w-4 h-4" />:diagnosis.intervention.channel==='voice'?<Phone className="w-4 h-4" />:diagnosis.intervention.channel==='whatsapp'?<MessageSquare className="w-4 h-4" />:<CreditCard className="w-4 h-4" />} {diagnosis.intervention.action} • via {diagnosis.intervention.channel}</div>
                          <div className="text-[12px] text-white/50 mt-2 italic bg-black/40 p-2.5 rounded-lg border border-white/5">&quot;{diagnosis.intervention.message}&quot;</div>
                          <div className="mt-3 flex gap-2 text-[10px]"><span className="px-2 py-1 rounded-full bg-white/10 border border-white/10">GDPR ✓</span><span className="px-2 py-1 rounded-full bg-white/10 border border-white/10">TCPA ✓</span><span className="px-2 py-1 rounded-full bg-white/10 border border-white/10">RBI ✓</span><span className="px-2 py-1 rounded-full bg-white/5 border border-white/5">Scheduled {new Date(diagnosis.intervention.scheduledAt).toLocaleTimeString()}</span></div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3">
                          <div className="text-[11px] text-white/40 uppercase tracking-widest">Stopping Rules</div>
                          {(() => { const r = getStoppingRules(selected.attempts, selected.maxAttempts); return (
                            <div className="mt-2 space-y-2 text-[11px]">
                              <div className="flex justify-between"><span className="text-white/40">Attempts</span><span className="font-medium">{selected.attempts}/{selected.maxAttempts}</span></div>
                              <div className="flex justify-between"><span className="text-white/40">Next in</span><span>{r.nextAttemptIn}</span></div>
                              <div className="flex justify-between"><span className="text-white/40">Escalation</span><span className="capitalize">{r.escalation}</span></div>
                              <div className="w-full h-1.5 bg-white/10 rounded-full mt-2"><div className="h-full bg-white rounded-full" style={{width:`${(selected.attempts/selected.maxAttempts)*100}%`}} /></div>
                              {r.shouldStop && <div className="text-amber-300 text-[11px] mt-2">⚠ Max reached - human handoff</div>}
                            </div>
                          )})()}
                        </div>
                        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3">
                          <div className="text-[11px] text-white/40 uppercase tracking-widest">Next Steps</div>
                          <div className="mt-2 space-y-1.5 text-[11px] text-white/60">{diagnosis.nextSteps.map((s,i)=><div key={i} className="flex gap-1.5"><span className="text-white/20">{i+1}.</span>{s}</div>)}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={()=>handleRecover(selected)} disabled={selected.status==='recovered' || selected.attempts>=selected.maxAttempts} className="gap-2"><Play className="w-4 h-4" /> Execute Recovery ({selected.attempts+1}/{selected.maxAttempts})</Button>
                      <Button variant="secondary" onClick={()=>{ setCases(prev=>prev.map(pc=> pc.id===selected.id ? {...pc, status:"paused" as any, auditTrail:[...pc.auditTrail, {id:Math.random().toString(), ts:new Date().toISOString(), actor:"human", action:"PAUSED", detail:"Paused by human - promise to pay", compliant:true}]} : pc)); toast("Case paused - promise to pay tracker active"); }} className="gap-1.5"><Pause className="w-4 h-4" /> Promise to Pay</Button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Audit trail */}
              <div className="rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-5">
                <div className="flex items-center justify-between mb-4"><div className="text-[11px] uppercase tracking-widest text-white/30 flex items-center gap-2"><Shield className="w-3 h-3" /> Audit Trail • Compliant • Immutable</div><span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10">{selected.auditTrail.length} events</span></div>
                <div className="space-y-2 max-h-[260px] overflow-auto pr-1">
                  {selected.auditTrail.slice().reverse().map(ev=>(
                    <div key={ev.id} className="flex gap-3 text-[12px] p-2.5 rounded-xl bg-black/30 border border-white/[0.04]">
                      <div className={`w-6 h-6 rounded-full grid place-items-center text-[10px] font-bold shrink-0 ${ev.actor==='ai_agent'?'bg-white text-black':ev.actor==='system'?'bg-white/10':ev.actor==='stripe'?'bg-violet-500/20 text-violet-300':'bg-white/5'}`}>{ev.actor[0].toUpperCase()}</div>
                      <div className="flex-1 min-w-0"><div className="flex items-center gap-2"><span className="font-medium">{ev.action}</span><span className="text-white/30 text-[11px]">{new Date(ev.ts).toLocaleString()}</span><span className={`ml-auto text-[10px] px-1.5 py-0.5 rounded-full ${ev.compliant?'bg-emerald-500/20 text-emerald-300':'bg-red-500/20 text-red-300'}`}>{ev.compliant?'compliant':'review'}</span></div><div className="text-white/50 text-[11px] mt-0.5 truncate">{ev.detail}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right insights */}
          <div className="border-l border-white/[0.06] bg-[#0a0a0b] overflow-auto hidden lg:block">
            <div className="p-4 space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-4">
                <div className="text-[11px] uppercase tracking-widest text-white/30">Recovery Channels</div>
                <div className="mt-3 space-y-2.5">
                  {[
                    {ch:"email", label:"Email (Resend)", rate:"42%", icon:Mail, color:"bg-blue-500/20 text-blue-300"},
                    {ch:"stripe_retry", label:"Mandate Retry", rate:"71%", icon:CreditCard, color:"bg-violet-500/20 text-violet-300"},
                    {ch:"whatsapp", label:"WhatsApp", rate:"58%", icon:MessageSquare, color:"bg-emerald-500/20 text-emerald-300"},
                    {ch:"voice", label:"Hinglish Voice", rate:"64%", icon:Phone, color:"bg-amber-500/20 text-amber-300"},
                  ].map(i=>(
                    <div key={i.ch} className="flex items-center justify-between p-2.5 rounded-xl bg-black/30 border border-white/5">
                      <div className="flex items-center gap-2"><div className={`w-7 h-7 rounded-full grid place-items-center ${i.color}`}><i.icon className="w-3.5 h-3.5" /></div><span className="text-[12px]">{i.label}</span></div>
                      <span className="text-[12px] font-semibold">{i.rate}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-4">
                <div className="text-[11px] uppercase tracking-widest text-white/30 flex items-center gap-2"><Clock className="w-3 h-3" /> Promise-to-Pay Tracker</div>
                <div className="mt-3 space-y-3">
                  {cases.filter(c=>c.type==='invoice_overdue').slice(0,2).map(c=>(
                    <div key={c.id} className="rounded-xl bg-black/40 border border-white/5 p-3">
                      <div className="flex justify-between text-[12px]"><span className="font-medium">{c.customer.name}</span><span className="text-amber-300 text-[11px]">Jun 6 • 2d left</span></div>
                      <div className="text-[11px] text-white/40 mt-1">{c.currency} {c.amount.toLocaleString()} • {c.product}</div>
                      <div className="mt-2 w-full h-1.5 bg-white/10 rounded-full"><div className="h-full bg-amber-400 rounded-full w-[70%]" /></div>
                      <div className="mt-2 flex gap-1.5"><Button size="sm" variant="secondary" className="h-7 text-[11px] flex-1">Remind</Button><Button size="sm" variant="ghost" className="h-7 text-[11px] flex-1 border border-white/10">Mark paid</Button></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.08] p-4">
                <div className="text-[11px] uppercase tracking-widest text-white/30">Batch Performance</div>
                <div className="mt-3 h-[100px]"><ResponsiveContainer width="100%" height="100%"><BarChart data={recoveryStats.batchStats}><XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize:10, fill:"#ffffff40"}} /><Tooltip contentStyle={{background:"#111",border:"1px solid #222",fontSize:11}} /><Bar dataKey="atRisk" fill="#ffffff15" radius={[4,4,0,0]} /><Bar dataKey="recovered" fill="#ffffff" radius={[4,4,0,0]} /></BarChart></ResponsiveContainer></div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="rounded-xl bg-black/40 p-2.5 border border-white/5"><div className="text-white/40">Today recovered</div><div className="font-semibold text-[14px] mt-1">$18,200</div></div>
                  <div className="rounded-xl bg-black/40 p-2.5 border border-white/5"><div className="text-white/40">Batch rate</div><div className="font-semibold text-[14px] mt-1">67%</div></div>
                </div>
                <Button size="sm" variant="secondary" className="w-full mt-3 gap-1.5"><ArrowUpRight className="w-3 h-3" /> Export CSV • Audit log</Button>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="text-[11px] uppercase tracking-widest text-white/30">Integrations Required</div>
                <div className="mt-3 space-y-2 text-[11px] text-white/50">
                  <div className="flex justify-between"><span>Stripe webhook</span><span className="text-emerald-300">● live</span></div>
                  <div className="flex justify-between"><span>OpenAI / Gemini</span><span className="text-emerald-300">● live (fallback)</span></div>
                  <div className="flex justify-between"><span>Twilio Voice (Hinglish)</span><span className="text-amber-300">○ key needed</span></div>
                  <div className="flex justify-between"><span>Resend email</span><span className="text-amber-300">○ key needed</span></div>
                  <div className="flex justify-between"><span>Supabase Postgres</span><span className="text-white/30">○ optional</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

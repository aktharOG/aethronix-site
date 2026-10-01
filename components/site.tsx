'use client';
import { useState } from 'react';
import { ArrowUpRight, Check, ChevronRight, Code2, Cpu, Globe2, Layers3, Menu, ShieldCheck, Sparkles, X, Zap } from 'lucide-react';

const services = [
 {icon:Code2,title:'Product Engineering',text:'Production-grade web and mobile products engineered for speed, reliability and scale.',items:['Next.js & React','Flutter & native mobile','API-first architecture']},
 {icon:Cpu,title:'AI & Intelligent Systems',text:'Practical AI features that automate workflows, surface insights and improve customer experiences.',items:['AI integrations','Computer vision','Workflow automation']},
 {icon:Globe2,title:'Cloud & Platforms',text:'Secure, observable infrastructure designed for predictable performance and efficient operations.',items:['Cloud architecture','PostgreSQL & APIs','CI/CD & monitoring']},
 {icon:Layers3,title:'Fintech & Business Systems',text:'Reliable software for payments, commerce, operations and data-heavy business workflows.',items:['Payments & integrations','Admin platforms','Analytics & dashboards']}
];
const work = [
 {name:'MFA SPORTS',tag:'E-commerce · Mobile',desc:'A modern sports-commerce experience across mobile and web.',metric:'Fast checkout'},
 {name:'Milliondots Edu',tag:'Fintech · Education',desc:'A digital learning platform for stock-market education and communities.',metric:'Scalable platform'},
 {name:'Aethrionix Systems',tag:'Cloud · SaaS',desc:'Internal systems and reusable engineering foundations for growing teams.',metric:'API-first'}
];

export default function Site(){
 const [open,setOpen]=useState(false); const [sent,setSent]=useState(false);
 return <main>
  <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#071014]/80 backdrop-blur-xl">
   <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
    <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight"><span className="grid h-8 w-8 place-items-center rounded-lg border border-[#44e6b2]/30 bg-[#44e6b2]/10 text-[#44e6b2]">A</span><span>AETHRIONIX<span className="text-[#44e6b2]">.</span></span></a>
    <nav className="hidden gap-8 text-sm text-slate-300 md:flex">{['Services','Work','Approach','Contact'].map(x=><a key={x} className="transition hover:text-white" href={'#'+x.toLowerCase()}>{x}</a>)}</nav>
    <a href="#contact" className="hidden rounded-full bg-[#44e6b2] px-4 py-2 text-sm font-bold text-[#06110f] md:block">Start a project <ArrowUpRight className="ml-1 inline h-4 w-4"/></a>
    <button onClick={()=>setOpen(!open)} className="rounded-lg border border-white/10 p-2 md:hidden" aria-label="Menu">{open?<X/>:<Menu/>}</button>
   </div>
   {open&&<nav className="border-t border-white/5 bg-[#071014] px-5 py-5 md:hidden">{['Services','Work','Approach','Contact'].map(x=><a onClick={()=>setOpen(false)} key={x} className="block py-3 text-slate-200" href={'#'+x.toLowerCase()}>{x}</a>)}</nav>}
  </header>

  <section id="top" className="grid-bg relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-36">
   <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#44e6b2]/8 blur-[120px]"/>
   <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-4xl reveal">
    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#44e6b2]/20 bg-[#44e6b2]/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.18em] text-[#8df5d1]"><Sparkles className="h-3.5 w-3.5"/> Digital engineering studio</div>
    <h1 className="text-5xl font-bold leading-[.98] tracking-[-.04em] sm:text-7xl lg:text-[92px]">We engineer <span className="text-gradient">digital systems</span> built to last.</h1>
    <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">Aethrionix turns ambitious ideas into fast, secure and scalable software — from mobile products to cloud platforms and intelligent business systems.</p>
    <div className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="rounded-full bg-white px-6 py-3 font-semibold text-[#071014]">Build with us <ArrowUpRight className="ml-1 inline h-4 w-4"/></a><a href="#work" className="rounded-full border border-white/10 px-6 py-3 font-semibold text-white hover:bg-white/5">Explore our work</a></div>
   </div>
   <div className="mt-20 grid gap-3 sm:grid-cols-3"><Stat n="3+" t="Years engineering"/><Stat n="24/7" t="Systems mindset"/><Stat n="∞" t="Room to scale"/></div></div>
  </section>

  <section id="services" className="border-y border-white/5 bg-[#091419] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Section eyebrow="Capabilities" title="From first architecture to production." text="A focused engineering stack for teams that care about performance, maintainability and measurable outcomes."/><div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-2">{services.map(S=><article key={S.title} className="bg-[#0a151a] p-7 lg:p-9"><S.icon className="h-7 w-7 text-[#44e6b2]"/><h3 className="mt-6 text-xl font-semibold">{S.title}</h3><p className="mt-3 leading-7 text-slate-400">{S.text}</p><ul className="mt-6 space-y-2 text-sm text-slate-300">{S.items.map(i=><li key={i}><Check className="mr-2 inline h-4 w-4 text-[#44e6b2]"/>{i}</li>)}</ul></article>)}</div></div></section>

  <section id="work" className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Section eyebrow="Selected work" title="Software with a job to do." text="A sample of product and platform work across commerce, education and business systems."/><div className="mt-14 grid gap-5 lg:grid-cols-3">{work.map((w,i)=><article key={w.name} className="group overflow-hidden rounded-2xl border border-white/8 bg-[#0a151a] p-6"><div className="mb-12 flex items-center justify-between"><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">0{i+1}</span><ArrowUpRight className="h-5 w-5 text-slate-600 transition group-hover:text-[#44e6b2]"/></div><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#44e6b2]">{w.tag}</p><h3 className="mt-3 text-2xl font-semibold">{w.name}</h3><p className="mt-3 min-h-14 leading-7 text-slate-400">{w.desc}</p><div className="mt-8 border-t border-white/8 pt-4 text-sm text-slate-300">{w.metric}</div></article>)}</div></div></section>

  <section id="approach" className="bg-[#091419] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Section eyebrow="Engineering approach" title="Fast where it matters. Solid everywhere." text="We keep the browser and device light, move expensive work to the right layer, and design every system around observability and change."/><div className="mt-14 grid gap-4 md:grid-cols-3"><Pillar icon={Zap} t="Performance" d="Server-rendered UI, lean client bundles, caching and efficient data access by default."/><Pillar icon={ShieldCheck} t="Reliability" d="Typed code, validation, secure APIs, error boundaries and production-minded monitoring."/><Pillar icon={Layers3} t="Scalability" d="Modular architecture that lets products evolve without rewriting their foundation."/></div></div></section>

  <section id="contact" className="py-24"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8"><div><Section eyebrow="Start a project" title="Have a system worth building?" text="Tell us what you are trying to create, improve or scale. We’ll turn the idea into a practical engineering path."/><div className="mt-10 space-y-4 text-sm text-slate-400"><p><span className="text-white">Email</span><br/>hello@aethrionix.com</p><p><span className="text-white">Availability</span><br/>Projects · Product engineering · Consulting</p></div></div>
   <form className="rounded-2xl border border-white/8 bg-[#0a151a] p-6 lg:p-8" onSubmit={async e=>{e.preventDefault(); const form=e.currentTarget; const payload=Object.fromEntries(new FormData(form).entries()); const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); if(res.ok){setSent(true); form.reset();}}}><div className="grid gap-5 sm:grid-cols-2"><Field label="Name" name="name"/><Field label="Email" name="email" type="email"/></div><Field label="Company" name="company"/><label className="mt-5 block text-sm text-slate-300">What are you building?<textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/10 px-4 py-3 outline-none transition focus:border-[#44e6b2]/50" placeholder="Tell us about the product, platform or problem..."/></label><button disabled={sent} className="mt-6 w-full rounded-xl bg-[#44e6b2] px-5 py-3.5 font-bold text-[#06110f] disabled:opacity-70">{sent?'Message received ✓':'Send project enquiry'} </button>{sent&&<p className="mt-3 text-center text-sm text-[#8df5d1]">Thanks — connect this form to your preferred email/CRM endpoint before launch.</p>}</form>
  </div></section>
  <footer className="border-t border-white/5 py-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 text-sm text-slate-500 sm:flex-row lg:px-8"><span>© {new Date().getFullYear()} Aethrionix. All rights reserved.</span><span>Engineered for the next layer.</span></div></footer>
 </main>
}
function Section({eyebrow,title,text}:{eyebrow:string,title:string,text:string}){return <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#44e6b2]">{eyebrow}</p><h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-[-.03em] sm:text-5xl">{title}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">{text}</p></div>}
function Stat({n,t}:{n:string,t:string}){return <div className="rounded-2xl border border-white/6 bg-white/[.025] p-5"><div className="text-3xl font-bold text-white">{n}</div><div className="mt-1 text-sm text-slate-500">{t}</div></div>}
function Pillar({icon:Icon,t,d}:{icon:any,t:string,d:string}){return <div className="rounded-2xl border border-white/6 bg-[#0a151a] p-7"><Icon className="h-6 w-6 text-[#44e6b2]"/><h3 className="mt-5 text-xl font-semibold">{t}</h3><p className="mt-3 leading-7 text-slate-400">{d}</p></div>}
function Field({label,name,type='text'}:{label:string,name:string,type?:string}){return <label className="block text-sm text-slate-300">{label}<input required name={name} type={type} className="mt-2 w-full rounded-xl border border-white/10 bg-black/10 px-4 py-3 outline-none transition focus:border-[#44e6b2]/50" /></label>}

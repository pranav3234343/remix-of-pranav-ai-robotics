import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-arm-gold.jpg";
import orRoom from "@/assets/or-suite-gold.jpg";
import techDetail from "@/assets/precision-tip.jpg";
import aiMission from "@/assets/ai-brain-gold.jpg";
import techArm from "@/assets/tech-arm.jpg";
import patientOutcomes from "@/assets/patient-outcomes.jpg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  Crosshair, ShieldCheck, BrainCircuit, ArrowRight, Activity, Cpu,
  Eye, Gauge, Hand, Layers, Radio, Sparkles, Workflow
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { LogoWatermark } from "@/components/site/LogoWatermark";
import { RoboticArm3D } from "@/components/three/RoboticArm3D";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pranav Mercantile — AI-Powered Surgical Robotics" },
      { name: "description", content: "Pranav Mercantile Private Limited builds AI-powered robotic arms for surgical precision, safety, and the future of healthcare." },
      { property: "og:title", content: "Pranav Mercantile — The Future of Surgical Precision" },
      { property: "og:description", content: "Immersive AI-driven robotic systems engineered for the operating room of tomorrow." },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: IndexPage,
});

function Counter({ to, suffix = "", duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            setV(Math.floor(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <div ref={ref} className="font-display text-5xl md:text-6xl font-semibold tracking-tight">{v.toLocaleString()}{suffix}</div>;
}

function IndexPage() {
  return (
    <SiteLayout>
      {/* 1 · HERO — 3D as background, content over the top */}
      <section className="relative min-h-screen overflow-hidden bg-[#050710] isolate">
        {/* Background imagery layer */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Gold-accented surgical robotic arm" className="absolute inset-0 size-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050710] via-[#050710]/85 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(212,175,55,0.28),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(184,134,42,0.18),transparent_55%)]" />
        </div>

        {/* 3D Arm — interactive background overlay, hidden on small screens for perf */}
        <div className="absolute inset-0 z-10 hidden lg:block pointer-events-none">
          <RoboticArm3D className="absolute inset-y-0 right-0 w-[55%]" />
        </div>

        {/* Content layer */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 min-h-screen flex items-center w-full">
          <div className="max-w-2xl animate-float-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-gold text-xs text-[var(--gold-bright)] tracking-[0.25em] uppercase">
              <span className="size-1.5 rounded-full bg-[var(--gold)] animate-pulse-glow" />
              Pranav Mercantile · Surgical AI
            </div>
            <h1 className="mt-7 text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight text-white leading-[1.02]">
              The Future of <span className="text-gradient-gold">Surgical Precision.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed">
              An immersive operating platform built around an AI-guided robotic arm —
              engineered for sub-millimeter accuracy, total situational awareness, and
              uncompromising patient safety.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="btn-fx bg-gradient-gold text-[#1a1407] font-semibold shadow-gold hover:opacity-95 h-13 px-8">
                <Link to="/technology">Explore the Platform <ArrowRight className="ml-1 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-fx h-13 px-8 glass-gold border-[var(--gold)]/40 text-white hover:bg-[var(--gold)]/15">
                <Link to="/about">Our Mission</Link>
              </Button>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
              {[
                { v: "0.1mm", l: "Tip precision" },
                { v: "7-DOF", l: "Articulation" },
                { v: "<8ms", l: "Loop latency" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gradient-gold font-semibold">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-white/55 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-2">
          Scroll
          <span className="block w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent animate-pulse" />
        </div>
      </section>

      {/* 2 · WHAT WE DO — 50/50 split */}
      <section className="relative py-28 bg-background overflow-hidden">
        <LogoWatermark src={logo} className="right-[-160px] top-1/2 -translate-y-1/2" size={560} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16" data-reveal>
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.25em] text-primary font-medium">What We Do</div>
              <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                Surgeons lead.<br />Our robotics extend their hands.
              </h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground text-lg leading-relaxed">
              We build AI-guided robotic arms that assist surgical teams in real time —
              augmenting human judgement with computer-vision tracking, predictive
              motion planning, and tremor-free instrumentation across cardiac,
              neurological, orthopedic, and minimally-invasive procedures.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="zoom-reveal relative rounded-3xl overflow-hidden shadow-elegant aspect-[5/4]" data-reveal>
              <img src={orRoom} alt="Operating room with surgical robot" className="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-5 text-primary-foreground">
                <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">Live OR Telemetry</div>
                <div className="mt-1 font-display text-xl">Procedure Intelligence Stream</div>
              </div>
            </div>
            <div data-reveal data-reveal-delay="1" className="space-y-6">
              {[
                { icon: Eye, t: "Vision-Guided Targeting", d: "Stereoscopic cameras and depth sensors lock onto anatomy, compensating for breathing and micro-motion." },
                { icon: Hand, t: "Surgeon-in-the-Loop", d: "The surgeon stays in command. The arm filters tremor, scales motion, and predicts intent across millions of micro-decisions per second." },
                { icon: ShieldCheck, t: "Safety Envelopes", d: "Virtual no-go zones are computed from pre-op imaging; the arm physically cannot enter protected tissue regions." },
              ].map((f, i) => (
                <div key={f.t} data-reveal data-reveal-delay={i + 1} className="flex gap-5 p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-0.5">
                  <div className="shrink-0 size-12 rounded-xl bg-gradient-primary grid place-items-center">
                    <f.icon className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{f.t}</h3>
                    <p className="mt-1.5 text-muted-foreground leading-relaxed">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 · THE AI BRAIN — futuristic data-nodes */}
      <section className="relative py-32 overflow-hidden bg-gradient-deep text-primary-foreground">
        <div className="absolute inset-0 opacity-50">
          <img src={aiMission} alt="" className="size-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,oklch(0.68_0.18_235/0.35),transparent_55%)]" />
        </div>
        {/* animated dot grid */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: "radial-gradient(circle, #7dd3fc 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl" data-reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">Our Technology</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              The AI Brain<br />behind every move.
            </h2>
            <p className="mt-6 text-primary-foreground/75 text-lg leading-relaxed">
              A multi-stage neural pipeline fuses pre-operative imaging, live endoscopic
              feeds, force-torque telemetry, and surgeon input into a unified scene
              understanding model — running on-device with sub-8ms inference.
            </p>
          </div>

          <div className="mt-20 grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Data nodes column */}
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { i: BrainCircuit, t: "Scene Understanding", v: "Transformer · 1.2B params", c: "from-sky-500/30 to-blue-700/20" },
                  { i: Eye, t: "Computer Vision", v: "Multi-view stereo · 240 fps", c: "from-indigo-500/30 to-blue-700/20" },
                  { i: Workflow, t: "Motion Planning", v: "RL · 50k trajectory/s", c: "from-cyan-500/30 to-sky-700/20" },
                  { i: Radio, t: "Sensor Fusion", v: "9-stream Kalman array", c: "from-blue-500/30 to-indigo-700/20" },
                ].map((n, i) => (
                  <div
                    key={n.t}
                    data-reveal
                    data-reveal-delay={i + 1}
                    className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${n.c} relative overflow-hidden group`}
                  >
                    <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary-glow/20 blur-3xl group-hover:bg-primary-glow/40 transition" />
                    <div className="relative">
                      <div className="size-11 rounded-xl bg-white/10 grid place-items-center border border-white/15">
                        <n.i className="size-5 text-primary-glow" />
                      </div>
                      <div className="mt-5 font-display text-xl">{n.t}</div>
                      <div className="mt-2 text-xs text-primary-foreground/60 font-mono tracking-wide">{n.v}</div>
                      <div className="mt-5 h-1 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-primary-glow to-white animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Console mockup */}
            <div className="lg:col-span-5" data-reveal data-reveal-delay="2">
              <div className="glass-panel rounded-3xl p-6 h-full">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-primary-glow">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    SURGEON CONSOLE · LIVE
                  </div>
                  <div className="text-primary-foreground/50 font-mono">v4.2 · OR-07</div>
                </div>
                <div className="mt-6 space-y-4 font-mono text-xs text-primary-foreground/75">
                  {[
                    "› tracking.target ............ stable [0.04mm]",
                    "› vision.inference ........... 7.2ms / frame",
                    "› haptics.feedback ........... 1.2N · nominal",
                    "› safety.envelope ............ ACTIVE · 6 zones",
                    "› fusion.confidence .......... 99.81%",
                    "› surgeon.intent ............. assisted-mode",
                  ].map((l, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-primary-glow">{String(i + 1).padStart(2, "0")}</span>
                      <span>{l}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { l: "Inference", v: "7.2ms" },
                    { l: "Uptime", v: "99.99%" },
                    { l: "Telemetry", v: "240Hz" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl bg-white/5 border border-white/10 p-3">
                      <div className="text-[10px] uppercase tracking-wider text-primary-foreground/50">{s.l}</div>
                      <div className="mt-1 font-display text-lg">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · HARDWARE SPECS — feature grid with hover zoom */}
      <section className="relative py-28 bg-background overflow-hidden">
        <LogoWatermark src={logo} className="left-[-160px] bottom-0" size={520} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16" data-reveal>
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.25em] text-primary font-medium">Hardware</div>
              <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                Engineered to the micron.
              </h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground text-lg leading-relaxed">
              A seven-axis articulated arm machined from medical-grade Ti-6Al-4V,
              dressed in sterile-drape compatible chrome, with closed-loop haptic
              feedback at every joint.
            </p>
          </div>

          {/* Hero image with overlay specs */}
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 zoom-reveal relative rounded-3xl overflow-hidden aspect-[16/11] shadow-elegant group" data-reveal>
              <img src={techArm} alt="Robotic arm joint detail" className="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-primary">Model</div>
                  <div className="mt-1 font-display text-3xl font-semibold">PM-Arm 7X</div>
                </div>
                <div className="glass-panel rounded-xl px-4 py-3 text-sm">
                  <span className="text-muted-foreground">Reach</span>{" "}
                  <span className="font-semibold">1,420 mm</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {[
                { i: Crosshair, t: "Sub-millimeter precision", v: "±0.1 mm repeatability across full reach." },
                { i: Hand, t: "Haptic feedback", v: "Force-torque sensing at every joint, 1kHz refresh." },
                { i: Gauge, t: "Loop latency", v: "<8 ms end-to-end control loop." },
              ].map((f, i) => (
                <div
                  key={f.t}
                  data-reveal
                  data-reveal-delay={i + 1}
                  className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="size-11 rounded-xl bg-gradient-primary grid place-items-center">
                    <f.i className="size-5 text-primary-foreground" />
                  </div>
                  <div className="mt-5 font-display text-lg font-semibold">{f.t}</div>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{f.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lower spec strip */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { i: Layers, t: "7-DOF Articulation", v: "Full surgical envelope without re-positioning." },
              { i: Cpu, t: "Edge AI Compute", v: "Onboard NPU · 84 TOPS, fanless sterile design." },
              { i: ShieldCheck, t: "Triple Redundancy", v: "Independent safety MCU + watchdog + brake bus." },
              { i: Sparkles, t: "Sterile-Drape Ready", v: "Smooth chrome geometries, no fastener pockets." },
            ].map((s, i) => (
              <div
                key={s.t}
                data-reveal
                data-reveal-delay={i + 1}
                className="rounded-2xl p-6 bg-gradient-chrome border border-border hover:-translate-y-1 transition-transform duration-300"
              >
                <s.i className="size-5 text-primary" />
                <div className="mt-4 font-semibold">{s.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · GLOBAL IMPACT — counters + video background */}
      <section className="relative py-32 overflow-hidden bg-gradient-deep text-primary-foreground">
        <video
          autoPlay muted loop playsInline
          poster={techDetail}
          className="absolute inset-0 size-full object-cover opacity-25"
        >
          <source src="https://cdn.coverr.co/videos/coverr-medical-data-visualization-7411/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-background/0 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,oklch(0.52_0.18_250/0.35),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl" data-reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">Global Impact</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Outcomes that matter.<br />At a scale that matters.
            </h2>
            <p className="mt-5 text-primary-foreground/75 text-lg leading-relaxed">
              Across pilot hospitals, our platform is helping surgeons reduce
              operative time, accelerate recovery, and deliver more consistent
              clinical results.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { to: 42, suffix: "%", l: "Reduced operative time" },
              { to: 3, suffix: "x", l: "Faster patient recovery" },
              { to: 128, suffix: "+", l: "Partner hospitals" },
              { to: 99, suffix: "%", l: "Surgeon satisfaction" },
            ].map((c, i) => (
              <div
                key={c.l}
                data-reveal
                data-reveal-delay={i + 1}
                className="glass-card rounded-2xl p-7"
              >
                <Counter to={c.to} suffix={c.suffix} />
                <div className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">{c.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {[
              { t: "Asia-Pacific", v: "62 hospitals · 14 cities", icon: Activity },
              { t: "Europe & UK", v: "38 hospitals · 9 cities", icon: Activity },
              { t: "North America", v: "28 hospitals · 11 cities", icon: Activity },
            ].map((r, i) => (
              <div key={r.t} data-reveal data-reveal-delay={i + 1} className="glass-panel rounded-2xl p-6 flex items-center gap-4">
                <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center">
                  <r.icon className="size-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-primary-glow">{r.t}</div>
                  <div className="mt-1 font-display text-lg">{r.v}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-between gap-6 glass-panel rounded-3xl p-8">
            <div>
              <div className="font-display text-2xl md:text-3xl tracking-tight">
                Ready to bring PM-Arm 7X to your operating room?
              </div>
              <div className="mt-2 text-primary-foreground/70">Talk to our clinical partnerships team.</div>
            </div>
            <Button asChild size="lg" className="btn-fx bg-gradient-primary text-primary-foreground shadow-glow h-12 px-7">
              <Link to="/contact">Request a Briefing <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

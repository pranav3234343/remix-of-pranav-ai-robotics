import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import ceoImage from "@/assets/ceo.jpg";
import visionImage from "@/assets/ai-mission.jpg";
import capabilitiesImage from "@/assets/team-collab.jpg";
import hapticImage from "@/assets/haptic-feedback.jpg";
import networkImage from "@/assets/global-network.jpg";
import timelineBg from "@/assets/timeline-bg.jpg";
import { Button } from "@/components/ui/button";
import {
  Target, Heart, Sparkles, ArrowRight, Rocket, TrendingUp, Globe2, Cpu,
  Eye, Hand, ShieldCheck, BrainCircuit, Activity, Workflow, Layers,
  AlertTriangle, Clock, DollarSign, MapPin, UserX, Stethoscope,
  Microscope, GraduationCap, Building2, FlaskConical, Wrench, Brain,
  Database, Cloud, Lock, Radio, Boxes, Repeat, BadgeDollarSign, LineChart, Handshake, Server,
} from "lucide-react";
import problemImage from "@/assets/problem-solve.jpg";
import whatWeDoImage from "@/assets/what-we-do.jpg";
import whoWeServeImage from "@/assets/who-we-serve.jpg";
import techStackImage from "@/assets/tech-stack.jpg";
import businessModelImage from "@/assets/business-model.jpg";
import { useRevealAll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Pranav Mercantile" },
      { name: "description", content: "Our vision, journey, capabilities, haptic precision, and global network — pioneering AI-powered surgical robotics." },
      { property: "og:title", content: "About Pranav Mercantile" },
      { property: "og:description", content: "Vision, journey, capabilities, haptic feedback, and our global hospital network." },
      { property: "og:image", content: ceoImage },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useRevealAll();
  return (
    <SiteLayout>
      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-24 bg-[#050710] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(212,175,55,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(184,134,42,0.15),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl text-white animate-float-up">
            <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">About · Pranav Mercantile</div>
            <h1 className="mt-5 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
              Engineering the future of <span className="text-gradient-gold">surgical care.</span>
            </h1>
            <p className="mt-7 text-lg text-white/75 leading-relaxed max-w-2xl">
              We are a healthcare technology company on a singular mission — to make
              world-class surgical precision accessible to every patient, every operating
              room, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 1 · VISION & MISSION ============ */}
      <section className="relative py-32 bg-[#080a12] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6" data-reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Our Vision & Mission</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
              Revolutionizing precision. <span className="text-gradient-gold">Saving lives.</span>
            </h2>
            <p className="mt-7 text-lg text-white/70 leading-relaxed">
              Our vision is a world where every surgical patient — regardless of geography
              or income — receives care guided by the steadiest hands and the sharpest
              minds in medicine, augmented by artificial intelligence.
            </p>
            <p className="mt-5 text-white/65 leading-relaxed">
              Our mission is to design, build, and deploy AI-powered robotic platforms
              that elevate surgeons' capabilities, reduce procedural variability, and
              measurably improve patient outcomes worldwide.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-6" data-reveal data-reveal-delay="1">
              {[
                { icon: Target, t: "Precision", d: "Sub-millimeter outcomes everywhere." },
                { icon: Heart, t: "Patients first", d: "Faster recovery, fewer complications." },
                { icon: Sparkles, t: "Always advancing", d: "Learning from every procedure." },
              ].map((m) => (
                <div key={m.t} className="glass-gold rounded-2xl p-5 hover-lift">
                  <div className="size-10 rounded-lg bg-gradient-gold grid place-items-center shadow-gold">
                    <m.icon className="size-4 text-[#1a1407]" />
                  </div>
                  <div className="mt-4 font-semibold text-white">{m.t}</div>
                  <div className="mt-1 text-sm text-white/65 leading-relaxed">{m.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 zoom-reveal relative rounded-3xl overflow-hidden aspect-[5/6] shadow-gold border border-[var(--gold)]/30" data-reveal data-reveal-delay="2">
            <img src={visionImage} alt="AI-guided anatomy visualization" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050710] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-gold rounded-2xl p-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Vision in Motion</div>
              <div className="mt-1 font-display text-xl text-white">Where intelligence meets craft.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2 · OUR JOURNEY / TIMELINE ============ */}
      <section className="relative py-32 bg-[#050710] overflow-hidden">
        <img src={timelineBg} alt="" aria-hidden loading="lazy" className="absolute inset-0 size-full object-cover opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050710] via-transparent to-[#050710]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl" data-reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Our Journey</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
              From vision to <span className="text-gradient-gold">global reach.</span>
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Every milestone — engineered with intent, delivered with discipline.
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="mt-20 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/60 to-transparent" />
            <div className="space-y-16">
              {[
                { date: "May 2024", title: "Founded", icon: Rocket, desc: "Pranav Mercantile is incorporated in Anantapur with a singular conviction — surgical robotics must reach beyond the world's elite hospitals.", side: "left" },
                { date: "Dec 2024", title: "Product Launch", icon: Cpu, desc: "Unveiling of the PM-Arm 7X — our first AI-powered 7-DOF surgical robotic arm with sub-millimeter precision and integrated haptic feedback.", side: "right" },
                { date: "Feb 2025", title: "Strategic Funding", icon: TrendingUp, desc: "Closed strategic capital to scale clinical trials, expand the engineering team, and accelerate the AI co-pilot roadmap.", side: "left" },
                { date: "May 2026", title: "Global Scaling", icon: Globe2, desc: "Deployed to premier hospitals across Asia-Pacific, Europe, and North America — over 128 partner institutions and growing.", side: "right" },
              ].map((m, i) => (
                <div
                  key={m.title}
                  data-reveal
                  data-reveal-delay={(i % 3) + 1}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${m.side === "right" ? "md:[direction:rtl]" : ""}`}
                >
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 size-8 rounded-full bg-gradient-gold grid place-items-center shadow-gold border-2 border-[#050710] z-10">
                    <m.icon className="size-4 text-[#1a1407]" />
                  </div>
                  {/* Card */}
                  <div className={`pl-16 md:pl-0 ${m.side === "right" ? "md:[direction:ltr] md:col-start-2" : "md:col-start-1"}`}>
                    <div className="glass-gold rounded-2xl p-7 hover-lift">
                      <div className="text-[11px] uppercase tracking-[0.3em] text-gold font-medium">{m.date}</div>
                      <div className="mt-2 font-display text-2xl text-white font-semibold">{m.title}</div>
                      <div className="mt-3 text-white/70 leading-relaxed">{m.desc}</div>
                    </div>
                  </div>
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3 · COMPREHENSIVE CAPABILITIES (BENTO) ============ */}
      <section className="relative py-32 bg-[#080a12] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16" data-reveal>
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Comprehensive Capabilities</div>
              <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
                A complete platform — <span className="text-gradient-gold">end to end.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-white/65 text-lg leading-relaxed">
              From articulated robotics to live AI guidance to data-driven insights —
              every function of the operating room, unified into one surgical intelligence.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid lg:grid-cols-6 grid-rows-[auto_auto_auto] gap-5">
            {/* Large hero card */}
            <div data-reveal className="lg:col-span-3 lg:row-span-2 relative overflow-hidden rounded-3xl glass-gold p-8 min-h-[420px] hover-lift">
              <img src={capabilitiesImage} alt="Team collaboration around holographic anatomy" loading="lazy" className="absolute inset-0 size-full object-cover opacity-40 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050710] via-[#050710]/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end">
                <div className="size-12 rounded-xl bg-gradient-gold grid place-items-center shadow-gold">
                  <BrainCircuit className="size-6 text-[#1a1407]" />
                </div>
                <div className="mt-5 font-display text-3xl text-white">Surgical Robotic Arms</div>
                <div className="mt-3 text-white/70 leading-relaxed">
                  Seven-axis articulated arms with closed-loop haptic feedback,
                  triple-redundant safety, and sterile-drape-ready chrome geometry.
                </div>
              </div>
            </div>

            {[
              { icon: Eye, t: "Real-time AI Guidance", d: "Computer vision segments tissue & vessels 60×/sec, predicting risk before motion." },
              { icon: Workflow, t: "Motion Planning", d: "Reinforcement-learned trajectories evaluated 50k/sec against safety envelopes." },
              { icon: Activity, t: "Data-driven Insights", d: "Post-op analytics inform protocol refinement and continuous fleet learning." },
              { icon: Hand, t: "Precise Motor Control", d: "Direct-drive actuators with arc-second resolution and tremor-canceling filters." },
            ].map((c, i) => (
              <div
                key={c.t}
                data-reveal
                data-reveal-delay={(i % 3) + 1}
                className="lg:col-span-3 lg:[&:nth-child(4)]:col-span-2 lg:[&:nth-child(5)]:col-span-1 glass-gold rounded-3xl p-7 hover-lift relative overflow-hidden"
              >
                <div className="size-11 rounded-xl bg-gradient-gold grid place-items-center shadow-gold">
                  <c.icon className="size-5 text-[#1a1407]" />
                </div>
                <div className="mt-5 font-display text-xl text-white">{c.t}</div>
                <div className="mt-2 text-white/65 leading-relaxed text-sm">{c.d}</div>
              </div>
            ))}

            {/* Wide stat strip */}
            <div data-reveal className="lg:col-span-6 grid sm:grid-cols-4 gap-5 mt-2">
              {[
                { v: "1.2B", l: "Parameters · scene model" },
                { v: "240Hz", l: "Telemetry stream rate" },
                { v: "<8ms", l: "End-to-end loop latency" },
                { v: "99.81%", l: "Fusion confidence" },
              ].map((s) => (
                <div key={s.l} className="glass-gold rounded-2xl p-6 hover-lift">
                  <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-white/55">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4 · HAPTIC FEEDBACK & SURGEON CONTROL ============ */}
      <section className="relative py-32 bg-[#050710] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_50%,rgba(212,175,55,0.18),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 zoom-reveal relative rounded-3xl overflow-hidden aspect-[5/4] shadow-gold border border-[var(--gold)]/30 order-2 lg:order-1" data-reveal>
            <img src={hapticImage} alt="Surgeon hand on haptic control with glowing feedback streams" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 right-6 glass-gold rounded-2xl p-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Haptic Feedback</div>
              <div className="mt-1 font-display text-xl text-white">Every gram of resistance — felt.</div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2" data-reveal data-reveal-delay="1">
            <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Haptic Feedback & Surgeon Control</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
              The surgeon, <span className="text-gradient-gold">amplified.</span>
            </h2>
            <p className="mt-7 text-lg text-white/70 leading-relaxed">
              Our platform never replaces the surgeon — it extends them. Sub-millimeter
              precision is fused with high-fidelity haptic feedback so that every contact,
              every resistance, every micro-texture is transmitted directly to the
              surgeon's fingertips through the console.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                { i: Hand, t: "Force-torque at every joint", d: "1 kHz refresh resolves down to 0.05 N of contact force." },
                { i: ShieldCheck, t: "Motion scaling & tremor filtration", d: "Surgeon motion scaled 5:1 or finer, with physiological tremor suppressed." },
                { i: Layers, t: "Virtual safety envelopes", d: "Pre-op imaging defines no-go zones the arm physically cannot cross." },
              ].map((p, i) => (
                <li key={p.t} data-reveal data-reveal-delay={i + 1} className="flex gap-4">
                  <div className="size-11 rounded-xl bg-gradient-gold grid place-items-center shadow-gold shrink-0">
                    <p.i className="size-5 text-[#1a1407]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{p.t}</div>
                    <div className="text-white/65 leading-relaxed mt-1">{p.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 5 · GLOBAL NETWORK & COMMUNITY ============ */}
      <section className="relative py-32 bg-[#080a12] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl" data-reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Global Network & Community</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
              One platform. <span className="text-gradient-gold">A worldwide community.</span>
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              From tier-1 academic centers in Tokyo and Berlin to fast-growing super-specialty
              hospitals in Bengaluru and Sao Paulo — Pranav Mercantile partners with the
              clinicians, hospitals, and research institutions building the next decade of
              surgical care.
            </p>
          </div>

          <div className="mt-16 relative rounded-3xl overflow-hidden glass-gold border border-[var(--gold)]/30 shadow-gold" data-reveal data-reveal-delay="1">
            <img src={networkImage} alt="Global hospital network map" loading="lazy" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050710] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 grid sm:grid-cols-4 gap-4">
              {[
                { v: "128+", l: "Partner hospitals" },
                { v: "34", l: "Countries" },
                { v: "12k+", l: "Procedures supported" },
                { v: "60+", l: "Surgical specialties" },
              ].map((s) => (
                <div key={s.l} className="glass-gold rounded-xl p-4">
                  <div className="font-display text-2xl text-gradient-gold">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/65 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { region: "Asia-Pacific", hubs: "Tokyo · Singapore · Bengaluru" },
              { region: "Europe & UK", hubs: "London · Berlin · Zurich" },
              { region: "Americas", hubs: "Boston · Toronto · Sao Paulo" },
            ].map((r, i) => (
              <div key={r.region} data-reveal data-reveal-delay={i + 1} className="glass-gold rounded-2xl p-6 hover-lift">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{r.region}</div>
                <div className="mt-2 font-display text-lg text-white">{r.hubs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6 · PROBLEM WE SOLVE ============ */}
      <section className="relative py-32 bg-[#050710] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(212,175,55,0.18),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 zoom-reveal relative rounded-3xl overflow-hidden aspect-[5/4] shadow-gold border border-[var(--gold)]/30" data-reveal>
            <img src={problemImage} alt="The surgical care gap" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050710] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-gold rounded-2xl p-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">The Reality</div>
              <div className="mt-1 font-display text-xl text-white">5 billion people lack safe surgery.</div>
            </div>
          </div>
          <div className="lg:col-span-6" data-reveal data-reveal-delay="1">
            <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Problem We Solve</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
              Surgery is brilliant — but <span className="text-gradient-gold">unevenly delivered.</span>
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Outcomes still depend heavily on geography, fatigue, and a vanishing pool of senior surgeons.
              We close that gap with intelligence built into the instrument itself.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { i: Globe2, t: "Access inequality", d: "Over 5 billion people lack access to safe, affordable surgical care when needed." },
                { i: UserX, t: "Surgeon shortage", d: "A worldwide deficit of trained specialists, worsening as senior surgeons retire." },
                { i: AlertTriangle, t: "Avoidable complications", d: "Up to 30% of surgical complications trace back to human variability and fatigue." },
                { i: Clock, t: "Long recovery times", d: "Open and manual procedures mean longer hospital stays and slower return to life." },
                { i: DollarSign, t: "Crippling cost of care", d: "Existing robotic platforms cost $1M+ — out of reach for most hospitals globally." },
                { i: MapPin, t: "Rural & emerging gaps", d: "Tier-2/3 cities lack specialist coverage, forcing patients to travel hundreds of km." },
              ].map((p, i) => (
                <li key={p.t} data-reveal data-reveal-delay={(i % 3) + 1} className="flex gap-4">
                  <div className="size-10 rounded-xl bg-gradient-gold grid place-items-center shadow-gold shrink-0">
                    <p.i className="size-4 text-[#1a1407]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{p.t}</div>
                    <div className="text-white/65 text-sm leading-relaxed mt-1">{p.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 7 · WHAT WE DO ============ */}
      <section className="relative py-32 bg-[#080a12] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1" data-reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">What We Do</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
              We build the <span className="text-gradient-gold">surgical intelligence</span> stack.
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              From the robotic arm in the OR to the AI co-pilot guiding it and the cloud learning from every procedure —
              we engineer the full vertical of next-generation surgery.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
                { i: BrainCircuit, t: "AI-powered robotic arms", d: "7-DOF surgical arms with sub-millimeter precision and tremor cancellation." },
                { i: Eye, t: "Real-time AI co-pilot", d: "Computer vision that segments tissue and predicts risk 60 times per second." },
                { i: Hand, t: "Haptic surgeon consoles", d: "Force-feedback consoles that let surgeons feel every gram of tissue resistance." },
                { i: Workflow, t: "Pre-op planning suite", d: "AI-driven 3D planning from CT/MRI with virtual no-go safety envelopes." },
                { i: Activity, t: "Fleet analytics platform", d: "Post-op insights and continuous learning across the global hospital network." },
                { i: GraduationCap, t: "Surgeon training & simulation", d: "VR-grade simulators with case libraries to certify new operators rapidly." },
              ].map((p, i) => (
                <li key={p.t} data-reveal data-reveal-delay={(i % 3) + 1} className="glass-gold rounded-2xl p-5 hover-lift">
                  <div className="size-10 rounded-lg bg-gradient-gold grid place-items-center shadow-gold">
                    <p.i className="size-4 text-[#1a1407]" />
                  </div>
                  <div className="mt-4 font-semibold text-white">{p.t}</div>
                  <div className="mt-1 text-sm text-white/65 leading-relaxed">{p.d}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 zoom-reveal relative rounded-3xl overflow-hidden aspect-[5/6] shadow-gold border border-[var(--gold)]/30 order-1 lg:order-2" data-reveal data-reveal-delay="1">
            <img src={whatWeDoImage} alt="AI surgical platform in action" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050710] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-gold rounded-2xl p-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">End-to-End Platform</div>
              <div className="mt-1 font-display text-xl text-white">Hardware, AI, cloud — one stack.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 8 · WHO WE SERVE ============ */}
      <section className="relative py-32 bg-[#050710] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(184,134,42,0.15),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-16" data-reveal>
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Who We Serve</div>
              <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
                Built for the people who <span className="text-gradient-gold">heal the world.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-white/65 text-lg leading-relaxed">
              Our platform serves an ecosystem — surgeons, hospitals, payers, educators, and ultimately every patient on the table.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 zoom-reveal relative rounded-3xl overflow-hidden aspect-[4/5] shadow-gold border border-[var(--gold)]/30" data-reveal>
              <img src={whoWeServeImage} alt="Surgeons, hospitals, and patients" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050710] via-[#050710]/30 to-transparent" />
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {[
                { i: Stethoscope, t: "Surgeons & specialists", d: "Senior and emerging operators across general, cardiac, urology, gyn, and ortho." },
                { i: Building2, t: "Hospitals & health systems", d: "From academic medical centers to fast-growing tier-2 super-specialty hospitals." },
                { i: Heart, t: "Patients worldwide", d: "Smaller incisions, less pain, faster recovery — better outcomes regardless of zip code." },
                { i: GraduationCap, t: "Medical schools & residents", d: "Simulation-first training programs to graduate confident robotic surgeons faster." },
                { i: FlaskConical, t: "Research institutions", d: "De-identified procedural datasets and APIs for clinical and AI research." },
                { i: ShieldCheck, t: "Payers & governments", d: "Outcome-linked pricing and analytics that lower total cost of surgical care." },
              ].map((p, i) => (
                <li key={p.t} data-reveal data-reveal-delay={(i % 3) + 1} className="glass-gold rounded-2xl p-5 hover-lift">
                  <div className="size-10 rounded-lg bg-gradient-gold grid place-items-center shadow-gold">
                    <p.i className="size-4 text-[#1a1407]" />
                  </div>
                  <div className="mt-4 font-semibold text-white">{p.t}</div>
                  <div className="mt-1 text-sm text-white/65 leading-relaxed">{p.d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 9 · TECH STACK ============ */}
      <section className="relative py-32 bg-[#080a12] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-16" data-reveal>
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Tech Stack</div>
              <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
                Engineered like an <span className="text-gradient-gold">aircraft.</span> Felt like an instrument.
              </h2>
            </div>
            <p className="lg:col-span-5 text-white/65 text-lg leading-relaxed">
              Five tightly-integrated layers, each independently certifiable, combine into one
              fault-tolerant surgical platform.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden glass-gold border border-[var(--gold)]/30 shadow-gold mb-10" data-reveal>
            <img src={techStackImage} alt="Surgical intelligence tech stack" loading="lazy" width={1280} height={896} className="w-full h-auto object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a12] via-transparent to-transparent" />
          </div>

          {/* Stack diagram */}
          <div className="space-y-4">
            {[
              { i: Brain, layer: "L5", t: "AI / ML Intelligence", d: "PyTorch + custom transformers for scene understanding, 1.2B-parameter perception model.", tags: ["PyTorch", "CUDA", "ONNX", "TensorRT"] },
              { i: Cloud, layer: "L4", t: "Cloud & Data Platform", d: "Multi-region cloud with edge inference, HIPAA & GDPR-compliant data lake.", tags: ["AWS", "Kubernetes", "Postgres", "Kafka"] },
              { i: Radio, layer: "L3", t: "Realtime Control Loop", d: "Deterministic 1kHz control with sub-8ms end-to-end latency over redundant links.", tags: ["ROS 2", "EtherCAT", "RT-Linux", "gRPC"] },
              { i: Wrench, layer: "L2", t: "Robotics & Mechatronics", d: "7-DOF arms with harmonic drives, force-torque sensors, sterile-drape geometry.", tags: ["FOC drives", "FPGA", "IEC 60601", "ISO 13485"] },
              { i: Lock, layer: "L1", t: "Safety & Security", d: "Triple-redundant safety envelopes, signed firmware, zero-trust networking.", tags: ["TLS 1.3", "Secure boot", "SOC 2", "IEC 62304"] },
            ].map((l, i) => (
              <div key={l.t} data-reveal data-reveal-delay={(i % 3) + 1} className="glass-gold rounded-2xl p-6 hover-lift grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-2 flex items-center gap-3">
                  <div className="size-11 rounded-xl bg-gradient-gold grid place-items-center shadow-gold shrink-0">
                    <l.i className="size-5 text-[#1a1407]" />
                  </div>
                  <div className="font-display text-gold text-lg">{l.layer}</div>
                </div>
                <div className="md:col-span-6">
                  <div className="font-semibold text-white">{l.t}</div>
                  <div className="text-white/65 text-sm leading-relaxed mt-1">{l.d}</div>
                </div>
                <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
                  {l.tags.map((tag) => (
                    <span key={tag} className="text-[11px] uppercase tracking-wider text-gold border border-[var(--gold)]/30 rounded-full px-3 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
            <div data-reveal className="glass-gold rounded-2xl p-6 hover-lift grid sm:grid-cols-4 gap-4 mt-6">
              {[
                { i: Server, v: "240 Hz", l: "Telemetry rate" },
                { i: Database, v: "1.2B", l: "Model params" },
                { i: Boxes, v: "5", l: "Stack layers" },
                { i: ShieldCheck, v: "IEC 62304", l: "Software class" },
              ].map((s) => (
                <div key={s.l} className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-gradient-gold grid place-items-center shadow-gold shrink-0">
                    <s.i className="size-4 text-[#1a1407]" />
                  </div>
                  <div>
                    <div className="font-display text-xl text-gradient-gold leading-none">{s.v}</div>
                    <div className="text-[11px] uppercase tracking-wider text-white/55 mt-1">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 10 · BUSINESS MODEL ============ */}
      <section className="relative py-32 bg-[#050710] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(212,175,55,0.18),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-16" data-reveal>
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Business Model</div>
              <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
                A <span className="text-gradient-gold">platform economy</span> for surgery.
              </h2>
            </div>
            <p className="lg:col-span-5 text-white/65 text-lg leading-relaxed">
              We combine hardware leasing, per-procedure software, recurring service contracts,
              and a data marketplace — a durable, multi-stream revenue engine.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="glass-gold rounded-3xl p-8 md:p-10 border border-[var(--gold)]/30 shadow-gold mb-10" data-reveal>
            <div className="grid md:grid-cols-5 gap-4 items-stretch">
              {[
                { i: Wrench, t: "Hardware", d: "Robotic arm + console deployed" },
                { i: BrainCircuit, t: "AI Platform", d: "Co-pilot + planning suite" },
                { i: Stethoscope, t: "Procedures", d: "Surgeons operate, outcomes logged" },
                { i: LineChart, t: "Analytics", d: "Insights returned to hospital" },
                { i: Repeat, t: "Recurring Revenue", d: "Subscriptions + per-procedure fees" },
              ].map((n, i) => (
                <div key={n.t} className="relative">
                  <div className="rounded-2xl border border-[var(--gold)]/25 bg-[#080a12]/60 p-5 h-full">
                    <div className="size-10 rounded-lg bg-gradient-gold grid place-items-center shadow-gold">
                      <n.i className="size-4 text-[#1a1407]" />
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-gold">Step {i + 1}</div>
                    <div className="mt-1 font-semibold text-white">{n.t}</div>
                    <div className="mt-1 text-xs text-white/65 leading-relaxed">{n.d}</div>
                  </div>
                  {i < 4 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 size-5 text-gold/70" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { i: BadgeDollarSign, t: "Hardware leasing (RaaS)", d: "Robotics-as-a-Service contracts remove $1M+ capex barriers — hospitals pay monthly." },
              { i: Cpu, t: "Per-procedure SaaS", d: "Pay-per-use AI co-pilot, planning, and disposable consumables across every case." },
              { i: ShieldCheck, t: "Service & maintenance", d: "Annual service contracts cover uptime, calibration, sterilization training, and parts." },
              { i: Database, t: "Data & insights subscription", d: "Anonymized fleet analytics and benchmarking dashboards licensed to systems & payers." },
              { i: GraduationCap, t: "Training & certification", d: "Surgeon simulation programs and certification — revenue from schools, residents, and hospitals." },
              { i: Handshake, t: "Strategic partnerships", d: "OEM licensing of our AI stack to medtech, pharma, and research partners globally." },
            ].map((p, i) => (
              <div key={p.t} data-reveal data-reveal-delay={(i % 3) + 1} className="glass-gold rounded-2xl p-6 hover-lift flex gap-4">
                <div className="size-11 rounded-xl bg-gradient-gold grid place-items-center shadow-gold shrink-0">
                  <p.i className="size-5 text-[#1a1407]" />
                </div>
                <div>
                  <div className="font-semibold text-white">{p.t}</div>
                  <div className="text-white/65 text-sm leading-relaxed mt-1">{p.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-10 relative rounded-3xl overflow-hidden glass-gold border border-[var(--gold)]/30 shadow-gold">
            <img src={businessModelImage} alt="Revenue flow diagram" loading="lazy" width={1280} height={896} className="w-full h-auto object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050710] via-[#050710]/40 to-transparent" />
            <div className="absolute inset-0 grid place-items-center p-6">
              <div className="text-center max-w-2xl">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Unit Economics</div>
                <div className="mt-3 font-display text-3xl md:text-4xl text-white">Hardware once. <span className="text-gradient-gold">Revenue forever.</span></div>
                <div className="mt-3 text-white/70">Predictable, recurring, outcome-linked income that compounds with every procedure on the network.</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ============ CEO MESSAGE ============ */}
      <section className="relative py-32 bg-[#050710] overflow-hidden border-t border-[var(--gold)]/15">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(212,175,55,0.18),transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4" data-reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--gold)]/30 shadow-gold">
              <img src={ceoImage} alt="Srinivasulu Sandireddy, Founder & CEO" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#050710]/95 via-[#050710]/60 to-transparent">
                <div className="text-gold font-semibold">CEO: SANDIREDDY SRINIVASULU</div>
                <div className="text-white/65 text-sm">Founder & Chief Executive Officer</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 text-white" data-reveal data-reveal-delay="1">
            <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Message from the CEO</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              "Intelligent systems will extend the steadiest hands in medicine."
            </h2>
            <div className="mt-6 space-y-5 text-white/70 text-lg leading-relaxed">
              <p>
                The future of healthcare will not be written by machines replacing surgeons —
                it will be written by intelligent systems that extend the steadiest hands and
                the sharpest minds in medicine.
              </p>
              <p>
                At Pranav Mercantile, we are building the instruments of that future. Every
                robotic arm, every algorithm, every line of code is shaped by a simple
                conviction: when human expertise meets artificial intelligence in the
                operating room, patients receive care that was previously unimaginable.
              </p>
            </div>
            <div className="mt-8 font-display text-gold">— SANDIREDDY SRINIVASULU</div>
            <Button asChild size="lg" className="mt-10 btn-fx bg-gradient-gold text-[#1a1407] font-semibold shadow-gold hover:opacity-95 h-12 px-7">
              <Link to="/technology">Explore the Platform <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

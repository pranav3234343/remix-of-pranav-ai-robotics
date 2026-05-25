import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-robot.jpg";
import orRoom from "@/assets/or-room.jpg";
import techDetail from "@/assets/tech-detail.jpg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Crosshair, ShieldCheck, BrainCircuit, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { LogoWatermark } from "@/components/site/LogoWatermark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pranav Mercantile — AI-Powered Surgical Robotics" },
      { name: "description", content: "Pranav Mercantile Private Limited builds AI-powered robotic arms for surgical precision, safety, and the future of healthcare." },
      { property: "og:title", content: "Pranav Mercantile — AI-Powered Surgical Robotics" },
      { property: "og:description", content: "Revolutionizing surgical precision with AI-driven robotic systems." },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <SiteLayout>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={heroImage} alt="AI-driven surgical robotic arm" width={1920} height={1080} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.68_0.18_235/0.3),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full">
          <div className="max-w-3xl animate-float-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-glow/40 bg-background/10 backdrop-blur text-xs text-primary-foreground/90 tracking-wide uppercase">
              <span className="size-1.5 rounded-full bg-primary-glow animate-pulse-glow" />
              Next-Generation Surgical AI
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-primary-foreground leading-[1.05]">
              Revolutionizing Surgical Precision with AI
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              We engineer intelligent robotic arms that empower surgeons with sub-millimeter
              precision, real-time guidance, and uncompromising safety.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="btn-fx bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 h-12 px-7">
                <Link to="/technology">Explore Our Robotics <ArrowRight className="ml-1 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-fx h-12 px-7 bg-background/10 backdrop-blur border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
                <Link to="/about">About the Company</Link>
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
              {[{ v: "0.1mm", l: "Tip precision" }, { v: "360°", l: "Articulation" }, { v: "24/7", l: "AI monitoring" }].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-primary-foreground font-semibold">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick highlights */}
      <section className="relative py-24 bg-background overflow-hidden">
        <LogoWatermark src={logo} className="right-[-120px] top-1/2 -translate-y-1/2" size={520} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14" data-reveal>
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Why Pranav Mercantile</div>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Three principles. Zero compromise.
              </h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground text-lg leading-relaxed">
              Built from the ground up for the operating room, where every micron and
              every millisecond matters.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Crosshair, title: "Precision", desc: "Sub-millimeter accuracy across a 7-DOF articulated workspace." },
              { icon: ShieldCheck, title: "Safety", desc: "Triple-redundant control with live collision avoidance." },
              { icon: BrainCircuit, title: "AI Integration", desc: "Onboard models guide surgeons with real-time intelligence." },
            ].map((f, i) => (
              <div
                key={f.title}
                data-reveal
                data-reveal-delay={i + 1}
                className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="size-12 rounded-lg bg-gradient-primary grid place-items-center shadow-elegant">
                  <f.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OR Room showcase */}
      <section className="relative py-28 overflow-hidden bg-gradient-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant order-2 lg:order-1">
            <img src={orRoom} alt="Modern operating room with surgical robots" width={1920} height={1080} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="text-primary-foreground order-1 lg:order-2">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-glow font-medium">The Operating Room of Tomorrow</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Where precision meets intelligence.
            </h2>
            <p className="mt-5 text-primary-foreground/75 text-lg leading-relaxed">
              Our integrated robotic suites bring together cinematic 3D visualization,
              AI-guided instrumentation, and ergonomic surgeon consoles — a unified
              platform purpose-built for modern hospitals.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-7">
                <Link to="/technology">See the Technology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 shadow-elegant">
            <img src={techDetail} alt="" width={1024} height={1024} loading="lazy" className="absolute inset-0 size-full object-cover opacity-20" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight max-w-2xl">
                Bring next-generation surgical robotics to your hospital.
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-xl">
                Talk to our team about clinical pilots, partnerships, and investment.
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-7">
                <Link to="/contact">Get in Touch <ArrowRight className="ml-1 size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import orRoom from "@/assets/or-room.jpg";
import techDetail from "@/assets/tech-detail.jpg";
import techArm from "@/assets/tech-arm.jpg";
import missionImage from "@/assets/ai-mission.jpg";
import { Button } from "@/components/ui/button";
import { Crosshair, ShieldCheck, BrainCircuit, Activity, Cpu, Microscope, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Pranav Mercantile Surgical Robotics" },
      { name: "description", content: "Explore Pranav Mercantile's AI-powered surgical robotic platform: 7-DOF articulation, real-time AI vision, and an immersive surgeon console." },
      { property: "og:title", content: "Surgical Robotics Technology" },
      { property: "og:description", content: "AI co-pilot, sub-millimeter precision, and a complete surgical robotics platform." },
      { property: "og:image", content: orRoom },
    ],
  }),
  component: TechnologyPage,
});

function TechnologyPage() {
  const features = [
    { icon: Crosshair, title: "Sub-Millimeter Precision", desc: "Articulated 7-DOF arms with haptic feedback deliver consistency human hands cannot match." },
    { icon: ShieldCheck, title: "Uncompromising Safety", desc: "Triple-redundant control systems and live collision avoidance protect every patient, every procedure." },
    { icon: BrainCircuit, title: "Embedded AI Intelligence", desc: "Onboard neural models interpret anatomy in real time, suggesting optimal trajectories to the surgeon." },
    { icon: Microscope, title: "Minimally Invasive", desc: "Sub-8mm instruments reduce trauma, scarring and recovery — improving long-term patient outcomes." },
    { icon: Cpu, title: "Surgeon-First Console", desc: "Ergonomic immersive console with 3D vision, motion scaling, and tremor filtration." },
    { icon: Activity, title: "Connected Telemetry", desc: "Encrypted operative data streams power continuous learning and post-procedure analytics." },
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <img src={orRoom} alt="" width={1920} height={1080} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-primary-foreground animate-float-up">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-glow font-medium">Our Technology</div>
          <h1 className="mt-4 max-w-4xl text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            A complete surgical robotics platform — engineered in India, designed for the world.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
            From titanium articulation to neural-network co-pilot, every layer is built
            to a single standard: surgical-grade.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden shadow-card">
            {features.map((f) => (
              <div key={f.title} className="bg-card p-8 group hover:bg-gradient-chrome transition-colors duration-500">
                <div className="size-12 rounded-lg bg-gradient-primary grid place-items-center shadow-elegant group-hover:shadow-glow transition-shadow">
                  <f.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Co-Pilot */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-square">
            <img src={missionImage} alt="AI vision interpreting anatomy" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">AI Co-Pilot</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Intelligence at the tip.</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Proprietary vision models segment tissue, vessels, and critical structures
              60 times per second. The system anticipates risk, flags deviation, and
              augments the surgeon's intuition — without ever overriding judgment.
            </p>
            <ul className="mt-8 space-y-3">
              {["Real-time tissue & vessel recognition", "Adaptive motion scaling and tremor filtration", "Post-operative analytics & continuous learning"].map((p) => (
                <li key={p} className="flex items-start gap-3 text-foreground">
                  <span className="mt-2 size-1.5 rounded-full bg-gradient-primary shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hardware showcase */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Hardware</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Built like the instruments it deploys.</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Aerospace-grade alloys, surgical-grade tolerances. Each joint is engineered
              for millions of cycles of precise, repeatable motion under the harshest
              sterilization protocols.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5">
              {[{ v: "7-DOF", l: "Articulation" }, { v: "<0.1mm", l: "Repeatability" }, { v: "Ti-6Al-4V", l: "Joint alloy" }, { v: "60Hz", l: "AI inference" }].map((s) => (
                <div key={s.l} className="bg-card border border-border rounded-xl p-5">
                  <div className="font-display text-2xl font-semibold">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-square bg-gradient-deep order-1 lg:order-2">
            <img src={techArm} alt="Robotic arm joint" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-deep">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center text-primary-foreground">
          <img src={techDetail} alt="" width={1024} height={1024} loading="lazy" className="hidden" />
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Ready to see it in action?</h2>
          <p className="mt-5 text-primary-foreground/75 text-lg max-w-2xl mx-auto">
            Schedule a private demonstration of our surgical robotics platform with our
            clinical engineering team.
          </p>
          <Button asChild size="lg" className="mt-10 bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-7">
            <Link to="/contact">Request a Demo <ArrowRight className="ml-1 size-4" /></Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}

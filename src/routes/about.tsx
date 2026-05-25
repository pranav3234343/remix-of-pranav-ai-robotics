import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import ceoImage from "@/assets/ceo.jpg";
import missionImage from "@/assets/ai-mission.jpg";
import techArm from "@/assets/tech-arm.jpg";
import { Button } from "@/components/ui/button";
import { Target, Heart, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Pranav Mercantile" },
      { name: "description", content: "Learn about Pranav Mercantile's mission, our surgical robotics technology, and a message from CEO Srinivasulu Sandireddy." },
      { property: "og:title", content: "About Pranav Mercantile" },
      { property: "og:description", content: "Our mission, our technology, and a message from CEO Srinivasulu Sandireddy." },
      { property: "og:image", content: ceoImage },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,oklch(0.52_0.18_250/0.35),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl text-primary-foreground animate-float-up">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-glow font-medium">About Pranav Mercantile</div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Engineering the future of surgical care.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              We are a healthcare technology company on a singular mission — to make
              world-class surgical precision accessible to every patient, every operating
              room, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Message from CEO */}
      <section className="relative py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
              <img src={ceoImage} alt="Srinivasulu Sandireddy, Founder & CEO" width={1024} height={1280} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-primary-foreground font-semibold">Srinivasulu Sandireddy</div>
                <div className="text-primary-foreground/70 text-sm">Founder & Chief Executive Officer</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Message from the CEO</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              "Intelligent systems will extend the steadiest hands in medicine."
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                The future of healthcare will not be written by machines replacing
                surgeons — it will be written by intelligent systems that extend the
                steadiest hands and the sharpest minds in medicine.
              </p>
              <p>
                At Pranav Mercantile, we are building the instruments of that future.
                Every robotic arm, every algorithm, every line of code is shaped by a
                simple conviction: when human expertise meets artificial intelligence in
                the operating room, patients receive care that was previously
                unimaginable.
              </p>
              <p>
                We are proud to pioneer this work from India, for the world. To the
                hospitals, surgeons, and patients we serve — thank you for trusting us
                with the most important moments in your lives.
              </p>
            </div>
            <div className="mt-8 font-display text-foreground">— Srinivasulu Sandireddy</div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative py-24 bg-secondary/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Our Mission</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              To democratize surgical excellence.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              We believe access to the world's finest surgical care should not depend on
              geography or wealth. Our mission is to build AI-powered robotic systems
              that scale the expertise of a master surgeon — so that a patient in a
              district hospital receives the same precision as one in a flagship academic
              center.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "Precision for all", desc: "Sub-millimeter outcomes, regardless of location." },
                { icon: Heart, title: "Patients first", desc: "Better recovery, fewer complications, longer lives." },
                { icon: Sparkles, title: "Always advancing", desc: "Continuous learning across every procedure." },
              ].map((m) => (
                <div key={m.title}>
                  <div className="size-10 rounded-lg bg-gradient-primary grid place-items-center shadow-elegant">
                    <m.icon className="size-4 text-primary-foreground" />
                  </div>
                  <div className="mt-4 font-semibold">{m.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-square lg:aspect-[4/5]">
            <img src={missionImage} alt="AI guided anatomy visualization" width={1024} height={1280} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-square lg:aspect-[4/5] order-2 lg:order-1">
            <img src={techArm} alt="Articulated chrome robotic arm joint" width={1024} height={1280} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Our Technology</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Robotics, intelligence, and surgical craft — fused.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Our platform integrates 7-degree-of-freedom articulated arms, real-time AI
              vision models, and an immersive surgeon console into a single, certified
              system. Every component is engineered in-house to clinical-grade
              tolerances.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { t: "Hardware", d: "Titanium-grade articulation with haptic feedback, sterilizable end-effectors, and triple-redundant safety controls." },
                { t: "AI Co-Pilot", d: "Vision models segment tissue and vessels 60× per second, anticipating risk and suggesting optimal trajectories." },
                { t: "Surgeon Console", d: "Stereoscopic 3D vision, motion scaling, and tremor filtration for total intra-operative control." },
              ].map((s) => (
                <li key={s.t} className="flex gap-4">
                  <div className="mt-1.5 size-2 rounded-full bg-gradient-primary shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">{s.t}</div>
                    <div className="text-muted-foreground leading-relaxed">{s.d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-10 bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-90 h-12 px-7">
              <Link to="/technology">Explore the Full Platform <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

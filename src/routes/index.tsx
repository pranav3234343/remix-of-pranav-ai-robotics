import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-robot.jpg";
import techDetail from "@/assets/tech-detail.jpg";
import ceoImage from "@/assets/ceo.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Crosshair, ShieldCheck, BrainCircuit, Activity, Cpu, Microscope, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

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
  component: Index,
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="size-8 rounded-md bg-gradient-primary shadow-glow grid place-items-center">
            <Activity className="size-4 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="font-display font-semibold tracking-tight text-sm">
            PRANAV<span className="text-primary"> · </span>MERCANTILE
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#technology" className="hover:text-foreground transition-colors">Technology</a>
          <a href="#leadership" className="hover:text-foreground transition-colors">Leadership</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-elegant">
          Request Demo
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="AI-driven surgical robotic arm in a modern operating room"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.68_0.18_235/0.25),transparent_60%)]" />

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
            precision, real-time guidance, and uncompromising safety — redefining what's
            possible in the operating room.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 h-12 px-7">
              Explore Our Robotics <ArrowRight className="ml-1 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-7 bg-background/10 backdrop-blur border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
              Watch the Technology
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
            {[
              { v: "0.1mm", l: "Tip precision" },
              { v: "360°", l: "Articulation" },
              { v: "24/7", l: "AI monitoring" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-primary-foreground font-semibold">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const features = [
    { icon: Crosshair, title: "Sub-Millimeter Precision", desc: "Articulated 7-DOF arms with haptic feedback deliver consistency human hands cannot match." },
    { icon: ShieldCheck, title: "Uncompromising Safety", desc: "Triple-redundant control systems and live collision avoidance protect every patient, every procedure." },
    { icon: BrainCircuit, title: "Embedded AI Intelligence", desc: "Onboard neural models interpret anatomy in real time, suggesting optimal trajectories to the surgeon." },
    { icon: Microscope, title: "Minimally Invasive", desc: "Sub-8mm instruments reduce trauma, scarring and recovery — improving long-term patient outcomes." },
    { icon: Cpu, title: "Surgeon-First Console", desc: "Ergonomic immersive console with 3D vision, scaling motion and tremor filtration for total control." },
    { icon: Activity, title: "Connected Telemetry", desc: "Encrypted operative data streams power continuous learning and post-procedure analytics." },
  ];

  return (
    <section id="technology" className="relative py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">The Technology</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Robotics engineered for the most critical moments in medicine.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-lg leading-relaxed">
            Every component — from titanium articulation to AI co-pilot — is designed
            around a single mandate: give surgical teams a decisive advantage when it
            matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden shadow-card">
          {features.map((f) => (
            <div key={f.title} className="bg-card p-8 group hover:bg-gradient-chrome transition-colors duration-500">
              <div className="size-12 rounded-lg bg-gradient-primary grid place-items-center shadow-elegant group-hover:shadow-glow transition-shadow">
                <f.icon className="size-5 text-primary-foreground" strokeWidth={2} />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img src={techDetail} alt="Surgical robotic arm precision instrument" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Intelligence at the tip</div>
            <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              An AI co-pilot — fluent in anatomy.
            </h3>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Our proprietary vision models segment tissue, vessels and critical structures
              60 times per second. The system anticipates risk, flags deviation, and
              augments the surgeon's intuition without ever overriding their judgment.
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
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="relative py-28 bg-gradient-deep overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,oklch(0.52_0.18_250/0.3),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
            <img src={ceoImage} alt="Srinivasulu Sandireddy, CEO" width={1024} height={1280} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
              <div className="text-primary-foreground font-semibold">Srinivasulu Sandireddy</div>
              <div className="text-primary-foreground/70 text-sm">Founder & Chief Executive Officer</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 text-primary-foreground">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-glow font-medium">A message from our CEO</div>
          <blockquote className="mt-6 font-display text-3xl md:text-4xl leading-tight tracking-tight">
            <span className="text-primary-glow">"</span>
            The future of healthcare will not be written by machines replacing surgeons —
            it will be written by intelligent systems that extend the steadiest hands and
            sharpest minds in medicine. At Pranav Mercantile, we are building the
            instruments of that future.
            <span className="text-primary-glow">"</span>
          </blockquote>
          <p className="mt-8 text-primary-foreground/70 leading-relaxed max-w-2xl">
            Under his leadership, Pranav Mercantile is pioneering India's most ambitious
            program in AI-assisted surgical robotics — building a global category leader
            anchored in clinical excellence and uncompromising engineering.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Get in touch</div>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Partner with the future of surgery.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-lg">
            For hospital partnerships, investor relations, or clinical pilots — our team
            responds within one business day.
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-md bg-gradient-chrome grid place-items-center shrink-0">
                <MapPin className="size-4 text-chrome-deep" />
              </div>
              <div>
                <div className="font-medium">Registered Office</div>
                <div className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  D No 1-1478, Rudrampeta,<br />
                  Anantapur, Andhra Pradesh 515004, India
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-md bg-gradient-chrome grid place-items-center shrink-0">
                <Mail className="size-4 text-chrome-deep" />
              </div>
              <div>
                <div className="font-medium">Email</div>
                <div className="text-muted-foreground text-sm mt-1">contact@pranavmercantile.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-md bg-gradient-chrome grid place-items-center shrink-0">
                <Phone className="size-4 text-chrome-deep" />
              </div>
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-muted-foreground text-sm mt-1">+91 — Available on request</div>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-card border border-border rounded-2xl p-8 shadow-card space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">First name</label>
              <Input className="mt-2 h-11" placeholder="Jane" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Last name</label>
              <Input className="mt-2 h-11" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Work email</label>
            <Input type="email" className="mt-2 h-11" placeholder="jane@hospital.org" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Organization</label>
            <Input className="mt-2 h-11" placeholder="Hospital or institution" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <Textarea className="mt-2 min-h-32" placeholder="Tell us about your needs…" />
          </div>
          <Button type="submit" className="w-full h-12 bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-90">
            Send Inquiry <ArrowRight className="ml-1 size-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-deep text-primary-foreground/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-md bg-gradient-primary shadow-glow grid place-items-center">
              <Activity className="size-4 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="font-display font-semibold tracking-tight text-primary-foreground">
              PRANAV MERCANTILE PRIVATE LIMITED
            </div>
          </div>
          <p className="mt-5 text-sm max-w-md leading-relaxed">
            Designing AI-powered robotic systems that elevate surgical care across India
            and the world.
          </p>
          <div className="mt-6 text-sm leading-relaxed">
            D No 1-1478, Rudrampeta,<br />
            Anantapur, Andhra Pradesh 515004, India
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground font-medium">Company</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="#technology" className="hover:text-primary-glow transition">Technology</a></li>
            <li><a href="#leadership" className="hover:text-primary-glow transition">Leadership</a></li>
            <li><a href="#contact" className="hover:text-primary-glow transition">Contact</a></li>
            <li><a href="#" className="hover:text-primary-glow transition">Careers</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground font-medium">Legal</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-primary-glow transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary-glow transition">Terms of Use</a></li>
            <li><a href="#" className="hover:text-primary-glow transition">Compliance</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Pranav Mercantile Private Limited. All rights reserved.</div>
          <div>CIN available on request · ISO-aligned quality systems</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="font-body">
      <Nav />
      <main>
        <Hero />
        <Technology />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

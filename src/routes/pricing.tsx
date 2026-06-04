import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ShieldCheck, Cpu, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Aarogya OR-1 Surgical Robotic Arm | Pranav Mercantile" },
      {
        name: "description",
        content:
          "Transparent pricing for the Aarogya OR-1 AI-powered surgical robotic arm — Clinic, Hospital and Enterprise plans with RaaS, AI co-pilot and 24x7 support.",
      },
      { property: "og:title", content: "Aarogya OR-1 Pricing — Pranav Mercantile" },
      {
        property: "og:description",
        content: "Robotics-as-a-Service plans for hospitals and surgical networks.",
      },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Clinic",
    tag: "For single-OR clinics & day-care surgical centers",
    price: "₹ 18,90,000",
    cadence: "/ year · RaaS",
    setup: "One-time install: ₹ 4.5 L",
    highlight: false,
    icon: ShieldCheck,
    features: [
      "1 × Aarogya OR-1 robotic arm (6-DOF)",
      "AI co-pilot — assisted mode only",
      "Up to 200 procedures / year included",
      "Standard haptic surgeon console",
      "Remote diagnostics + quarterly service",
      "8×5 clinical support (IST)",
      "On-site training for 2 surgeons",
    ],
    cta: "Start with Clinic",
  },
  {
    name: "Hospital",
    tag: "Most chosen by 100–400 bed multi-specialty hospitals",
    price: "₹ 42,50,000",
    cadence: "/ year · RaaS",
    setup: "One-time install: ₹ 7.5 L",
    highlight: true,
    icon: Sparkles,
    features: [
      "2 × Aarogya OR-1 arms (7-DOF) + tool cart",
      "Full AI co-pilot — assisted + supervised autonomy",
      "Unlimited procedures, ₹ 1,800 / case software fee",
      "Premium haptic console with 4K stereo vision",
      "Predictive maintenance + monthly on-site service",
      "24×7 clinical & engineering support",
      "Surgeon certification programme (8 seats)",
      "Outcome analytics dashboard + EMR integration",
    ],
    cta: "Choose Hospital",
  },
  {
    name: "Enterprise",
    tag: "For hospital networks, academic & research institutions",
    price: "Custom",
    cadence: "Volume RaaS + research licence",
    setup: "Tailored deployment plan",
    highlight: false,
    icon: Cpu,
    features: [
      "5+ Aarogya OR-1 arms across sites",
      "Full autonomy tier (regulatory-gated) + research SDK",
      "Per-case pricing with volume discounts",
      "Dedicated clinical solutions architect",
      "Custom AI model training on hospital data",
      "On-site biomedical engineer (optional)",
      "Co-publication & clinical trial support",
      "SLA: 99.95% uptime · < 4h field response",
    ],
    cta: "Talk to sales",
  },
];

const addOns = [
  { name: "Extended haptic console", price: "₹ 6,20,000" },
  { name: "Surgeon recertification (per seat)", price: "₹ 45,000 / yr" },
  { name: "Additional tool sterilisation tray", price: "₹ 85,000" },
  { name: "On-site biomed engineer", price: "₹ 18,00,000 / yr" },
];

function PricingPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,oklch(0.78_0.14_85/0.18),transparent_60%)]" />
        <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-[var(--gold)]/15 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-primary-foreground">
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Pricing · Aarogya OR-1
          </div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl leading-[1.05]">
            Surgical precision, <span className="text-gradient-gold">priced for scale.</span>
          </h1>
          <p className="mt-5 text-primary-foreground/80 text-lg max-w-2xl leading-relaxed">
            Aarogya OR-1 is our flagship AI-powered surgical robotic arm. Pay as a service —
            no capex shocks, fully maintained, continuously upgraded.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs text-gold/90 bg-[var(--gold)]/10 border border-[var(--gold)]/25 rounded-full px-3 py-1.5">
            <Star className="size-3.5" /> CDSCO Class C · ISO 13485 · IEC 60601-1 compliant
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className={`relative rounded-2xl p-8 border transition-all ${
                    p.highlight
                      ? "border-[var(--gold)]/60 bg-gradient-to-b from-[var(--gold)]/10 to-transparent shadow-gold scale-[1.02]"
                      : "border-border bg-card hover:border-[var(--gold)]/30"
                  }`}
                >
                  {p.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] font-semibold bg-gradient-gold text-[#1a1407] px-3 py-1 rounded-full shadow-gold">
                      Most popular
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg grid place-items-center bg-[var(--gold)]/15 text-gold border border-[var(--gold)]/30">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-display text-xl font-semibold">{p.name}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground min-h-[40px]">{p.tag}</p>

                  <div className="mt-6">
                    <div className="text-4xl font-display font-semibold tracking-tight">
                      {p.price}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{p.cadence}</div>
                    <div className="text-xs text-gold/80 mt-1">{p.setup}</div>
                  </div>

                  <Button
                    asChild
                    className={`mt-6 w-full btn-fx ${
                      p.highlight
                        ? "bg-gradient-gold text-[#1a1407] font-semibold shadow-gold hover:opacity-95"
                        : ""
                    }`}
                    variant={p.highlight ? "default" : "outline"}
                  >
                    <Link to="/contact">
                      {p.cta} <ArrowRight className="size-4 ml-1" />
                    </Link>
                  </Button>

                  <ul className="mt-7 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className="size-4 mt-0.5 text-gold shrink-0" />
                        <span className="text-foreground/85">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            All prices in INR, exclusive of GST. RaaS = Robotics-as-a-Service. Minimum 36-month term.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Add-ons & accessories
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Tailor your operating room.
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-3">
            {addOns.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4"
              >
                <div className="text-sm font-medium">{a.name}</div>
                <div className="text-sm text-gold font-semibold">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Not sure which plan fits your OR?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our clinical solutions team will walk you through case-mix analysis,
            ROI modelling and a phased deployment plan — usually within one week.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="btn-fx bg-gradient-gold text-[#1a1407] font-semibold shadow-gold">
              <Link to="/contact">Book a consultation <ArrowRight className="size-4 ml-1" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-fx">
              <Link to="/technology">Explore the technology</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

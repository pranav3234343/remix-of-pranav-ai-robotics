import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pranav Mercantile" },
      { name: "description", content: "How Pranav Mercantile Private Limited collects, uses, and protects your data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-20 bg-gradient-deep text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Legal</div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold tracking-tight">
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
          <p className="mt-5 text-white/70 max-w-2xl leading-relaxed">
            Last updated: May 25, 2026. This policy describes how Pranav Mercantile Private Limited
            ("we", "us") handles personal and clinical data across our surgical robotics platform.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-10 text-foreground/85 leading-relaxed">
          {[
            { h: "1. Information We Collect", p: "We collect account details (name, email, hospital affiliation), procedural telemetry from connected robotic systems, and analytics about platform usage. We do not collect raw patient identifiers unless explicitly authorized by a hospital integration agreement." },
            { h: "2. How We Use Information", p: "Data is used to deliver the platform, improve AI co-pilot models, ensure clinical safety, and provide hospital-level reporting. We never sell personal information." },
            { h: "3. Data Security", p: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Role-based access, full audit logs, and continuous monitoring protect every system." },
            { h: "4. Data Retention", p: "Telemetry is retained for the lifetime of the hospital agreement. Account data may be deleted on written request to our DPO." },
            { h: "5. Your Rights", p: "You may request access, correction, or deletion of your personal data. Hospital data requests must come from an authorized administrator." },
            { h: "6. Contact", p: "Email contact@pranavmercantile.cloud or call +91 9712131662 with privacy-related inquiries." },
          ].map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">{s.h}</h2>
              <p className="mt-3">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

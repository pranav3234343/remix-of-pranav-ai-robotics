import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Pranav Mercantile" },
      { name: "description", content: "Terms governing use of the Pranav Mercantile surgical robotics platform." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-20 bg-gradient-deep text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Legal</div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold tracking-tight">
            Terms of <span className="text-gradient-gold">Service</span>
          </h1>
          <p className="mt-5 text-white/70 max-w-2xl leading-relaxed">
            Last updated: May 25, 2026. By accessing the Pranav Mercantile platform you agree to the following terms.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-10 text-foreground/85 leading-relaxed">
          {[
            { h: "1. Acceptance", p: "Use of this site and any associated platform constitutes acceptance of these terms. If you do not agree, do not use the platform." },
            { h: "2. Clinical Use", p: "Robotic systems must be operated only by trained, certified surgeons in licensed facilities. Pranav Mercantile is not liable for use outside approved clinical protocols." },
            { h: "3. Account Responsibilities", p: "You are responsible for safeguarding credentials and for all activity that occurs under your account." },
            { h: "4. Intellectual Property", p: "All software, models, designs, and brand assets are the property of Pranav Mercantile Private Limited and protected by applicable IP law." },
            { h: "5. Limitation of Liability", p: "To the maximum extent permitted by law, Pranav Mercantile is not liable for indirect, incidental, or consequential damages arising from platform use." },
            { h: "6. Governing Law", p: "These terms are governed by the laws of India, with exclusive jurisdiction of the courts of Anantapur, Andhra Pradesh." },
            { h: "7. Contact", p: "Questions? Email contact@pranavmercantile.co.in or call +91 9712131662." },
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

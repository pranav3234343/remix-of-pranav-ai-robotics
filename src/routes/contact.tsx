import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pranav Mercantile" },
      { name: "description", content: "Get in touch with Pranav Mercantile Private Limited for hospital partnerships, clinical pilots, and investor relations." },
      { property: "og:title", content: "Contact Pranav Mercantile" },
      { property: "og:description", content: "Hospital partnerships, clinical pilots, and investor relations." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  return (
    <SiteLayout>
      <Toaster />
      <section className="relative pt-32 pb-16 bg-gradient-deep overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.68_0.18_235/0.25),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-primary-foreground">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-glow font-medium">Get in touch</div>
          <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl leading-[1.05]">
            Partner with the future of surgery.
          </h1>
          <p className="mt-5 text-primary-foreground/80 text-lg max-w-2xl leading-relaxed">
            Our team responds within one business day to hospital partnerships,
            clinical pilots, and investor inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="space-y-5">
              <ContactItem icon={MapPin} title="Registered Office">
                D No 1-1478, Rudrampeta,<br />
                Anantapur, Andhra Pradesh 515004, India
              </ContactItem>
              <ContactItem icon={Mail} title="Email"><a href="mailto:contact@pranavmercantile.co.in" className="hover:text-foreground">contact@pranavmercantile.co.in</a></ContactItem>
              <ContactItem icon={Phone} title="Phone"><a href="tel:+919712131662" className="hover:text-foreground">+91 97121 31662</a></ContactItem>
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden border border-border shadow-card aspect-[4/3]">
              <iframe
                title="Pranav Mercantile office location"
                src="https://www.google.com/maps?q=Rudrampeta,+Anantapur,+Andhra+Pradesh+515004,+India&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <form
            className="bg-card border border-border rounded-2xl p-8 shadow-card space-y-5 h-fit"
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => {
                setSending(false);
                toast.success("Inquiry sent — our team will respond within one business day.");
                (e.target as HTMLFormElement).reset();
              }, 600);
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="First name"><Input required className="h-11" placeholder="Jane" /></Field>
              <Field label="Last name"><Input required className="h-11" placeholder="Doe" /></Field>
            </div>
            <Field label="Work email"><Input required type="email" className="h-11" placeholder="jane@hospital.org" /></Field>
            <Field label="Organization"><Input className="h-11" placeholder="Hospital or institution" /></Field>
            <Field label="Inquiry type">
              <select className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm">
                <option>Hospital partnership</option>
                <option>Clinical pilot</option>
                <option>Investor relations</option>
                <option>Careers</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Message"><Textarea required className="min-h-32" placeholder="Tell us about your needs…" /></Field>
            <Button type="submit" disabled={sending} className="w-full h-12 bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-90">
              {sending ? "Sending…" : <>Send Inquiry <ArrowRight className="ml-1 size-4" /></>}
            </Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function ContactItem({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="size-11 rounded-md bg-gradient-chrome grid place-items-center shrink-0 shadow-card">
        <Icon className="size-4 text-chrome-deep" />
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-muted-foreground text-sm mt-1 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

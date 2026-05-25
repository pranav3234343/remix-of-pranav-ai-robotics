import { Link } from "@tanstack/react-router";
import { Activity, Mail, MapPin, Phone, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  return (
    <footer className="relative bg-gradient-deep text-primary-foreground/80 overflow-hidden">
      <Toaster />
      {/* Decorative gradient orbs */}
      <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -bottom-20 -right-20 w-[520px] h-[520px] rounded-full bg-primary-glow/15 blur-[140px]" />
      <img src={logo} alt="" aria-hidden width={900} height={900} className="absolute right-[-180px] top-1/2 -translate-y-1/2 w-[900px] opacity-[0.04] pointer-events-none" />

      {/* Newsletter band */}
      <div className="relative border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary-glow font-medium">Newsletter</div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight text-primary-foreground leading-tight">
              Get clinical, technical and investor updates.
            </h3>
            <p className="mt-3 text-primary-foreground/70 max-w-xl leading-relaxed">
              One concise email each month. No noise. Unsubscribe anytime.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              toast.success("Subscribed — welcome aboard.");
              setEmail("");
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@work-email.com"
              className="flex-1 h-12 px-4 rounded-md bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-glow transition-colors"
            />
            <button
              type="submit"
              className="btn-fx h-12 px-6 rounded-md bg-gradient-primary text-primary-foreground font-medium shadow-glow inline-flex items-center justify-center gap-2 hover:opacity-95"
            >
              Subscribe <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Pranav Mercantile logo"
              width={64}
              height={64}
              loading="lazy"
              className="size-16 drop-shadow-[0_0_18px_oklch(0.68_0.18_235/0.55)]"
            />
            <div className="font-display font-semibold tracking-tight text-primary-foreground leading-tight">
              <div className="text-lg">PRANAV MERCANTILE</div>
              <div className="text-xs text-primary-foreground/60 tracking-[0.25em] uppercase">Private Limited</div>
            </div>
          </Link>
          <p className="mt-6 text-sm max-w-md leading-relaxed">
            Designing AI-powered robotic systems that elevate surgical care across India
            and the world. Built clinical-grade, from the ground up.
          </p>

          <div className="mt-7 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="size-4 mt-0.5 text-primary-glow shrink-0" />
              <div>
                D No 1-1478, Rudrampeta,<br />
                Anantapur, Andhra Pradesh 515004, India
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="size-4 text-primary-glow shrink-0" />
              <a href="mailto:contact@pranavmercantile.com" className="hover:text-primary-glow transition-colors">
                contact@pranavmercantile.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-4 text-primary-glow shrink-0" />
              <span>+91 — Available on request</span>
            </div>
          </div>

          <div className="mt-7 flex items-center gap-3">
            {[Linkedin, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="btn-fx size-10 rounded-full grid place-items-center border border-primary-foreground/15 bg-primary-foreground/5 hover:bg-primary-glow/20 hover:border-primary-glow/50 transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground font-medium">Company</div>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="story-link">Home</Link></li>
            <li><Link to="/about" className="story-link">About</Link></li>
            <li><Link to="/technology" className="story-link">Technology</Link></li>
            <li><Link to="/contact" className="story-link">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground font-medium">Platform</div>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/technology" className="story-link">Robotics</Link></li>
            <li><Link to="/technology" className="story-link">AI Co-Pilot</Link></li>
            <li><Link to="/technology" className="story-link">Surgeon Console</Link></li>
            <li><Link to="/login" className="story-link">Hospital Login</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground font-medium">Leadership</div>
          <div className="mt-5 text-sm">
            <div className="text-primary-foreground font-medium">SRINIVASULU SANDIREDDY</div>
            <div className="text-primary-foreground/60 mt-1">Founder & Chief Executive Officer</div>
          </div>
          <div className="mt-6 text-xs uppercase tracking-[0.2em] text-primary-foreground font-medium">Legal</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><span className="opacity-60">Privacy Policy</span></li>
            <li><span className="opacity-60">Terms of Use</span></li>
            <li><span className="opacity-60">Compliance</span></li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div className="flex items-center gap-2">
            <Activity className="size-3" /> © {new Date().getFullYear()} Pranav Mercantile Private Limited. All rights reserved.
          </div>
          <div>Anantapur · Andhra Pradesh · India</div>
        </div>
      </div>
    </footer>
  );
}

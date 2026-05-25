import { Link } from "@tanstack/react-router";
import { Activity, Mail, MapPin, Phone, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  return (
    <footer className="relative bg-[#050710] text-white/75 overflow-hidden border-t border-[var(--gold)]/20">
      <Toaster />
      {/* Decorative gold gradient orbs */}
      <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-[var(--gold)]/15 blur-[120px]" />
      <div className="absolute -bottom-20 -right-20 w-[520px] h-[520px] rounded-full bg-[var(--gold-bright)]/10 blur-[140px]" />
      <img
        src={logo}
        alt=""
        aria-hidden
        width={900}
        height={900}
        className="absolute right-[-180px] top-1/2 -translate-y-1/2 w-[900px] opacity-[0.05] logo-gold-sheen pointer-events-none"
      />

      {/* Newsletter band */}
      <div className="relative border-b border-[var(--gold)]/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Newsletter</div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
              Get clinical, technical and investor updates.
            </h3>
            <p className="mt-3 text-white/65 max-w-xl leading-relaxed">
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
              className="flex-1 h-12 px-4 rounded-md bg-white/5 backdrop-blur border border-[var(--gold)]/25 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--gold)] transition-colors"
            />
            <button
              type="submit"
              className="btn-fx h-12 px-6 rounded-md bg-gradient-gold text-[#1a1407] font-semibold shadow-gold inline-flex items-center justify-center gap-2 hover:opacity-95"
            >
              Subscribe <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-4">
            <img
              src={logo}
              alt="Pranav Mercantile logo"
              width={88}
              height={88}
              loading="lazy"
              className="size-20 logo-gold-sheen"
            />
            <div className="font-display font-semibold tracking-tight text-white leading-tight">
              <div className="text-xl text-gradient-gold">PRANAV MERCANTILE</div>
              <div className="text-[11px] text-white/60 tracking-[0.3em] uppercase">Private Limited</div>
            </div>
          </Link>
          <p className="mt-6 text-sm max-w-md leading-relaxed text-white/65">
            Designing AI-powered robotic systems that elevate surgical care across India
            and the world. Built clinical-grade, from the ground up.
          </p>

          <div className="mt-7 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="size-4 mt-0.5 text-gold shrink-0" />
              <div className="text-white/80">
                D No 1-1478, Rudrampeta,<br />
                Anantapur, Andhra Pradesh 515004, India
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="size-4 text-gold shrink-0" />
              <a href="mailto:contact@pranavmercantile.cloud" className="hover:text-gold transition-colors">
                contact@pranavmercantile.cloud
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-4 text-gold shrink-0" />
              <a href="tel:+919712131662" className="hover:text-gold transition-colors">+91 97121 31662</a>
            </div>
          </div>

          <div className="mt-7 flex items-center gap-3">
            {[Linkedin, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="btn-fx size-10 rounded-full grid place-items-center border border-[var(--gold)]/25 bg-white/5 hover:bg-[var(--gold)]/20 hover:border-[var(--gold)]/60 transition-colors"
              >
                <Icon className="size-4 text-gold" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Company</div>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="story-link hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="story-link hover:text-gold">About</Link></li>
            <li><Link to="/technology" className="story-link hover:text-gold">Technology</Link></li>
            <li><Link to="/contact" className="story-link hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Platform</div>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/technology" className="story-link hover:text-gold">Robotics</Link></li>
            <li><Link to="/technology" className="story-link hover:text-gold">AI Co-Pilot</Link></li>
            <li><Link to="/technology" className="story-link hover:text-gold">Surgeon Console</Link></li>
            <li><Link to="/login" className="story-link hover:text-gold">Hospital Login</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Leadership</div>
          <div className="mt-5 text-sm">
            <div className="text-white font-semibold tracking-wide">CEO: SRINIVASULU SANDIREDDY</div>
            <div className="text-white/55 mt-1">Founder & Chief Executive Officer</div>
          </div>
          <div className="mt-6 text-xs uppercase tracking-[0.25em] text-gold font-medium">Legal</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/privacy" className="story-link hover:text-gold">Privacy Policy</Link></li>
            <li><Link to="/terms" className="story-link hover:text-gold">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-[var(--gold)]/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/55">
          <div className="flex items-center gap-2">
            <Activity className="size-3 text-gold" /> © {new Date().getFullYear()} Pranav Mercantile Private Limited. All rights reserved.
          </div>
          <div className="text-gold/80">Anantapur · Andhra Pradesh · India</div>
        </div>
      </div>
    </footer>
  );
}

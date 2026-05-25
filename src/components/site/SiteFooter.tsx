import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-deep text-primary-foreground/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Pranav Mercantile logo" width={36} height={36} loading="lazy" className="size-9 drop-shadow-[0_0_8px_oklch(0.68_0.18_235/0.6)]" />
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
            <li><Link to="/about" className="hover:text-primary-glow transition">About</Link></li>
            <li><Link to="/technology" className="hover:text-primary-glow transition">Technology</Link></li>
            <li><Link to="/contact" className="hover:text-primary-glow transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground font-medium">Legal</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><span className="opacity-60">Privacy Policy</span></li>
            <li><span className="opacity-60">Terms of Use</span></li>
            <li><span className="opacity-60">Compliance</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div className="flex items-center gap-2"><Activity className="size-3" /> © {new Date().getFullYear()} Pranav Mercantile Private Limited. All rights reserved.</div>
          <div>CIN available on request · ISO-aligned quality systems</div>
        </div>
      </div>
    </footer>
  );
}
